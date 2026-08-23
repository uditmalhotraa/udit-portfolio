export const Header = () => {

  return (
    <>
      <div className="z-50 fixed flex flex-row justify-between items-center w-[calc(100%-2rem)] mt-4 h-12 lg:h-16 px-5 lg:px-4 mx-4 shadow-sm bg-panel-dark/[0.5] backdrop-blur-2xl border border-rule-dark rounded-[16px]">
        <a
          href="/"
          className="!font-stencil font-[700] uppercase text-lg lg:text-2xl tracking-wider text-field-dark"
        >
          Udit<span className="ml-[2px] font-[400]"> Malhotra</span>
        </a>
      </div>
    </>
  );
};
