import { useState } from "react"

export default function Input() {

    const [input, setInput] = useState("")

    return <>
        <input type={input} onChange={e => setInput(e.target.value)} />
        <p>You typed: {input} </p>
    </>
}