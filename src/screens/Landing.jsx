import { useState } from "react";
import { Header } from "../components/Header";
import Instagram from "../assets/Instagram";
import Twitter from "../assets/Twitter";
import Spotify from "../assets/Spotify";
import Linkedin from "../assets/Linkedin";
import Chip from "../components/Chip";

import education from "../data/education.json";
import work from "../data/work.json";
import interest from "../data/interest.json";
import social from "../data/social.json";
import projects from "../data/projects.json";
import SpendaLogoDarkMode from "../assets/SpendaLogoDarkMode";
import IQVIALogoDarkMode from "../assets/IQVIALogoDarkMode";
import SpendaLogoLightMode from "../assets/SpendaLogoLightMode";
import IQVIALogoLightMode from "../assets/IQVIALogoLightMode";
import EscapekarLogoDarkMode from "../assets/EscapekarLogoDarkMode";
import EscapekarLogoLightMode from "../assets/EscapekarLogoLightMode";
import ArrowRightIcon from "../assets/ArrowRightIcon";

import { motion } from "framer-motion";
import EducationIcon from "../assets/EducationIcon";
import WorkIcon from "../assets/WorkIcon";
import ProjectsIcon from "../assets/ProjectsIcon";
import InterestIcon from "../assets/InterestIcon";

export const Landing = () => {
  const [educationData] = useState(education);
  const [workData] = useState(work);
  const [interestData] = useState(interest);
  const [socialData] = useState(social);
  const [projectsData] = useState(projects);

  const getSocialLogo = (socialName) => {
    switch (socialName) {
      case "Instagram":
        return (
          <Instagram className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />
        );
      case "Twitter":
        return (
          <Twitter className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />
        );
      case "Spotify":
        return (
          <Spotify className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />
        );
      case "Linkedin":
        return (
          <Linkedin className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />
        );
      default:
        break;
    }
  };

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
    <>
      <div className="relative  flex flex-col w-full !select-none bg-fixed bg-cream dark:bg-gray">
        <Header />
        <div className="flex lg:overflow-x-visible overflow-x-hidden flex-col lg:flex-row px-5 md:px-0 mt-28 mb-10 gap-12 lg:max-w-[1280px] xl:max-w-[1536px] 2xl:max-w-[1920px] mx-auto">
          <div className="lg:!sticky z-20 lg:top-[120px] lg:min-w-[448px] xl:min-w-[556px] 2xl:min-w-[756px] lg:left-0 relative flex flex-col justify-end bg-uditPic bg-no-repeat bg-cover bg-top shadow-md !rounded-2xl w-full h-[468px] md:h-[600px] xl:h-[724px] 2xl:h-[796px] border border-cream/30 dark:border-gray/30 ">
            <div className="absolute -bottom-3 md:-bottom-4 -left-[8px] md:-left-[16px] flex flex-col gap-2 w-[calc(100%+16px)] md:w-[calc(100%+32px)] h-auto z-10 bg-gray/[0.025] dark:bg-cream/[0.025] shadow-md backdrop-blur-md p-4 rounded-2xl will-change-transform transform-gpu">
              <p
                title="Greetings: I bow to you"
                className=" font-poppins text-2xl font-medium tracking-wide text-cream w-[80%] z-10"
              >
                Namaste,
              </p>
              <p className=" font-poppins text-md font-light tracking-wide text-cream w-full z-10">
                From Code to Chronicles – My Journey
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-12 lg:mt-2 lg:min-w-[448px] xl:min-w-[556px] 2xl:min-w-[756px]">
            <div className="setWrapper relative">
              <div className="objectSet">
                <div className="z-0 absolute top-10 -right-4 w-[150px] h-[150px] rounded-full border-2 border-accent-light/40 dark:border-accent-dark/40 bg-transparent"></div>
                <div className="z-0 absolute -top-2 left-10 w-[75px] h-[75px] rounded-full border-2 border-accent-light/40 dark:border-accent-dark/40 bg-transparent"></div>
                <div className="z-0 absolute -bottom-5 -left-20 lg:left-20 lg:-bottom-20 w-[200px] h-[200px] rounded-full border-2 border-accent-light/40 dark:border-accent-dark/40 bg-transparent"></div>
              </div>
              <div className="z-10 flex flex-col rounded-2xl w-full h-auto border shadow-md border-cream/30 dark:border-gray/30 backdrop-blur-sm bg-gray/[0.025] dark:bg-cream/[0.025] will-change-transform transform-gpu">
                <div className="flex flex-row mb-4 pt-4 px-4 gap-3 items-center">
                  <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
                    Education
                  </p>
                  <EducationIcon className="fill-accent-light dark:fill-accent-dark" />
                </div>
                <div className="flex flex-col">
                  {educationData.map((educationData, index, array) => {
                    const isLast = index === array.length - 1;
                    return (
                      <div
                        key={educationData.educationIndex}
                        className={`flex flex-col border-t border-cream/30 dark:border-gray/30 pt-3 dark:hover:bg-accent-dark/10 hover:bg-accent-light/10 px-4 pb-4 ${
                          isLast ? "!rounded-b-2xl" : "rounded-b-none"
                        }`}
                      >
                        <div className="flex flex-row justify-between items-center w-full">
                          <a
                            className="font-poppins group inline-flex gap-[6px] items-center text-xl w-fit font-medium text-darkgray dark:text-cream hover:text-accent-light dark:hover:text-accent-dark"
                            href={educationData.educationWebsite}
                          >
                            {educationData.name}
                            <ArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-1 fill-darkgray dark:fill-cream group-hover:fill-accent-light dark:group-hover:fill-accent-dark" />
                          </a>

                          <p className=" font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream italic">
                            <span className="font-light">Tenure:</span>{" "}
                            {educationData?.tenure}
                          </p>
                        </div>
                        {educationData?.detail.map((educationDataDetail) => (
                          <div
                            key={educationDataDetail.detailIndex}
                            className="flex flex-row justify-between items-start w-full mt-4"
                          >
                            <p className=" block md:hidden font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream mr-3">
                              {educationDataDetail?.shortCertificate}
                            </p>
                            <p className=" md:block hidden font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream mr-3">
                              {educationDataDetail?.fullCertificate}
                            </p>
                            <p className=" font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream italic">
                              {educationDataDetail?.year}
                            </p>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="setWrapper relative">
              <div className="objectSet">
                <div className="z-0 absolute top-10 lg:top-72 -left-4 w-[75px] h-[75px] rounded-full border-2 border-accent-light/40 dark:border-accent-dark/40 bg-transparent"></div>
                <div className="z-0 absolute -top-5 lg:top-5 -right-20 lg:right-0 w-[200px] h-[200px] rounded-full border-2 border-accent-light/40 dark:border-accent-dark/40 bg-transparent"></div>
                <div className="z-0 absolute -bottom-32 right-10 lg:right-52 w-[250px] h-[250px] rounded-full border-2 border-accent-light/40 dark:border-accent-dark/40 bg-transparent"></div>
              </div>
              <div className="flex flex-col shadow-md rounded-2xl w-full h-auto border border-cream/30 dark:border-gray/30 backdrop-blur-sm bg-gray/[0.025] dark:bg-cream/[0.025] will-change-transform transform-gpu">
                <div className="flex flex-row mb-4 pt-4 px-4 gap-3 items-center">
                  <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
                    Work
                  </p>
                  <WorkIcon className="stroke-accent-light dark:stroke-accent-dark" />
                </div>
                <div className="flex flex-col">
                  {workData.map((workData, index, array) => {
                    const isLast = index === array.length - 1;
                    return (
                      <div
                        key={workData.workIndex}
                        className={`flex flex-col border-t border-cream/30 dark:border-gray/30 pt-3 bg-black/0 dark:hover:bg-accent-dark/10 hover:bg-accent-light/10 pb-4 px-4 ${
                          isLast ? "!rounded-b-2xl" : "rounded-b-none"
                        }`}
                      >
                        <div className="flex flex-row justify-between items-center">
                          <a
                            className="font-poppins group inline-flex gap-[6px] items-center w-fit mb-3 text-xl font-medium text-darkgray dark:text-cream hover:text-accent-light dark:hover:text-accent-dark"
                            href={workData.companyWebsite}
                          >
                            {workData.companyName}
                            <ArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-1 fill-darkgray dark:fill-cream group-hover:fill-accent-light dark:group-hover:fill-accent-dark" />
                          </a>
                          <p className=" font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream italic">
                            <span className="font-light">Tenure:</span>{" "}
                            {workData.tenure}
                          </p>
                        </div>
                        {workData.roleDetail.map((roleDetail) => (
                          <div
                            key={roleDetail.roleIndex}
                            className="flex flex-row justify-between items-center w-full mt-3"
                          >
                            <p className=" block md:hidden font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream">
                              {roleDetail.shortName}
                            </p>
                            <p className=" hidden md:block font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream">
                              {roleDetail.fullName}
                            </p>
                            <p className=" font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream italic">
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
            </div>
            <div className="setWrapper relative">
              <div className="objectSet">
                <div className="z-0 absolute top-[32%] -left-4 w-[75px] h-[75px] rounded-full border-2 border-accent-light/40 dark:border-accent-dark/40 bg-transparent"></div>
                <div className="z-0 absolute top-72 -right-20 lg:-right-10 w-[200px] h-[200px] rounded-full border-2 border-accent-light/40 dark:border-accent-dark/40 bg-transparent"></div>
                <div className="z-0 absolute bottom-96 lg:bottom-52 right-32 lg:right-72 w-[100px] h-[100px] rounded-full border-2 border-accent-light/40 dark:border-accent-dark/40 bg-transparent"></div>
                <div className="z-0 absolute -bottom-32 -left-32 w-[250px] h-[250px] rounded-full border-2 border-accent-light/40 dark:border-accent-dark/40 bg-transparent"></div>
              </div>
              <div className="flex flex-col bg-gray/[0.015] dark:bg-cream/[0.015] rounded-2xl">
                <div className="flex flex-row gap-3 bg-gray/[0.02] dark:bg-cream/[0.02] items-center rounded-2xl backdrop-blur-sm mb-3 w-full h-auto p-4 border border-b-0 z-10 border-cream/30 dark:border-gray/30 shadow-md will-change-transform transform-gpu">
                  <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
                    Projects
                  </p>
                  <ProjectsIcon className="stroke-accent-light dark:stroke-accent-dark" />
                </div>
                <div className="flex flex-col gap-y-8">
                  {projectsData.map((projectsData) => (
                    <div
                      key={projectsData.projectIndex}
                      className="flex flex-col backdrop-blur-8px md:flex-row gap-x-0 md:gap-y-0 shadow-md gap-y-4 rounded-2xl w-full h-auto border border-cream/30 dark:border-gray/30 z-10 bg-gray/[0.01] dark:bg-cream/[0.01] dark:hover:bg-accent-dark/10 hover:bg-accent-light/10 will-change-transform transform-gpu"
                    >
                      <div
                        className={`${
                          projectsData.projectIndex % 2 === 0
                            ? "md:order-first rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none rounded-l-none md:rounded-l-2xl"
                            : "md:order-last rounded-tl-2xl rounded-tr-2xl md:rounded-tl-none rounded-r-none md:rounded-r-2xl"
                        } flex justify-center items-center order-first w-full md:w-[50%] border-b md:border-b-none md:border-l border-l-none border-cream/10 dark:border-gray/10 bg-darkgray dark:bg-cream h-[256px]`}
                      >
                        {getProjectLogo(projectsData.name)}
                      </div>
                      <div className="pb-4 md:pb-0 px-4 pt-0 md:pt-4 w-full h-[190px] md:h-[256px] md:w-[50%]">
                        <div className="flex flex-col mb-5 gap-5 h-[130px] md:h-[180px]">
                          <div className="flex flex-row justify-between items-center w-full">
                            <a
                              className="font-poppins group inline-flex items-center gap-[6px] text-xl w-fit font-medium text-darkgray dark:text-cream hover:text-accent-light dark:hover:text-accent-dark"
                              href={projectsData.projectWebsite}
                            >
                              {projectsData.name}
                              <ArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-1 fill-darkgray dark:fill-cream group-hover:fill-accent-light dark:group-hover:fill-accent-dark" />
                            </a>
                            <Chip
                              type="outlined"
                              text={`${projectsData.area}`}
                            />
                          </div>
                          <p className="font-poppins tracking-wider text-base font-normal leading-6 text-darkgray dark:text-cream">
                            {projectsData.desc}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <p className="font-poppins text-base font-light text-darkgray dark:text-cream">
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
            </div>
            <div className="setWrapper relative">
              <div className="objectSet">
                <div className="z-0 absolute -bottom-32 -right-40 lg:right-0 w-[250px] h-[250px] rounded-full border-2 border-accent-light/40 dark:border-accent-dark/40 bg-transparent"></div>
              </div>
              <div className="flex flex-col shadow-md rounded-2xl w-full h-auto border border-cream/30 dark:border-gray/30 backdrop-blur-sm bg-gray/[0.025] dark:bg-cream/[0.025] will-change-transform transform-gpu">
                <div className="flex flex-row items-center mb-4 pt-4 px-4 gap-3">
                  <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
                    Interests
                  </p>
                  <InterestIcon className="fill-accent-light dark:fill-accent-dark mb-1" />
                </div>
                <div className="flex flex-col">
                  {interestData.map((interestData, index, array) => {
                    const isLast = index === array.length - 1;
                    return (
                      <div
                        key={interestData.interestIndex}
                        className={`flex flex-col border-t border-cream/30 dark:border-gray/30 pt-3 bg-black/0 dark:hover:bg-accent-dark/10 hover:bg-accent-light/10 pb-4 px-4 ${
                          isLast ? "!rounded-b-2xl" : "rounded-b-none"
                        }`}
                      >
                        <p className=" font-poppins text-base font-normal text-darkgray dark:text-cream">
                          {interestData.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <motion.div
              layout={false}
              className="flex flex-row justify-center gap-4 flex-wrap w-full h-auto mb-10"
            >
              {socialData.map((socialData) => (
                <a
                  tabIndex={0}
                  key={socialData.socialIndex}
                  className="flex flex-col justify-center items-center shadow-md rounded-2xl w-auto h-auto p-3 cursor-pointer border border-cream/30 dark:border-gray/30 hover:border-accent-light dark:hover:border-accent-dark backdrop-blur-sm bg-gray/[0.025] dark:bg-cream/[0.025] dark:hover:bg-accent-dark/[0.05] hover:bg-accent-light/[0.06]"
                  href={socialData.link}
                  alt={`${socialData.name} Link`}
                  aria-label={`Find Udit at ${socialData.name} platform and connect`}
                >
                  {getSocialLogo(socialData.name)}
                </a>
              ))}
            </motion.div>
            <div className="flex flex-col w-full h-auto">
              <p className="font-poppins text-sm font-thin text-center opacity-75 text-gray dark:text-cream tracking-wider leading-relaxed">
                Designed, developed, and owned by <br />
                Udit Malhotra
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
