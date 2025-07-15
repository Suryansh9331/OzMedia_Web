import React from "react";
import svg from "../../assets/Group 12.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OurMission = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#missionSection",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 1,
      },
    });

    tl.from("#title", {
      y: 200,
      opacity: 0,
      ease: "power2.out",
      duration: 1.5,
    }).from(
      "#img",
      {
        y: 200,
        opacity: 0,
        ease: "power2.out",
        duration: 1.5,
      },
      "+=1"
    );
  }, []);

  return (
    <section
      id="missionSection"
      className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 sm:px-10 lg:px-20 py-10"
    >
      {/* Left Content */}
      <div
        id="title"
        className="w-full lg:w-1/2 flex flex-col gap-10 justify-center text-center lg:text-left  max-w-3xl "
      >
        <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl bg-gradient-to-r from-[#482300] to-[#AE5500] bg-clip-text text-transparent font-display">
          OUR MISSION
        </h2>
        <h3 className="text-purple font-bold text-xl sm:text-3xl lg:text-4xl  leading-tight font-display ">
          Shaping the Future of Digital Innovation and Growth.
        </h3>
        <p className=" sm:text-lg lg:text-2xl font-display ">
          To redefine the digital world by blending creativity, technology, and
          strategy into seamless brand experiences. We don't just market—we
          create, innovate, and build digital ecosystems that engage, inspire,
          and convert.
        </p>
        <p className="text-base sm:text-lg lg:text-2xl">
          Every project is an opportunity to push boundaries and set new
          industry standards.
        </p>
      </div>

      {/* Right Image Content */}
      <div
        id="img"
        className="w-full lg:w-1/2 flex justify-center items-center p-10"
      >
        <img
          src="/Assets/Group 44235.png"
          alt="Our Mission"
          className="h-full"
        />
      </div>
    </section>
  );
};

export default OurMission;
