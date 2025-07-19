// import React from "react";
// import svg from "../../assets/Group 12.png";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const OurMission = () => {
//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#missionSection",
//         start: "20% 60%",
//         end: "20% 20%",
//         scrub: 1,
//       },
//     });

//     tl.from("#title", {
//       y: 200,
//       opacity: 0,
//       ease: "power2.out",
//       duration: 1.5,
//     }).from(
//       "#img",
//       {
//         y: 200,
//         opacity: 0,
//         ease: "power2.out",
//         duration: 1.5,
//       },
//       "+=1"
//     );
//   }, []);

//   return (
//     <section
//       id="missionSection"
//       className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 sm:px-10 lg:px-20 py-2"
//     >
//       {/* Left Content */}
//       <div
//         id="title"
//         className="w-full lg:w-1/2 flex flex-col gap-10 justify-center text-center lg:text-left  max-w-3xl "
//       >
//         <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl bg-gradient-to-r from-[#482300] to-[#AE5500] bg-clip-text text-transparent font-display">
//           OUR MISSION
//         </h2>
//         <h3 className="text-purple font-bold text-xl sm:text-3xl lg:text-4xl  leading-tight font-display ">
//           Shaping the Future of Digital Innovation and Growth.
//         </h3>
//         <p className=" sm:text-lg lg:text-2xl font-display ">
//           To redefine the digital world by blending creativity, technology, and
//           strategy into seamless brand experiences. We don't just market—we
//           create, innovate, and build digital ecosystems that engage, inspire,
//           and convert.
//         </p>
//         <p className="text-base sm:text-lg lg:text-2xl">
//           Every project is an opportunity to push boundaries and set new
//           industry standards.
//         </p>
//       </div>

//       {/* Right Image Content */}
//       <div
//         id="img"
//         className="w-full lg:w-1/2 flex justify-center items-center p-10"
//       >
//         <img
//           src="/Assets/Group 44235.png"
//           alt="Our Mission"
//           className="h-full"
//         />
//       </div>
//     </section>
//   );
// };

// export default OurMission;







// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// import plane from "../../assets/images/plane.png";

// gsap.registerPlugin(MotionPathPlugin);

// const OurMission = () => {
//   const planeRef = useRef(null);

//   useEffect(() => {
//     // Animate text on load
//     const tl = gsap.timeline();

//     tl.from("#missionTitle", {
//       opacity: 0,
//       y: 80,
//       duration: 1,
//       ease: "power2.out",
//     })
//       .from(
//         "#missionSub",
//         {
//           opacity: 0,
//           y: 50,
//           duration: 1,
//           ease: "power2.out",
//         },
//         "-=0.5"
//       )
//       .from(
//         "#missionPoints li",
//         {
//           opacity: 0,
//           y: 30,
//           stagger: 0.2,
//           ease: "power2.out",
//         },
//         "-=0.4"
//       )
//       .from(
//         "#missionImage",
//         {
//           opacity: 0,
//           x: 100,
//           duration: 1,
//           ease: "power2.out",
//         },
//         "-=1"
//       );

//     // Animate plane automatically
//     gsap.to(planeRef.current, {
//       motionPath: {
//         path: [
//           { x: 0, y: 0 },
//           { x: 300, y: -80 },
//           { x: 600, y: -180 },
//           { x: 1000, y: -400 },
//         ],
//         curviness: 1.25,
//         autoRotate: true,
//       },
//       duration: 6,
//       ease: "power2.inOut",
//       repeat: -1,
//     });
//   }, []);

//   return (
//     <section
//       id="missionSection"
//       className="relative w-full px-6 sm:px-10 md:px-16 lg:px-24 py-14 overflow-hidden"
//     >
//       {/* Flying Plane Animation */}
//       <img
//         src={plane}
//         alt="Flying Plane"
//         ref={planeRef}
//         className="w-14 sm:w-20 absolute bottom-0 left-0 z-50"
//       />

//       <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
//         {/* Mission Text */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-8 max-w-3xl">
//           <h2
//             id="missionTitle"
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold relative inline-block font-display bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-500 text-transparent bg-clip-text"
//           >
//             OUR MISSION
//             <span className="absolute left-0 -bottom-2 w-28 h-1 bg-pink-500"></span>
//           </h2>

//           <p
//             id="missionSub"
//             className="text-lg sm:text-xl font-semibold leading-relaxed  text-black  bg-clip-text"
//           >
//             To empower businesses of all sizes with impactful digital strategies,
//             innovative IT solutions, and compelling brand promotions that drive
//             measurable results in engagement, lead generation, and revenue growth.
//           </p>

//           <ul
//             id="missionPoints"
//             className="list-disc list-inside space-y-3 text-gray-700 text-base sm:text-lg font-medium"
//           >
//             <li>Solve real business problems</li>
//             <li>Enhance market competitiveness</li>
//             <li>Create meaningful connections between brands and their audiences</li>
//           </ul>
//         </div>

//         {/* Mission Visual Image */}
//         <div
//           id="missionImage"
//           className="w-full lg:w-1/2 flex justify-center items-center"
//         >
//           <img
//             src="/Assets/Group 44235.png"
//             alt="Our Mission"
//             className="max-w-full h-auto object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurMission;



import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import plane from "../../assets/images/plane.png"; // ✅ Update if needed

gsap.registerPlugin(MotionPathPlugin);

const OurMission = () => {
  const planeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#missionSection",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        once: false,
      },
    });

    // Set initial positions
    gsap.set("#main-title", { x: -200, opacity: 0, scale: 0.8, rotationY: -45 });
    gsap.set("#mission-text", { x: -150, opacity: 0, rotationX: 20 });
    gsap.set("#commitment-title", { x: -120, opacity: 0, skewX: -10 });
    gsap.set(".mission-point", { x: -100, opacity: 0, rotationY: -20 });
    gsap.set("#cta-button", { x: -80, opacity: 0, scale: 0.5, rotation: -45 });
    gsap.set("#img", { x: 300, opacity: 0, scale: 0.7, rotationY: 45 });
    gsap.set("#img-decorations", { x: 200, opacity: 0, scale: 0.5 });

    // Entrance animations
    tl.to("#main-title", {
      x: 0,
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1.5,
      ease: "power3.out",
    })
      .to("#mission-text", {
        x: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "power2.out",
      }, "-=1")
      .to("#commitment-title", {
        x: 0,
        opacity: 1,
        skewX: 0,
        duration: 1,
        ease: "power2.out",
      }, "-=0.8")
      .to(".mission-point", {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        ease: "back.out(1.2)",
        stagger: 0.15,
      }, "-=0.6")
      .to("#cta-button", {
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(2)",
      }, "-=0.4")
      .to("#img", {
        x: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        ease: "power3.out",
      }, "-=1.2")
      .to("#img-decorations", {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.5)",
        stagger: 0.1,
      }, "-=0.8");

    // CTA button bounce
    // gsap.to("#cta-button", {
    //   y: -8,
    //   duration: 2.5,
    //   ease: "sine.inOut",
    //   repeat: -1,
    //   yoyo: true,
    //   delay: 1,
    // });

    // Title shimmer effect
    // gsap.to("#main-title", {
    //   backgroundPosition: "200% 0%",
    //   duration: 3,
    //   ease: "none",
    //   repeat: -1,
    //   delay: 2,
    // });

    // Background decoration spin
    gsap.to("#bg-decoration", {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    // Flying Plane Animation
    gsap.to(planeRef.current, {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 300, y: -80 },
          { x: 600, y: -180 },
          { x: 1000, y: -400 },
          { x: 1200, y: -500 },
          { x: 1400, y: -600 },
          { x: 1600, y: -800 },
        ],
        curviness: 1.25,
        autoRotate: true,
      },
      duration: 8,
      ease: "power2.inOut",
      repeat: -1,
    });

  }, []);

  return (
    <section
      id="missionSection"
      className="relative flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-2 px-8 lg:px-24 py-2 h-auto  overflow-hidden"
    >
      {/* ✨ Background Effects */}
      <div id="bg-decoration" className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#AE5500]/5 to-[#FFB800]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-[#482300]/10 to-[#AE5500]/5 rounded-full blur-2xl -z-10"></div>

      {/* ✏️ Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-12 justify-center text-center lg:text-left max-w-2xl">

        <h1
          id="main-title"
          className="font-bold text-6xl sm:text-7xl lg:text-7xl leading-tight tracking-tight"
          style={{
            background: "linear-gradient(135deg, #482300 0%, #AE5500 25%, #FFB800 50%, #AE5500 75%, #482300 100%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          Our Mission
        </h1>

        <div id="mission-text" className="space-y-2">
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-700 font-medium tracking-wide">
            To <span className="font-semibold text-slate-800 bg-gradient-to-r from-[#AE5500]/10 to-[#FFB800]/10 px-2 py-1 rounded">empower businesses</span> of all sizes with impactful digital strategies, innovative IT solutions, and compelling brand promotions that drive measurable results in <span className="font-semibold text-slate-800">engagement</span>, <span className="font-semibold text-slate-800">lead generation</span>, and <span className="font-semibold text-slate-800">revenue growth</span>.
          </p>
        </div>

        <div className="space-y-4">
          <h3 id="commitment-title" className="text-2xl lg:text-3xl font-semibold text-slate-800 tracking-wide">
            Our Commitment
          </h3>

          <div className="space-y-4">
            {[
              {
                title: "Solve Real Business Problems",
                desc: "Identifying core challenges and delivering targeted solutions that create tangible business value and operational efficiency."
              },
              {
                title: "Enhance Market Competitiveness",
                desc: "Positioning brands at the forefront of their industries through innovative strategies and cutting-edge technology implementation."
              },
              {
                title: "Create Meaningful Connections",
                desc: "Building authentic relationships between brands and audiences that foster loyalty, trust, and long-term engagement."
              },
            ].map((item, i) => (
              <div key={i} className="mission-point flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-[#AE5500] to-[#FFB800] rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-slate-600 front-normal text-lg ">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🧭 Minimal Learn More Button */}
        <div className="flex justify-center lg:justify-start mt-2">
          <button
            id="cta-button"
            className="px-6 py-3 rounded-full border-2 border-[#AE5500] text-[#AE5500] font-semibold text-lg hover:bg-[#AE5500]/10 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* 🖼️ Right Image Content */}
      <div id="img" className="w-full lg:w-1/2 flex justify-center items-center relative">
        <div className="relative group">
          <img
            src="/Assets/Group 44235.png"
            alt="Our Mission Visualization"
            className="h-[400px] lg:h-[650px] object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#AE5500]/8 via-[#FFB800]/5 to-[#482300]/8 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
          <div className="absolute top-10 -left-5 w-6 h-6 bg-gradient-to-r from-[#FFB800] to-[#AE5500] rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 -right-8 w-4 h-4 bg-gradient-to-r from-[#AE5500] to-[#482300] rounded-full opacity-50 animate-bounce" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute top-1/3 -right-10 w-5 h-5 bg-[#FFB800] rounded-full opacity-30 animate-ping" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>

      {/* ✈️ Flying Plane */}
      <img
        ref={planeRef}
        src={plane}
        alt="Flying Plane"
        className="w-14 sm:w-20 absolute bottom-0 left-0 z-40"
      />
    </section>
  );
};

export default OurMission;
