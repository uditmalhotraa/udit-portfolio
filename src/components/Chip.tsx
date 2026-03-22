import React from "react";
interface ChipProps {
  text: string;
  type: "filled" | "outlined";
}

const Chip = (props: ChipProps) => {
  const { text, type } = props;
  return (
    <div
      className={`rounded-full border py-0.5 px-2 text-center text-base font-poppins font-light transition-all shadow-sm bg-cream dark:bg-black ${
        type === "filled"
          ? "border-accent-light dark:border-accent-light !bg-accent-light dark:bg-accent-light text-cream dark:text-cream"
          : "border-gray dark:border-cream text-gray dark:text-cream"
      }`}
    >
      {text}
    </div>
  );
};

export default Chip;
