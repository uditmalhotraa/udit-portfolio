import { useState, useEffect } from "react";
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

export const Landing = () => {
  const [educationData, setEducationData] = useState([]);
  const [workData, setWorkData] = useState([]);
  const [interestData, setInterestData] = useState([]);
  const [socialData, setSocialData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    setEducationData(education);
    setWorkData(work);
    setInterestData(interest);
    setSocialData(social);
    setProjectsData(projects);
  }, []);

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
      <div className="relative flex flex-col w-full !select-none bg-fixed bg-cream dark:bg-gray">
        <Header />
        <div className="flex flex-col lg:flex-row px-5 md:px-16 mt-28 mb-10 gap-10 lg:max-w-[1280px] xl:max-w-[1536px] 2xl:max-w-[1920px] mx-auto">
          <div className="lg:!sticky lg:top-[120px] lg:left-0 relative flex flex-col justify-end bg-uditPic bg-no-repeat bg-cover bg-top shadow-neo-light dark:shadow-neo-dark !rounded-2xl w-full h-[468px] md:h-[600px] xl:h-[724px] 2xl:h-[796px] border border-gray/20 dark:border-cream/20 ">
            <div className="flex flex-col gap-2 w-full h-auto z-10 bg-cream/10 dark:bg-gray/30 backdrop-blur-lg px-5 py-2.5 rounded-2xl">
              <p
                title="Greetings: I bow to you"
                className=" font-poppins text-2xl font-semibold tracking-wide text-cream w-[80%] z-10"
              >
                Namaste,
              </p>
              <p className=" font-poppins text-md font-light tracking-wide text-cream w-full z-10">
                From Code to Chronicles – My Journey
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-12 lg:mt-2">
            <div className="flex flex-col shadow-neo-light dark:shadow-neo-dark rounded-2xl w-full h-auto border border-cream/10 dark:border-gray/10 backdrop-blur-lg bg-cream/30 dark:bg-gray/30">
              <div className="flex flex-col mb-4 pt-5 px-5">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                  Education
                </p>
                <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                  Graduation and formal schooling
                </p>
              </div>
              <div className="flex flex-col">
                {educationData.map((educationData) => (
                  <div
                    key={educationData.educationIndex}
                    className="flex flex-col border-t border-gray/20 dark:border-cream/20 pt-3 bg-black/0 dark:hover:bg-accent-dark/[0.05] hover:bg-accent-light/[0.06] px-5 pb-5"
                  >
                    <div className="flex flex-row justify-between items-center w-full">
                      <a
                        className="font-poppins text-xl w-fit font-semibold text-darkgray dark:text-cream hover:text-accent-light dark:hover:text-accent-dark"
                        href={educationData.educationWebsite}
                      >
                        {educationData.name}
                      </a>
                      <p className=" font-poppins tracking-wider text-base opacity-50 font-normal text-darkgray dark:text-cream">
                        {educationData?.year}
                      </p>
                    </div>
                    <p className=" font-poppins tracking-wider text-sm font-light text-darkgray dark:text-cream mb-1">
                      {educationData?.desc}
                    </p>
                    {educationData?.detail.map((educationDataDetail) => (
                      <div
                        key={educationDataDetail.detailIndex}
                        className="flex flex-row justify-between items-start w-full mt-2"
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
              </div>
            </div>
            <div className="flex flex-col shadow-neo-light dark:shadow-neo-dark rounded-2xl w-full h-auto border border-cream/10 dark:border-gray/10 backdrop-blur-lg bg-cream/30 dark:bg-gray/30">
              <div className="flex flex-col mb-4 pt-5 px-5">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                  Work
                </p>
                <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                  Professional company work
                </p>
              </div>
              <div className="flex flex-col">
                {workData.map((workData) => (
                  <div
                    key={workData.workIndex}
                    className="flex flex-col border-t border-gray/20 dark:border-cream/20  pt-3 bg-black/0 dark:hover:bg-accent-dark/[0.05] hover:bg-accent-light/[0.06] pb-5 px-5"
                  >
                    <a
                      className="font-poppins w-fit mb-2 text-xl font-semibold text-darkgray dark:text-cream hover:text-accent-light dark:hover:text-accent-dark"
                      href={workData.companyWebsite}
                    >
                      {workData.companyName}
                    </a>
                    {workData.roleDetail.map((roleDetail) => (
                      <div
                        key={roleDetail.roleIndex}
                        className="flex flex-row justify-between items-center w-full mt-2"
                      >
                        <p className=" block md:hidden font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                          {roleDetail.shortName}
                        </p>
                        <p className=" hidden md:block font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                          {roleDetail.fullName}
                        </p>
                        <p className=" font-poppins tracking-wider text-base font-normal text-darkgray dark:text-cream">
                          {roleDetail.period}
                        </p>
                      </div>
                    ))}
                    <div className="flex flex-row w-full gap-2 flex-wrap mt-4">
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
              </div>
            </div>
            <div className="flex flex-col backdrop-blur-lg bg-cream/30 dark:bg-gray/30 rounded-2xl">
              <div className="flex flex-col rounded-2xl rounded-b-none w-full h-auto p-5 border border-b-0 z-10 border-cream/10 dark:border-gray/10 shadow-neo-light dark:shadow-neo-dark">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                  Projects
                </p>
                <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                  Delivering impactful solutions
                </p>
              </div>
              <div className="flex flex-col gap-y-8">
              {projectsData.map((projectsData) => (
                <div
                  key={projectsData.projectIndex}
                  className="flex flex-col md:flex-row gap-x-0 md:gap-y-0 shadow-neo-light dark:shadow-neo-dark gap-y-4 rounded-2xl w-full h-auto border border-cream/10 dark:border-gray/10 z-10 dark:hover:bg-accent-dark/[0.05] hover:bg-accent-light/[0.06]"
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
                  <div className="pb-5 md:pb-0 px-5 pt-0 md:pt-5 w-full md:w-[50%]">
                    <div className="flex flex-col mb-4 gap-3">
                      <div className="flex flex-row justify-between items-center w-full">
                        <a
                          className="font-poppins text-xl w-fit font-semibold text-darkgray dark:text-cream hover:text-accent-light dark:hover:text-accent-dark"
                          href={projectsData.projectWebsite}
                        >
                          {projectsData.name}
                        </a>
                        <Chip type="outlined" text={`${projectsData.area}`} />
                      </div>
                      <p className=" font-poppins tracking-wider text-sm font-light text-darkgray dark:text-cream">
                        {projectsData.desc}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <p className="font-poppins text-base font-medium text-darkgray dark:text-cream">
                        Role:{" "}
                        <span className="font-light">{projectsData.role}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
            <div className="flex flex-col shadow-neo-light dark:shadow-neo-dark rounded-2xl w-full h-auto border border-cream/10 dark:border-gray/10 backdrop-blur-lg bg-cream/30 dark:bg-gray/30">
              <div className="flex flex-col mb-4 pt-5 px-5">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                  Interests
                </p>
                <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                  Lessons beyond formal education
                </p>
              </div>
              <div className="flex flex-col">
                {interestData.map((interestData) => (
                  <div
                    key={interestData.interestIndex}
                    className="flex flex-col border-t border-gray/20 dark:border-cream/20 pt-3 bg-black/0 dark:hover:bg-accent-dark/[0.05] hover:bg-accent-light/[0.06] pb-5 px-5"
                  >
                    <p className=" font-poppins text-lg font-semibold text-darkgray dark:text-cream">
                      {interestData.name}
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream mt-2">
                      {interestData.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row justify-center gap-4 flex-wrap w-full h-auto mb-10">
              {socialData.map((socialData) => (
                <a
                  key={socialData.socialIndex}
                  className="flex flex-col justify-center items-center shadow-neo-light dark:shadow-neo-dark rounded-2xl w-auto h-auto p-3 cursor-pointer border border-cream/10 dark:border-gray/10 hover:border-accent-light dark:hover:border-accent-dark backdrop-blur-lg bg-cream/30 dark:bg-gray/30 dark:hover:bg-accent-dark/[0.05] hover:bg-accent-light/[0.06]"
                  href={socialData.link}
                >
                  {getSocialLogo(socialData.name)}
                </a>
              ))}
            </div>
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
