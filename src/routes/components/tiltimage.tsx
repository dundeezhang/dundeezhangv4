import { useState, useRef, useEffect } from "react";
import pfp from "../../img/specimenB.jpeg";
import quack from "../../img/quack.mp3";
import duck from "../../img/duck.png";

const TiltImage = () => {
    const [clickCount, setClickCount] = useState(0);
    const [imageSource, setImageSource] = useState(pfp);
    const [showCounter, setShowCounter] = useState(false);
    const [cps, setCps] = useState(0);
    const clickTimesRef = useRef<number[]>([]);
    const [isDuck, setIsDuck] = useState(false);
    const [isPulsing, setIsPulsing] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);

    const playQuack = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
        setClickCount((prevCount) => prevCount + 1);

        // Track click times
        clickTimesRef.current = [...clickTimesRef.current, Date.now()];

        // Trigger pulse animation
        setIsPulsing(true);
        setTimeout(() => {
            setIsPulsing(false);
        }, 200);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = Date.now();
            const lastSecondClicks = clickTimesRef.current.filter(
                (time) => time > now - 1000
            );
            setCps(lastSecondClicks.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (clickCount >= 3) {
            setImageSource(duck);
            setShowCounter(true);
            setIsDuck(true);
        }
    }, [clickCount]);

    return (
        <div>
            <img
                src={imageSource}
                alt="Profile"
                className={`about-me-profile ${isPulsing ? "pulse" : ""}`}
                style={{
                    height: "auto",
                    borderRadius: isDuck ? "0" : "50%",
                }}
                onClick={playQuack}
            />
            <audio ref={audioRef} src={quack} preload="auto" />
            {showCounter && (
                <>
                    <p>Clicks: {clickCount}</p>
                    <p>CPS: {cps}</p>
                </>
            )}
        </div>
    );
};

export default TiltImage;
