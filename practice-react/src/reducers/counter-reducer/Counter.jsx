import { useReducer } from "react";
import { countReducer } from "./countReducer";
import { ACTIONS } from './actions'

export default function Counter() {

    const [count, dispatch] = useReducer(countReducer, 0);

    return <>
        <h1>Counter using useReducer</h1>
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
        <p>{count}</p>
        <button disabled={count === 0} onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
        <button disabled={count === 0} onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
    </>;
}