import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "../../../hooks/useTheme";

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
      ? "linear-gradient(to right, #303030 1px, transparent 1px), linear-gradient(to bottom, #303030 1px, transparent 1px)"
      : "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)"};
  background-size: 35px 35px;
  pointer-events: none;
  transform: ${({ x, y }) => `translate(${-x / 75}px, ${-y / 75}px)`};

  @media (hover: none) and (pointer: coarse) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: none;
  }
`;

const GlassBackground = styled.div<{ isDarkMode: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ isDarkMode }) =>
    isDarkMode ? "rgba(18, 18, 18, 0.5)" : "rgba(255, 255, 255, 0.2)"};
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid
    ${({ isDarkMode }) =>
      isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.3)"};
  padding: 1rem;
  box-shadow: 0 0 6px
    ${({ isDarkMode }) =>
      isDarkMode ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.1)"};
  z-index: -99;
`;

const Grid: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    // Check if device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0,
      );
    };

    checkTouchDevice();

    const handleMouseMove = (event: MouseEvent) => {
      if (!isTouchDevice) {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
    };

    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isTouchDevice]);

  return (
    <>
      <GridContainer isDarkMode={isDarkMode}>
        <GridOverlay
          x={isTouchDevice ? 0 : mousePosition.x}
          y={isTouchDevice ? 0 : mousePosition.y}
          isDarkMode={isDarkMode}
        />
      </GridContainer>
      <GlassBackground isDarkMode={isDarkMode} />
    </>
  );
};

export default Grid;
