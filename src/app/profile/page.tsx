"use client";
import { useAuthContext } from "@/context/authcontext";
import { logout } from "@/firebase/firebaseauth";

function Profile() {
    const { authenticatedUser } = useAuthContext()

    return (<>
        Hey There..... this is profile you will be here if you are logged in and verified : ) ok !
        <br />
        and email is : {authenticatedUser.email}
        <br />
        <button onClick={logout}>logout</button>
    </>);
}

export default Profile;