import { Header } from "../components/Header";
import Carousel from "react-material-ui-carousel";
import Instagram from "../assets/Instagram";
import Twitter from "../assets/Twitter";
import Spotify from "../assets/Spotify";
import Snapchat from "../assets/Snapchat";

export const Landing = () => {
  return (
    <>
      <div className="relative flex flex-col w-full bg-white dark:bg-darkBlack">
        <Header />
        <div className="flex flex-col lg:flex-row px-5 md:px-16 mt-28 mb-10 gap-8 lg:max-w-[1280px] mx-auto">
          <div className="lg:!sticky lg:top-[120px] lg:left-0 relative flex flex-col justify-end bg-uditPic bg-no-repeat bg-cover bg-top shadow-container dark:shadow-darkContainer rounded-2xl w-full h-[414px] md:h-[600px] p-5">
            <div className="absolute top-0 left-0 flex flex-col bg-black/10 z-0 rounded-2xl w-full h-[414px] md:h-[600px]"></div>
            <p className=" font-poppins text-2xl font-semibold tracking-wide text-white w-[80%] z-10">
              Namaste,
            </p>
            <p className=" font-poppins text-md font-light tracking-wide text-white w-full z-10">
              Here you can have a glance about my profession and contact details
            </p>
          </div>
          <div className="flex flex-col w-full gap-8 lg:mt-2">
            <div className="flex flex-col shadow-container dark:shadow-darkContainer rounded-2xl w-full h-auto p-5 bg-white dark:bg-black">
              <div className="flex flex-col mb-5">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-milka">
                  Education
                </p>
                <p className=" font-poppins text-lg tracking-wide font-normal text-darkGray dark:text-slate">
                  Formal schooling and graduation
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-black dark:text-white">
                      Kendriya Vidyalaya
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkGray dark:text-lightGray italic">
                      (2004-2016)
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-normal text-darkGray dark:text-lightGray">
                    Primary, secondary and higher secondary
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-black dark:text-white">
                      Chitkara University
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkGray dark:text-lightGray italic">
                      (2016-2020)
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-normal text-darkGray dark:text-lightGray">
                    Bachelor of Engineering
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col shadow-container dark:shadow-darkContainer rounded-2xl w-full h-auto p-5 bg-white dark:bg-black">
              <div className="flex flex-col mb-5">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-milka">
                  Work
                </p>
                <p className=" font-poppins text-lg tracking-wide font-normal text-darkGray dark:text-lightGray">
                  Professional company work
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-black dark:text-white">
                      Infosys
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkGray dark:text-lightGray italic">
                      (2020-2021)
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-normal text-darkGray dark:text-lightGray">
                    System Engineer
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-black dark:text-white">
                      Mintworxs
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkGray dark:text-lightGray italic">
                      (2021)
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-normal text-darkGray dark:text-lightGray">
                    Web Developer
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-black dark:text-white">
                      Spenda
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkGray dark:text-lightGray italic">
                      (2021-present)
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-normal text-darkGray dark:text-lightGray">
                    React Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-4 lg:gap-0 flex-wrap w-full h-auto">
              <div className=" flex flex-col justify-center items-center shadow-container dark:shadow-darkContainer rounded-2xl w-[47%] md:w-[23%] h-auto py-7 px-5 gap-2 bg-white dark:bg-black">
                <p className="font-poppins text-3xl font-bold text-milka">6+</p>
                <p className="font-poppins text-[18px] font-normal tracking-wider text-black dark:text-white">
                  Languages
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center shadow-container dark:shadow-darkContainer rounded-2xl w-[47%] md:w-[23%] h-auto py-7 px-5 gap-2 bg-white dark:bg-black">
                <p className="font-poppins text-3xl font-bold text-milka">
                  20+
                </p>
                <p className="font-poppins text-[18px] font-normal tracking-wider text-black dark:text-white">
                  Tools
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center shadow-container dark:shadow-darkContainer rounded-2xl w-[47%] md:w-[23%] h-auto py-7 px-5 gap-2 bg-white dark:bg-black">
                <p className="font-poppins text-3xl font-bold text-milka">
                  20+
                </p>
                <p className="font-poppins text-[18px] font-normal tracking-wider text-black dark:text-white">
                  Projects
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center shadow-container dark:shadow-darkContainer rounded-2xl w-[47%] md:w-[23%] h-auto py-7 px-5 gap-2 bg-white dark:bg-black">
                <p className="font-poppins text-3xl font-bold text-milka">8+</p>
                <p className="font-poppins text-[18px] font-normal tracking-wider text-black dark:text-white">
                  Clients
                </p>
              </div>
            </div>
            <Carousel
              className="p-1"
              swipe
              navButtonsAlwaysInvisible
              prevButtonsAlwaysInvisible
              fullHeightHover={false}
              autoPlay={false}
              interval="6000"
              animation="fade"
              navButtonsProps={{
                style: {
                  backgroundColor: "#7E69AD",
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: "#7E69AD",
                },
              }}
            >
              <div className="flex flex-col shadow-container dark:shadow-darkContainer rounded-2xl w-full h-[300px] p-5 bg-white dark:bg-black">
                <div className="flex flex-col mb-5">
                  <p className=" font-poppins text-3xl font-semibold tracking-wide text-milka">
                    Self-studied
                  </p>
                  <p className=" font-poppins text-lg tracking-wide font-normal text-darkGray dark:text-lightGray">
                    Things learned other than formal education
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      UI/UX designing
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Google: Data science
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Indian stock market
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col shadow-container dark:shadow-darkContainer rounded-2xl w-full h-[300px] p-5 bg-white dark:bg-black">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Event management
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Research work
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Music, instruments
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
            <Carousel
              className="p-1"
              swipe
              navButtonsAlwaysInvisible
              prevButtonsAlwaysInvisible
              fullHeightHover={false}
              autoPlay={false}
              interval="6000"
              animation="fade"
              navButtonsProps={{
                style: {
                  backgroundColor: "#7E69AD",
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: "#7E69AD",
                },
              }}
            >
              <div className="flex flex-col shadow-container dark:shadow-darkContainer rounded-2xl w-full h-[300px] p-5 bg-white dark:bg-black">
                <div className="flex flex-col mb-5">
                  <p className=" font-poppins text-3xl font-semibold tracking-wide text-milka">
                    Books
                  </p>
                  <p className=" font-poppins text-lg tracking-wide font-normal text-darkGray dark:text-lightGray">
                    Listing of books read over time
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      The 48 laws of power
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      The power of your subconcious mind
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Can't hurt me
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Man's search for meaning
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col shadow-container dark:shadow-darkContainer rounded-2xl w-full h-[300px] p-5 bg-white dark:bg-black">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      The almanack of Naval Ravikant
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Thinking, fast and slow
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Atomic Habits
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      The Archer
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      The psychology of money
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      The compound effect
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col shadow-container dark:shadow-darkContainer rounded-2xl w-full h-[300px] p-5 bg-white dark:bg-black">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Homo Deus
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Sapiens
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      The intelligent investor
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      The 5AM club
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Rich dad, poor dad
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Everything is f*cked
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col shadow-container dark:shadow-darkContainer rounded-2xl w-full h-[300px] p-5 bg-white dark:bg-black">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      The subtle art of not giving a f*ck
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Life's amazing secrets
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-poppins text-lg font-normal text-black dark:text-white">
                      Diary of a Wimpy Kid
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
            <div className="flex flex-row justify-between flex-wrap w-full h-auto mb-10">
              <a
                className="flex flex-col justify-center items-center shadow-container hover:shadow-containerXL dark:shadow-darkContainer dark:hover:shadow-darkContainerXL rounded-2xl w-[23%] h-auto p-5 bg-white dark:bg-black cursor-pointer"
                href="https://instagram.com/uditmalhotraa"
              >
                <Instagram className="w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]" />
              </a>
              <a
                className="flex flex-col justify-center items-center shadow-container hover:shadow-containerXL dark:shadow-darkContainer dark:hover:shadow-darkContainerXL rounded-2xl w-[23%] h-auto p-5 bg-white dark:bg-black cursor-pointer"
                href="https://twitter.com/uditmalhotraa"
              >
                <Twitter className="w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]" />
              </a>
              <a
                className="flex flex-col justify-center items-center shadow-container hover:shadow-containerXL dark:shadow-darkContainer dark:hover:shadow-darkContainerXL rounded-2xl w-[23%] h-auto p-5 bg-white dark:bg-black cursor-pointer"
                href="https://open.spotify.com/user/8m59lr39cu8zunxmrd9c2uavb?si=4bfc6150bf6b4145"
              >
                <Spotify className="w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]" />
              </a>
              <a
                className="flex flex-col justify-center items-center shadow-container hover:shadow-containerXL dark:shadow-darkContainer dark:hover:shadow-darkContainerXL rounded-2xl w-[23%] h-auto p-5 bg-white dark:bg-black cursor-pointer"
                href="https://www.snapchat.com/add/uditmalhotraa"
              >
                <Snapchat className="w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]" />
              </a>
            </div>
            <div className="flex flex-col w-full h-auto">
              <p className="font-poppins text-sm font-normal text-milka tracking-wider leading-relaxed">
                This website only covers the professional aspect of life, which
                is merely a fraction of the total. Designed and developed by
                Udit Malhotra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
