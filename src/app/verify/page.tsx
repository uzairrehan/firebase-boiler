"use client";

import { auth } from "@/firebase/firebaseauth";
import { sendEmailVerification } from "firebase/auth";
import { useRouter } from "next/navigation";

    

function Verify() {
    const route = useRouter()
    setInterval(()=>{
        auth.currentUser?.emailVerified ? route.push("/"):null
    }, 2000);
    return ( <>
    Verify your account. check email of {auth.currentUser?.email}...
    <br />
    <button onClick={()=> {
        auth.currentUser ? sendEmailVerification(auth.currentUser) :null
          }} >Resend</button>
    </> );
}

export default Verify;