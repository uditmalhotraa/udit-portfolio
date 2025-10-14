import { useState } from "react";
import book from "../data/book.json";
import article from "../data/article.json";
import ArrowRightIcon from "../assets/ArrowRightIcon";

export const Home = () => {
  const [bookData] = useState(book);
  const [articleData] = useState(article);

  return (
    <div className="flex flex-col w-full gap-12">
      <div className="z-10 flex flex-col px-4 rounded-2xl !w-full h-auto border shadow-md border-black/10 dark:border-white/20 backdrop-blur-sm bg-white dark:bg-black will-change-transform transform-gpu">
        <div className="flex flex-row mb-4 pt-4 gap-3 items-center ">
          <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
            Book(s)
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
                      className="font-poppins group gap-[6px] items-center !justify-between inline-flex w-full tracking-wider text-base font-normal text-black dark:text-white hover:text-accent-light dark:hover:text-accent-dark mr-3"
                    >
                      {bookDataDetail?.link}
                      <ArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-1 fill-black dark:fill-white group-hover:fill-accent-light dark:group-hover:fill-accent-dark" />
                    </a>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="z-10 flex flex-col px-4 rounded-2xl !w-full h-auto border shadow-md border-black/10 dark:border-white/20 backdrop-blur-sm bg-white dark:bg-black will-change-transform transform-gpu">
        <div className="flex flex-row pt-4 gap-3 items-center ">
          <p className=" font-poppins text-3xl font-medium tracking-wide text-accent-light dark:text-accent-dark">
            Articles
          </p>
        </div>
        <div className="flex flex-col pb-4">
          {articleData.map((articleData) => {
            return (
              <div
                key={articleData.articleIndex}
                className={`flex flex-row items-center w-full border-t border-gray/30 dark:border-cream/30 mt-4 pt-4`}
              >
                <a
                  href={articleData.articleURL}
                  className="font-poppins group gap-[6px] items-center w-full !justify-between inline-flex tracking-wider text-base font-normal text-black dark:text-white hover:text-accent-light dark:hover:text-accent-dark mr-3"
                >
                  {articleData?.articleName}
                  <span>
                    <ArrowRightIcon className="transition-all !w-3 !h-3 duration-300 transform group-hover:translate-x-1 fill-black dark:fill-white group-hover:fill-accent-light dark:group-hover:fill-accent-dark" />
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
