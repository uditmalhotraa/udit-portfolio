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

import AnimatedDiv from "../components/AnimatedDiv";
import { motion } from "framer-motion";


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
          <div className="lg:!sticky z-20 lg:top-[120px] lg:left-0 relative flex flex-col justify-end bg-uditPic bg-no-repeat bg-cover bg-top shadow-container !rounded-2xl w-full h-[468px] md:h-[600px] xl:h-[724px] 2xl:h-[796px] border border-gray/[0.075] dark:border-cream/[0.075] ">
            <AnimatedDiv
              className="absolute -bottom-3 md:-bottom-4 -left-[8px] md:-left-[16px] flex flex-col gap-2 w-[calc(100%+16px)] md:w-[calc(100%+32px)] h-auto z-10 bg-cream/10 dark:bg-gray/10 shadow-container backdrop-blur-xl p-4 rounded-2xl will-change-transform transform-gpu"
            >
              <p
                title="Greetings: I bow to you"
                className=" font-poppins text-2xl font-semibold tracking-wide text-cream w-[80%] z-10"
              >
                Namaste,
              </p>
              <p className=" font-poppins text-md font-light tracking-wide text-cream w-full z-10">
                From Code to Chronicles – My Journey
              </p>
            </AnimatedDiv>
          </div>
          <div className="flex flex-col w-full gap-12 lg:mt-2">
            <div className="setWrapper relative">
              <div className="objectSet">
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #21219660, #AFAFED60)",
                  }}
                  className="z-0 absolute top-10 -right-4 w-[150px] h-[150px] rounded-full"
                ></div>
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #212196, #AFAFED60)",
                  }}
                  className="z-0 absolute -top-2 left-10 w-[75px] h-[75px] rounded-full animate-spin"
                ></div>
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #21219680, #AFAFED80)",
                  }}
                  className="z-0 absolute -bottom-5 -left-20 w-[200px] h-[200px] rounded-full"
                ></div>
              </div>
              <AnimatedDiv
                className="z-10 flex flex-col rounded-2xl w-full h-auto border shadow-container border-gray/[0.075] dark:border-cream/[0.075] backdrop-blur-xl bg-cream/40 dark:bg-gray/40 will-change-transform transform-gpu"
              >
                <div className="flex flex-col mb-4 pt-4 px-4">
                  <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                    Education
                  </p>
                  <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                    Graduation and formal schooling
                  </p>
                </div>
                <AnimatedDiv stagger className="flex flex-col">
                  {educationData.map((educationData) => (
                    <div
                      key={educationData.educationIndex}
                      className="flex flex-col border-t border-gray/[0.075] dark:border-cream/[0.075] pt-3 last:rounded-b-2xl dark:hover:bg-accent-dark/[0.2] hover:bg-accent-light/[0.2] px-4 pb-4"
                    >
                      <div className="flex flex-row justify-between items-center w-full">
                        <a
                          className="font-poppins group inline-flex gap-[6px] items-center text-xl w-fit font-semibold text-darkgray dark:text-cream hover:text-accent-light dark:hover:text-accent-dark"
                          href={educationData.educationWebsite}
                        >
                          {educationData.name}
                          <ArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-1 fill-darkgray dark:fill-cream group-hover:fill-accent-light dark:group-hover:fill-accent-dark" />
                        </a>
                        <p className=" font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream">
                          {educationData?.year}
                        </p>
                      </div>
                      <p className=" font-poppins tracking-wider text-sm font-light text-darkgray dark:text-cream my-1">
                        {educationData?.desc}
                      </p>
                      {educationData?.detail.map((educationDataDetail) => (
                        <div
                          key={educationDataDetail.detailIndex}
                          className="flex flex-row justify-between items-start w-full mt-4"
                        >
                          <p className=" font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream mr-3">
                            {educationDataDetail?.certificate}
                          </p>
                          <p className=" font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream italic whitespace-nowrap">
                            {educationDataDetail?.grade}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </AnimatedDiv>
              </AnimatedDiv>
            </div>
            <div className="setWrapper relative">
              <div className="objectSet">
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #21219650, #AFAFED50)",
                  }}
                  className="z-0 absolute top-10 -left-4 w-[75px] h-[75px] rounded-full "
                ></div>
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #212196, #AFAFED50)",
                  }}
                  className="z-0 absolute -top-5 -right-20 w-[200px] h-[200px] rounded-full "
                ></div>
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #21219680, #AFAFED80)",
                  }}
                  className="z-0 absolute bottom-60 left-20 w-[150px] h-[150px] rounded-full animate-spin"
                ></div>
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #212196, #AFAFED50)",
                  }}
                  className="z-0 absolute -bottom-32 right-10 w-[250px] h-[250px] rounded-full "
                ></div>
              </div>
              <AnimatedDiv
                className="flex flex-col shadow-container rounded-2xl w-full h-auto border border-gray/[0.075] dark:border-cream/[0.075] backdrop-blur-xl bg-cream/40 dark:bg-gray/40 will-change-transform transform-gpu"
              >
                <div className="flex flex-col mb-4 pt-4 px-4">
                  <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                    Work
                  </p>
                  <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                    Professional company work
                  </p>
                </div>
                <AnimatedDiv stagger className="flex flex-col">
                  {workData.map((workData) => (
                    <div
                      key={workData.workIndex}
                      className="flex flex-col border-t last:rounded-b-2xl border-gray/[0.075] dark:border-cream/[0.075] pt-3 bg-black/0 dark:hover:bg-accent-dark/[0.2] hover:bg-accent-light/[0.2] pb-4 px-4"
                    >
                      <a
                        className="font-poppins group inline-flex gap-[6px] items-center w-fit mb-3 text-xl font-semibold text-darkgray dark:text-cream hover:text-accent-light dark:hover:text-accent-dark"
                        href={workData.companyWebsite}
                      >
                        {workData.companyName}
                        <ArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-1 fill-darkgray dark:fill-cream group-hover:fill-accent-light dark:group-hover:fill-accent-dark" />
                      </a>
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
                          <p className=" font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream">
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
                  ))}
                </AnimatedDiv>
              </AnimatedDiv>
            </div>
            <div className="setWrapper relative">
              <div className="objectSet">
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #21219650, #AFAFED50)",
                  }}
                  className="z-0 absolute top-[32%] -left-4 w-[75px] h-[75px] rounded-full animate-spin"
                ></div>
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #21219670, #AFAFED70)",
                  }}
                  className="z-0 absolute top-72 -right-20 w-[200px] h-[200px] rounded-full "
                ></div>
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #212196, #AFAFED)",
                  }}
                  className="z-0 absolute top-[52%] left-10 w-[125px] h-[125px] rounded-full "
                ></div>
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #212196, #AFAFED)",
                  }}
                  className="z-0 absolute bottom-96 lg:bottom-60 right-32 w-[100px] h-[100px] rounded-full "
                ></div>
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #212196, #AFAFED50)",
                  }}
                  className="z-0 absolute -bottom-32 -left-32 w-[250px] h-[250px] rounded-full "
                ></div>
              </div>
              <div className="flex flex-col bg-cream/40 dark:bg-gray/40 rounded-2xl">
              <div
                  className="flex flex-col rounded-2xl backdrop-blur-xl rounded-b-none w-full h-auto p-4 border border-b-0 z-10 border-gray/[0.075] dark:border-cream/[0.075] shadow-rim will-change-transform transform-gpu"
                >
                  <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                    Projects
                  </p>
                  <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                    Delivering impactful solutions
                  </p>
                </div>
                <AnimatedDiv stagger className="flex flex-col gap-y-8">
                  {projectsData.map((projectsData) => (
                    <div
                      key={projectsData.projectIndex}
                      className="flex flex-col backdrop-blur-xl md:flex-row gap-x-0 md:gap-y-0 shadow-container gap-y-4 rounded-2xl w-full h-auto border border-gray/[0.075] dark:border-cream/[0.075] z-10 dark:hover:bg-accent-dark/[0.2] hover:bg-accent-light/[0.2] will-change-transform transform-gpu"
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
                      <div className="pb-4 md:pb-0 px-4 pt-0 md:pt-4 w-full md:w-[50%]">
                        <div className="flex flex-col mb-5 gap-5">
                          <div className="flex flex-row justify-between items-center w-full">
                            <a
                              className="font-poppins group inline-flex items-center gap-[6px] text-xl w-fit font-semibold text-darkgray dark:text-cream hover:text-accent-light dark:hover:text-accent-dark"
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
                          <p className="font-poppins tracking-wider text-sm font-normal leading-6 text-darkgray dark:text-cream">
                            {projectsData.desc}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <p className="font-poppins text-base font-medium text-darkgray dark:text-cream">
                            Role:{" "}
                            <span className="font-light">
                              {projectsData.role}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </AnimatedDiv>
              </div>
            </div>
            <div className="setWrapper relative">
              <div className="objectSet">
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #21219650, #AFAFED50)",
                  }}
                  className="z-0 absolute top-[52%] left-10 w-[125px] h-[125px] rounded-full "
                ></div>
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #212196, #AFAFED)",
                  }}
                  className="z-0 absolute bottom-96 right-0 w-[100px] h-[100px] rounded-full animate-spin"
                ></div>
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 33% 33%, #212196, #AFAFED90)",
                  }}
                  className="z-0 absolute -bottom-32 -right-40 lg:-right-20 w-[250px] h-[250px] rounded-full "
                ></div>
              </div>
              <AnimatedDiv
                className="flex flex-col shadow-container rounded-2xl w-full h-auto border border-gray/[0.075] dark:border-cream/[0.075] backdrop-blur-xl bg-cream/40 dark:bg-gray/40 will-change-transform transform-gpu"
              >
                <div className="flex flex-col mb-4 pt-4 px-4">
                  <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                    Interests
                  </p>
                  <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                    Lessons beyond formal education
                  </p>
                </div>
                <AnimatedDiv stagger className="flex flex-col">
                  {interestData.map((interestData) => (
                    <div
                      key={interestData.interestIndex}
                      className="flex flex-col border-t last:rounded-b-2xl border-gray/[0.075] dark:border-cream/[0.075] pt-3 bg-black/0 dark:hover:bg-accent-dark/[0.2] hover:bg-accent-light/[0.2] pb-4 px-4"
                    >
                      <p className=" font-poppins text-lg font-semibold text-darkgray dark:text-cream">
                        {interestData.name}
                      </p>
                      <p className=" font-poppins tracking-wider text-sm font-normal leading-6 text-darkgray dark:text-cream mt-3">
                        {interestData.desc}
                      </p>
                    </div>
                  ))}
                </AnimatedDiv>
              </AnimatedDiv>
            </div>
            <motion.div layout={false} className="flex flex-row justify-center gap-4 flex-wrap w-full h-auto mb-10">
              {socialData.map((socialData) => (
                <a
                  tabIndex={0}
                  key={socialData.socialIndex}
                  className="flex flex-col justify-center items-center shadow-container rounded-2xl w-auto h-auto p-3 cursor-pointer border border-gray/[0.075] dark:border-cream/[0.075] hover:border-accent-light dark:hover:border-accent-dark backdrop-blur-xl bg-cream/30 dark:bg-gray/30 dark:hover:bg-accent-dark/[0.05] hover:bg-accent-light/[0.06]"
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
