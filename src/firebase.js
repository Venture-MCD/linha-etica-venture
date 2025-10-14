// src/firebase.js
// -------------------------------------------------------------
// Firebase SDK - utilidades para Linha Ética Venture
// - Inicialização do app
// - Autenticação anônima
// - Upload Resumable (robusto para celular) + fallback simples
// - Firestore: criar/ler/atualizar denúncia, subscription em tempo real
// - Notas/respostas do Admin (subcoleção)
//
// Requer variáveis de ambiente (Vite):
// VITE_FB_API_KEY
// VITE_FB_AUTH_DOMAIN
// VITE_FB_PROJECT_ID
// VITE_FB_STORAGE_BUCKET  (ex.: linha-etica-venture.appspot.com)
// VITE_FB_APP_ID
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
// Inicialização
// ----------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  appId: import.meta.env.VITE_FB_APP_ID,
};

// Evita inicializar 2x durante HMR
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// ----------------------------------------------------------------------------
// Auth anônima (obrigatória para regras `request.auth != null`)
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
// Upload de arquivo: versão RESUMABLE (recomendado p/ celular)
// ----------------------------------------------------------------------------
/**
 * Faz upload com reenvio automático se a rede oscilar.
 * @param {string} path caminho no bucket (ex.: reports/PROTOCOLO/meu-arquivo.jpg)
 * @param {File|Blob} file
 * @param {(percent:number)=>void} [onProgress] callback opcional de progresso
 * @returns {Promise<string>} URL pública (downloadURL)
 */
export function uploadFileResumable(path, file, onProgress) {
  const storageRef = sref(storage, path);
  const metadata = {
    contentType: file?.type || "application/octet-stream",
  };
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

// ----------------------------------------------------------------------------
// Upload de arquivo: versão simples (fallback, caso ainda use em algum lugar)
// ----------------------------------------------------------------------------
/**
 * Upload simples (não retoma se conexão cair). Prefira o resumable acima.
 */
export async function uploadFile(path, file) {
  const storageRef = sref(storage, path);
  const metadata = { contentType: file?.type || "application/octet-stream" };
  await uploadBytes(storageRef, file, metadata);
  return getDownloadURL(storageRef);
}

// ----------------------------------------------------------------------------
// Firestore - Denúncias
// Estrutura: collection "reports" com ID = protocolo
// Cada doc contém campos principais e `createdAt`/`updatedAt`.
// Subcoleção "adminNotes" para respostas/andamento do time responsável.
// ----------------------------------------------------------------------------

/**
 * Cria ou substitui uma denúncia (id = protocolo).
 * Usa timestamps do servidor.
 */
export async function createOrReplaceReport(protocolo, data) {
  const ref = doc(db, "reports", protocolo);
  const payload = {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  await setDoc(ref, payload, { merge: true });
}

/**
 * Atualiza parcialmente uma denúncia existente.
 */
export async function updateReport(protocolo, partial) {
  const ref = doc(db, "reports", protocolo);
  await updateDoc(ref, {
    ...partial,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Busca denúncia por protocolo (uma vez).
 */
export async function getReportByProtocol(protocolo) {
  const ref = doc(db, "reports", protocolo);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    return { id: snap.id, ...snap.data() };
  }
  return null;
}

/**
 * Inscreve para receber updates em tempo real (p/ painel admin).
 * Retorna a função de unsubscribe.
 */
export function subscribeReports(callback) {
  // Opcional: ordenar por createdAt desc, se quiser página sempre com mais recentes
  const q = query(collection(db, "reports"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(list);
  });
}

// ----------------------------------------------------------------------------
// Firestore - Notas / Respostas do Admin
// subcoleção: reports/{protocolo}/adminNotes
// ----------------------------------------------------------------------------
export async function addAdminNote(protocolo, author, message) {
  const notesRef = collection(db, "reports", protocolo, "adminNotes");
  await addDoc(notesRef, {
    author,
    message,
    createdAt: serverTimestamp(),
  });
}

/**
 * Escutar notas de um protocolo (em ordem de criação).
 */
export function subscribeAdminNotes(protocolo, callback) {
  const notesRef = collection(db, "reports", protocolo, "adminNotes");
  const q = query(notesRef, orderBy("createdAt", "asc"));
  return onSnapshot(q, (snap) => {
    const notes = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(notes);
  });
}

// ----------------------------------------------------------------------------
// Helpers (opcionais) para checar configuração em tempo de execução
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
