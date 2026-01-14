import { useState } from "react"

export default function Todo() {

    const [data, setData] = useState(todoData);
    const [task, setTask] = useState("");

    return <>
        <h1>Todo App</h1>
        <input type="text" value={task} onChange={e => setTask(e.target.value)} />
        <button type="button" onClick={handleAddTask}>Add</button>

        {/* Rendering pre-todo-list */}
        <ol>
            {
                data.map((d) => {
                    return <>
                        <li key={d.id}>{d.text}</li>
                        <button>Edit</button>
                        <button>Delete</button>
                    </>
                })
            }
        </ol>

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