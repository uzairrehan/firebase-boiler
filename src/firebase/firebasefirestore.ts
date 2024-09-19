import { getFirestore , doc, setDoc, collection, addDoc } from "firebase/firestore";

import { app } from "./firebaseconfig";
import {  todoDataType, userSaveType } from "@/types/types";

//  this called instance
const db = getFirestore(app);




export async function saveUserInfo({email,phoneNumber, uid}:userSaveType) {
    try {
        const where = doc(db,"user", uid)
        const what = {email,phoneNumber,uid}
        await setDoc(where, what)
        console.log("user saved : ", what);
    } catch (error) {
        console.log("cant save : ", error );
    }
}






export async function saveTodo({todo,uid,email,completed}:todoDataType) {
    try {
       const where = collection(db,"todo")
       const what = {todo, uid,email,completed}
       await addDoc(where,what)
    } catch (error) {
        console.log("cant save : ", error );
    }
}


































// collection(instance, "collectionName")
// addDoc("where", "what");


// let docRef = doc(instance, "collectionName", "docId")
// await setDoc("where", "what");
