import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  DARK_MODE_DISABLED,
  DARK_MODE_ENABLED,
  getSystemDarkModePreference,
} from "../constants/constants";
import DarkModeContext from "./DarkModeContext";

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    // Check the saved mode and apply it directly
    if (savedMode === DARK_MODE_ENABLED) {
      setDarkMode(true);
    } else if (savedMode === DARK_MODE_DISABLED) {
      setDarkMode(false);
    } else {
      // Apply system preference if no saved preference is found
      if (getSystemDarkModePreference) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
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

  // Apply the dark mode class immediately before rendering the content
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

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
