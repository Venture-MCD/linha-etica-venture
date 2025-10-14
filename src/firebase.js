// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot,
  collection,
  query,
  orderBy,
  serverTimestamp,
  arrayUnion,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  appId: import.meta.env.VITE_FB_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export async function ensureAnonAuth() {
  if (auth.currentUser) return auth.currentUser;
  await signInAnonymously(auth);
  return new Promise((resolve) =>
    onAuthStateChanged(auth, (u) => u && resolve(u))
  );
}

export async function uploadFile(path, file) {
  const r = ref(storage, path);
  await uploadBytes(r, file, { contentType: file.type });
  return await getDownloadURL(r);
}

/** Cria/atualiza denúncia com ID = protocolo (idempotente) */
export async function createOrReplaceReport(protocolo, data) {
  const refDoc = doc(db, "reports", protocolo);
  await setDoc(refDoc, { ...data, createdAt: serverTimestamp() });
  return protocolo;
}

/** Lê uma denúncia por protocolo */
export async function getReportByProtocol(protocolo) {
  const snap = await getDoc(doc(db, "reports", protocolo));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

/** Atualiza campos (status, etc.) */
export async function updateReport(protocolo, updates) {
  await updateDoc(doc(db, "reports", protocolo), updates);
}

/** Adiciona uma resposta/comentário (timeline) */
export async function addAdminNote(protocolo, noteObj) {
  await updateDoc(doc(db, "reports", protocolo), {
    notes: arrayUnion(noteObj),
    updatedAt: serverTimestamp(),
  });
}

/** Assina a lista de denúncias (mais recentes primeiro) */
export function subscribeReports(cb) {
  const q = query(collection(db, "reports"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    cb(list);
  });
}
