"use client";

import { signinwithgoogle } from "@/firebase/firebaseauth";
// import { saveUserInfo } from "@/firebase/firebasefirestore";
import Link from "next/link";





export default function Home() {

  return (
    <>
      <h1 className="p-5">Login or Signup to continue</h1>
      <br />
      <Link href={"/signin"}>signin</Link>
      <br />
      <Link href={"/signup"}>signup</Link>
      <br />
      <button onClick={signinwithgoogle} > signin with google</button>
      <br />
      {/* <button onClick={saveUserInfo}>save user</button> */}
    </>
  );
}
