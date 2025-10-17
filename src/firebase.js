// src/firebase.js
// Firebase v11 (modular) — compatível com Vite e variáveis VITE_*

import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  collection,
  query,
  orderBy,
  arrayUnion,
} from "firebase/firestore";
import {
  getStorage,
  ref as sref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

/* ==================== Config ==================== */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  appId: import.meta.env.VITE_FB_APP_ID,
};

export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

/* ==================== Auth (anônimo) ==================== */
export async function ensureAnonAuth() {
  const auth = getAuth(app);
  await setPersistence(auth, browserLocalPersistence);

  // Se já logado (anônimo ou não), reaproveita
  if (auth.currentUser) return auth.currentUser;

  // Anônimo
  const cred = await signInAnonymously(auth);
  return cred.user;
}

/* ==================== Storage ==================== */
// Upload arquivo para um path no Storage e retorna a URL pública
export async function uploadFile(path, file) {
  const storage = getStorage(app);
  const r = sref(storage, path);
  const task = uploadBytesResumable(r, file);

  // aguarda finalizar
  await new Promise((resolve, reject) => {
    task.on(
      "state_changed",
      () => {},
      (err) => reject(err),
      () => resolve()
    );
  });

  const url = await getDownloadURL(task.snapshot.ref);
  return url;
}

// Pegar URL de download a partir do caminho no Storage
export async function getDownloadUrlByPath(storagePath) {
  const storage = getStorage(app);
  const r = sref(storage, storagePath);
  return await getDownloadURL(r);
}

/* ==================== Firestore: Reports ==================== */
// Cria ou substitui denúncia com timestamps consistentes
export async function createOrReplaceReport(id, data) {
  const db = getFirestore(app);
  const ref = doc(db, "reports", id);
  const snap = await getDoc(ref);

  const base = snap.exists()
    ? { updatedAt: serverTimestamp() }
    : { createdAt: serverTimestamp(), updatedAt: serverTimestamp() };

  await setDoc(ref, { ...data, ...base }, { merge: true });
  return id;
}

// Buscar denúncia pelo protocolo (id do doc = protocolo)
export async function getReportByProtocol(id) {
  const db = getFirestore(app);
  const ref = doc(db, "reports", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

// Assinar lista de denúncias ordenadas por criação (mais recente → antigo)
export function subscribeReports(callback) {
  const db = getFirestore(app);
  const q = query(collection(db, "reports"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(arr);
  });
}

// Atualizar campos da denúncia (salva updatedAt)
export async function updateReport(id, patch) {
  const db = getFirestore(app);
  await updateDoc(doc(db, "reports", id), {
    ...patch,
    updatedAt: serverTimestamp(),
  });
}

// Adicionar nota/comentário do admin ao histórico (arrayUnion)
export async function addAdminNote(id, note) {
  const db = getFirestore(app);
  await updateDoc(doc(db, "reports", id), {
    notes: arrayUnion(note),
    updatedAt: serverTimestamp(),
  });
}

// Excluir uma denúncia
export async function deleteReport(id) {
  const db = getFirestore(app);
  await deleteDoc(doc(db, "reports", id));
}

// Excluir várias denúncias
export async function deleteReports(ids = []) {
  const db = getFirestore(app);
  await Promise.all(ids.map((id) => deleteDoc(doc(db, "reports", id))));
}
