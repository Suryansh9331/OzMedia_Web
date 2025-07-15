import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "font-montserrat font-bold text-lg transition-all duration-200 focus:outline-none transform active:scale-95";

  const variantClasses = {
    primary:
      "bg-[#FCC735] text-black hover:bg-[#fd4360] shadow-md hover:shadow-lg",
    outline:
      "border  text-primary-red  hover:text-white shadow-md hover:shadow-lg",
    text: "text-black hover:underline",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
