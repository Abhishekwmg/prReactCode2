import { useState } from "react"

export default function Todo() {

    const [data, setData] = useState(todoData);
    const [task, setTask] = useState("");
    const [isEdit, setIsEdit] = useState(null);
    const [saveTask, setSaveTask] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    function handleEditTask(d) {
        setIsEdit(d.id);
        setSaveTask(d.text)
    }

    function handleSaveTask(d) {
        setData(data.map(da => {
            return da.id === d.id ? { ...d, text: d.text } : d
        }))
        setIsEdit(null);
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
                                <button onClick={() => handleSaveTask(d)}>Save</button></> : <>
                                <input type="checkbox" />
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