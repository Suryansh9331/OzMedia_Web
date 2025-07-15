import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AnimatedToggleIcon = ({
  isOpen,
  openIcon = <FaMinus />,
  closeIcon = <FaPlus />,
  size = "text-xl",
  openColor = "text-red-500",
  closeColor = "text-white",
  onClick,
}) => {
  console.log(isOpen);
  return (
    <div
      onClick={onClick}
      className={`transition-transform duration-300 ease-in-out transform ${
        isOpen ? `rotate-180 ${openColor}` : `rotate-0 ${closeColor}`
      } ${size}`}
    >
      {isOpen ? openIcon : closeIcon}
    </div>
  );
};

export default AnimatedToggleIcon;
