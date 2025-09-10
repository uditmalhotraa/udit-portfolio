import React from "react";
interface ChipProps {
  text: string;
  type: "filled" | "outlined";
}

const Chip = (props: ChipProps) => {
  const { text, type } = props;
  return (
    <div
      className={`rounded-full border py-0.5 px-1.5 text-center text-sm font-light transition-all shadow-sm bg-white dark:bg-black ${
        type === "filled"
          ? "border-accent-light dark:border-accent-dark/70 text-accent-light dark:text-accent-dark/70"
          : "border-gray dark:border-cream text-gray dark:text-cream"
      }`}
    >
      {text}
    </div>
  );
};

export default Chip;
