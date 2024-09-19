import { useAuthContext } from "@/context/authcontext";
import { saveTodo } from "@/firebase/firebasefirestore";
import { useState } from "react";

function Todo() {
    const [todo , setTodo ]= useState("");
    const [completed , setCompleted]=  useState(false);
    const {authenticatedUser}= useAuthContext();
    const {email,uid}  = authenticatedUser
    return ( <>
    <br />
    <br />
    ADD TODO
    <br />
    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>

    <br />
    <input type="checkbox" value={completed} onClick={(e)=> setCompleted(e.target.checked)} /> completed or not ?
    <br />
    <button onClick={()=> {saveTodo({todo, email , uid , completed})}}>save it</button>
    </> );
}

export default Todo;