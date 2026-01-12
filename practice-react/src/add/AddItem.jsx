import { useState } from "react"
import { isTemplateSpan } from "typescript";

export default function AddItem() {


    const [item, setItem] = useState(initialData);
    const [add, setAdd] = useState("");

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

    return <>
        <input value={add} type="text" placeholder="Add task" onChange={e => setAdd(e.target.value)} />
        <button onClick={handleAddTask}>Add</button>
        <h1>List of Items added---</h1>
        <ul>
            {
                item.map((i) => {
                    return <li key={i.id}>{i.text}</li>
                })
            }
        </ul>
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