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
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
    </>
  );
};

export default Grid;
