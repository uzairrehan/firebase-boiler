"use client";

import { useAuthContext } from "@/context/authcontext";
import { sendEmailVerification } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



function Verify() {
    const { authenticatedUser } = useAuthContext()
    const route = useRouter()

    setInterval(() => {
        authenticatedUser.emailVerified ? route.push("/profile") : null
    }, 2000);



    return (<>
        Verify your account. check email of ... {authenticatedUser.email}
        <br />
        <button onClick={() => {
            authenticatedUser ? sendEmailVerification(authenticatedUser) : null
        }} >Resend</button>
    </>);
}

export default Verify;