import React from "react";
interface ChipProps {
  text: string;
}

const Chip = (props: ChipProps) => {
  const { text } = props;
  return (
    <div className="rounded-full border border-gray dark:border-cream py-0.5 px-1.5 text-center text-sm font-light transition-all shadow-sm text-gray dark:text-cream">
      {text}
    </div>
  );
};

export default Chip;
