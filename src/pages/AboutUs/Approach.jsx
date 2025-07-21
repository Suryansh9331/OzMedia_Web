// import React from "react";
// import { motion } from "framer-motion";
// import backgroundImage from "../../assets/images/parallax.jpg";

// const steps = [
//   {
//     title: "1. Strategic Foundation",
//     points: [
//       "In-depth discovery sessions to understand your business model, objectives, and challenges.",
//       "Comprehensive market research and competitor analysis to identify growth opportunities.",
//     ],
//   },
//   {
//     title: "2. Creative Development",
//     points: [
//       "Brand identity design, content strategy, and creative asset development including websites, social media, video, and advertising collateral.",
//       "Focused on user engagement, storytelling, and brand loyalty creation.",
//     ],
//   },
//   {
//     title: "3. Technology Execution",
//     points: [
//       "Robust technology solutions including websites, custom software, mobile applications, and e-commerce platforms built on the latest frameworks.",
//       "Ensuring scalability, security, and high-performance delivery.",
//     ],
//   },
//   {
//     title: "4. Performance Marketing & Growth Optimization",
//     points: [
//       "Data-backed digital marketing campaigns focusing on lead generation, customer acquisition, and sales growth.",
//       "Real-time analytics, regular reporting, and performance refinement cycles.",
//     ],
//   },
 
// ];

// const OurApproachSection = () => {
//   return (
//     <section
//       className="relative w-full bg-cover bg-center bg-no-repeat text-[#073757]"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#cfcfcf]/80 backdrop-blur-md"></div>

//       <div className="relative container mx-auto px-6 py-20 md:py-28 z-10">
//         {/* Main Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-4xl sm:text-5xl font-bold text-center mb-4"
//         >
//           Our Approach
//         </motion.h2>

//         {/* Subheading */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-center text-lg sm:text-xl max-w-2xl mx-auto mb-14 text-[#073757]/90"
//         >
//           Integrated and Impact-Driven — Tailored to meet your business objectives with creativity and technology.
//         </motion.p>

//         {/* Step Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: index * 0.15 }}
//               viewport={{ once: true }}
//               className="bg-white/80 rounded-xl shadow-md p-6 backdrop-blur-sm border border-gray-200"
//             >
//               <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
//               <ul className="list-disc list-inside space-y-2 text-[15px] leading-relaxed text-[#073757]">
//                 {step.points.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-center mt-14"
//         >
//           <button className="px-6 py-3 bg-[#073757] text-white font-medium rounded-full shadow-md hover:bg-[#052c47] transition duration-300">
//             Start Your Journey with Us
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default OurApproachSection;

import { Link } from "react-router-dom";

import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/images/parallax.jpg";

const steps = [
  {
    title: "1. Strategic Foundation",
    points: [
      "In-depth discovery sessions to understand your business model, objectives, and challenges.",
      "Comprehensive market research and competitor analysis to identify growth opportunities.",
    ],
  },
  {
    title: "2. Creative Development",
    points: [
      "Brand identity design, content strategy, and creative asset development including websites, social media, video, and advertising collateral.",
      "Focused on user engagement, storytelling, and brand loyalty creation.",
    ],
  },
  {
    title: "3. Technology Execution",
    points: [
      "Robust technology solutions including websites, custom software, mobile applications, and e-commerce platforms built on the latest frameworks.",
      "Ensuring scalability, security, and high-performance delivery.",
    ],
  },
  {
    title: "4. Performance Marketing & Growth Optimization",
    points: [
      "Data-backed digital marketing campaigns focusing on lead generation, customer acquisition, and sales growth.",
      "Real-time analytics, regular reporting, and performance refinement cycles.",
    ],
  },
];

const OurApproachSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-[#073757]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 py-20 md:py-28 z-10">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-5xl font-bold text-center mb-4 tracking-tight text-white"
        >
          Our Approach
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center text-lg sm:text-xl max-w-3xl mx-auto mb-14 text-white/80"
        >
          Integrated and Impact-Driven — Tailored to meet your business objectives through creativity, strategy, and cutting-edge technology.
        </motion.p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-7 border-l-4 border-[#073757] hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-[16px] leading-relaxed text-[#073757]">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
         <Link to="/contact">
          <button className="animate-bounce px-8 py-3 bg-[#073757] text-white font-semibold rounded-full shadow-lg hover:bg-[#052c47] transition duration-300">
            Start Your Journey with Us
          </button>
        </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproachSection;
