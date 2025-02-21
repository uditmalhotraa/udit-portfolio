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

export const Landing = () => {
  const [educationData, setEducationData] = useState([]);
  const [workData, setWorkData] = useState([]);
  const [interestData, setInterestData] = useState([]);
  const [socialData, setSocialData] = useState([]);

  useEffect(() => {
    setEducationData(education);
    setWorkData(work);
    setInterestData(interest);
    setSocialData(social);
  }, []);

  const getSocialLogo = (socialName) => {
    switch (socialName) {
      case "Instagram":
        return <Instagram className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />;
      case "Twitter":
        return <Twitter className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />;
      case "Spotify":
        return <Spotify className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />;
      case "Linkedin":
        return <Linkedin className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />;
      default:
        break;
    }
  };

  return (
    <>
      <div className="relative flex flex-col w-full bg-cream dark:bg-gray">
        <Header />
        <div className="flex flex-col lg:flex-row px-5 md:px-16 mt-28 mb-10 gap-8 lg:max-w-[1280px] mx-auto">
          <div className="lg:!sticky lg:top-[120px] lg:left-0 relative flex flex-col justify-end bg-uditPic bg-no-repeat bg-cover bg-top shadow-container !rounded-2xl w-full h-[414px] md:h-[600px] border border-[#808080]">
            <div className="flex flex-col gap-2 w-full h-auto z-10 bg-gray/10 backdrop-blur-sm px-5 py-2.5 rounded-2xl">
              <p
                title="Greetings: I bow to you"
                className=" font-poppins text-2xl font-semibold tracking-wide text-cream w-[80%] z-10"
              >
                Namaste,
              </p>
              <p className=" font-poppins text-md font-light tracking-wide text-cream w-full z-10">
                Writing what is flowing through me.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-8 lg:mt-2">
            <div className="flex flex-col shadow-container rounded-2xl w-full h-auto p-5 bg-cream dark:bg-gray border border-[#808080]">
              <div className="flex flex-col mb-4">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                  Education
                </p>
                <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                  Formal schooling and graduation
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {educationData.map((educationData) => (
                  <div
                    key={educationData.educationIndex}
                    className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3"
                  >
                    <div className="flex flex-row justify-between items-center w-full">
                      <p className=" font-poppins text-xl font-semibold text-darkgray dark:text-cream">
                        {educationData?.name}
                      </p>
                      <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream">
                        {educationData?.year}
                      </p>
                    </div>
                    <p className=" font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                      {educationData?.desc}
                    </p>
                    {educationData?.detail.map((educationDataDetail) => (
                      <div
                        key={educationDataDetail.detailIndex}
                        className="flex flex-row justify-between items-start w-full mt-2"
                      >
                        <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream mr-3">
                          {educationDataDetail?.certificate}
                        </p>
                        <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream italic whitespace-nowrap">
                          {educationDataDetail?.grade}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col shadow-container rounded-2xl w-full h-auto p-5 bg-cream dark:bg-gray border border-[#808080]">
              <div className="flex flex-col mb-4">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                  Work
                </p>
                <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                  Professional company work
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {workData.map((workData) => (
                  <div
                    key={workData.workIndex}
                    className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3"
                  >
                    <p className=" font-poppins text-xl font-semibold text-darkgray dark:text-cream">
                      {workData.companyName}
                    </p>
                    {workData.roleDetail.map((roleDetail) => (
                      <div
                        key={roleDetail.roleIndex}
                        className="flex flex-row justify-between items-center w-full"
                      >
                        <p className=" block md:hidden font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                          {roleDetail.shortName}
                        </p>
                        <p className=" hidden md:block font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                          {roleDetail.fullName}
                        </p>
                        <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream">
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
            <div className="flex flex-col shadow-container rounded-2xl w-full h-auto p-5 bg-cream dark:bg-gray border border-[#808080]">
              <div className="flex flex-col mb-4">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                  Interests
                </p>
                <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                  Things learned other than formal education
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {interestData.map((interestData) => (
                  <div
                    key={interestData.interestIndex}
                    className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3"
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
                  className="flex flex-col justify-center items-center shadow-container hover:shadow-containerXL  dark:hover:shadow-darkContainerXL rounded-2xl w-auto h-auto p-3 bg-cream dark:bg-gray cursor-pointer border border-[#808080]"
                  href={socialData.link}
                >
                  {getSocialLogo(socialData.name)}
                </a>
              ))}
            </div>
            <div className="flex flex-col w-full h-auto">
              <p className="font-poppins text-sm font-thin text-center text-gray dark:text-cream tracking-wider leading-relaxed">
                Articles, blogs, books, and the website are designed, developed,
                and owned by Udit Malhotra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
