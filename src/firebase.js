// src/firebase.js
// Firebase v11 (modular). Oferece helpers usados no App.jsx.

import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  arrayUnion,
} from "firebase/firestore";
import {
  getStorage,
  ref as sref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// ------------------------
// Inicialização (env .env/.env.production)
// ------------------------
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  appId: import.meta.env.VITE_FB_APP_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

// ------------------------
// Sessão anônima (necessária para regras auth != null)
// ------------------------
export async function ensureAnonAuth() {
  const user = auth.currentUser;
  if (user) return user;

  return new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      unsub();
      if (u) return resolve(u);
      try {
        const cred = await signInAnonymously(auth);
        resolve(cred.user);
      } catch (e) {
        reject(e);
      }
    });
  });
}

// ------------------------
// Storage
// ------------------------
/**
 * Faz upload de arquivo e retorna a URL pública (signed) de download.
 * @param {string} path caminho completo no bucket, ex: reports/PROTO/arquivo.pdf
 * @param {File|Blob} file
 * @returns {Promise<string>} url de download
 */
export function uploadFile(path, file) {
  return new Promise((resolve, reject) => {
    const r = sref(storage, path);
    const task = uploadBytesResumable(r, file);

    task.on(
      "state_changed",
      // progresso (opcional)
      () => {},
      (err) => reject(err),
      async () => {
        try {
          const url = await getDownloadURL(r);
          resolve(url);
        } catch (e) {
          reject(e);
        }
      }
    );
  });
}

/**
 * Obtém uma URL de download a partir de um path salvo.
 * Útil no painel quando temos { path } mas não { url }.
 * @param {string} path
 * @returns {Promise<string>}
 */
export async function getDownloadUrlByPath(path) {
  const r = sref(storage, path);
  return getDownloadURL(r);
}

// ------------------------
// Firestore - Denúncias
// ------------------------
const COLLECTION = "reports";

/**
 * Cria (ou substitui) o documento com id = protocolo
 * @param {string} protocolo
 * @param {object} data
 */
export async function createOrReplaceReport(protocolo, data) {
  const ref = doc(db, COLLECTION, protocolo);
  // Garante carimbo de tempo
  const payload = {
    ...data,
    createdAt: data.createdAt ?? serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  await setDoc(ref, payload, { merge: false });
}

/**
 * Busca denúncia pelo protocolo (id do doc)
 * @param {string} protocolo
 * @returns {Promise<object|null>}
 */
export async function getReportByProtocol(protocolo) {
  const ref = doc(db, COLLECTION, protocolo);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

/**
 * Assina a coleção de denúncias (tempo real)
 * @param {(arr: any[]) => void} cb
 * @returns {() => void} unsubscribe
 */
export function subscribeReports(cb) {
  const col = collection(db, COLLECTION);
  // Sem ordenação explícita para simplicidade do protótipo;
  // caso queira, pode ordenar por createdAt depois de popular os docs.
  return onSnapshot(col, (qs) => {
    const arr = qs.docs.map((d) => ({ id: d.id, ...d.data() }));
    cb(arr);
  });
}

/**
 * Atualiza campos do doc
 * @param {string} id
 * @param {object} patch
 */
export async function updateReport(id, patch) {
  const ref = doc(db, COLLECTION, id);
  await updateDoc(ref, { ...patch, updatedAt: serverTimestamp() });
}

/**
 * Adiciona nota/comentário de admin ao histórico (array notes)
 * @param {string} id
 * @param {{at: string, text: string, by?: string}} note
 */
export async function addAdminNote(id, note) {
  const ref = doc(db, COLLECTION, id);
  await updateDoc(ref, {
    notes: arrayUnion(note),
    updatedAt: serverTimestamp(),
  });
}

export {
  auth,
  db,
  storage,
  sref,
  getStorage,      // exportado se precisar em outro lugar
  uploadBytesResumable,
  getDownloadURL,
};
