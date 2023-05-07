export const Header = () => {
  return (
    <>
      <div className="fixed flex flex-row justify-between items-center w-full h-16 px-4 shadow-lg bg-white/60 backdrop-blur-md z-20">
        <a
          href="/"
          className=" font-poppins text-3xl font-semibold tracking-wider text-milka"
        >
          Udit<span className="ml-[2px] font-light">Malhotra</span>
        </a>
        <a
          href="mailto:uditmalhotra98@gmail.com"
          className="px-3 py-2 border font-medium tracking-wide border-milka hover:bg-milka/90 bg-milka text-white rounded-lg"
        >
          Contact
        </a>
      </div>
    </>
  );
};
