import { useState } from "react"

export default function Form() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setIsloggedIn] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (email !== "" && password !== "") {
            setIsloggedIn(true);
            setError("")
        } else {
            setError("Input Fields must not be empty")
        }
    }

    return <form>
        {isLoggedIn ? <h1>Logged In</h1> : <>
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
            <button type="submit" onClick={handleSubmit}>Submit</button></>}
        <p style={{ color: "red" }}>{error}</p>
    </form>
}