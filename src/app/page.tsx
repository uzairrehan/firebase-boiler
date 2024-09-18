"use client";

import { signinwithgoogle } from "@/firebase/firebaseauth";
import Link from "next/link";


export default function Home() {

  return (
    <>
    {/* Hey There..... this is home you will be here if you are logged in and verified : ) ok ! */}
    <br />
    <Link href={"/signin"}>signin</Link>
    <br />
    <Link href={"/signup"}>signup</Link>
    <br />
    <button onClick={signinwithgoogle} > signin with google</button>
    </>
  );
}
