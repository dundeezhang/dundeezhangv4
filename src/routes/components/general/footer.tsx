import { useTheme } from "../../../hooks/useTheme";
import { useState, useEffect } from "react";

export default function Footer() {
  const currYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour12: false,
      timeZone: "America/Toronto",
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "America/Toronto",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <footer className="app-footer">
        <p className="footer-text">
          {currYear} Dundee Hu Zhang. All Rights Reserved.
        </p>
        <p className="footer-text">Love from Toronto, ON, Canada.</p>
        <p className="footer-text">Current local time is {currentTime}.</p>

        <br />

        <p className="footer-text">+1 905 955 2688</p>
        <p className="footer-text">contact@dundeezha.ng</p>

        <br />
        <p className="footer-text theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "Toggle Dark Theme" : "Toggle Light Theme"}
        </p>
      </footer>
    </div>
  );
}
