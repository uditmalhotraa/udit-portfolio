export const Header = () => {
  return (
    <>
      <div className="fixed flex flex-row justify-between items-center w-full h-16 px-4 shadow-container bg-cream/40 dark:bg-gray/40 backdrop-blur-lg z-20">
        <a
          href="/udit-portfolio"
          className=" font-poppins text-3xl font-semibold tracking-wider text-accent-light dark:text-accent-dark dark:text-accent-dark-dark"
        >
          Udit<span className="ml-[2px] font-thin">Malhotra</span>
        </a>
        <a
          href="mailto:uditmalhotra98@gmail.com"
          className="px-3 py-2 border font-semibold tracking-wide border-accent-light dark:border-accent-dark hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 bg-accent-light dark:bg-accent-dark text-cream dark:text-gray rounded-lg"
        >
          Contact
        </a>
      </div>
    </>
  );
};
