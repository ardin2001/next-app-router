import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  addDoc,
} from "firebase/firestore";
import App from "./init";

const db = getFirestore(App);

export async function Register(document: string, addData: any) {
  if (typeof(addData) == "string") {
    addData = JSON.parse(addData);
  }

  let condition: any = {};
  if (document == "users") {
    condition.email = addData.email;
  }

  const q = query(
    collection(db, document),
    where("email", "==", addData.email)
  );
  const querySnapshot = await getDocs(q);
  const data: any = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  if (data.length == 0) {
    const docRef = await addDoc(collection(db, document), addData);
    return { status: true, data: { id: docRef.id, ...addData } };
  }
  return { status: false, data: null };
}

export async function Login(document:string,user:any) {

  const q = query(
    collection(db, document),
    where("email", "==", user.email)
  );
  const querySnapshot = await getDocs(q);
  const data: any = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  if (data.length == 0) {
    return { status: false, data: null };
  }
  return { status: true, data };
}