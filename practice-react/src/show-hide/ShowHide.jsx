import { useState } from "react"

export default function ShowHide() {

    const [show, setShow] = useState(false);

    return <>
        {
            show && <p>Ima state derived predictable value from React.</p>
        }
        <button onClick={() => setShow(prevShow => !prevShow)}>{show ? "Hide" : "Show"}</button>
    </>
}