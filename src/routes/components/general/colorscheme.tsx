import React, { useState, useEffect } from "react";

const ThemeToggleButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isDarkMode) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };

      // Set initial theme to match current browser preference
      setIsDarkMode(mediaQuery.matches);

      mediaQuery.addEventListener("change", handleSystemThemeChange);

      return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      };
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggleButton;
