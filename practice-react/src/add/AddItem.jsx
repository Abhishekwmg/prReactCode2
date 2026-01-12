import { useState } from "react"

export default function AddItem() {


    const [item, setItem] = useState(initialData);
    const [add, setAdd] = useState("");
    const [isEdit, setIsEdit] = useState(null);
    const [saveInput, setSaveInput] = useState("");

    let nextId = 4;

    function handleAddTask() {
        setItem((item) => {
            return [
                ...item,
                {
                    text: add,
                    id: nextId++
                }
            ]
        })
        setAdd("");
    }

    function handleDelete(id) {
        setItem(item.filter(i => i.id !== id))
    }

    function handleEdit(i) {
        setIsEdit(i.id)
        setSaveInput(i.text)
    }

    function handleSave(id) {
        setItem(item.map(i => (
            i.id === id ? { ...i, text: saveInput } : i
        )))
        setIsEdit(null);
        setSaveInput("");
    }

    return <>
        <input value={add} type="text" placeholder="Add task" onChange={e => setAdd(e.target.value)} />
        <button onClick={handleAddTask}>Add</button>
        <h1>List of Items added---</h1>
        <ul>

            {item.map(i => (
                <li key={i.id}>
                    {isEdit === i.id ? (
                        <>
                            <input
                                value={saveInput}
                                onChange={e => setSaveInput(e.target.value)}
                            />
                            <button onClick={() => handleSave(i.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            {i.text}
                            <button onClick={() => handleEdit(i)}>Edit</button>
                        </>
                    )}

                    <button onClick={() => handleDelete(i.id)}>Delete</button>
                </li>
            ))}
        </ul >
    </>
}


const initialData = [
    {
        id: 1,
        text: "Tomato"
    },
    {
        id: 2,
        text: "Potato"
    },
    {
        id: 3,
        text: "Cutlery"
    },
    {
        id: 4,
        text: "Onion"
    },
]