import { useState } from "react"

export default function Todo() {

    const [data, setData] = useState(todoData);
    const [task, setTask] = useState("");

    return <>
        <h1>Todo App</h1>
        <input type="text" value={task} onChange={e => setTask(e.target.value)} />
        <button>Add</button>
    </>
}




const todoData = [
    {
        id: 1,
        text: "Buy Avacado",
        done: false
    },
    {
        id: 2,
        text: "Visit Local Market",
        done: false
    },
    {
        id: 3,
        text: "Get Healthy",
        done: false
    },
    {
        id: 4,
        text: "Cook Rice",
        done: false
    },
]