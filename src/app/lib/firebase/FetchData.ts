import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import App from "./init";
import * as argon2 from "argon2";

const db = getFirestore(App);

export async function GetAll(document: string) {
  const q = query(collection(db, document));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
}

export async function GetById(document: string, id: string) {
  const docRef = doc(db, document, id);
  const docSnap = await getDoc(docRef);
  let result = {};
  if (docSnap.exists()) {
    result = { id: docSnap.id, ...docSnap.data() };
  } else {
    result = {};
  }
  return result;
}