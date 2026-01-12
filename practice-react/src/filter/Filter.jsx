import { useState } from "react";

export default function Filter() {

    const [query, setQuery] = useState("");


    const result = items.filter(i => i.name.toLowerCase().includes(query.toLowerCase()))

    return <>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <ul>
            {result.map(i => {
                return <li key={i.id}>{i.name}</li>
            })}
        </ul>
    </>
}


const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
    { id: 5, name: "Pineapple" },
    { id: 6, name: "Strawberry" },
    { id: 7, name: "Blueberry" },
    { id: 8, name: "Watermelon" },
    { id: 9, name: "Grapes" },
    { id: 10, name: "Peach" },
    { id: 11, name: "Cherry" },
    { id: 12, name: "Kiwi" },
    { id: 13, name: "Papaya" },
    { id: 14, name: "Lemon" },
    { id: 15, name: "Avocado" },
];
