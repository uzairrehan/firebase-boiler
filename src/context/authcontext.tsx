"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "@/firebase/firebaseauth";
import { useRouter } from "next/navigation";
import { authContextType } from "@/types/types";

const Authcontext = createContext<null | authContextType>(null)



function AuthContextProvider({ children }: { children: ReactNode }) {
    const [authenticatedUser, setAuthenticatedUser] = useState({});
    const [emailVerificationSent, setEmailVerificationSent] = useState(false);
    const route = useRouter()
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticatedUser(user)
                if (user.emailVerified === false) {
                    route.push("/verify")
                    if (!emailVerificationSent) {
                        sendEmailVerification(user)
                        setEmailVerificationSent(true)
                    }
                }
                else {
                    route.push("/profile")
                }
            }
            else {
                route.push("/")
                setAuthenticatedUser({})
                setEmailVerificationSent(false) 
            }
        })
    })
    return (
        <Authcontext.Provider value={{ authenticatedUser, setAuthenticatedUser }}>
            {children}
        </Authcontext.Provider>
    );
}

export default AuthContextProvider;





export const useAuthContext = () => useContext(Authcontext)