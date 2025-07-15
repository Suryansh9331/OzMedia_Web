import React from "react";
import BlackArrow from "../../assets/elements/download (1).svg";
import WhiteArrow from "../../assets/images/download.svg";

const Button = ({
  label = "Start Ranking Now",
  variant = "filled",
  className = "",
  ...props
}) => {
  const isOutlined = variant === "outlined";

  const buttonClasses = `
    group inline-flex items-center justify-around gap-2 m-2
    p-2 px-2 md:px-2 lg:px-2
    text-base md:text-lg font-bold rounded-full transition-colors
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6E4FFF]
    ${
      isOutlined
        ? "bg-white border-2 border-[#3C27C4] text-[#3C27C4] hover:text-white hover:bg-[#3C27C4]"
        : "bg-[#4E2FDA] border border-transparent text-white hover:bg-[#3C27C4]"
    }
    ${className}
  `;

  const iconClasses = `
    transform transition-transform duration-300 ease-in-out group-hover:rotate-45
    h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center box-border
    ${isOutlined ? "bg-[#4E2FDA]" : "bg-white"}
  `;

  const iconSrc = isOutlined ? WhiteArrow : BlackArrow;

  return (
    <button type="button" className={buttonClasses} {...props}>
      <span className="text-center">{label}</span>
      <span className={iconClasses}>
        <img src={iconSrc} alt="" />
      </span>
    </button>
  );
};

export default Button;
