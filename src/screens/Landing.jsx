import { useState } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { Home } from "../components/Home";

export const Landing = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("home");

  return (
    <>
      <div className="relative flex flex-col w-full !select-none bg-fixed bg-cream dark:bg-gray">
        <Header
          selectedNavItem={selectedNavItem}
          setSelectedNavItem={setSelectedNavItem}
        />
        <nav className="flex mt-20 lg:hidden flex-row self-center justify-evenly p-[2px] w-[calc(100%-40px)] mb-3 bg-cream dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl shadow-sm">
          <div
            className={`flex font-light text-2xl px-5 py-1 cursor-pointer w-full justify-center items-center rounded-2xl ${
              selectedNavItem === "home"
                ? "text-accent-light font-medium dark:text-accent-dark bg-accent-light/10 dark:bg-accent-dark/10"
                : "dark:text-cream text-gray"
            }`}
            onClick={() => setSelectedNavItem("home")}
          >
            Home
          </div>
          <div
            className={`flex font-light text-2xl px-5 py-1 cursor-pointer w-full justify-center items-center rounded-2xl ${
              selectedNavItem !== "home"
                ? "text-accent-light font-medium dark:text-accent-dark bg-accent-light/10 dark:bg-accent-dark/10"
                : "dark:text-cream text-gray"
            }`}
            onClick={() => setSelectedNavItem("about")}
          >
            About
          </div>
        </nav>
        <div className="flex lg:overflow-x-visible overflow-x-hidden flex-col lg:flex-row px-5 lg:px-0 lg:mt-28 mb-10 gap-12 md:max-w-[768px] md:min-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-0 md:mx-auto">
          <div
            className={`lg:!sticky z-20 lg:top-[120px] md:min-w-[448px] xl:min-w-[556px] 2xl:min-w-[756px] lg:left-0 relative flex flex-col justify-end ${
              selectedNavItem === "about"
                ? `bg-uditPic bg-top`
                : `bg-bookThumbnail bg-center`
            } bg-no-repeat bg-cover shadow-md !rounded-2xl w-full h-[468px] md:h-[600px] xl:h-[724px] 2xl:h-[796px] border border-black/10 dark:border-white/10`}
          >
            <div className="absolute -bottom-8 md:-bottom-8 -left-[8px] md:-left-[16px] flex flex-col gap-2 w-[calc(100%+16px)] md:w-[calc(100%+32px)] h-auto z-10 bg-cream/[0.8] dark:bg-gray/[0.6] shadow-md backdrop-blur-md p-4 rounded-2xl will-change-transform transform-gpu border border-black/10 dark:border-white/5">
              <p className="font-poppins text-2xl font-medium tracking-wide text-accent-light dark:text-accent-dark w-[80%] z-10">
                {selectedNavItem === "about" ? "Namaste," : "Terror 2016"}
              </p>
              <p className="font-poppins text-md font-light tracking-wide text-black dark:text-white w-full z-10">
                {selectedNavItem === "about"
                  ? "From Code to Chronicles – My Journey"
                  : "Inspired by the Pathankot airbase attack"}
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-12 m-0 mt-3 lg:mt-2 lg:min-w-[448px] xl:min-w-[556px] 2xl:min-w-[756px]">
            {selectedNavItem === "home" ? <Home /> : <About />}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
