import { useState } from "react"

export default function Highlight() {

    // const [item, setItem] = useState(initialData);
    const [selectedId, setSelectedID] = useState(null)

    return <ul>
        {initialData.map((i) => {
            return <li key={i.id} onClick={() => setSelectedID(i.id)} >{selectedId === i.id ? <span style={{ border: "1px solid purple", fontWeight: "bold" }}>{i.text}</span> : <span>{i.text}</span>}</li>
        })}
    </ul>
}

const initialData = [
    {
        id: 1,
        text: "Hello, world!"
    },
    {
        id: 2,
        text: "Hello, Japan!"
    }, {
        id: 3,
        text: "Hello, India!"
    }, {
        id: 4,
        text: "Hello, San Fransico!"
    },
]