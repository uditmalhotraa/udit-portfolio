export const Header = () => {

  return (
    <>
      <div className="z-50 fixed flex flex-row justify-between items-center w-[calc(100%-2rem)] mt-4 h-16 px-4 mx-4 shadow-sm bg-panel-dark backdrop-blur-md border border-rule-dark rounded-[16px]">
        <a
          href="/"
          className="!font-title uppercase text-3xl tracking-wider text-field-dark"
        >
          Udit<span className="ml-[2px]"> Malhotra</span>
        </a>
      </div>
    </>
  );
};
