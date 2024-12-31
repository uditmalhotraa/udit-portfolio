import { Header } from "../components/Header";
import Instagram from "../assets/Instagram";
import Twitter from "../assets/Twitter";
import Spotify from "../assets/Spotify";
import Linkedin from "../assets/Linkedin";
import Chip from "../components/Chip";

export const Landing = () => {
  return (
    <>
      <div className="relative flex flex-col w-full bg-cream dark:bg-gray">
        <Header />
        <div className="flex flex-col lg:flex-row px-5 md:px-16 mt-28 mb-10 gap-8 lg:max-w-[1280px] mx-auto">
          <div className="lg:!sticky lg:top-[120px] lg:left-0 relative flex flex-col justify-end bg-uditPic bg-no-repeat bg-cover bg-top shadow-container !rounded-2xl w-full h-[414px] md:h-[600px]">
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
            <div className="flex flex-col shadow-container rounded-2xl w-full h-auto p-5 bg-cream dark:bg-darkgray">
              <div className="flex flex-col mb-4">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                  Education
                </p>
                <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                  Formal schooling and graduation
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-darkgray dark:text-cream">
                      Kendriya Vidyalaya
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream">
                      2004 - 2016
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                    Primary, secondary and higher secondary
                  </p>
                  <div className="flex flex-row justify-between items-start w-full mt-2">
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream mr-3">
                      Secondary School Certificate
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream italic whitespace-nowrap">
                      9.60 CGPA
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-start w-full mt-1">
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream mr-3">
                      Higher Secondary School Certificate
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream italic whitespace-nowrap">
                      71.00 %
                    </p>
                  </div>
                </div>
                <div className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-darkgray dark:text-cream">
                      Chitkara University
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream">
                      2016 - 2020
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                    Bachelor of Engineering
                  </p>
                  <div className="flex flex-row justify-between items-start w-full mt-2">
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream mr-3">
                      Graduation
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream italic whitespace-nowrap">
                      9.16 CGPA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col shadow-container rounded-2xl w-full h-auto p-5 bg-cream dark:bg-darkgray">
              <div className="flex flex-col mb-4">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                  Work
                </p>
                <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                  Professional company work
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3">
                  <p className=" font-poppins text-xl font-normal text-darkgray dark:text-cream">
                    Spenda
                  </p>
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                      SE
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream">
                      Jul 2024 - Present
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                      ASE
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream">
                      Jul 2023 - Sep 2024
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                      Web Dev
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream">
                      Jan 2022 - Jun 2023
                    </p>
                  </div>
                  <div className="flex flex-row w-full gap-2 flex-wrap mt-4">
                    <Chip text="React" />
                    <Chip text="Tailwind" />
                    <Chip text="JS/TS" />
                    <Chip text="Storybook" />
                    <Chip text="CSS" />
                    <Chip text="Figma" />
                    <Chip text="Azure" />
                    <Chip text="Writing Tests" />
                  </div>
                </div>
                <div className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3">
                  <p className=" font-poppins text-xl font-normal text-darkgray dark:text-cream">
                    Mintworxs
                  </p>
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                      Web Dev
                    </p>

                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream">
                      Apr 2021 - Dec 2021
                    </p>
                  </div>
                  <div className="flex flex-row w-full gap-2 flex-wrap mt-4">
                    <Chip text="React" />
                    <Chip text="CSS/SCSS" />
                    <Chip text="JS" />
                    <Chip text="Bootstrap" />
                    <Chip text="MUI" />
                    <Chip text="Jira" />
                    <Chip text="Debugging" />
                  </div>
                </div>
                <div className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3">
                  <p className=" font-poppins text-xl font-normal text-darkgray dark:text-cream">
                    Infosys
                  </p>
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins tracking-wider text-base font-light text-darkgray dark:text-cream">
                      Intern & SE
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream">
                      Mar 2020 - Mar 2021
                    </p>
                  </div>
                  <div className="flex flex-row w-full gap-2 flex-wrap mt-4">
                    <Chip text="SQL" />
                    <Chip text="Oracle Server Manager" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col shadow-container rounded-2xl w-full h-auto p-5 bg-cream dark:bg-darkgray">
              <div className="flex flex-col mb-4">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-accent-light dark:text-accent-dark">
                  Interests
                </p>
                <p className=" font-poppins text-lg tracking-wide font-light text-darkgray dark:text-cream">
                  Things learned other than formal education
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3">
                  <p className=" font-poppins text-lg font-normal text-darkgray dark:text-cream">
                    Research and creative work
                  </p>
                  <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream mt-2">
                    Deeply interested in researching and writing about various
                    topics. Have a good eye and hand for creative work.
                  </p>
                </div>
                <div className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3">
                  <p className=" font-poppins text-lg font-normal text-darkgray dark:text-cream">
                    Indian stock market
                  </p>
                  <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream mt-2">
                    Researched and worked in the Indian stock market from the
                    perspectives of technical, fundamental, psychological, and
                    life management concepts.
                  </p>
                </div>
                <div className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3">
                  <p className=" font-poppins text-lg font-normal text-darkgray dark:text-cream">
                    UI/UX design and development
                  </p>
                  <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream mt-2">
                    Studied various courses, materials, and articles, and
                    practised design, development, and logical coding over time.
                  </p>
                </div>
                <div className="flex flex-col border-t border-t-darkgray dark:border-t-cream pt-3">
                  <p className=" font-poppins text-lg font-normal text-darkgray dark:text-cream">
                    Event management
                  </p>
                  <p className=" font-poppins tracking-wider text-sm font-normal text-darkgray dark:text-cream mt-2">
                    Worked in 100+ events of all sorts in college and have good
                    hands-on experience of how to lead or work in a team.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-4 flex-wrap w-full h-auto mb-10">
              <a
                className="flex flex-col justify-center items-center shadow-container hover:shadow-containerXL  dark:hover:shadow-darkContainerXL rounded-2xl w-auto h-auto p-3 bg-cream dark:bg-darkgray cursor-pointer"
                href="https://instagram.com/uditmalhotraa"
              >
                <Instagram className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />
              </a>
              <a
                className="flex flex-col justify-center items-center shadow-container hover:shadow-containerXL  dark:hover:shadow-darkContainerXL rounded-2xl w-auto h-auto p-3 bg-cream dark:bg-darkgray cursor-pointer"
                href="https://twitter.com/uditmalhotraa"
              >
                <Twitter className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />
              </a>
              <a
                className="flex flex-col justify-center items-center shadow-container hover:shadow-containerXL  dark:hover:shadow-darkContainerXL rounded-2xl w-auto h-auto p-3 bg-cream dark:bg-darkgray cursor-pointer"
                href="https://open.spotify.com/user/8m59lr39cu8zunxmrd9c2uavb?si=4bfc6150bf6b4145"
              >
                <Spotify className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />
              </a>
              <a
                className="flex flex-col justify-center items-center shadow-container hover:shadow-containerXL  dark:hover:shadow-darkContainerXL rounded-2xl w-auto h-auto p-3 bg-cream dark:bg-darkgray cursor-pointer"
                href="https://www.linkedin.com/in/uditmalhotraa"
              >
                <Linkedin className="w-[50px] h-[50px] fill-accent-light dark:fill-accent-dark" />
              </a>
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
