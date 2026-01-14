import { useState } from "react"

export default function Todo() {

    const [data, setData] = useState(todoData);
    const [task, setTask] = useState("");
    const [isEdit, setIsEdit] = useState(null);
    const [saveTask, setSaveTask] = useState("");

    function handleEditTask(d) {
        setIsEdit(d.id);
        setSaveTask(d.text)
    }


    return <>
        <h1>Todo App</h1>
        <input type="text" value={task} onChange={e => setTask(e.target.value)} />
        <button type="button">Add</button>

        {/* Rendering pre-todo-list */}
        <ol>
            {
                data.map((d) => {
                    return <li key={d.id}>
                        {
                            isEdit === d.id ? <><input value={saveTask} onChange={e => setSaveTask(e.target.value)} type="text" />
                                <button>Save</button></> : <>
                                <p>{d.text}</p>
                                <button onClick={() => handleEditTask(d)}>Edit</button></>
                        }
                        <button>Delete</button>
                    </li>

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