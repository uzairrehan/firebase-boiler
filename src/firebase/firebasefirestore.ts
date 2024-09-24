import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  query,
  getDocs,
  where,
  // getDocs,
  // query,
  // where,
} from "firebase/firestore";

import { app } from "./firebaseconfig";
import { todoDataType, userSaveType } from "@/types/types";
import { auth } from "./firebaseauth";

//  this called instance
const db = getFirestore(app);

export async function saveUserInfo({ email, phoneNumber, uid }: userSaveType) {
  try {
    const where = doc(db, "user", uid);
    const what = { email, phoneNumber, uid };
    await setDoc(where, what);
    console.log("user saved : ", what);
  } catch (error) {
    console.log("cant save : ", error);
  }
}

export async function saveTodo({ todo, uid, email, completed }: todoDataType) {
  try {
    const where = collection(db, "todo");
    const what = { todo, uid, email, completed };
    await addDoc(where, what);
    console.log("saved", what);
  } catch (error) {
    console.log("cant save : ", error);
  }
}

export async function fetchKnownTodo(UID: string) {
  const reference = doc(db, "todo", UID);
  const data = await getDoc(reference);
  if (data.exists()) {
    console.log("here is the todo of ", data.id, data.data());
  } else {
    console.log("nothing to show");
  }
}

export async function getTodoList(email: string) {
  if (email) {
    const reference = collection(db, "todo");
    const wher = where("email", "==", email);
    const q = query(reference, wher);
    const todoList = await getDocs(q);
    todoList.forEach((data) => {
      if (data.exists()) {
        console.log(data.data());
      } else {
        console.log("can't find");
      }
    });
  }
}




export async function realTimeUpdate() {
    const reference =  collection(db, "todo")
    const userUID = auth.currentUser?.uid
    const condition = where("uid" , "==" , userUID)
    const q =  query(reference, condition)
    const allTodosSnapshot = await getDocs (q)
    const allTodos = allTodosSnapshot.docs.map((rawdata)=>{
      const data = rawdata.data()
      data.id = rawdata.id
      return data
    })
    return allTodos
}











// collection(instance, "collectionName")
// addDoc("where", "what");

// let docRef = doc(instance, "collectionName", "docId")
// await setDoc("where", "what");