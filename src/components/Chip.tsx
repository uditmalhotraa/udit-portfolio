import React from "react";
interface ChipProps {
  text: string;
  type: "filled" | "outlined";
  className?: string;
}

const Chip = (props: ChipProps) => {
  const { text, type } = props;
  return (
    <div
      className={`${props.className} rounded-[8px] !z-[999] border py-0.5 px-2.5 text-center text-base font-body font-medium transition-all shadow-sm ${
        type === "filled"
          ? "border-accent-light dark:border-brass-dark !bg-none dark:bg-none text-brass dark:text-brass-dark"
          : "border-ink dark:ink-dark text-ink dark:text-ink-dark"
      }`}
    >
      {text}
    </div>
  );
};

export default Chip;
