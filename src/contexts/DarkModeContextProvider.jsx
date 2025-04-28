import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DARK_MODE_ENABLED, DARK_MODE_DISABLED } from "../constants/constants";
import DarkModeContext from "./DarkModeContext";

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(null); // Start with null to prevent flicker

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === DARK_MODE_ENABLED) {
      setDarkMode(true);
    } else if (savedMode === DARK_MODE_DISABLED) {
      setDarkMode(false);
    } else {
      // If no saved mode, set dark mode based on system preference
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    if (darkMode === null) return; // Don't apply anything until darkMode is determined

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", DARK_MODE_ENABLED);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", DARK_MODE_DISABLED);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider
      value={{ darkMode: darkMode, setDarkMode: toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
