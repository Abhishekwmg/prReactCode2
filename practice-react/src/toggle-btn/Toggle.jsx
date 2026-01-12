import { useState } from "react"

export default function Toggle() {

    const [toggle, setToggle] = useState(false);

    return <button onClick={() => setToggle((prevToggle) => !prevToggle)}>{toggle ? "Off" : "On"}</button>
}