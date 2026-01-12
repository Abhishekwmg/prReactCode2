import { useState } from "react"

export default function Undo() {

    const [data, setData] = useState(initialData)
    const [edit, setEdit] = useState(null);
    const [saveInput, setSaveInput] = useState("");
    const [prevData, setPrevData] = useState(null);

    //old Abhishek New Abhi so the undo would have to save old value which is Abhi

    function handleEdit(d) {
        setEdit(d.id);
        setSaveInput(d.name)
    }

    function handleSave(d) {
        setPrevData(data);
        setData(data.map(da => {
            return da.id === d.id ? { ...da, name: saveInput } : da
        }))
        setEdit(null);
        setSaveInput("");
    }

    function handleUndo() {
        if (!prevData) return;
        setData(prevData);
        setPrevData(null);
    }

    return <ul>
        {
            data.map((d) => {
                return <div key={d.id}>
                    {
                        edit === d.id ?
                            <input value={saveInput} onChange={(e) => setSaveInput(e.target.value)} type="text" /> :
                            <li>{d.name}</li>
                    }
                    <button onClick={() => handleEdit(d)}>Edit</button>
                    <button onClick={() => handleSave(d)}>Save</button>
                    <button onClick={handleUndo}>Undo</button>
                </div>
            })
        }
    </ul>
}

const initialData = [
    {
        id: 1,
        name: "Abhishek"
    },
    {
        id: 2,
        name: "Neha"
    },
    {
        id: 3,
        name: "Avyukt"
    },
]