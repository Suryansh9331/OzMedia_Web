// import React from "react";
// import Flower3Icon from "../../assets/icons/flower3.svg";
// import Flower1Icon from "../../assets/icons/flower.svg";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TagSection = () => {
//   useGSAP(() => {
//     const tl = gsap.timeline();

// const animateText = (id, yOffset = 100, duration = 1, position = "-=0.6") => {
//   tl.from(
//     id,
//     {
//       y: yOffset,
//       opacity: 0,
//       ease: "power2.out",
//       duration,
//       scrollTrigger: {
//         trigger: "#tagLineSection",
//         start: "20% 60%",
//         end: "20% 20%",
//         scrub: 1,
//       },
//     },
//     position
//   );
// };


//     animateText("#text1", 200, 1.2);
//     animateText("#text2", 200, 1.2,'');

//     const animateElement = (id, xOffset, rotate = "360deg", duration = 1) => {
//       tl.from(
//         id,
//         {
//           x: xOffset,
//           opacity: 0,
//           ease: "power2.out",
//           duration,
//           rotate,
//           scrollTrigger: {
//             trigger: "#tagLineSection",
//             start: "20% 60%",
//             end: "20% 20%",
//             scrub: 1,
//           },
//         },
//         "-=0.6"
//       );
//     };

//     animateElement("#star", 900);
//     animateElement("#flower", -900);
//   }, []);

//   return (
//     <section
//       id="tagLineSection"
//       className="bg-teal-200 h-[80vh] rounded-3xl w-full flex items-center justify-center py-16 sm:py-20 lg:py-32 relative z-20"
//     >
//       <div className="container mx-auto px-4 flex flex-col items-center text-center relative">
//         {/* Star Icon */}
//         <img
//           id="star"
//           src={Flower3Icon}
//           alt="Decorative Star"
//           className="absolute top-10 right-10 sm:top-16 sm:right-20 lg:top-20 lg:right-32 w-16 sm:w-24 lg:w-32 -z-10 opacity-80"
//         />

//         {/* Heading */}
//         <h1
//           id="text1"
//           className="text-white text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-[90%] sm:max-w-[80%]"
//         >
//           Let's automate the boring. <br /> And amplify the bold.
//         </h1>

//         {/* Subheading */}
//         <h1
//           id="text2"
//           className="text-green-300 font-bold text-xl sm:text-3xl lg:text-4xl mt-6"
//         >
//           That's the Oz Media way.
//         </h1>

//         {/* Flower Icon */}
//         <img
//           id="flower"
//           src={Flower1Icon}
//           alt="Decorative Flower"
//           className="absolute bottom-10 left-10 sm:bottom-16 sm:left-20 lg:bottom-20 lg:left-32 w-16 sm:w-24 lg:w-32 -z-10 opacity-80"
//         />
//       </div>
//     </section>
//   );
// };

// export default TagSection;









import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/images/parallax.jpg";
import { Link } from "react-router-dom";

export default function TagSection() {
  return (
    <div
      className="relative h-auto py-24 bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-8xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-slate-100 mb-4 leading-snug tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-[#cfcfcf] lg:text-7xl ">Let’s automate the boring.</span>
          <br />
          <span className="text-[#cfcfcf] lg:text-5xl ">And amplify the bold.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-300 mb-8 font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          That’s the <span className="text-[#fd4360] font-medium">Oz Media</span> way.
        </motion.p>
<Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#cfcfcf] hover:bg-sky-300 animate-bounce hover:cursor-pointer  text-black font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300"
        >
          Let’s Connect
        </motion.button>
</Link>
      </motion.div>
    </div>
  );
}
