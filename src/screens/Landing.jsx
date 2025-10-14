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
        <Header />
        <div className="flex lg:overflow-x-visible overflow-x-hidden flex-col lg:flex-row px-5 md:px-0 mt-28 mb-10 gap-12 lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-0 lg:mx-auto">
          <div className="lg:!sticky z-20 lg:top-[120px] lg:min-w-[448px] xl:min-w-[556px] 2xl:min-w-[756px] lg:left-0 relative flex flex-col justify-end bg-uditPic bg-no-repeat bg-cover bg-top shadow-md !rounded-2xl w-full h-[468px] md:h-[600px] xl:h-[724px] 2xl:h-[796px] border border-black/10 dark:border-white/10 ">
            <div className="absolute -bottom-3 md:-bottom-4 -left-[8px] md:-left-[16px] flex flex-col gap-2 w-[calc(100%+16px)] md:w-[calc(100%+32px)] h-auto z-10 bg-gray/[0.025] dark:bg-cream/[0.025] shadow-md backdrop-blur-md p-4 rounded-2xl will-change-transform transform-gpu border border-black/10 dark:border-white/5">
              <p className=" font-poppins text-2xl font-medium tracking-wide text-white w-[80%] z-10">
                Namaste,
              </p>
              <p className=" font-poppins text-md font-light tracking-wide text-white w-full z-10">
                From Code to Chronicles – My Journey
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-12 m-0 lg:mt-2 lg:min-w-[448px] xl:min-w-[556px] 2xl:min-w-[756px]">
            <nav className="flex flex-row self-center justify-evenly p-[2px] w-full lg:w-[50%] bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl shadow-sm">
              <div
                className={`flex font-light text-[28px] px-5 py-3 cursor-pointer w-full justify-center items-center rounded-2xl ${
                  selectedNavItem === "home"
                    ? "text-accent-light font-medium dark:text-accent-dark bg-accent-light/10 dark:bg-accent-dark/20"
                    : "dark:text-cream text-gray"
                }`}
                onClick={() => setSelectedNavItem("home")}
              >
                Home
              </div>
              <div
                className={`flex font-light text-[28px] px-5 py-3 cursor-pointer w-full justify-center items-center rounded-2xl ${
                  selectedNavItem !== "home"
                    ? "text-accent-light font-medium dark:text-accent-dark bg-accent-light/10 dark:bg-accent-dark/20"
                    : "dark:text-cream text-gray"
                }`}
                onClick={() => setSelectedNavItem("about")}
              >
                About
              </div>
            </nav>
            {selectedNavItem === "home" ? <Home /> : <About />}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
