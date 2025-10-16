// src/firebase.js
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
  collection,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import {
  getStorage,
  ref as sref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

/** =======================================================================
 *  Carrega config tanto em VITE_FIREBASE_* quanto em VITE_FB_*
 *  ======================================================================= */
const cfg = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    import.meta.env.VITE_FB_API_KEY,
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId:
    import.meta.env.VITE_FIREBASE_PROJECT_ID ||
    import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    import.meta.env.VITE_FB_STORAGE_BUCKET,
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    import.meta.env.VITE_FB_APP_ID,
  // opcional (alguns projetos exibem)
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ||
    import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
};

// Ajuda a diagnosticar variáveis ausentes
function assertEnv(key, value) {
  if (!value || String(value).trim() === "") {
    console.error(`[firebase] Variável ausente: ${key}`);
  }
}
assertEnv("apiKey", cfg.apiKey);
assertEnv("authDomain", cfg.authDomain);
assertEnv("projectId", cfg.projectId);
assertEnv("storageBucket", cfg.storageBucket);
assertEnv("appId", cfg.appId);

if (!cfg.apiKey) {
  // Evita quebrar a UI sem explicação
  throw new Error(
    "Firebase API Key ausente. Verifique seu .env(.production). " +
      "Aceitamos VITE_FIREBASE_API_KEY ou VITE_FB_API_KEY."
  );
}

// Inicializa app uma vez
const app = getApps().length ? getApps()[0] : initializeApp(cfg);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

/** =======================================================================
 *  Auth anônima (regras do Storage/Firestore dependem dela)
 *  ======================================================================= */
export async function ensureAnonAuth() {
  const user = auth.currentUser;
  if (user) return user;
  await signInAnonymously(auth);
  // aguarda a sessão ficar disponível
  await new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("timeout auth")), 8000);
    const unsub = onAuthStateChanged(
      auth,
      (u) => {
        if (u) {
          clearTimeout(t);
          unsub();
          resolve(u);
        }
      },
      (e) => {
        clearTimeout(t);
        unsub();
        reject(e);
      }
    );
  });
  return auth.currentUser;
}

/** =======================================================================
 *  Upload de arquivo ao Storage
 *  path ex.: reports/PROTOCOLO/arquivo.ext
 *  ======================================================================= */
export async function uploadFile(path, file) {
  const r = sref(storage, path);
  await uploadBytes(r, file);
  return await getDownloadURL(r);
}

/** =======================================================================
 *  Cria/Substitui denúncia por protocolo (id do doc = protocolo)
 *  ======================================================================= */
export async function createOrReplaceReport(protocolo, data) {
  const ref = doc(db, "reports", protocolo);
  const snap = await getDoc(ref);
  const base = {
    ...data,
    id: protocolo,
    updatedAt: serverTimestamp(),
  };
  if (!snap.exists()) {
    base.createdAt = serverTimestamp();
  }
  await setDoc(ref, base, { merge: true });
  return protocolo;
}

/** =======================================================================
 *  Busca denúncia por protocolo
 *  ======================================================================= */
export async function getReportByProtocol(protocolo) {
  const ref = doc(db, "reports", protocolo);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

/** =======================================================================
 *  Assinatura em tempo real para painel admin (ordenado por createdAt desc)
 *  ======================================================================= */
export function subscribeReports(cb) {
  const q = query(
    collection(db, "reports"),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (ss) => {
    const arr = ss.docs.map((d) => ({ id: d.id, ...d.data() }));
    cb(arr);
  });
}

/** =======================================================================
 *  Atualiza campos de uma denúncia (por id/protocolo)
 *  ======================================================================= */
export async function updateReport(id, patch) {
  const ref = doc(db, "reports", id);
  await updateDoc(ref, { ...patch, updatedAt: serverTimestamp() });
}

/** =======================================================================
 *  Adiciona nota/resposta do admin (array 'notes')
 *  ======================================================================= */
export async function addAdminNote(id, note) {
  const ref = doc(db, "reports", id);
  await updateDoc(ref, {
    notes: arrayUnion(note),
    updatedAt: serverTimestamp(),
  });
}

export { app, auth, db, storage };
