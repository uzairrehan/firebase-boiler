import { getFirestore , doc, setDoc } from "firebase/firestore";

import { app } from "./firebaseconfig";
import { userSave } from "@/types/types";

//  this called instance
const db = getFirestore(app);




export async function saveUserInfo({email,phoneNumber, uid}:userSave) {
    try {
        const where = doc(db,"user", uid)
        const what = {email,phoneNumber,uid}
        await setDoc(where, what)
        console.log("user saved : ", what);
    } catch (error) {
        console.log("cant save : ", error );
    }
}






































// collection(instance, "collectionName")
// addDoc("where", "what");


// let docRef = doc(instance, "collectionName", "docId")
// await setDoc("where", "what");
