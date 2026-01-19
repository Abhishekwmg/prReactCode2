import { useRef, useState } from "react"

export default function Refvideo() {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    function handlePlayPause() {
        setIsPlaying(prevState => !prevState)

        if (!isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    }

    return <>
        <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
        <video ref={videoRef} width="250px">
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        </video>
    </>
}