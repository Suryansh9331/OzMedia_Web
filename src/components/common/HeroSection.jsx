import React from "react";

const HeroSection = ({ title, leftImg, rightImg }) => {
  return (
    <section className="bg-[#D7D7E2] overflow-hidden lg:mt-16 mt-16  ">
      <div
        className="
          relative flex flex-col-reverse md:flex-row
          items-center justify-between
          h-[300px] sm:h-[400px] md:h-[600px]
          px-4 md:px-16
        "
      >
        {/* Left illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start z-10 mt-4 md:mt-0">
          <img
            src={leftImg}
            alt="Illustration"
            className="w-auto h-full max-h-full object-contain"
          />
        </div>

        {/* Right decorative + title overlay */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 relative">
          {/* Title */}
          <h1
            className="
              absolute inset-0 flex items-center justify-center
              px-4 text-3xl sm:text-4xl md:text-6xl
              bg-gradient-to-r from-[#073757] to-[#01154B]
              bg-clip-text text-transparent
            "
          >
            {title}
          </h1>

          {/* Decorative image */}
          <img
            src={rightImg}
            alt="Decorative"
            className="w-auto h-full -z-10  max-h-full object-contain animate-spin-slow"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
