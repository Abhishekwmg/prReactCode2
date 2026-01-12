import { useState } from "react"

export default function Combine() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const fullName = firstName + " " + lastName

    return <>
        <label>First Name: </label>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <label>Last Name: </label>
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
        <p>Hello, {fullName} </p>
    </>
}