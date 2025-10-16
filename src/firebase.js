// src/firebase.js
// -------------------------------------------------------------
// Firebase SDK - utilidades para Linha Ética Venture
// - Inicialização do app
// - Autenticação anônima
// - Upload Resumable (robusto p/ celular)
// - Firestore: criar/ler/atualizar denúncia, subscription em tempo real
// - Notas/respostas do Admin (subcoleção)
// Requer .env(.production) com:
// VITE_FB_API_KEY, VITE_FB_AUTH_DOMAIN, VITE_FB_PROJECT_ID,
// VITE_FB_STORAGE_BUCKET (ex.: meu-projeto.appspot.com), VITE_FB_APP_ID
// -------------------------------------------------------------

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
  onSnapshot,
  updateDoc,
  serverTimestamp,
  collection,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import {
  getStorage,
  ref as sref,
  uploadBytesResumable,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

// ----------------------------------------------------------------------------
// Inicialização (evita duplicar instância em HMR/build)
// ----------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET, // ex.: meu-projeto.appspot.com
  appId: import.meta.env.VITE_FB_APP_ID,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// ----------------------------------------------------------------------------
// Auth anônima (para regras `request.auth != null`)
// ----------------------------------------------------------------------------
export function ensureAnonAuth() {
  return new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(
      auth,
      async (user) => {
        if (user) {
          unsub();
          resolve(user);
        } else {
          try {
            const cred = await signInAnonymously(auth);
            unsub();
            resolve(cred.user);
          } catch (err) {
            unsub();
            reject(err);
          }
        }
      },
      (err) => {
        unsub();
        reject(err);
      }
    );
  });
}

// ----------------------------------------------------------------------------
// Upload de arquivo: versão RESUMABLE (recomendada)
// ----------------------------------------------------------------------------
/**
 * Upload com retomada automática (melhor em 4G/iOS).
 * @param {string} path ex.: "reports/PROTOCOLO/arquivo.jpg"
 * @param {File|Blob} file
 * @param {(percent:number)=>void} [onProgress]
 * @returns {Promise<string>} downloadURL público
 */
export function uploadFileResumable(path, file, onProgress) {
  const storageRef = sref(storage, path);
  const metadata = { contentType: file?.type || "application/octet-stream" };
  const task = uploadBytesResumable(storageRef, file, metadata);

  return new Promise((resolve, reject) => {
    task.on(
      "state_changed",
      (snap) => {
        if (onProgress && snap.totalBytes) {
          const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
          onProgress(pct);
        }
      },
      (err) => reject(err),
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve(url);
      }
    );
  });
}

// (Opcional) Upload simples – mantido para compatibilidade
export async function uploadFile(path, file) {
  const storageRef = sref(storage, path);
  const metadata = { contentType: file?.type || "application/octet-stream" };
  await uploadBytes(storageRef, file, metadata);
  return getDownloadURL(storageRef);
}

// ----------------------------------------------------------------------------
// Firestore - Denúncias
// ----------------------------------------------------------------------------
export async function createOrReplaceReport(protocolo, data) {
  const ref = doc(db, "reports", protocolo);
  const payload = {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  await setDoc(ref, payload, { merge: true });
}

export async function updateReport(protocolo, partial) {
  const ref = doc(db, "reports", protocolo);
  await updateDoc(ref, { ...partial, updatedAt: serverTimestamp() });
}

export async function getReportByProtocol(protocolo) {
  const ref = doc(db, "reports", protocolo);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export function subscribeReports(callback) {
  const q = query(collection(db, "reports"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(list);
  });
}

// ----------------------------------------------------------------------------
export async function addAdminNote(protocolo, author, message) {
  const notesRef = collection(db, "reports", protocolo, "adminNotes");
  await addDoc(notesRef, { author, message, createdAt: serverTimestamp() });
}

export function subscribeAdminNotes(protocolo, callback) {
  const notesRef = collection(db, "reports", protocolo, "adminNotes");
  const q = query(notesRef, orderBy("createdAt", "asc"));
  return onSnapshot(q, (snap) => {
    const notes = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(notes);
  });
}

// ----------------------------------------------------------------------------
// Debug helper
// ----------------------------------------------------------------------------
export function getRuntimeFirebaseInfo() {
  return {
    projectId: firebaseConfig.projectId,
    storageBucket: firebaseConfig.storageBucket,
    authDomain: firebaseConfig.authDomain,
    appId: firebaseConfig.appId,
    currentUser: auth.currentUser
      ? { uid: auth.currentUser.uid, isAnonymous: auth.currentUser.isAnonymous }
      : null,
  };
}
