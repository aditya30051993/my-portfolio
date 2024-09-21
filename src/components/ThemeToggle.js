import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light-mode");

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme =
      localStorage.getItem("theme") ||
      (prefersDarkScheme ? "dark-mode" : "light-mode");
    setTheme(savedTheme);
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {theme === "light-mode" ? (
        <FaMoon className="icon moon" />
      ) : (
        <FaSun className="icon sun" />
      )}
    </div>
  );
};

export default ThemeToggle;
