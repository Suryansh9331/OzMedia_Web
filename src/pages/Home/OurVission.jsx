import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OurVision = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#visionSection",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 1,
      },
    });

    tl.from("#title2", {
      y: 200,
      opacity: 0,
      ease: "power2.out",
      duration: 1.5,
    }).from(
      "#img2",
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
      id="visionSection"
      className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-4 sm:px-10 lg:px-20 py-2"
    >
      {/* Right Image Section */}
      <div
        id="img2"
        className="w-full lg:w-1/2 flex justify-center items-center p-10"
      >
        <img
          src="/Assets/Group 44236.png"
          alt="Our Vision"
          className="h-full"
        />
      </div>

      {/* Left Text Content */}
      <div
        id="title2"
        className="w-full lg:w-1/2 flex flex-col gap-10 justify-center text-center lg:text-left max-w-3xl"
      >
        <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl bg-gradient-to-r from-[#2C0659] to-[#A6409B] bg-clip-text text-transparent font-display">
          OUR VISION
        </h2>

        <h3 className="text-purple font-bold text-xl sm:text-3xl lg:text-4xl leading-tight font-display">
          Empowering Brands to Lead the Future of Digital Innovation
        </h3>

        <p className=" sm:text-lg lg:text-2xl font-display ">
          To be the ultimate digital powerhouse, where marketing and technology
          converge to shape the future of brands. We envision a world where
          businesses don't just adapt to digital trends but lead them with
          innovation, precision, and impact.
        </p>
        <p className="text-base sm:text-lg lg:text-2xl">
          Through AI-driven strategies, immersive digital experiences, and
          seamless IT solutions, we strive to transform businesses into market
          leaders, ensuring they thrive in an ever-evolving digital landscape.
        </p>
      </div>
    </section>
  );
};

export default OurVision;
