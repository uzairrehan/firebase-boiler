import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword  } from "firebase/auth";
import { app } from "./firebaseconfig";

export const auth = getAuth(app);

export function signInUser(email:string,password:string ) {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}


export function signUpUser(email:string,password:string ) {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}
