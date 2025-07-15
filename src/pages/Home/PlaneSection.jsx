import React, { useRef } from "react";
import plane from "../../assets/Svg/download.svg";
import { useGSAP } from "@gsap/react";

const PlaneSection = () => {
  const planeRef = useRef(null);
  const planeRef2 = useRef(null);

  useGSAP(() => {
    const screenWidth = window.innerWidth;
    const path = [
      { x: 0, y: 0 },
      { x: 200, y: 200 },
      { x: 400, y: -200 },
      { x: 800, y: 200 },
      { x: 1200, y: 0 },
      { x: 1600, y: -200 },
      { x: 2000, y: 200 },
      { x: 2400, y: -200 },
      { x: 2800, y: 200 },
      { x: 3200, y: 0 },
      { x: 3600, y: -200 },
      { x: 4000, y: 200 },
      { x: 4400, y: -200 },
      { x: 4800, y: 200 },
      { x: 5200, y: 0 },
    ];

    const path2 = [
      { x: screenWidth, y: 0 },
      { x: screenWidth / 3, y: -200 },
      { x: 200, y: 200 },
      { x: 0, y: 0 },
      { x: -200, y: -200 },
      { x: -screenWidth / 3, y: 100 },
      { x: -(2 * screenWidth) / 3, y: -200 },
      { x: -screenWidth, y: -10 },
    ];

    gsap.to(planeRef2.current, {
      motionPath: {
        path: path2,
        curviness: 1.5,
        autoRotate: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: "#planeSec",
        start: "center bottom",
        end: "top top",
        scrub: true,
        // markers: true,
      },
    });

    gsap.to(planeRef.current, {
      motionPath: {
        path,
        curviness: 1.5,
        autoRotate: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: "#planeSec",
        start: "center bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, []);
  return (
    <section
      id="planeSec"
      className="bg-red-300 min-h-screen relative flex items-center justify-center overflow-visible"
    >
      {/* Top Plane */}
      <img
        id="planeSvg"
        ref={planeRef}
        src={plane}
        alt="plane"
        className="h-20 sm:h-32 md:h-48 lg:h-64 w-auto rotate-12 absolute -left-20 sm:-left-32 md:-left-60 top-0 z-0"
      />

      {/* Content in Normal Flow */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-10 flex flex-col gap-6 md:gap-10 font-bold text-left">
        <h1 className="text-[#fd4360] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-montserrat">
          Next-Level Innovation, <br className="hidden sm:block" />
          Next-Level Impact
        </h1>

        <p className="text-white/80 text-base sm:text-lg md:text-2xl lg:text-3xl font-normal font-display leading-relaxed">
          Oz Media Planet is a powerhouse where cutting-edge technology meets
          high-impact digital marketing. We are not just a service provider—we
          are creators, disruptors, and growth accelerators. With expertise in
          digital marketing and IT development, we engineer brands that dominate
          and build technology that scales.
        </p>
      </div>

      {/* Bottom Plane */}
      <img
        ref={planeRef2}
        src={plane}
        alt="plane"
        className="h-16 sm:h-24 md:h-36 lg:h-48 w-auto absolute bottom-0 right-0 rotate-[200deg] z-0"
      />
    </section>
  );
};

export default PlaneSection;
