// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
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
  query,
  orderBy,
} from "firebase/firestore";
import {
  getStorage,
  ref as sref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

/**
 * 1) Tenta .env (Vite) -> 2) Fallback hardcoded (garante funcionar agora)
 */
const cfgFromEnv = {
  apiKey:
    import.meta?.env?.VITE_FB_API_KEY ||
    import.meta?.env?.VITE_FIREBASE_API_KEY ||
    "",
  authDomain:
    import.meta?.env?.VITE_FB_AUTH_DOMAIN ||
    import.meta?.env?.VITE_FIREBASE_AUTH_DOMAIN ||
    "",
  projectId:
    import.meta?.env?.VITE_FB_PROJECT_ID ||
    import.meta?.env?.VITE_FIREBASE_PROJECT_ID ||
    "",
  storageBucket:
    import.meta?.env?.VITE_FB_STORAGE_BUCKET ||
    import.meta?.env?.VITE_FIREBASE_STORAGE_BUCKET ||
    "",
  appId:
    import.meta?.env?.VITE_FB_APP_ID ||
    import.meta?.env?.VITE_FIREBASE_APP_ID ||
    "",
};

// >>> Fallback com os valores que você me passou (usa se algo do env vier vazio)
const cfgHardcoded = {
  apiKey: "AIzaSyBWDz3tO9Q4AS8CxdQCjZ74eAT6ljFuj3A",
  authDomain: "linha-etica-venture.firebaseapp.com",
  projectId: "linha-etica-venture",
  storageBucket: "linha-etica-venture.appspot.com",
  appId: "1:790882253555:web:33f0bb792922d7a313d586",
};

const FIREBASE_CONFIG = Object.values(cfgFromEnv).every(Boolean)
  ? cfgFromEnv
  : cfgHardcoded;

// Log leve para diagnosticar (mostra só se veio do env ou do fallback)
if (import.meta.env?.MODE !== "production") {
  console.log(
    "[firebase] usando",
    Object.values(cfgFromEnv).every(Boolean) ? ".env" : "fallback hardcoded"
  );
}

const app = getApps().length ? getApp() : initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

/* ---------------------- Auth anônima ---------------------- */
export async function ensureAnonAuth() {
  if (auth.currentUser) return auth.currentUser;
  const res = await signInAnonymously(auth); // precisa das regras auth != null
  return res.user;
}

/* ---------------------- Storage --------------------------- */
export async function uploadFile(path, file) {
  // path exemplo: reports/PROTOCOLO/arquivo.ext
  const r = sref(storage, path);
  const task = uploadBytesResumable(r, file);
  await new Promise((resolve, reject) => {
    task.on(
      "state_changed",
      // progresso opcional:
      // (snap) => console.log("upload", (snap.bytesTransferred / snap.totalBytes) * 100, "%"),
      () => {},
      reject,
      resolve
    );
  });
  const url = await getDownloadURL(task.snapshot.ref);
  return url;
}

/* ---------------------- Firestore ------------------------- */
const COL = "reports";

/**
 * Cria ou substitui a denúncia (id por protocolo) — idempotente.
 */
export async function createOrReplaceReport(protocolo, data) {
  const ref = doc(db, COL, protocolo);
  await setDoc(ref, { ...data, createdAt: serverTimestamp() }, { merge: true });
}

/**
 * Pega denúncia por protocolo
 */
export async function getReportByProtocol(protocolo) {
  const ref = doc(db, COL, protocolo);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

/**
 * Assina a coleção (ordenando por createdAt quando possível)
 */
export function subscribeReports(cb) {
  try {
    const q = query(collection(db, COL), orderBy("createdAt", "desc"));
    return onSnapshot(
      q,
      (ss) => cb(ss.docs.map((d) => ({ id: d.id, ...d.data() }))),
      (err) => {
        console.error("onSnapshot error:", err);
        cb([]);
      }
    );
  } catch (_) {
    // se ainda não houver índice/ordenação, cai no fallback simples
    return onSnapshot(
      collection(db, COL),
      (ss) => cb(ss.docs.map((d) => ({ id: d.id, ...d.data() }))),
      (err) => {
        console.error("onSnapshot error (fallback):", err);
        cb([]);
      }
    );
  }
}

/**
 * Atualiza denúncia (ex.: status)
 */
export async function updateReport(id, patch) {
  const ref = doc(db, COL, id);
  await updateDoc(ref, { ...patch, updatedAt: serverTimestamp() });
}

/**
 * Adiciona uma nota/admin reply (apêndice em array "notes")
 */
export async function addAdminNote(id, note) {
  const ref = doc(db, COL, id);
  const current = await getDoc(ref);
  const prev = current.exists() ? current.data() : {};
  const notes = Array.isArray(prev.notes) ? prev.notes.slice() : [];
  notes.push(note);
  await updateDoc(ref, { notes, updatedAt: serverTimestamp() });
}
