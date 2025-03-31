import { useState, useRef, useEffect } from "react";
import pfp from "../../img/specimenB.jpeg";
import quack from "../../img/quack.mp3";
import duck from "../../img/duck.png";

const TiltImage = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [clickCount, setClickCount] = useState(0);
    const [imageSource, setImageSource] = useState(pfp);
    const [showCounter, setShowCounter] = useState(false);
    const [cps, setCps] = useState(0);
    const clickTimesRef = useRef<number[]>([]);
    const [isDuck, setIsDuck] = useState(false);
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!imageRef.current) return;

            const rect = imageRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const width = rect.width;
            const height = rect.height;

            const rotateX = -(y - height / 2) / 40;
            const rotateY = (x - width / 2) / 40;

            setRotation({ x: rotateX, y: rotateY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

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
        }, 200); // Adjust the duration of the pulse effect (in milliseconds)
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Filter out clicks older than 1 second
            const now = Date.now();
            const lastSecondClicks = clickTimesRef.current.filter(
                (time) => time > now - 1000
            );

            // Update CPS
            setCps(lastSecondClicks.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (clickCount >= 5) {
            setImageSource(duck);
            setShowCounter(true);
            setIsDuck(true);
        }
    }, [clickCount]);

    return (
        <div
            className="tilt-image-container"
            ref={imageRef}
            style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: "preserve-3d",
            }}
        >
            <img
                src={imageSource}
                alt="Profile"
                style={{
                    height: "auto",
                    borderRadius: isDuck ? "0" : "50%",
                }}
                className={`about-me-profile ${isPulsing ? "pulse" : ""}`}
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
