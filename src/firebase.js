// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  collection,
  query,
  orderBy,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import {
  getStorage,
  ref as sref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

/* ========= Ler variáveis do .env =========
   (lembre: nomes começam com VITE_ para o Vite injetar no build)
*/
const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FB_API_KEY,
  authDomain:        import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FB_STORAGE_BUCKET,
  appId:             import.meta.env.VITE_FB_APP_ID,
  // measurementId é opcional
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);
const st   = getStorage(app);

/* ========= Helpers ========= */
function withTimeout(promise, ms, label = "operation") {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`Timeout em ${label} após ${ms}ms`)), ms);
    promise.then(
      (v) => { clearTimeout(t); resolve(v); },
      (e) => { clearTimeout(t); reject(e); }
    );
  });
}

/* ========= Auth Anônima ========= */
export async function ensureAnonAuth() {
  // se já houver auth, ok
  const user = auth.currentUser;
  if (user) return user;

  // aguarda um ciclo de onAuthStateChanged (resolve rápido)
  const gotUser = new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        unsub();
        resolve(u);
      }
    });
  });

  try {
    // dispara login anônimo; se já estiver logado, onAuthStateChanged acima resolve
    await signInAnonymously(auth);
  } catch (e) {
    // se falhar, pode ser “auth/operation-not-allowed”: habilite “Anonymous” no Firebase Auth
    console.error("Falha ao autenticar anonimamente:", e);
    throw e;
  }

  return gotUser;
}

/* ========= Storage (upload) ========= */
export async function uploadFile(path, file, { timeoutMs = 30000 } = {}) {
  // garante auth válido para regras request.auth != null
  await ensureAnonAuth();

  const r = sref(st, path);
  const task = uploadBytesResumable(r, file, {
    // metadados opcionais
    contentType: file.type || "application/octet-stream",
  });

  const done = new Promise((resolve, reject) => {
    task.on(
      "state_changed",
      // onProgress (opcional) => (snap) => { ... }
      null,
      (err) => reject(err),
      async () => {
        try {
          const url = await getDownloadURL(task.snapshot.ref);
          resolve({ url, fullPath: task.snapshot.ref.fullPath });
        } catch (e) {
          reject(e);
        }
      }
    );
  });

  try {
    return await withTimeout(done, timeoutMs, "upload");
  } catch (e) {
    console.error("[upload] erro:", e);
    throw e;
  }
}

/* ========= Firestore ========= */
export async function createOrReplaceReport(protocolo, data) {
  await ensureAnonAuth();
  const ref = doc(db, "reports", protocolo);
  const payload = {
    ...data,
    createdAt: data.createdAt || serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  await setDoc(ref, payload, { merge: true });
  return protocolo;
}

export async function getReportByProtocol(protocolo) {
  const ref = doc(db, "reports", protocolo);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export function subscribeReports(cb) {
  // ordena por createdAt quando existir
  const q = query(collection(db, "reports"), orderBy("createdAt", "desc"));
  const unsub = onSnapshot(q, (snap) => {
    const rows = [];
    snap.forEach((d) => rows.push({ id: d.id, ...d.data() }));
    cb(rows);
  });
  return unsub;
}

export async function updateReport(id, partial) {
  const ref = doc(db, "reports", id);
  await updateDoc(ref, { ...partial, updatedAt: serverTimestamp() });
}

export async function addAdminNote(id, note) {
  const ref = doc(db, "reports", id);
  const snap = await getDoc(ref);

  const cur = snap.exists() ? snap.data() : {};
  const prevNotes = Array.isArray(cur.notes) ? cur.notes : [];
  const notes = [...prevNotes, note];

  await updateDoc(ref, { notes, updatedAt: serverTimestamp() });
}

/* ========= Exports “brutos” (se precisar) ========= */
export { app, auth, db, st };
