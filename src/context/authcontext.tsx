"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "@/firebase/firebaseauth";
import { useRouter } from "next/navigation";
import { authContextType } from "@/types/types";

// Define the AuthContext with null as a valid type
const AuthContext = createContext<authContextType | null>(null);

// Type definition for authenticated user
type authUserType = {
    email: string | null;
    uid: string;
};

// AuthContextProvider component
function AuthContextProvider({ children }: { children: ReactNode }) {
    const [authenticatedUser, setAuthenticatedUser] = useState<authUserType | null>(null);
    const [emailVerificationSent, setEmailVerificationSent] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Create the authenticated user object
                const authUser: authUserType = {
                    email: user.email,
                    uid: user.uid,
                };
                setAuthenticatedUser(authUser);

                if (!user.emailVerified) {
                    router.push("/verify");
                    if (!emailVerificationSent) {
                        sendEmailVerification(user)
                            .then(() => setEmailVerificationSent(true))
                            .catch((error) => console.error("Error sending verification email", error));
                    }
                } else {
                    router.push("/profile");
                }
            } else {
                // If no user is logged in, set authenticatedUser to null
                setAuthenticatedUser(null);
                router.push("/");
                setEmailVerificationSent(false);
            }
        });

        // Cleanup the subscription on unmount
        return () => unsubscribe();
    }, [emailVerificationSent, router]);

    return (
        <AuthContext.Provider value={{ authenticatedUser, setAuthenticatedUser }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook to use AuthContext
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContextProvider");
    }
    return context;
};

export default AuthContextProvider;
