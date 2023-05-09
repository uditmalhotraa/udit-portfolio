export const Header = () => {
  return (
    <>
      <div className="fixed flex flex-row justify-between items-center w-full h-16 px-4 shadow-lg dark:shadow-darkContainer bg-white/60 dark:bg-black/40 backdrop-blur-md z-20">
        <a
          href="/"
          className=" font-poppins text-3xl font-semibold tracking-wider text-milka dark:text-milka"
        >
          Udit<span className="ml-[2px] font-light">Malhotra</span>
        </a>
        <a
          href="mailto:uditmalhotra98@gmail.com"
          className="px-3 py-2 border font-semibold tracking-wide border-milka dark:border-milka hover:bg-milka/90 dark:hover:bg-milka/90 bg-milka dark:bg-milka text-white rounded-lg"
        >
          Contact
        </a>
      </div>
    </>
  );
};
