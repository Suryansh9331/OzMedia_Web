import React from "react";

const FeatureSection = ({ title, description, imgSrc, reverse = false }) => {
  return (
    <section
      className={`flex flex-col-reverse md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center my-12 md:my-20`}
    >
      {/* Text */}
      <div className="w-full md:w-1/2 px-6 md:px-12">
        <h2 className="text-2xl md:text-6xl font-extrabold text-[#0F294D]">
          {title}
        </h2>
        <div className="w-full border-t-2 border-[#073757] my-8"></div>
        <p className="text-black text-xl leading-relaxed">{description}</p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 px-6 md:px-12 mb-8 md:mb-0">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
