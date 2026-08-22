import React from "react";
interface ChipProps {
  text: string;
  className?: string;
}

const Chip = (props: ChipProps) => {
  const { text } = props;
  return (
      <div
        className={`${props.className} text-ink font-display bg-neutral-secondary-medium box-border border border-default-medium shadow-xs font-medium leading-4 rounded-full text-xs px-2.5 py-1 focus:outline-none`}
      >
        {text}
      </div>
  );
};

export default Chip;
