import { useAuthContext } from "@/context/authcontext";
import { saveTodo } from "@/firebase/firebasefirestore";
import { useState } from "react";

function Todo() {
    const [todo, setTodo] = useState("");
    const [completed, setCompleted] = useState(false);
    const authcontext= useAuthContext();

    if (!authcontext){
        return "nothingg"
    }
    
    const {authenticatedUser} = authcontext
    const { email, uid } = authenticatedUser
    return (<>
        <br />
        <br />
        ADD TODO
        <br />
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />

        <br />
        <input type="checkbox" checked={completed} onChange={(e :React.ChangeEvent<HTMLInputElement>) => setCompleted(e.target.checked)} /> completed or not ?
        <br />
        <button onClick={() => {
            saveTodo({ todo, email, uid, completed })
            setTodo("")
            setCompleted(false)        }
        }>save it</button>
    </>);
}

export default Todo;