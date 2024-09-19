import { useAuthContext } from "@/context/authcontext";
import { saveTodo } from "@/firebase/firebasefirestore";
import { useState } from "react";

function Todo() {
    const [todo , setTodo ]= useState("");
    const {authenticatedUser}= useAuthContext();
    const {email,uid}  = authenticatedUser
    return ( <>
    ADD TODO
    <br />
    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
    <br />
    <button onClick={()=> {saveTodo({todo, email , uid})}}>save it</button>
    </> );
}

export default Todo;