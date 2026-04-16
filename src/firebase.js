import { initializeApp } from "firebase/app";
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
  deleteDoc,
  writeBatch,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

/* ==================== Firebase Config ==================== */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  appId: import.meta.env.VITE_FB_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

/* ==================== Auth ==================== */
export async function ensureAnonAuth() {
  if (auth.currentUser) return auth.currentUser;

  return new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(auth, async (user) => {
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
    });
  });
}

/* ==================== Storage ==================== */
export async function uploadFile(path, file) {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}

export async function getDownloadUrlByPath(path) {
  const storageRef = ref(storage, path);
  return await getDownloadURL(storageRef);
}

/* ==================== Reports ==================== */
export async function createOrReplaceReport(id, data) {
  await setDoc(doc(db, "reports", id), data, { merge: true });
}

export async function getReportByProtocol(id) {
  const snap = await getDoc(doc(db, "reports", id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

export function subscribeReports(callback) {
  const q = query(collection(db, "reports"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const arr = snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
    callback(arr);
  });
}

export async function updateReport(id, patch) {
  await updateDoc(doc(db, "reports", id), patch);
}

export async function addAdminNote(id, note) {
  const refDoc = doc(db, "reports", id);
  const current = await getDoc(refDoc);
  const data = current.exists() ? current.data() : {};
  const notes = Array.isArray(data.notes) ? data.notes : [];

  await updateDoc(refDoc, {
    notes: [...notes, note],
    updatedAt: new Date().toISOString(),
  });
}

/* ==================== Delete ==================== */
export async function deleteReport(id) {
  await deleteDoc(doc(db, "reports", id));
}

export async function deleteReports(ids) {
  const batch = writeBatch(db);
  ids.forEach((id) => {
    batch.delete(doc(db, "reports", id));
  });
  await batch.commit();
}

/* ==================== Exports (optional helpers) ==================== */
export { auth, db, storage };
