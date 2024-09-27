"use client";
import { signinwithgoogle } from "@/firebase/firebaseauth";


export default function Home() {
  return (
    <>
      <h1 className="p-5">Login or Signup to continue</h1>
      <br />
      <a href={"/signin"}>signin</a>
      <br />
      <a href={"/signup"}>signup</a>
      <br />
      <button onClick={signinwithgoogle}>signin with google</button>
      <br />

    </>
  );
}
