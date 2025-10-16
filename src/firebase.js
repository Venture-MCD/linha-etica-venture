// Firebase SDK v11 (modular)
// Funções expostas: ensureAnonAuth, uploadFile, createOrReplaceReport, getReportByProtocol,
// subscribeReports, updateReport, addAdminNote

import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  arrayUnion,
} from "firebase/firestore";
import {
  getStorage,
  ref as sref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

/* ===================== Init ===================== */

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
};

// Evita reinit em ambiente hot-reload
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

/* ===================== Utils internos ===================== */

// Pequeno helper de timeout para operações assíncronas
function withTimeout(promise, ms, label = "operação") {
  return Promise.race([
    promise,
    new Promise((_, rej) =>
      setTimeout(() => rej(new Error(`Timeout ao tentar ${label} (${ms}ms)`)), ms)
    ),
  ]);
}

/* ===================== API exposta ===================== */

/**
 * Garante que há um usuário anônimo autenticado (necessário para regras de Security).
 * Retorna o user atual.
 */
export async function ensureAnonAuth() {
  const u = auth.currentUser;
  if (u) return u;

  // Espera brevemente por um usuário que talvez já esteja sendo autenticado
  const maybeUser = await new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (usr) => {
      unsub();
      resolve(usr || null);
    });
    // timeout curto
    setTimeout(() => {
      try { unsub(); } catch {}
      resolve(null);
    }, 1000);
  });
  if (maybeUser) return maybeUser;

  // Se ainda não houver, autentica anonimamente
  const cred = await signInAnonymously(auth);
  return cred.user;
}

/**
 * Faz upload de um arquivo para o Storage.
 * @param {string} path caminho completo (ex.: reports/PROTOCOLO/nome.ext)
 * @param {File|Blob} file
 * @returns {Promise<string>} URL de download pública
 */
export async function uploadFile(path, file) {
  const r = sref(storage, path);
  await uploadBytes(r, file);
  const url = await getDownloadURL(r);
  return url;
}

/**
 * Cria ou substitui (merge) o report com ID = protocolo.
 * @param {string} protocolo
 * @param {object} data
 */
export async function createOrReplaceReport(protocolo, data) {
  const ref = doc(db, "reports", protocolo);
  const payload = {
    ...data,
    // Garante createdAt (server) se não veio do App.jsx:
    createdAt: data.createdAt || serverTimestamp(),
  };
  await setDoc(ref, payload, { merge: true });
}

/**
 * Busca um report pelo protocolo (ID do documento).
 * @param {string} protocolo
 * @returns {Promise<object|null>}
 */
export async function getReportByProtocol(protocolo) {
  const ref = doc(db, "reports", protocolo);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

/**
 * Assina a coleção de reports em tempo real (para o Admin).
 * Ordena por createdAt desc se possível; se não, assina sem ordenação.
 * @param {(arr: any[]) => void} callback
 * @returns {() => void} unsubscribe
 */
export function subscribeReports(callback) {
  try {
    const q = query(collection(db, "reports"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (ss) => {
      const arr = ss.docs.map((d) => ({ id: d.id, ...d.data() }));
      callback(arr);
    });
  } catch (e) {
    // Fallback sem orderBy se o campo ainda não existir
    console.warn("subscribeReports: fallback sem orderBy(createdAt)", e);
    const col = collection(db, "reports");
    return onSnapshot(col, (ss) => {
      const arr = ss.docs.map((d) => ({ id: d.id, ...d.data() }));
      // Ordena no cliente por createdAt (serverTimestamp pode ser null nos primeiros ms)
      arr.sort((a, b) => {
        const ta = a.createdAt?.seconds || 0;
        const tb = b.createdAt?.seconds || 0;
        return tb - ta;
      });
      callback(arr);
    });
  }
}

/**
 * Atualiza campos de um report.
 * @param {string} id (protocolo)
 * @param {object} fields
 */
export async function updateReport(id, fields) {
  const ref = doc(db, "reports", id);
  await updateDoc(ref, fields);
}

/**
 * Adiciona uma nota do admin no array "notes".
 * note: { at: string, text: string, by?: string }
 */
export async function addAdminNote(id, note) {
  const ref = doc(db, "reports", id);
  await updateDoc(ref, {
    notes: arrayUnion(note),
  });
}

/* ===================== Exporta clientes (se precisar) ===================== */
export { app, auth, db, storage };
