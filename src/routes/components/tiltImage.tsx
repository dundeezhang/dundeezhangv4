import React, { useState, useRef, useEffect } from "react";
import pfp from "../../img/specimenB.jpeg";
import quack from "../../img/quack.mp3";
import duck from "../../img/duck.png";

const TiltImage = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [hoverCount, setHoverCount] = useState(0);
    const [imageSource, setImageSource] = useState(pfp);

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
            audioRef.current.play();
        }
        setHoverCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        if (hoverCount >= 4) {
            setImageSource(duck);
        }
    }, [hoverCount]);

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
                style={{ height: "auto" }}
                className="about-me-profile"
                onMouseEnter={playQuack}
            />
            <audio ref={audioRef} src={quack} preload="auto" />
        </div>
    );
};

export default TiltImage;
