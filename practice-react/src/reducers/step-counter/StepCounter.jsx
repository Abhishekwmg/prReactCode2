import { useState, useReducer } from "react";
import { ACTIONS } from "./action.js";
import { stepReducer } from "./stepReducer.js";


export default function StepCounter() {
    const [step, dispatch] = useReducer(stepReducer, 0)
    // const [step, setStep] = useState(0);
    const [count, setCount] = useState(step);

    return (
        <>
            <h1>Step Counter</h1>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
                +
            </button>
            <p aria-live="polite">{count}</p>
            <button
                disabled={count === 0}
                onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
            >
                -
            </button>
            <button onClick={() => dispatch({ type: ACTIONS.STEP })}>
                Step {step}
            </button>
            <button
                onClick={() => {
                    dispatch({ type: ACTIONS.RESET })
                }}
            >
                Reset
            </button>
        </>
    );
}
