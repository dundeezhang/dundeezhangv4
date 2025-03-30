import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GridContainer = styled.div<{ isDarkMode: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#1a1a1a" : "white")};
    overflow: hidden;
    z-index: -100;
`;

const GridOverlay = styled.div<{ x: number; y: number; isDarkMode: boolean }>`
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-image: ${({ isDarkMode }) =>
        isDarkMode
            ? "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)"
            : "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)"};
    background-size: 25px 25px;
    pointer-events: none;
    transform: ${({ x, y }) => `translate(${-x / 80}px, ${-y / 80}px)`};
`;

const GlassBackground = styled.div<{ isDarkMode: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ isDarkMode }) =>
        isDarkMode ? "rgba(18, 18, 18, 0.5)" : "rgba(255, 255, 255, 0.2)"};
    backdrop-filter: blur(1px); /* Background blur */
    -webkit-backdrop-filter: blur(1px); /* For Safari */
    border: 1px solid
        ${({ isDarkMode }) =>
            isDarkMode
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(255, 255, 255, 0.3)"};
    padding: 1rem; /* Padding inside the element */
    box-shadow: 0 0 6px
        ${({ isDarkMode }) =>
            isDarkMode ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.1)"};
    z-index: -99;
`;

const Grid: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Detect system dark mode preference
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
            const { beta, gamma } = event; // Beta: front-back tilt, Gamma: left-right tilt
            if (beta !== null && gamma !== null) {
                setMousePosition({
                    x: gamma * 10, // Scale gamma for horizontal movement
                    y: beta * 10, // Scale beta for vertical movement
                });
            }
        };

        if (window.innerWidth <= 768) {
            // Use device orientation for mobile devices
            window.addEventListener(
                "deviceorientation",
                handleDeviceOrientation
            );
        } else {
            // Use mouse movement for desktop devices
            window.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener(
                "deviceorientation",
                handleDeviceOrientation
            );
        };
    }, []);

    return (
        <>
            <GridContainer isDarkMode={isDarkMode}>
                <GridOverlay
                    x={mousePosition.x}
                    y={mousePosition.y}
                    isDarkMode={isDarkMode}
                />
            </GridContainer>
            <GlassBackground isDarkMode={isDarkMode} />
            <ul className="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    );
};

export default Grid;
