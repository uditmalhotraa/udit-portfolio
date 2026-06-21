import React from "react";
interface ChipProps {
  text: string;
  type: "filled" | "outlined";
}

const Chip = (props: ChipProps) => {
  const { text, type } = props;
  return (
    <div
      className={`rounded-[8px] border py-0.5 px-2.5 text-center text-base font-poppins font-medium tracking-wider transition-all shadow-sm ${
        type === "filled"
          ? "border-accent-light dark:border-accent-light !bg-none dark:bg-none text-accent-light dark:text-accent-light"
          : "border-gray dark:border-cream text-gray dark:text-cream"
      }`}
    >
      {text}
    </div>
  );
};

export default Chip;
