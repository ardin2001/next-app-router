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
  
  export async function PostData(document: string, addData: any) {
    if (typeof addData == "string") {
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
      if (document == "users" && addData.verified == false) {
        const hash = await argon2.hash(addData.password);
        addData.password = hash;
      } else {
        addData.verified = true;
      }
      const docRef = await addDoc(collection(db, document), addData);
      addData.password = "********";
      return { status: true, data: { id: docRef.id, ...addData } };
    }
    return { status: false, data: null };
  }
  
  export async function GetByAtribute(document:string,user:any) {
  
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