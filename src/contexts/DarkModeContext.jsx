import { createContext } from "react";

const darkModeInitialValue = () => {
  return {
    darkMode: true,
    toggleDarkMode: () => {},
  };
};

const DarkModeContext = createContext(darkModeInitialValue());

export default DarkModeContext;
