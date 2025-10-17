// firebase.js
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
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import {
  getStorage,
  ref as sref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

/* ================== INIT ================== */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  appId: import.meta.env.VITE_FB_APP_ID,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

/* ================== AUTH ================== */
export async function ensureAnonAuth() {
  const user = auth.currentUser;
  if (user) return user;
  return new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(
      auth,
      (u) => {
        if (u) {
          unsub();
          resolve(u);
        } else {
          signInAnonymously(auth).catch((e) => {
            unsub();
            reject(e);
          });
        }
      },
      (e) => {
        unsub();
        reject(e);
      }
    );
  });
}

/* ================== HELPERS ================== */
function withTimeout(promise, ms = 30000, label = "operação") {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`Timeout ${label} (${ms}ms)`)), ms);
    promise.then((v) => { clearTimeout(t); resolve(v); })
           .catch((e) => { clearTimeout(t); reject(e); });
  });
}

/* ================== STORAGE (upload com progresso) ================== */
export async function uploadFileResumable(path, file, onProgress) {
  const r = sref(storage, path);
  const metadata = { contentType: file.type || "application/octet-stream" };
  const task = uploadBytesResumable(r, file, metadata);

  const result = await withTimeout(
    new Promise((resolve, reject) => {
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
          resolve({
            url,
            path: task.snapshot.ref.fullPath,
            size: file.size,
            type: file.type,
            name: file.name || "arquivo",
          });
        }
      );
    }),
    60000,
    "upload Firebase Storage"
  );

  return result;
}

/* ================== FIRESTORE ================== */
// id = protocolo
export async function createOrReplaceReport(id, data) {
  // sempre grava createdAt (server) e createdAtMs (client) na criação
  const ref = doc(db, "reports", id);
  const snap = await getDoc(ref);
  const base = {
    createdAt: serverTimestamp(),
    createdAtMs: Date.now(),
    ...data,
  };
  if (snap.exists()) {
    // Atualiza preservando createdAt/createdAtMs já existentes
    const current = snap.data();
    await setDoc(
      ref,
      {
        ...base,
        createdAt: current.createdAt || base.createdAt,
        createdAtMs: current.createdAtMs || base.createdAtMs,
      },
      { merge: true }
    );
  } else {
    await setDoc(ref, base, { merge: true });
  }
}

export async function getReportByProtocol(id) {
  const ref = doc(db, "reports", id);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function updateReport(id, patch) {
  const ref = doc(db, "reports", id);
  await updateDoc(ref, patch);
}

export async function addAdminNote(id, note) {
  // Opcional: salvar notas numa subcoleção para auditoria
  const notesRef = collection(db, "reports", id, "notes");
  await addDoc(notesRef, note);
  // Também reflete num array simples no doc principal, se você já exibe assim:
  await updateDoc(doc(db, "reports", id), {
    notes: (note ? [] : []), // noop para garantir campo
  }).catch(() => {});
}

/**
 * Assina a lista de reports em ordem desc de data.
 * - Ordena por createdAt (server) desc.
 * - Empata por createdAtMs desc para estabilidade inicial.
 */
export function subscribeReports(cb) {
  const qy = query(
    collection(db, "reports"),
    orderBy("createdAt", "desc"),
    limit(1000)
  );
  return onSnapshot(
    qy,
    (snap) => {
      const arr = [];
      snap.forEach((d) => arr.push({ id: d.id, ...d.data() }));
      // fallback: reforça a ordenação no client usando createdAtMs
      arr.sort((a, b) => (b.createdAtMs || 0) - (a.createdAtMs || 0));
      cb(arr);
    },
    (err) => {
      console.error("subscribeReports error:", err);
      cb([]); // evita tela vazia permanente
    }
  );
}
