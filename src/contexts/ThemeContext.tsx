import React, { useState, useEffect } from "react";
import { ThemeContext, Theme } from "./ThemeContextTypes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // check manual theme preference within last week
    const savedThemeData = localStorage.getItem("themeData");
    if (savedThemeData) {
      try {
        const { theme: savedTheme, timestamp } = JSON.parse(savedThemeData);
        const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

        if (timestamp > oneWeekAgo) {
          return savedTheme;
        } else {
          // remove expired preference
          localStorage.removeItem("themeData");
        }
      } catch {
        // invalid data, remove it
        localStorage.removeItem("themeData");
      }
    }

    // default to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      // save manual change with timestamp
      localStorage.setItem(
        "themeData",
        JSON.stringify({
          theme: newTheme,
          timestamp: Date.now(),
        }),
      );
      return newTheme;
    });
  };

  useEffect(() => {
    // apply theme to document root
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    // listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // only update if no recent manual preference
      const savedThemeData = localStorage.getItem("themeData");
      if (savedThemeData) {
        try {
          const { timestamp } = JSON.parse(savedThemeData);
          const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

          if (timestamp > oneWeekAgo) {
            // manual preference still valid, don't update
            return;
          } else {
            // preference expired, remove and follow system
            localStorage.removeItem("themeData");
          }
        } catch {
          // invalid data, remove it
          localStorage.removeItem("themeData");
        }
      }

      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
