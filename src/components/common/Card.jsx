import React from "react";

const Card = ({ title, description, icon, className }) => {
  return (
    <div
      className={`
    hover:bg-gradient-to-b 
    hover:from-[#E3E3E3]/5
    hover:to-white/10
    border-[1px] hover:border-[#fd4360] border-white 
    rounded-2xl p-8 
    transition-all duration-300 ${className}`}
    >
      {icon && <img src={icon} className="mb-4 h-14" alt="icon" />}
      <h3 className="text-[#fd4360] font-montserrat font-bold text-2xl mb-4">
        {title}
      </h3>
      <p className="text-white font-roboto text-base">{description}</p>
    </div>
  );
};

export default Card;
