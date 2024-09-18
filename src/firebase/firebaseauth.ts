import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from "./firebaseconfig";



export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();






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














export function signinwithgoogle() {
signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;
  // The signed-in user info.
  const user = result.user;
  // IdP data available using getAdditionalUserInfo(result)
  console.log("user created with google", token, user);
  
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  console.log(errorCode,errorMessage,email,credential);
  
  // ...
});
}


















export function logout() {
  signOut(auth).then(() => {
   console.log("Sign-out successful")
  }).catch((error) => {
    console.log(error)
  });
}