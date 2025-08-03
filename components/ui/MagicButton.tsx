import React from "react";
interface ButtonProps {
  title: string;
  position?: string;
  otherClasses?: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
}

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: ButtonProps) => {
  return (
    <button
      className="w-full relative inline-flex h-12 overflow-hidden rounded-lg
     p-[1px] md:w-60 md:mt-10"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`${otherClasses} gap-2 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7  text-sm font-medium text-white backdrop-blur-3xl`}
      >
        {position == "left" && icon}
        {title}
        {position == "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
