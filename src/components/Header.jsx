/* eslint-disable react/prop-types */
import { useContext } from "react";
import DarkModeContext from "../contexts/DarkModeContext";
import LightModeIcon from "../assets/LightModeIcon";
import DarkModeIcon from "../assets/DarkModeIcon";

export const Header = ({ selectedNavItem, setSelectedNavItem }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    setDarkMode();
  };

  return (
    <>
      <div className="z-50 fixed flex flex-row justify-between items-center w-full h-16 px-4 shadow-md bg-gray/[0.005] dark:bg-cream/[0.005] backdrop-blur-sm border-b border-black/10 dark:border-white/10 rounded-b-[25px]">
        <a
          href="/"
          className="font-poppins text-3xl font-semibold tracking-wider text-accent-light dark:text-accent-dark dark:text-accent-dark-dark"
        >
          Udit<span className="ml-[2px] font-thin">Malhotra</span>
        </a>
        <div className="flex flex-row items-center justify-end gap-x-6">
          <nav className="hidden lg:flex flex-row justify-end items-center gap-x-6">
            <p
              onClick={() => setSelectedNavItem("home")}
              className={`cursor-pointer text-lg ${
                selectedNavItem === "home"
                  ? "text-accent-light dark:text-accent-dark"
                  : "dark:text-cream text-gray"
              }`}
            >
              Home
            </p>
            <p
              onClick={() => setSelectedNavItem("about")}
              className={`cursor-pointer text-lg ${
                selectedNavItem === "about"
                  ? "text-accent-light dark:text-accent-dark"
                  : "dark:text-cream text-gray"
              }`}
            >
              About
            </p>
          </nav>
          <div className="cursor-pointer" onClick={handleClick}>
            {darkMode ? (
              <LightModeIcon className="h-[30px] w-[30px] !stroke-accent-dark" />
            ) : (
              <DarkModeIcon className="h-[30px] w-[30px] !fill-accent-light" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
