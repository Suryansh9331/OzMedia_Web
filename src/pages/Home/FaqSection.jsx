// import React, { useState } from "react";
// import AnimatedToggleIcon from "../../components/AmimatedToggleIcon/index";
// import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

// const faqs = [
//   {
//     question: "What does OZ Media actually do?",
//     answer:
//       "We’re a hybrid digital agency that blends strategic marketing with custom IT development. From brand campaigns to mobile apps, we help businesses grow creatively and scale technically — all under one roof.",
//   },
//   {
//     question:
//       "Can I hire you for just one service — like marketing or development?",
//     answer:
//       "Yes. You can work with us for just digital marketing, just development, or go all in with a full-stack solution. We’re flexible and custom-built to fit your needs.",
//   },
//   {
//     question: "How do we start working together?",
//     answer:
//       "Easy. Just fill out our contact form, drop us a message, or schedule a quick discovery call. We’ll understand your goals, suggest a solution, and take it from there.",
//   },
//   {
//     question: "What makes you different from other agencies?",
//     answer:
//       "Most agencies specialize in one thing. We bring creative strategy and smart technology together — so your brand looks amazing and runs flawlessly.",
//   },
//   {
//     question: "What tech stack and marketing tools do you specialize in?",
//     answer:
//       "We build on React, Vue, Laravel, Node.js, and cloud platforms like AWS & Azure. On the marketing side, we rock Google Ads, Meta Ads, HubSpot, SEO tools, and data analytics suites. If it moves pixels or processes data, we know it.",
//   },
// ];

// export default function FaqSection() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <section className="bg-[#D9A7F4] py-16 px-4">
//       <div className="max-w-4xl mx-auto space-y-6">
      

//         {/* FAQ Items */}
//         {faqs.map((faq, index) => {
//           const isOpen = openIndex === index;
//           return (
//             <div
//               key={index}
//               className="rounded-lg bg-[#D9A7F4]  overflow-hidden transition"
//             >
//               {/* Question */}
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex items-center justify-between p-5 sm:p-6 hover:bg-[#e6c7f5] transition"
//               >
//                 <span className="text-black text-base sm:text-lg font-medium">
//                   {faq.question}
//                 </span>
//                 <span
//                   className={`w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white transition-transform duration-300 ${
//                     isOpen ? "rotate-180" : ""
//                   }`}
//                 >
//                   <AnimatedToggleIcon
//                     isOpen={isOpen}
//                     size="text-lg"
//                     closeIcon={<RiArrowDropDownLine />}
//                     openIcon={<RiArrowDropUpLine />}
//                   />
//                 </span>
//               </button>

//               {/* Answer */}
//               <div
//                 className={`text-black text-base px-6 overflow-hidden transition-all duration-300 ease-in-out ${
//                   isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
//                 }`}
//               >
//                 <p>{faq.answer}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


// import React, { useState } from 'react';
// import { ChevronDown, Plus, Minus } from 'lucide-react';

// const faqs = [
//   {
//     question: "What does OZ Media actually do?",
//     answer:
//       "We're a hybrid digital agency that blends strategic marketing with custom IT development. From brand campaigns to mobile apps, we help businesses grow creatively and scale technically — all under one roof.",
//   },
//   {
//     question:
//       "Can I hire you for just one service — like marketing or development?",
//     answer:
//       "Yes. You can work with us for just digital marketing, just development, or go all in with a full-stack solution. We're flexible and custom-built to fit your needs.",
//   },
//   {
//     question: "How do we start working together?",
//     answer:
//       "Easy. Just fill out our contact form, drop us a message, or schedule a quick discovery call. We'll understand your goals, suggest a solution, and take it from there.",
//   },
//   {
//     question: "What makes you different from other agencies?",
//     answer:
//       "Most agencies specialize in one thing. We bring creative strategy and smart technology together — so your brand looks amazing and runs flawlessly.",
//   },
//   {
//     question: "What tech stack and marketing tools do you specialize in?",
//     answer:
//       "We build on React, Vue, Laravel, Node.js, and cloud platforms like AWS & Azure. On the marketing side, we rock Google Ads, Meta Ads, HubSpot, SEO tools, and data analytics suites. If it moves pixels or processes data, we know it.",
//   },
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen  py-16 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16 space-y-6">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
//             Frequently Asked
//             <br />
//             <span className="text-4xl">Questions</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Everything you need to know about working with OZ Media. Can't find what you're looking for? 
//             <span className="text-blue-600 font-medium"> Get in touch with us.</span>
//           </p>
//         </div>

//         {/* FAQ Items */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className={`group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 ease-out hover:shadow-xl hover:shadow-blue-50 ${
//                 openIndex === index 
//                   ? 'shadow-xl shadow-blue-50 border-blue-100 scale-[1.02]' 
//                   : 'hover:scale-[1.01]'
//               }`}
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-300"
//               >
//                 <h3 className={`text-lg font-semibold pr-8 transition-colors duration-300 ${
//                   openIndex === index 
//                     ? 'text-blue-700' 
//                     : 'text-gray-900 group-hover:text-blue-700'
//                 }`}>
//                   {faq.question}
//                 </h3>
                
//                 <div className="flex-shrink-0 relative">
//                   {/* Plus/Minus Icon */}
//                   <div className={`transition-all duration-500 ease-out ${
//                     openIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
//                   }`}>
//                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
//                       openIndex === index 
//                         ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' 
//                         : 'bg-gray-100 group-hover:bg-gray-200'
//                     }`}>
//                       {openIndex === index ? (
//                         <Minus className="w-5 h-5 text-white" />
//                       ) : (
//                         <Plus className={`w-5 h-5 transition-colors duration-300 ${
//                           openIndex === index ? 'text-white' : 'text-gray-600'
//                         }`} />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </button>

//               {/* Answer Section */}
//               <div
//                 className={`transition-all duration-500 ease-out overflow-hidden ${
//                   openIndex === index 
//                     ? 'max-h-96 opacity-100' 
//                     : 'max-h-0 opacity-0'
//                 }`}
//               >
//                 <div className="px-8 pb-8">
//                   <div className={`w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 transition-all duration-700 ${
//                     openIndex === index ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
//                   }`}></div>
//                   <p className={`text-gray-700 leading-relaxed text-base transition-all duration-700 delay-100 ${
//                     openIndex === index 
//                       ? 'opacity-100 transform translate-y-0' 
//                       : 'opacity-0 transform translate-y-4'
//                   }`}>
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer CTA */}
//         <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-100">
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">
//             Still have questions?
//           </h3>
//           <p className="text-gray-600 mb-6 text-lg">
//             We're here to help. Get in touch and let's start building something amazing together.
//           </p>
//           <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
//             <span>Get in Touch</span>
//             <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;




import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const faqs = [
  {
    question: "What does OZ Media actually do?",
    answer:
      "We're a hybrid digital agency that blends strategic marketing with custom IT development. From brand campaigns to mobile apps, we help businesses grow creatively and scale technically — all under one roof.",
  },
  {
    question:
      "Can I hire you for just one service — like marketing or development?",
    answer:
      "Yes. You can work with us for just digital marketing, just development, or go all in with a full-stack solution. We're flexible and custom-built to fit your needs.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Easy. Just fill out our contact form, drop us a message, or schedule a quick discovery call. We'll understand your goals, suggest a solution, and take it from there.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "Most agencies specialize in one thing. We bring creative strategy and smart technology together — so your brand looks amazing and runs flawlessly.",
  },
  {
    question: "What tech stack and marketing tools do you specialize in?",
    answer:
      "We build on React, Vue, Laravel, Node.js, and cloud platforms like AWS & Azure. On the marketing side, we rock Google Ads, Meta Ads, HubSpot, SEO tools, and data analytics suites. If it moves pixels or processes data, we know it.",
  },
];


const FAQ = ({ onTriggerPopup }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Create refs for each question
  const questionRefs = useRef([]);
  questionRefs.current = faqs.map(
    (_, i) => questionRefs.current[i] ?? React.createRef()
  );

  // Create ref for heading
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { amount: 0.3, once: false });

  // Track which questions are in view
  const [questionsInView, setQuestionsInView] = useState(
    Array(faqs.length).fill(false)
  );

  useEffect(() => {
    const observers = questionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setQuestionsInView((prev) => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        },
        { threshold: 0.3 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (questionRefs.current[index].current) {
          observer.unobserve(questionRefs.current[index].current);
        }
      });
    };
  }, []);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="h-auto bg-transparent mt-16  px-6 md:px-20 lg:py-16 sm:py-8 md:py-8 py-8  ">
      <motion.h2
        ref={headingRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHeadingInView ? 0 : -100,
          opacity: isHeadingInView ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-black"
      >
        FREQUENTLY ASKED QUESTIONS
      </motion.h2>
        <div className="flex justify-center space-x-1 mb-8">
            <div className="w-6 h-1 bg-[#095383] rounded-full"></div>
            <div className="w-6 h-1" style={{ backgroundColor: "#000000" }}></div>
            <div className="w-6 h-1" style={{ backgroundColor: "#095383" }}></div>
            <div className="w-6 h-1 bg-[#000000] rounded-full"></div>
          </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            ref={(el) => (questionRefs.current[index].current = el)}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: questionsInView[index] ? 0 : 100,
              opacity: questionsInView[index] ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className=" bg-gradient-to-br from-purple-50 rounded-lg p-4 cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center bg-gradient">
              <p className="text-lg font-medium">{faq.question}</p>
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2 pt-2 text-gray-700">{faq.answer}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
     
          <button   
        className="text-[#095383]   font-semibold border-2 border-[#095383] cursor-pointer px-4 py-2  inline-flex items-center gap-1">
            Know More <span className="text-xl"></span>
          </button>
  
      </div>
    </section>
  );
};

export default FAQ;