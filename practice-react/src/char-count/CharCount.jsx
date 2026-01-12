import { useState } from "react"

export default function CharCount() {

    const [input, setInput] = useState("")

    return <>
        <h1>Character Counter</h1>
        <input type={input} onChange={(e) => setInput(e.target.value)} />
        <p>Char Count: <span style={input.length > 20 ? { color: "red" } : { color: "white" }}>{input.length}</span></p >
    </>
}