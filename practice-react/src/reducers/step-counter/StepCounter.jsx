import { useReducer } from "react"
import { ACTIONS } from './action'
import { stepReducer } from "./stepReducer";

export default function StepCounter() {

    const initialState = {
        count: 0,
        step: 2
    }

    const [{ count, step }, dispatch] = useReducer(stepReducer, initialState)

    function handleIncrement() {
        dispatch({ type: ACTIONS.INCREMENT })
    }

    function handleDecrement() {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    function handleStep() {
        dispatch({ type: ACTIONS.STEP })
    }

    return <>
        <h3>Step Counter</h3>
        <button onClick={handleIncrement}>+</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleStep}>Step: {step}</button>
    </>
}