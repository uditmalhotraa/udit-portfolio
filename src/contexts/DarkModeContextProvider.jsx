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
    if (savedMode === DARK_MODE_ENABLED) {
      setDarkMode(true);
    } else if (savedMode !== DARK_MODE_ENABLED) {
      setDarkMode(false);
    } else {
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
