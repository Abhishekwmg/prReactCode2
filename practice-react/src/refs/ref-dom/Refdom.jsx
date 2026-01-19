import { useRef } from "react"

export default function Refdom() {

    let inputRef = useRef(null);

    return <>
        <input ref={inputRef} type="text" />
        <button onClick={() => inputRef.current.focus()}>Focus the Input</button>
    </>

}