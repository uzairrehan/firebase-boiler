import { useAuthContext } from "@/context/authcontext";
import { fetchKnownTodo, getTodoList, realTimeUpdate, saveTodo } from "@/firebase/firebasefirestore";
import { useEffect, useState } from "react";

function Todo() {
    const [todo, setTodo] = useState("");
    const [searchTodo, setSearchTodo] = useState("");
    const [searchByUID, setSearchByUID] = useState("");
    const [completed, setCompleted] = useState(false)
    const { authenticatedUser } = useAuthContext();
    const { email, uid } = authenticatedUser
    const [todoData , setTodoData] = useState()


    useEffect(() => {
       getRealTimeUpdate()
    },[])
    async function getRealTimeUpdate( ){
        const data= await realTimeUpdate()
        console.log("hello" ,data)
        setTodoData(data)
    } 

    return (<>
        <br />
        <br />
        ADD TODO
        <br />
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />

        <br />
        <input type="checkbox" checked={completed} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompleted(e.target.checked)} /> completed or not ?
        <br />
        <button onClick={() => {
            saveTodo({ todo, email, uid, completed })
            setTodo("")
            setCompleted(false)
        }
        }>save it</button>
        <br />
        <br />
        <input type="text" value={searchByUID} onChange={(e) => setSearchByUID(e.target.value)} />
        <br />
        <button onClick={() => {
            fetchKnownTodo(searchByUID)
        }}>get todo by uid</button>
        <br />
        <br />
        { }

        <input type="text" value={searchTodo} onChange={(e) => setSearchTodo(e.target.value)} />
        <br />
        <button onClick={() => {
            getTodoList(email)
        }}>get list by email</button>
        {
        todoData
        }
    </>);
}

export default Todo;