"use client";
import Todo from "@/components/todo";
import { useAuthContext } from "@/context/authcontext";
import { logout } from "@/firebase/firebaseauth";
import { getTodoList } from "@/firebase/firebasefirestore";
import { useEffect } from "react";

function Profile() {
    const { authenticatedUser } = useAuthContext();

    useEffect(()=>{
      getTodoList(authenticatedUser.email)
    })

    return (<>
        Hey There..... this is profile you will be here if you are logged in and verified : ) ok !
        <br />
        and email is : {authenticatedUser.email}
        <br />
        <button onClick={logout}>logout</button>
        <br />
        <Todo />
    </>);
}

export default Profile;