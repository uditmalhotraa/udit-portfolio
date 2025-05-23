import React from "react";
interface ChipProps {
  text: string;
  type: "filled" | "outlined";
}

const Chip = (props: ChipProps) => {
  const { text, type } = props;
  return (
    <div
      className={`rounded-full border border-gray dark:border-cream py-0.5 px-1.5 text-center text-sm font-light transition-all shadow-sm text-gray dark:text-cream ${
        type === "filled" ? "bg-accent-dark/40 dark:bg-accent-light/40" : "bg-transparent"
      }`}
    >
      {text}
    </div>
  );
};

export default Chip;
