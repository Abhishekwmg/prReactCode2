import { useRef, useState } from "react"

export default function RefStopwatch() {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const [pause, setPause] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const intervalTimer = useRef(null);

    let timePassed = 0;

    if (now !== null && startTime !== null) {
        timePassed = (now - startTime) / 1000
    }

    function handleStartTimer() {
        setIsTimerActive(true);
        setStartTime(Date.now());
        setNow(Date.now())

        if (pause !== 0) setNow(pause)

        clearInterval(null);

        intervalTimer.current = setInterval(() => {
            setNow(Date.now());
        }, 10)
    }

    function handleStopTime() {
        clearInterval(intervalTimer.current)
        setNow(null)
        setStartTime(null)
    }

    function handleTimerPause() {
        setIsTimerActive(false);
        clearInterval(intervalTimer.current);
        setPause(timePassed)
        return;
    }

    return <>
        <h1>Timer: {isTimerActive ? timePassed : pause}</h1>
        {
            isTimerActive ? <button onClick={handleTimerPause}>Pause</button> : <button onClick={handleStartTimer}>Start</button>
        }
        <button onClick={handleStopTime}>Stop</button>
    </>
}