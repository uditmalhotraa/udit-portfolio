/* eslint-disable react/prop-types */
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
      <div className="z-50 fixed flex flex-row justify-between items-center w-[calc(100%-2rem)] mt-4 h-16 px-4 mx-4 shadow-sm bg-panel dark:bg-panel-dark backdrop-blur-md border border-rule dark:border-rule-dark rounded-[16px]">
        <a
          href="/"
          className="font-display uppercase tracking-display text-3xl font-extrabold tracking-wider text-field dark:text-field-dark"
        >
          Udit<span className="ml-[2px] font-ultrathin"> Malhotra</span>
        </a>
        <div className="cursor-pointer" onClick={handleClick}>
          {darkMode ? (
            <LightModeIcon className="h-[30px] w-[30px] stroke-field-dark" />
          ) : (
            <DarkModeIcon className="h-[30px] w-[30px] stroke-field" />
          )}
        </div>
      </div>
    </>
  );
};
