"use client";

import { auth } from "@/firebase/firebaseauth";

export default function Home() {
  return (
    <>
    Hey There..... this is home you will be here if you are logged in and verified : ) ok !
    <p>
      here is you credentials...
      <br />
      email : {auth.currentUser?.email}
      <br />
      uid : {auth.currentUser?.uid}
      <br />
      email verified : {auth.currentUser?.emailVerified} 
    </p>
    </>
  );
}
