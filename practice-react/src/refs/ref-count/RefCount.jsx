import { useRef } from "react";

export default function RefCount() {

    let count = useRef(0);


    function handleRefCount() {
        count.current = count.current + 1
        alert(`You pressed the button ${count.current} times`);
    }

    return <button onClick={handleRefCount}>Click Me!</button>

}