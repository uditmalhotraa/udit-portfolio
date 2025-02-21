import { useContext } from "react";
import DarkModeContext from "../contexts/DarkModeContext";
import LightModeIcon from "../assets/LightModeIcon";
import DarkModeIcon from "../assets/DarkModeIcon";

export const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    setDarkMode();
  };

  return (
    <>
      <div className="fixed flex flex-row justify-between items-center w-full h-16 px-4 shadow-container bg-cream/40 dark:bg-gray/40 backdrop-blur-lg z-20 border-b border-[#808080]">
        <a
          href="/"
          className=" font-poppins text-3xl font-semibold tracking-wider text-accent-light dark:text-accent-dark dark:text-accent-dark-dark"
        >
          Udit<span className="ml-[2px] font-thin">Malhotra</span>
        </a>
        <div className="cursor-pointer" onClick={handleClick}>
          {darkMode ? (
            <LightModeIcon className="h-[30px] w-[30px] !stroke-accent-dark" />
          ) : (
            <DarkModeIcon className="h-[30px] w-[30px] !fill-accent-light" />
          )}
        </div>
      </div>
    </>
  );
};
