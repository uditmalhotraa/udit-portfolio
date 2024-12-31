import { createContext } from "react";

const darkModeInitialValue = () => {
  return {
    darkMode: false,
    toggleDarkMode: () => {},
  };
};

const DarkModeContext = createContext(darkModeInitialValue());

export default DarkModeContext;
