import { useState } from "react";
import book from "../data/book.json";
import ArrowRightIcon from "../assets/ArrowRightIcon";
import Kindle from "../assets/Kindle";
import Paperback from "../assets/Paperback";
import { useUserCountry } from "../hooks/useUserCountry";

export const Home = () => {
  const [bookData] = useState(book);
  const isIndia = useUserCountry();
  const loading = isIndia === null;

  return (
    <div className="flex flex-col w-full gap-8">
      {/* <div className="z-10 flex flex-col px-4 rounded-2xl !w-full h-auto border shadow-md border-black/10 dark:border-white/20 backdrop-blur-sm bg-cream dark:bg-black will-change-transform transform-gpu">
        <div className="flex flex-row pt-4 gap-3 items-center lg:justify-between">
          <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
            Support My Work
          </p>
          <a
            className="bg-accent-light hidden lg:block dark:bg-accent-dark w-full max-w-[200px] text-center font-bold px-3 py-2 text-white dark:text-black text-md rounded-md"
            href="https://u.payu.in/gImbfwnX7ggn"
          >
            Pay Now
          </a>
        </div>
        <div className="flex flex-col pb-4">
          <div
            className={`lg:hidden flex flex-row items-center w-full border-t border-gray/30 dark:border-cream/30 mt-4 pt-4`}
          >
            <a
              className="bg-accent-light dark:bg-accent-dark w-full max-w-[350px] text-center font-bold px-3 py-2 text-white dark:text-black text-md rounded-md"
              href="https://u.payu.in/gImbfwnX7ggn"
            >
              Pay Now
            </a>
          </div>
          <div
            className={`flex flex-row items-center w-full border-t border-gray/30 dark:border-cream/30 mt-4 pt-4`}
          >
            <p className="font-poppins group gap-[6px] items-center w-full !justify-between inline-flex tracking-wider text-base font-normal text-black dark:text-white mr-3">
              Knowledge stays free. Support, if you’d like to help me keep
              building more valuable content.
            </p>
          </div>
        </div>
      </div> */}
      <div className="z-10 flex flex-col px-4 rounded-2xl !w-full lg:min-w-[456px] xl:min-w-[584px] h-auto border shadow-md border-black/10 dark:border-white/20 backdrop-blur-sm bg-cream-high/[0.8] dark:bg-black/[0.8] will-change-transform transform-gpu">
        <div className="flex flex-row mb-4 pt-4 gap-3 items-center ">
          <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
            Book
          </p>
        </div>
        <div className="flex flex-col">
          {bookData.map((bookData, index, array) => {
            const isLast = index === array.length - 1;
            const ebookURL = isIndia
              ? bookData.linkURLeBookIN
              : bookData.linkURLeBookWorld;
            const paperbackURL = isIndia
              ? bookData.linkURLPaperbackIN
              : bookData.linkURLPaperbackWorld;
            return (
              <div
                key={bookData.educationIndex}
                className={`flex flex-col border border-cream/30 dark:border-gray/30 pt-3 pb-4 ${
                  isLast
                    ? "!rounded-b-2xl"
                    : "rounded-b-none border-b-accent-light dark:border-b-accent-dark"
                }`}
              >
                <div className="flex flex-row justify-between items-center w-full">
                  <p className="font-poppins group inline-flex gap-[6px] items-center text-xl w-fit font-semibold text-black dark:text-white">
                    {bookData.name}
                  </p>
                  <p className=" font-poppins tracking-wider text-base font-light text-black dark:text-white italic">
                    Published: {bookData?.published}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-stretch w-full border-t border-gray/30 dark:border-cream/30 mt-4 pt-4 gap-3">
                  <a
                    tabIndex={0}
                    aria-disabled={loading}
                    onClick={(e) => loading && e.preventDefault()}
                    href={ebookURL}
                    className="font-poppins cursor-pointer text-black min-h-[200px] dark:text-cream hover:text-accent-light dark:hover:text-accent-dark group flex-1 flex flex-col items-center justify-center gap-2 tracking-wider text-xl font-semibold border border-gray/30 dark:border-cream-high/30 rounded-xl py-4 px-3 transition-all duration-300 hover:border-accent-light dark:hover:border-accent-dark bg-cream-high/[0.8] dark:bg-black/[0.8] dark:hover:bg-accent-dark/[0.05] hover:bg-accent-light/[0.06]"
                  >
                    <Kindle className="w-[80px] h-[80px]" />
                    <span className="inline-flex items-center gap-[6px] pt-3">
                      Buy eBook
                      <ArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-1 fill-black dark:fill-white group-hover:fill-accent-light group-hover:dark:fill-accent-dark" />
                    </span>
                  </a>
                  <a
                    tabIndex={0}
                    aria-disabled={loading}
                    onClick={(e) => loading && e.preventDefault()}
                    href={paperbackURL}
                    className="font-poppins group cursor-pointer text-black min-h-[200px] dark:text-cream hover:text-accent-light dark:hover:text-accent-dark group flex-1 flex flex-col items-center justify-center gap-2 tracking-wider text-xl font-semibold border border-gray/30 dark:border-cream-high/30 rounded-xl py-4 px-3 transition-all duration-300 hover:border-accent-light dark:hover:border-accent-dark bg-cream-high/[0.8] dark:bg-black/[0.8] dark:hover:bg-accent-dark/[0.05] hover:bg-accent-light/[0.06]"
                  >
                    <Paperback className="w-[80px] h-[80px]" />
                    <span className="inline-flex items-center gap-[6px] pt-3">
                      Buy Paperback
                      <ArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-1 fill-black dark:fill-white group-hover:fill-accent-light group-hover:dark:fill-accent-dark" />
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="z-10 flex flex-col px-4 rounded-2xl !w-full lg:min-w-[456px] xl:min-w-[584px] h-auto border shadow-md border-black/10 dark:border-white/20 backdrop-blur-sm bg-cream-high/[0.8] dark:bg-black/[0.8] will-change-transform transform-gpu">
        <div className="flex flex-row mb-4 pt-4 gap-3 items-center ">
          <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
            About
          </p>
        </div>
        <div className="flex flex-col mb-5 border-t border-gray/30 dark:border-cream/30 mt-1 pt-4">
          <p className="font-poppins items-center text-lg w-fit font-normal tracking-wider text-black dark:text-white">
            Inspired by actual events, this powerful novel unravels the untold
            stories of bravery, fear, and sacrifice during the Pathankot Airbase
            terror attack, where ordinary lives met extraordinary courage. Right
            from the making of a terrorist to the end. It shows the psychology
            of terrorism, the war industry and the involvement of power and
            money as the driving force. Providing a deep dive into the mysteries
            and thrills of how our world works, along with a humanitarian
            approach for a better future.
          </p>
        </div>
      </div>
      {/* <div className="z-10 flex flex-col px-4 rounded-2xl !w-full h-auto border shadow-md border-black/10 dark:border-white/20 backdrop-blur-sm bg-cream dark:bg-black will-change-transform transform-gpu">
        <div className="flex flex-row pt-4 gap-3 items-center ">
          <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
            Services
          </p>
        </div>
        <div
          className={`flex flex-row items-center w-full border-t border-gray/30 dark:border-cream/30 mt-4 pt-4`}
        >
          <p className="font-poppins gap-[6px] w-full tracking-wider text-base font-normal text-black dark:text-white">
            Services produced upon request. Please reach out via{" "}
            <span
              href="mailto:contact@uditmalhotra.in"
              className="font-bold cursor-pointer text-accent-light dark:text-accent-dark hover:underline"
            >
              contact@uditmalhotra.in
            </span>{" "}
            for more details.
          </p>
        </div>
        <div
          className={`flex flex-row items-center justify-between w-full border-t border-gray/30 dark:border-cream/30 mt-4 pt-4`}
        >
          <p className="font-poppins gap-[6px] tracking-wider text-base font-normal text-black dark:text-white">
            Content/Article writing
          </p>
          <p className="font-poppins text-right gap-[6px] tracking-wider text-base font-light text-accent-light dark:text-accent-dark">
            ₹5 / word
          </p>
        </div>
        <div
          className={`flex flex-row items-center justify-between w-full border-t border-gray/30 dark:border-cream/30 mt-4 pt-4`}
        >
          <p className="font-poppins gap-[6px] tracking-wider text-base font-normal text-black dark:text-white">
            Book cover desiging (PNG, PDF)
          </p>
          <p className="font-poppins text-right gap-[6px] tracking-wider text-base font-light text-accent-light dark:text-accent-dark">
            ₹10,000 onwards
          </p>
        </div>
        <div
          className={`flex flex-row items-center justify-between w-full border-t border-gray/30 dark:border-cream/30 mt-4 pt-4`}
        >
          <p className="font-poppins gap-[6px] max-w-[70%] tracking-wider text-base font-normal text-black dark:text-white">
            Book editing and format conversion (ePub, Mobi, PDF)
          </p>
          <p className="font-poppins text-right gap-[6px] tracking-wider text-base font-light text-accent-light dark:text-accent-dark">
            ₹2 / word
          </p>
        </div>
        <div
          className={`flex flex-row items-center justify-between w-full border-t border-gray/30 dark:border-cream/30 mt-4 py-4`}
        >
          <p className="font-poppins gap-[6px] tracking-wider text-base font-normal text-black dark:text-white">
            Research and consulting
          </p>
          <p className="font-poppins text-right gap-[6px] tracking-wider text-base font-light text-accent-light dark:text-accent-dark">
            ₹10,000 / hour
          </p>
        </div>
        <div
          className={`flex flex-row items-center justify-between w-full border-t border-gray/30 dark:border-cream/30 mt-4 py-4`}
        >
          <p className="font-poppins gap-[6px] italic tracking-wider text-sm font-light text-black dark:text-white">
            * Prices are given for estimation purposes. Final pricing may vary
            depending on the project scope.
          </p>
        </div>
      </div> */}
    </div>
  );
};
