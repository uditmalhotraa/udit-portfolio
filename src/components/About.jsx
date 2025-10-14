import { useState } from "react";

import Chip from "./Chip";
import education from "../data/education.json";
import work from "../data/work.json";
import interest from "../data/interest.json";
import projects from "../data/projects.json";
import SpendaLogoDarkMode from "../assets/SpendaLogoDarkMode";
import IQVIALogoDarkMode from "../assets/IQVIALogoDarkMode";
import SpendaLogoLightMode from "../assets/SpendaLogoLightMode";
import IQVIALogoLightMode from "../assets/IQVIALogoLightMode";
import EscapekarLogoDarkMode from "../assets/EscapekarLogoDarkMode";
import EscapekarLogoLightMode from "../assets/EscapekarLogoLightMode";
import ArrowRightIcon from "../assets/ArrowRightIcon";

export const About = () => {
  const [educationData] = useState(education);
  const [workData] = useState(work);
  const [interestData] = useState(interest);
  const [projectsData] = useState(projects);

  const getProjectLogo = (projectName) => {
    switch (projectName) {
      case "Spenda":
        return (
          <>
            <SpendaLogoDarkMode className="w-[200px] h-auto hidden dark:block" />
            <SpendaLogoLightMode className="w-[200px] h-auto dark:hidden block" />
          </>
        );
      case "IQVIA":
        return (
          <>
            <IQVIALogoDarkMode className="w-[200px] h-auto hidden dark:block" />
            <IQVIALogoLightMode className="w-[200px] h-auto dark:hidden block" />
          </>
        );
      case "Escapekar":
        return (
          <>
            <EscapekarLogoDarkMode className="w-[200px] h-auto hidden dark:block" />
            <EscapekarLogoLightMode className="w-[200px] h-auto dark:hidden block" />
          </>
        );
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col w-full gap-12">
        <div className="z-10 flex flex-col px-4 rounded-2xl w-full h-auto border shadow-md border-black/10 dark:border-white/20 backdrop-blur-sm bg-white dark:bg-black will-change-transform transform-gpu">
          <div className="flex flex-row mb-4 pt-4 gap-3 items-center ">
            <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
              Education
            </p>
          </div>
          <div className="flex flex-col">
            {educationData.map((educationData, index, array) => {
              const isLast = index === array.length - 1;
              return (
                <div
                  key={educationData.educationIndex}
                  className={`flex flex-col border border-cream/30 dark:border-gray/30 pt-3 pb-4 ${
                    isLast
                      ? "!rounded-b-2xl"
                      : "rounded-b-none border-b-accent-light dark:border-b-accent-dark"
                  }`}
                >
                  <div className="flex flex-row justify-between items-center w-full">
                    <a
                      className="font-poppins group inline-flex gap-[6px] items-center text-xl w-fit font-medium text-black dark:text-white hover:text-accent-light dark:hover:text-accent-dark"
                      href={educationData.educationWebsite}
                    >
                      {educationData.name}
                      <ArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-1 fill-black dark:fill-white group-hover:fill-accent-light dark:group-hover:fill-accent-dark" />
                    </a>

                    <p className=" font-poppins tracking-wider text-base font-light text-black dark:text-white italic">
                      Tenure: {educationData?.tenure}
                    </p>
                  </div>
                  {educationData?.detail.map((educationDataDetail) => (
                    <div
                      key={educationDataDetail.detailIndex}
                      className="flex flex-row justify-between items-start w-full mt-4"
                    >
                      <p className=" block md:hidden font-poppins tracking-wider text-base font-normal text-black dark:text-white mr-3">
                        {educationDataDetail?.shortCertificate}
                      </p>
                      <p className=" md:block hidden font-poppins tracking-wider text-base font-normal text-black dark:text-white mr-3">
                        {educationDataDetail?.fullCertificate}
                      </p>
                      <p className=" font-poppins tracking-wider text-base font-light text-black dark:text-white italic">
                        {educationDataDetail?.year}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col shadow-md px-4 rounded-2xl w-full h-auto border border-black/10 dark:border-white/20 backdrop-blur-sm bg-white dark:bg-black will-change-transform transform-gpu">
          <div className="flex flex-row mb-4 pt-4 gap-3 items-center">
            <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
              Work
            </p>
          </div>
          <div className="flex flex-col">
            {workData.map((workData, index, array) => {
              const isLast = index === array.length - 1;
              return (
                <div
                  key={workData.workIndex}
                  className={`flex flex-col border border-cream/30 dark:border-gray/30 pt-3 bg-black/0 pb-4 ${
                    isLast
                      ? "!rounded-b-2xl"
                      : "rounded-b-none border-b-accent-light dark:border-b-accent-dark"
                  }`}
                >
                  <div className="flex flex-row justify-between items-center">
                    <a
                      className="font-poppins group inline-flex gap-[6px] items-center w-fit mb-3 text-xl font-medium text-black dark:text-white hover:text-accent-light dark:hover:text-accent-dark"
                      href={workData.companyWebsite}
                    >
                      {workData.companyName}
                      <ArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-1 fill-black dark:fill-white group-hover:fill-accent-light dark:group-hover:fill-accent-dark" />
                    </a>
                    <p className=" font-poppins tracking-wider text-base font-light text-black dark:text-white italic">
                      Tenure: {workData.tenure}
                    </p>
                  </div>
                  {workData.roleDetail.map((roleDetail) => (
                    <div
                      key={roleDetail.roleIndex}
                      className="flex flex-row justify-between items-center w-full mt-3"
                    >
                      <p className=" block md:hidden font-poppins tracking-wider text-base font-normal text-black dark:text-white">
                        {roleDetail.shortName}
                      </p>
                      <p className=" hidden md:block font-poppins tracking-wider text-base font-normal text-black dark:text-white">
                        {roleDetail.fullName}
                      </p>
                      <p className=" font-poppins tracking-wider text-base font-light text-black dark:text-white italic">
                        {roleDetail.period}
                      </p>
                    </div>
                  ))}
                  <div className="flex flex-row w-full gap-2 flex-wrap mt-7">
                    {workData.tech.map((techDetail) => (
                      <Chip
                        key={techDetail.techIndex}
                        type={
                          techDetail.category === "primary"
                            ? "filled"
                            : "outlined"
                        }
                        text={techDetail.name}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col bg-gray/[0.015] dark:bg-cream/[0.015] rounded-2xl">
          <div className="flex flex-row gap-3 bg-white dark:bg-black items-center rounded-2xl backdrop-blur-sm mb-4 w-full h-auto p-4 border border-b-0 z-10 border-black/10 dark:border-white/20 shadow-md will-change-transform transform-gpu">
            <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
              Projects
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            {projectsData.map((projectsData) => (
              <div
                key={projectsData.projectIndex}
                className="flex flex-col backdrop-blur-8px md:flex-row gap-x-0 md:gap-y-0 shadow-md gap-y-4 rounded-2xl w-full h-auto border border-black/10 dark:border-white/20 z-10 bg-white dark:bg-black will-change-transform transform-gpu"
              >
                <div
                  className={`${
                    projectsData.projectIndex % 2 === 0
                      ? "md:order-first rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none rounded-l-none md:rounded-l-2xl"
                      : "md:order-last rounded-tl-2xl rounded-tr-2xl md:rounded-tl-none rounded-r-none md:rounded-r-2xl"
                  } flex justify-center items-center order-first w-full md:w-[50%] border-b md:border-b-none md:border-l border-l-none border-cream/10 dark:border-gray/10 bg-darkgray dark:bg-cream h-[256px] md:h-[300px]`}
                >
                  {getProjectLogo(projectsData.name)}
                </div>
                <div className="pb-4 md:pb-0 px-4 pt-0 md:pt-4 w-full h-[246px] md:h-[300px] md:w-[50%]">
                  <div className="flex flex-col mb-5 gap-5 h-[180px] md:h-[220px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <a
                        className="font-poppins group inline-flex items-center gap-[6px] text-xl w-fit font-medium text-black dark:text-white hover:text-accent-light dark:hover:text-accent-dark"
                        href={projectsData.projectWebsite}
                      >
                        {projectsData.name}
                        <ArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-1 fill-black dark:fill-white group-hover:fill-accent-light dark:group-hover:fill-accent-dark" />
                      </a>
                      <Chip type="filled" text={`${projectsData.area}`} />
                    </div>
                    <p className="font-poppins text-base font-light leading-6 text-black dark:text-white">
                      {projectsData.desc}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className="font-poppins text-base font-light text-black dark:text-white">
                      Role:{" "}
                      <span className="font-medium tracking-wider">
                        {projectsData.role}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col shadow-md rounded-2xl px-4 w-full h-auto border border-black/10 dark:border-white/20 backdrop-blur-sm bg-white dark:bg-black will-change-transform transform-gpu">
          <div className="flex flex-row items-center mb-4 pt-4 gap-3">
            <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
              Interests
            </p>
          </div>
          <div className="flex flex-col">
            {interestData.map((interestData, index, array) => {
              const isLast = index === array.length - 1;
              return (
                <div
                  key={interestData.interestIndex}
                  className={`flex flex-col pt-3 bg-black/0 pb-4 ${
                    isLast
                      ? "!rounded-b-2xl"
                      : "rounded-b-none border-b border-b-gray/30 dark:border-b-cream/30"
                  }`}
                >
                  <p className=" font-poppins text-base font-normal text-black dark:text-white">
                    {interestData.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
};
