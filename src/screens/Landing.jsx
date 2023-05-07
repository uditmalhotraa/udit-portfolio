import { Header } from "../components/Header";
import InstagramLogo from "../assets/InstagramLogo.svg";
import SnapchatLogo from "../assets/SnapchatLogo.svg";
import TwitterLogo from "../assets/TwitterLogo.svg";
import SpotifyLogo from "../assets/SpotifyLogo.svg";

export const Landing = () => {
  return (
    <>
      <div className="relative flex flex-col w-full">
        <Header />
        <div className="flex flex-col lg:flex-row px-5 md:px-16 mt-28 mb-10 gap-8 lg:max-w-[1280px] mx-auto">
          <div className="lg:!sticky lg:top-[120px] lg:left-0 relative flex flex-col justify-end bg-uditPic bg-no-repeat bg-cover bg-top shadow-container rounded-2xl w-full h-[414px] md:h-[600px] p-5">
            <div className="absolute top-0 left-0 flex flex-col bg-black/10 z-0 rounded-2xl w-full h-[414px] md:h-[600px]"></div>
            <p className=" font-poppins text-2xl font-semibold tracking-wide text-white w-[80%] z-10">
              Namaste,
            </p>
            <p className=" font-poppins text-md font-light tracking-wide text-white w-full z-10">
              Here you can have a glance about my profession and contact details
            </p>
          </div>
          <div className="flex flex-col w-full gap-8 lg:mt-2">
            <div className="flex flex-col shadow-container rounded-2xl w-full h-auto p-5 bg-white">
              <div className="flex flex-col mb-5">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-milka">
                  Education
                </p>
                <p className=" font-poppins text-lg tracking-wide font-normal text-darkGray">
                  Formal schooling and graduation
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className=" font-poppins leading-loose text-xl font-normal text-black"></p>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-black">
                      Kendriya Vidyalaya
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkGray italic">
                      (2004-2016)
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-normal text-darkGray">
                    Primary, secondary and higher secondary
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-black">
                      Chitkara University
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkGray italic">
                      (2016-2020)
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-normal text-darkGray">
                    Bachelor of Engineering
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col shadow-container rounded-2xl w-full h-auto p-5 bg-white">
              <div className="flex flex-col mb-5">
                <p className=" font-poppins text-3xl font-semibold tracking-wide text-milka">
                  Work
                </p>
                <p className=" font-poppins text-lg tracking-wide font-normal text-darkGray">
                  Professional company work
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-black">
                      Infosys
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkGray italic">
                      (2020-2021)
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-normal text-darkGray">
                    System Engineer
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-black">
                      Mintworxs
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkGray italic">
                      (2021)
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-normal text-darkGray">
                    Web Developer
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" font-poppins text-xl font-normal text-black">
                      Spenda
                    </p>
                    <p className=" font-poppins tracking-wider text-sm font-normal text-darkGray italic">
                      (2021-present)
                    </p>
                  </div>
                  <p className=" font-poppins tracking-wider text-base font-normal text-darkGray">
                    React Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-4 lg:gap-0 flex-wrap w-full h-auto">
              <div className="flex flex-col justify-center items-center shadow-container rounded-2xl w-[47%] md:w-[23%] h-auto py-7 px-5 gap-2 bg-white border-2 border-milka">
                <p className="font-poppins text-3xl font-bold text-milka">6+</p>
                <p className="font-poppins text-[18px] font-normal tracking-wider text-black">
                  Languages
                </p>
              </div>
              <div className="flex flex-col justify-center items-center shadow-container rounded-2xl w-[47%] md:w-[23%] h-auto py-7 px-5 gap-2 bg-white border-2 border-milka">
                <p className="font-poppins text-3xl font-bold text-milka">
                  20+
                </p>
                <p className="font-poppins text-[18px] font-normal tracking-wider text-black">
                  Tools
                </p>
              </div>
              <div className="flex flex-col justify-center items-center shadow-container rounded-2xl w-[47%] md:w-[23%] h-auto py-7 px-5 gap-2 bg-white border-2 border-milka">
                <p className="font-poppins text-3xl font-bold text-milka">
                  20+
                </p>
                <p className="font-poppins text-[18px] font-normal tracking-wider text-black">
                  Projects
                </p>
              </div>
              <div className="flex flex-col justify-center items-center shadow-container rounded-2xl w-[47%] md:w-[23%] h-auto py-7 px-5 gap-2 bg-white border-2 border-milka">
                <p className="font-poppins text-3xl font-bold text-milka">8+</p>
                <p className="font-poppins text-[18px] font-normal tracking-wider text-black">
                  Clients
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between flex-wrap w-full h-auto mb-10">
              <a
                className="flex flex-col justify-center items-center shadow-container rounded-2xl w-[23%] h-auto p-5 bg-white cursor-pointer"
                href="https://instagram.com/uditmalhotraa"
              >
                <img src={InstagramLogo} alt="Instagram" />
              </a>
              <a
                className="flex flex-col justify-center items-center shadow-container rounded-2xl w-[23%] h-auto p-5 bg-white cursor-pointer"
                href="https://twitter.com/uditmalhotraa"
              >
                <img src={TwitterLogo} alt="Twitter" />
              </a>
              <a
                className="flex flex-col justify-center items-center shadow-container rounded-2xl w-[23%] h-auto p-5 bg-white cursor-pointer"
                href="https://open.spotify.com/user/8m59lr39cu8zunxmrd9c2uavb?si=4bfc6150bf6b4145"
              >
                <img src={SpotifyLogo} alt="Spotify" />
              </a>
              <a
                className="flex flex-col justify-center items-center shadow-container rounded-2xl w-[23%] h-auto p-5 bg-white cursor-pointer"
                href="https://www.snapchat.com/add/uditmalhotraa"
              >
                <img src={SnapchatLogo} alt="Snapchat" />
              </a>
            </div>
            <div className="flex flex-col w-full h-auto">
              <p className="font-poppins text-sm font-light text-milka tracking-wider leading-relaxed">
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
