// import { Target, Users, Zap, Award } from "lucide-react";
// import { motion } from "framer-motion";
// import bgImage from "../../assets/images/parallax.jpg"; // Replace with your actual path

// const features = [
//   {
//     text: "End-to-end project lifecycle management with seamless transitions from Strategy → Design → Development → Promotion",
//     icon: <Target className="w-6 h-6 text-[#005f73]" />,
//   },
//   {
//     text: "Transparent communication protocols with dedicated project managers and regular milestone updates",
//     icon: <Users className="w-6 h-6 text-[#005f73]" />,
//   },
//   {
//     text: "Agile development methodology with milestone-driven progress tracking and continuous client feedback",
//     icon: <Zap className="w-6 h-6 text-[#005f73]" />,
//   },
//   {
//     text: "Comprehensive client education and ongoing post-project support ensuring sustainable long-term growth",
//     icon: <Award className="w-6 h-6 text-[#005f73]" />,
//   },
// ];

// export default function CollaborativeApproach() {
//   return (
//     <section
//       className="relative bg-fixed bg-center bg-cover md:py-24 py-14  md:px-6 px-4  "
//       style={{
//         backgroundImage: `url(${bgImage})`,
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#0f294d]/80 mix-blend-multiply z-0"></div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-[#cfcfcf] backdrop-blur-lg rounded-2xl shadow-xl border border-[#005f73]/20 p-10 md:p-16"
//         >
//           {/* Header */}
//           <div className="text-center mb-6 md:mb-12">
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#005f73] to-[#0a4d63] rounded-xl mb-6 shadow-lg">
//               <Target className="w-10 h-10 text-white animate-spin-slow" />
//             </div>
//             <h2 className="text-3xl md:text-5xl font-bold text-[#0f294d] mb-6">
//               Our Collaborative Approach
//             </h2>
//             <div className="w-28 h-1 bg-gradient-to-r from-[#005f73] to-[#0a4d63] mx-auto mb-6 rounded-full"></div>
//           </div>

//           <p className="text-[#0f294d]/90 text-center  mb-12 max-w-3xl   mx-auto leading-relaxed text-md md:text-xl font-medium">
//             At OZ Media Planet, our departments work in seamless synergy,
//             ensuring that creative strategies are technically feasible and
//             technology solutions are perfectly aligned with your brand identity
//             and business objectives.
//           </p>

//           {/* Features */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.15, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="bg-white border-2 border-[#005f73]/10 hover:border-[#005f73] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="text-[#005f73] mt-1 transform transition-transform duration-300 hover:scale-110">
//                     {feature.icon}
//                   </div>
//                   <p className="text-[#0f294d]/90 leading-relaxed font-medium text-base">
//                     {feature.text}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { Target, Users, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/parallax.jpg"; // Replace with your actual path

const features = [
  {
    text: "End-to-end project lifecycle management with seamless transitions from Strategy → Design → Development → Promotion",
    icon: <Target className="w-6 h-6 text-[#005f73]" />,
  },
  {
    text: "Transparent communication protocols with dedicated project managers and regular milestone updates",
    icon: <Users className="w-6 h-6 text-[#005f73]" />,
  },
  {
    text: "Agile development methodology with milestone-driven progress tracking and continuous client feedback",
    icon: <Zap className="w-6 h-6 text-[#005f73]" />,
  },
  {
    text: "Comprehensive client education and ongoing post-project support ensuring sustainable long-term growth",
    icon: <Award className="w-6 h-6 text-[#005f73]" />,
  },
];

export default function CollaborativeApproach() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover md:py-24 py-14 md:px-6 px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f294d]/80 mix-blend-multiply z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#cfcfcf] backdrop-blur-lg rounded-2xl shadow-xl border border-[#005f73]/20 p-10 md:p-16"
        >
          {/* Header */}
          <div className="text-center mb-6 md:mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#005f73] to-[#0a4d63] rounded-xl mb-6 shadow-lg">
              <Target className="w-10 h-10 text-white animate-spin-slow" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f294d] mb-6">
              Our Collaborative Approach
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-[#005f73] to-[#0a4d63] mx-auto mb-6 rounded-full"></div>
          </div>

          <p className="text-[#0f294d]/90 text-center mb-12 max-w-3xl mx-auto leading-relaxed text-md md:text-xl font-medium">
            At OZ Media Planet, our departments work in seamless synergy,
            ensuring that creative strategies are technically feasible and
            technology solutions are perfectly aligned with your brand identity
            and business objectives.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-[#005f73]/10 hover:border-[#005f73] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-[#005f73] mt-1 transform transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                  <p className="text-[#0f294d]/90 leading-relaxed font-medium text-base">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#005f73] text-white font-normal animate-bounce text-lg px-8 py-3 rounded-full shadow-lg hover:bg-[#0a4d63] transition-all duration-300"
            >
              Let’s Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
