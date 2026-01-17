import { useState } from "react";
import book from "../data/book.json";
import ArrowRightIcon from "../assets/ArrowRightIcon";

export const Home = () => {
  const [bookData] = useState(book);

  return (
    <div className="flex flex-col w-full gap-12">
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
      <div className="z-10 flex flex-col px-4 rounded-2xl !w-full h-auto border shadow-md border-black/10 dark:border-white/20 backdrop-blur-sm bg-cream dark:bg-black will-change-transform transform-gpu">
        <div className="flex flex-row mb-4 pt-4 gap-3 items-center ">
          <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
            Product(s)
          </p>
        </div>
        <div className="flex flex-col">
          {bookData.map((bookData, index, array) => {
            const isLast = index === array.length - 1;
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
                {bookData?.detail.map((bookDataDetail) => (
                  <div
                    key={bookDataDetail.detailIndex}
                    className={`flex flex-row items-center w-full border-t border-gray/30 dark:border-cream/30 mt-4 pt-4`}
                  >
                    <a
                      href={bookDataDetail?.linkURL}
                      className={`font-poppins text-black dark:text-white hover:text-accent-light dark:hover:text-accent-dark group gap-[6px] items-center !justify-between inline-flex w-full tracking-wider text-base font-normal mr-3`}
                    >
                      {bookDataDetail?.link}
                      <ArrowRightIcon
                        className={`transition-all duration-300 transform group-hover:translate-x-1 fill-accent-light dark:fill-accent-dark`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="z-10 flex flex-col px-4 rounded-2xl !w-full h-auto border shadow-md border-black/10 dark:border-white/20 backdrop-blur-sm bg-cream dark:bg-black will-change-transform transform-gpu">
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
      </div>
    </div>
  );
};
