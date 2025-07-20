// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const TeamSection = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const teamData = [
//     {
//       id: 1,
//       name: "Avni",
//       designation: "Chief Executive Officer (CEO)",
//       department: "Leadership & Strategic Management",
//       image: "avni.jpg",
//       description: "Avni is the founder and strategic driving force behind OZ Media Planet. With deep expertise in digital innovation, business scaling, and market positioning, Avni plays a pivotal role in defining the company's vision and direction.",
//       contributions: [
//         "Strategic business development and partnership growth",
//         "Innovation leadership and market research",
//         "Oversight of large-scale digital transformation projects",
//         "Building organizational culture focused on performance and creativity"
//       ]
//     },
//     {
//       id: 2,
//       name: "Kajal",
//       designation: "Human Resources (HR) Manager",
//       department: "Leadership & Strategic Management",
//       image: "kajal.jpg",
//       description: "Kajal leads the HR and People Operations at OZ Media Planet, ensuring that we recruit, retain, and nurture top talent across all functions.",
//       contributions: [
//         "Talent acquisition and onboarding",
//         "Employee engagement and internal HR operations",
//         "Training programs, skill development workshops, and performance management",
//         "Workforce planning aligned with organizational objectives"
//       ]
//     },
//     {
//       id: 3,
//       name: "Atul",
//       designation: "Lead UI/UX Designer",
//       department: "Creative and Technology Divisions",
//       image: "atul.jpg",
//       description: "Atul heads the design department, bringing a blend of creativity and analytical precision to every project. Specializing in human-centered design.",
//       contributions: [
//         "UI/UX design for web and mobile platforms",
//         "Wireframing, prototyping, and user journey mapping",
//         "Interactive product design, accessibility optimization",
//         "Branding, visual identity design, and motion graphics"
//       ]
//     },
//     {
//       id: 4,
//       name: "Palak & Rajeev",
//       designation: "Senior Full Stack Developers",
//       department: "Creative and Technology Divisions",
//       image: "dev-team.jpg",
//       description: "Palak and Rajeev form the backbone of our development team, delivering scalable, secure, and high-performance solutions.",
//       contributions: [
//         "Full stack web development (React, Angular, Node.js, Laravel, PHP, Python)",
//         "E-commerce platforms (Shopify, WooCommerce, custom solutions)",
//         "Database architecture (MySQL, MongoDB, Firebase)",
//         "API integrations, SaaS product development, and cloud hosting"
//       ]
//     },
//     {
//       id: 5,
//       name: "Suryansh",
//       designation: "Mobile App & Software Developer",
//       department: "Creative and Technology Divisions",
//       image: "suryansh.jpg",
//       description: "Suryansh specializes in crafting advanced mobile applications and bespoke software solutions tailored to unique business requirements.",
//       contributions: [
//         "Native and cross-platform mobile app development",
//         "Custom software development for process automation",
//         "Mobile UI/UX design integration",
//         "Integration of AI-powered features like chatbots"
//       ]
//     }
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.3 }
//     },
//     hover: {
//       y: -5,
//       boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
//       transition: { duration: 0.2 }
//     }
//   };

//   const flipVariants = {
//     front: { rotateY: 0 },
//     back: { rotateY: 180 }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 font-sans text-gray-800">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-12"
//       >
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//           At OZ Media Planet, our strength lies in a highly skilled, multidisciplinary team committed to delivering impactful digital solutions. Our team combines strategic vision, technical proficiency, and creative excellence to ensure every client project exceeds expectations.
//         </p>
//       </motion.div>

//       {/* Department Filters */}
//       <div className="flex justify-center gap-4 mb-8">
//         <motion.span
//           whileHover={{ scale: 1.05 }}
//           className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium text-sm"
//         >
//           Leadership & Strategic Management
//         </motion.span>
//         <motion.span
//           whileHover={{ scale: 1.05 }}
//           className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium text-sm"
//         >
//           Creative and Technology Divisions
//         </motion.span>
//       </div>

//       {/* Team Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//         {teamData.map((member) => (
//           <motion.div
//             key={member.id}
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             onClick={() => setActiveCard(activeCard === member.id ? null : member.id)}
//             className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer relative ${activeCard === member.id ? 'h-auto' : ''}`}
//           >
//             {activeCard !== member.id ? (
//               <motion.div
//                 variants={flipVariants}
//                 animate="front"
//                 className="p-6"
//               >
//                 <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="text-center">
//                   <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
//                   <p className="text-gray-500 text-sm mt-1">{member.designation}</p>
//                   <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mt-2">
//                     {member.department}
//                   </span>
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.div
//                 variants={flipVariants}
//                 animate="back"
//                 className="absolute inset-0 bg-white p-6 overflow-y-auto"
//               >
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setActiveCard(null);
//                   }}
//                   className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
//                 >
//                   ×
//                 </button>
//                 <h3 className="text-xl font-semibold text-gray-900 mt-6">{member.name}</h3>
//                 <p className="text-gray-500 text-sm mt-1">{member.designation}</p>
//                 <p className="text-gray-600 mt-4">{member.description}</p>

//                 <div className="mt-6">
//                   <h4 className="font-medium text-gray-900 mb-2">Key Contributions:</h4>
//                   <ul className="space-y-2">
//                     {member.contributions.map((item, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="text-blue-500 mr-2">•</span>
//                         <span className="text-gray-600">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Collaboration Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         className="bg-gray-50 rounded-xl p-8"
//       >
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Approach</h2>
//         <p className="text-gray-600 mb-8">
//           At OZ Media Planet, our departments work in close synergy, ensuring that creative strategies are technically feasible and technology solutions are aligned with your brand identity. From marketing strategists to software engineers, every team member is deeply invested in client success.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <motion.div
//             whileHover={{ y: -5 }}
//             className="bg-white p-6 rounded-lg shadow-sm"
//           >
//             <h3 className="font-semibold text-lg text-gray-900 mb-2">End-to-end project lifecycle management</h3>
//             <p className="text-gray-500">Strategy → Design → Development → Promotion</p>
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -5 }}
//             className="bg-white p-6 rounded-lg shadow-sm"
//           >
//             <h3 className="font-semibold text-lg text-gray-900 mb-2">Transparent communication</h3>
//             <p className="text-gray-500">With dedicated project managers</p>
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -5 }}
//             className="bg-white p-6 rounded-lg shadow-sm"
//           >
//             <h3 className="font-semibold text-lg text-gray-900 mb-2">Agile methodology</h3>
//             <p className="text-gray-500">With milestone-driven progress updates</p>
//           </motion.div>

//           <motion.div
//             whileHover={{ y: -5 }}
//             className="bg-white p-6 rounded-lg shadow-sm"
//           >
//             <h3 className="font-semibold text-lg text-gray-900 mb-2">Client education</h3>
//             <p className="text-gray-500">And post-project support for sustainable growth</p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default TeamSection;

//deepseek

// import React from 'react';
// import { motion } from 'framer-motion';

// const TeamSection = () => {
//   const teamData = [
//     {
//       id: 1,
//       name: "Avni Sharma",
//       designation: "Chief Executive Officer (CEO)",
//       department: "Leadership & Strategic Management",
//       image: "/team/avni.jpg",
//       description: "With over 12 years of experience in digital transformation, Avni founded OZ Media Planet with a vision to bridge the gap between technology and business growth. Her strategic acumen has guided Fortune 500 companies through complex digital transitions.",
//       detailedBio: [
//         "Pioneered award-winning digital strategies for 50+ global brands",
//         "Recognized as 'Top 40 Under 40' in Tech Leadership (2022)",
//         "Regular keynote speaker at international tech summits",
//         "MBA from Harvard Business School"
//       ],
//       contributions: [
//         "Strategic business development and partnership growth",
//         "Innovation leadership and market research",
//         "Oversight of large-scale digital transformation projects",
//         "Building organizational culture focused on performance and creativity"
//       ],
//       expertise: ["Digital Strategy", "Business Scaling", "Market Positioning", "Corporate Governance"]
//     },
//     {
//       id: 2,
//       name: "Kajal Patel",
//       designation: "Human Resources Director",
//       department: "Leadership & Strategic Management",
//       image: "/team/kajal.jpg",
//       description: "Kajal transforms workplaces through innovative HR strategies. With certifications in organizational psychology and talent management, she's built high-performance teams across three continents.",
//       detailedBio: [
//         "15 years in HR leadership across tech industries",
//         "Certified Professional in HR (PHR) and SHRM-SCP",
//         "Developed OZ Media Planet's acclaimed mentorship program",
//         "Fluent in four languages enabling global team integration"
//       ],
//       contributions: [
//         "Talent acquisition and onboarding",
//         "Employee engagement and internal HR operations",
//         "Training programs, skill development workshops, and performance management",
//         "Workforce planning aligned with organizational objectives"
//       ],
//       expertise: ["Talent Management", "Organizational Development", "Employee Wellness", "Diversity & Inclusion"]
//     },
//     {
//       id: 3,
//       name: "Atul Verma",
//       designation: "Lead UI/UX Designer",
//       department: "Creative and Technology Divisions",
//       image: "/team/atul.jpg",
//       description: "Atul's design philosophy merges aesthetic elegance with functional precision. His portfolio includes groundbreaking interfaces for fintech, healthcare, and e-commerce platforms.",
//       detailedBio: [
//         "Former Senior Designer at Google (3 years)",
//         "M.Des in Interaction Design from IDC, IIT Bombay",
//         "Holder of 3 design patents",
//         "Regular contributor to UX Collective publications"
//       ],
//       contributions: [
//         "UI/UX design for web and mobile platforms",
//         "Wireframing, prototyping, and user journey mapping",
//         "Interactive product design, accessibility optimization",
//         "Branding, visual identity design, and motion graphics"
//       ],
//       expertise: ["Figma", "Adobe Creative Suite", "User Research", "Design Systems"]
//     },
//     {
//       id: 4,
//       name: "Palak Gupta",
//       designation: "Senior Full Stack Developer",
//       department: "Creative and Technology Divisions",
//       image: "/team/palak.jpg",
//       description: "Palak architects robust digital solutions with meticulous attention to performance and security. Her code powers enterprise systems processing millions of transactions daily.",
//       detailedBio: [
//         "8 years in full-stack development",
//         "AWS Certified Solutions Architect",
//         "Lead developer for two unicorn startups",
//         "Open-source contributor to React and Node.js"
//       ],
//       contributions: [
//         "Full stack web development (React, Node.js)",
//         "E-commerce platforms (Shopify, WooCommerce)",
//         "Database architecture (MySQL, MongoDB)",
//         "API integrations and cloud hosting (AWS)"
//       ],
//       expertise: ["JavaScript", "TypeScript", "Serverless Architecture", "CI/CD Pipelines"]
//     },
//     {
//       id: 5,
//       name: "Rajeev Menon",
//       designation: "Senior Full Stack Developer",
//       department: "Creative and Technology Divisions",
//       image: "/team/rajeev.jpg",
//       description: "Rajeev specializes in crafting elegant solutions to complex technical challenges. His work on scalable architectures has set industry benchmarks.",
//       detailedBio: [
//         "10 years in software engineering",
//         "M.Tech in Computer Science from IIT Delhi",
//         "Creator of popular Python libraries",
//         "Ranked Top 1% on Stack Overflow (5 years running)"
//       ],
//       contributions: [
//         "Full stack development (Angular, Python)",
//         "Custom CMS development",
//         "SaaS product development",
//         "Website optimization and SEO"
//       ],
//       expertise: ["Python", "Django", "REST APIs", "Performance Optimization"]
//     },
//     {
//       id: 6,
//       name: "Suryansh Kapoor",
//       designation: "Mobile App Lead",
//       department: "Creative and Technology Divisions",
//       image: "/team/suryansh.jpg",
//       description: "Suryansh pushes mobile innovation boundaries, creating apps that combine cutting-edge technology with intuitive user experiences.",
//       detailedBio: [
//         "Published 30+ apps with 10M+ combined downloads",
//         "Flutter Global Summit speaker (2023)",
//         "Specialist in AR/VR mobile integration",
//         "Lead developer for award-winning healthcare apps"
//       ],
//       contributions: [
//         "Native and cross-platform mobile app development",
//         "Custom software development for process automation",
//         "Mobile UI/UX design integration",
//         "Integration of AI-powered features"
//       ],
//       expertise: ["Flutter", "React Native", "Swift", "Kotlin"]
//     }
//   ];

//   const cardVariants = {
//     offscreen: {
//       y: 50,
//       opacity: 0
//     },
//     onscreen: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         bounce: 0.4,
//         duration: 0.8
//       }
//     },
//     hover: {
//       scale: 1.03,
//       boxShadow: "0 10px 25px rgba(7, 55, 87, 0.15)",
//       transition: { duration: 0.3 }
//     }
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   return (
//     <div className="bg-[#cfcfcf] py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-[#073757] mb-4">
//             Our <span className="text-[#0c5a8a]">Dream Team</span>
//           </h1>
//           <div className="w-20 h-1 bg-[#0c5a8a] mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             At OZ Media Planet, we've assembled an exceptional team of visionaries, creators, and technologists. Each member brings unique expertise that collectively forms the foundation of our success.
//           </p>
//         </motion.div>

//         {/* Departments */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           <span className="px-5 py-2 bg-[#073757] text-white rounded-full text-sm font-medium shadow-md">
//             Leadership Team
//           </span>
//           <span className="px-5 py-2 bg-white text-[#073757] border border-[#073757] rounded-full text-sm font-medium shadow-sm">
//             Creative Division
//           </span>
//           <span className="px-5 py-2 bg-white text-[#073757] border border-[#073757] rounded-full text-sm font-medium shadow-sm">
//             Technology Division
//           </span>
//         </motion.div>

//         {/* Team Grid */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={sectionVariants}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {teamData.map((member) => (
//             <motion.div
//               key={member.id}
//               variants={cardVariants}
//               initial="offscreen"
//               whileInView="onscreen"
//               whileHover="hover"
//               viewport={{ once: true, margin: "-50px" }}
//               className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
//             >
//               {/* Profile Header */}
//               <div className="relative h-60 overflow-hidden">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#073757] to-transparent opacity-90"></div>
//                 <div className="absolute bottom-0 left-0 p-6 w-full">
//                   <h3 className="text-2xl font-bold text-white">{member.name}</h3>
//                   <p className="text-[#a3cae9]">{member.designation}</p>
//                 </div>
//                 <div className="absolute top-4 right-4 bg-white/90 text-[#073757] px-3 py-1 rounded-full text-xs font-semibold">
//                   {member.department}
//                 </div>
//               </div>

//               {/* Profile Content */}
//               <div className="p-6">
//                 <div className="mb-4">
//                   <h4 className="text-sm font-semibold text-[#073757] mb-2">PROFILE SUMMARY</h4>
//                   <p className="text-gray-600">{member.description}</p>
//                 </div>

//                 <div className="mb-4">
//                   <h4 className="text-sm font-semibold text-[#073757] mb-2">KEY DETAILS</h4>
//                   <ul className="space-y-1 text-gray-600">
//                     {member.detailedBio.map((item, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="text-[#0c5a8a] mr-2">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mb-4">
//                   <h4 className="text-sm font-semibold text-[#073757] mb-2">CORE EXPERTISE</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {member.expertise.map((skill, index) => (
//                       <span
//                         key={index}
//                         className="bg-[#e6f0f8] text-[#073757] px-3 py-1 rounded-full text-xs"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-sm font-semibold text-[#073757] mb-2">KEY CONTRIBUTIONS</h4>
//                   <ul className="space-y-2 text-gray-600">
//                     {member.contributions.map((item, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="text-[#0c5a8a] mr-2">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Collaboration Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-20 bg-[#073757] rounded-2xl p-8 md:p-12 text-white"
//         >
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold mb-6">Our Collaborative Culture</h2>
//             <p className="text-[#c3d8eb] mb-8 text-lg">
//               At OZ Media Planet, we believe innovation thrives in collaboration. Our cross-functional teams work in perfect harmony, combining diverse perspectives to create solutions that are both technically robust and creatively inspired.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
//                 <h3 className="font-bold text-xl mb-3">End-to-End Excellence</h3>
//                 <p className="text-[#c3d8eb]">
//                   From initial strategy to final deployment, we maintain rigorous quality standards at every project phase with our integrated workflow system.
//                 </p>
//               </div>
//               <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
//                 <h3 className="font-bold text-xl mb-3">Transparent Processes</h3>
//                 <p className="text-[#c3d8eb]">
//                   Our clients enjoy complete visibility with real-time dashboards, weekly syncs, and direct access to project teams.
//                 </p>
//               </div>
//               <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
//                 <h3 className="font-bold text-xl mb-3">Agile Innovation</h3>
//                 <p className="text-[#c3d8eb]">
//                   We adapt swiftly to market changes with our milestone-driven sprints and continuous feedback loops.
//                 </p>
//               </div>
//               <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
//                 <h3 className="font-bold text-xl mb-3">Sustainable Growth</h3>
//                 <p className="text-[#c3d8eb]">
//                   Beyond delivery, we provide training and optimization services to ensure long-term success.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;

// import { useState } from "react";
// import { User, Users, Code, Smartphone, Palette, UserCheck, Award, Target, Zap, Star, Heart } from "lucide-react";

// const TeamSection = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const teamMembers = [
//     {
//       id: 1,
//       name: "Avni",
//       position: "Chief Executive Officer (CEO)",
//       department: "Leadership & Strategic Management",
//       icon: <Users className="w-8 h-8" />,
//       profilePhoto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
//       description: "Visionary founder and strategic architect of OZ Media Planet, driving digital innovation and business transformation across industries. With profound expertise in market positioning and organizational leadership, Avni shapes the company's future while maintaining excellence in client relationships and strategic partnerships.",
//       keyContributions: [
//         "Strategic business development and partnership growth",
//         "Innovation leadership and comprehensive market research",
//         "Executive oversight of large-scale digital transformation projects",
//         "Building high-performance organizational culture focused on creativity and results"
//       ],
//       accentColor: "bg-slate-800",
//       borderColor: "border-slate-700",
//       textColor: "color-#005f73"
//     },
//     {
//       id: 2,
//       name: "Kajal",
//       position: "Human Resources Manager",
//       department: "People Operations & Development",
//       icon: <UserCheck className="w-8 h-8" />,
//       profilePhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
//       description: "Dynamic HR leader specializing in talent acquisition, employee development, and organizational growth. Kajal creates thriving workplace environments that foster creativity, professional advancement, and team collaboration while ensuring alignment with company objectives and industry best practices.",
//       keyContributions: [
//         "Comprehensive talent acquisition and strategic onboarding programs",
//         "Employee engagement initiatives and internal operations management",
//         "Advanced training programs, skill development workshops, and performance optimization",
//         "Strategic workforce planning aligned with organizational growth objectives"
//       ],
//       accentColor: "bg-emerald-600",
//       borderColor: "border-emerald-500",
//       textColor: "text-emerald-700"
//     },
//     {
//       id: 3,
//       name: "Atul",
//       position: "Lead UI/UX Designer",
//       department: "Creative Design Division",
//       icon: <Palette className="w-8 h-8" />,
//       profilePhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
//       description: "Creative design strategist and user experience architect, specializing in human-centered design principles. Atul transforms complex ideas into intuitive, engaging digital experiences that seamlessly blend aesthetic appeal with functional excellence across web and mobile platforms.",
//       keyContributions: [
//         "Advanced UI/UX design for web and mobile application platforms",
//         "Comprehensive wireframing, prototyping, and user journey optimization",
//         "Interactive product design with accessibility and usability focus",
//         "Brand identity development, visual design systems, and motion graphics"
//       ],
//       accentColor: "bg-violet-600",
//       borderColor: "border-violet-500",
//       textColor: "text-violet-700"
//     },
//     {
//       id: 4,
//       name: "Palak Tiwari",
//       position: "Senior Frontend Developer & UI Specialist",
//       department: "Frontend Technology Division",
//       icon: <Code className="w-8 h-8" />,
//       profilePhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
//       description: "Frontend development expert specializing in creating stunning user interfaces and seamless user experiences. Palak combines technical proficiency with design sensibility to build responsive, performant web applications using modern frameworks and cutting-edge technologies.",
//       keyContributions: [
//         "Advanced React.js and Angular development with component-based architectures",
//         "Responsive web design implementation with CSS3, Tailwind, and modern frameworks",
//         "Frontend performance optimization and cross-browser compatibility solutions",
//         "Integration of animations, micro-interactions, and accessibility best practices"
//       ],
//       accentColor: "bg-rose-600",
//       borderColor: "border-rose-500",
//       textColor: "text-rose-700"
//     },
//     {
//       id: 5,
//       name: "Rajeev Patel",
//       position: "Senior Backend Developer & System Architect",
//       department: "Backend Technology Division",
//       icon: <Code className="w-8 h-8" />,
//       profilePhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
//       description: "Backend development specialist and system architecture expert, focusing on scalable server-side solutions and database optimization. Rajeev ensures robust, secure, and high-performance backend systems that power complex web applications and enterprise solutions.",
//       keyContributions: [
//         "Backend development with Node.js, Laravel, PHP, and Python frameworks",
//         "Database design and optimization (MySQL, MongoDB, PostgreSQL, Redis)",
//         "API development, microservices architecture, and third-party integrations",
//         "Cloud infrastructure management (AWS, DigitalOcean) and DevOps implementation"
//       ],
//       accentColor: "bg-amber-600",
//       borderColor: "border-amber-500",
//       textColor: "text-amber-700"
//     },
//     {
//       id: 6,
//       name: "Suryansh",
//       position: "Mobile App & Software Developer",
//       department: "Mobile Technology Division",
//       icon: <Smartphone className="w-8 h-8" />,
//       profilePhoto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
//       description: "Mobile application specialist and software development expert, creating innovative solutions for complex business challenges. Suryansh leads projects from conceptualization to deployment, ensuring exceptional user experiences across Android, iOS, and hybrid platforms with AI-powered features.",
//       keyContributions: [
//         "Native and cross-platform mobile app development (Android Studio, Flutter, React Native)",
//         "Custom software development for business process automation and optimization",
//         "Mobile UI/UX design integration and user experience enhancement",
//         "App store publishing, post-launch maintenance, performance optimization, and AI feature integration"
//       ],
//       accentColor: "bg-cyan-600",
//       borderColor: "border-cyan-500",
//       textColor: "text-cyan-700"
//     }
//   ];

//   return (
//     <div className="min-h-auto bg-gradient-to-br from-gray-50 to-white py-20 px-2 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-3 h-3 bg-slate-300 rounded-full animate-float opacity-30"></div>
//         <div className="absolute top-40 right-20 w-2 h-2 bg-emerald-300 rounded-full animate-bounce opacity-40" style={{animationDelay: '1s'}}></div>
//         <div className="absolute bottom-40 left-20 w-2.5 h-2.5 bg-violet-300 rounded-full animate-pulse opacity-30" style={{animationDelay: '2s'}}></div>
//         <div className="absolute bottom-20 right-10 w-2 h-2 bg-rose-300 rounded-full animate-ping opacity-35" style={{animationDelay: '3s'}}></div>
//         <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-amber-300 rounded-full animate-pulse opacity-25" style={{animationDelay: '4s'}}></div>
//         <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce opacity-30" style={{animationDelay: '5s'}}></div>
//       </div>

//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto text-center mb-20 relative">
//         <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl mb-8 shadow-xl relative overflow-hidden group">
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//           <Users className="w-12 h-12 text-white relative z-10 animate-pulse" />
//         </div>
//         <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 tracking-tight animate-fade-in">
//           Meet Our Amazing Team
//         </h1>
//         <div className="w-32 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto mb-8 rounded-full animate-expand"></div>
//         <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium animate-slide-up">
//           At OZ Media Planet, our strength lies in a highly skilled, multidisciplinary team committed to
//           delivering impactful digital solutions. Our diverse team combines strategic vision, technical proficiency,
//           and creative excellence to ensure every client project exceeds expectations and drives sustainable growth.
//         </p>
//       </div>

//       {/* Team Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {teamMembers.map((member, index) => (
//           <div
//             key={member.id}
//             className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 overflow-hidden border-2 ${member.borderColor} border-opacity-20 hover:border-opacity-60 ${
//               hoveredCard === member.id ? 'shadow-2xl scale-105 -rotate-1' : ''
//             } animate-card-enter`}
//             onMouseEnter={() => setHoveredCard(member.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//             style={{
//               animationDelay: `${index * 150}ms`
//             }}
//           >
//             {/* Animated Background Gradient */}
//             <div className={`absolute inset-0 bg-gradient-to-br ${member.accentColor} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}></div>

//             {/* Profile Photo Section */}
//             <div className="relative p-8 text-center">
//               <div className="relative inline-block">
//                 <div className={`absolute inset-0 ${member.accentColor} rounded-full animate-ping opacity-20 group-hover:opacity-40`}></div>
//                 <div className={`relative w-24 h-24 rounded-full overflow-hidden border-4 ${member.borderColor} group-hover:border-8 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
//                   <img
//                     src={member.profilePhoto}
//                     alt={member.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </div>
//                 <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${member.accentColor} rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300`}>
//                   <Star className="w-4 h-4 text-white animate-spin-slow" />
//                 </div>
//               </div>
//             </div>

//             {/* Card Header */}
//             <div className="px-8 pb-6 text-center">
//               <div className="mb-4">
//                 <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 group-hover:text-gray-600 transition-colors duration-300">
//                   {member.department}
//                 </div>
//               </div>
//               <h3 className={`text-3xl font-bold ${member.textColor} mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300`}>
//                 {member.name}
//               </h3>
//               <p className="text-gray-700 text-base font-semibold">{member.position}</p>
//             </div>

//             {/* Card Body */}
//             <div className="px-8 pb-8">
//               <p className="text-gray-700 text-base leading-relaxed mb-8 font-medium group-hover:text-gray-800 transition-colors duration-300">
//                 {member.description}
//               </p>

//               {/* Key Contributions */}
//               <div className="mb-6">
//                 <h4 className={`${member.textColor} font-bold mb-5 text-base uppercase tracking-wide flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
//                   <Award className="w-4 h-4 mr-2 animate-pulse" />
//                   Key Expertise
//                 </h4>
//                 <div className="space-y-4">
//                   {member.keyContributions.slice(0, 3).map((contribution, contributionIndex) => (
//                     <div
//                       key={contributionIndex}
//                       className="flex items-start text-base text-gray-700 group-hover:text-gray-800 transition-all duration-300 hover:translate-x-2"
//                       style={{
//                         animationDelay: `${contributionIndex * 100}ms`
//                       }}
//                     >
//                       <div className={`w-2.5 h-2.5 ${member.accentColor} rounded-full mt-2.5 mr-4 flex-shrink-0 animate-pulse group-hover:animate-bounce`}></div>
//                       <span className="leading-relaxed font-medium">{contribution}</span>
//                     </div>
//                   ))}
//                   {member.keyContributions.length > 3 && (
//                     <div className="text-sm text-gray-500 mt-4 ml-6 font-medium group-hover:text-gray-600 transition-colors duration-300">
//                       <Zap className="w-3 h-3 inline mr-1 animate-pulse" />
//                       +{member.keyContributions.length - 3} additional specializations
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Hover Overlay for More Details */}
//               <div className={`transition-all duration-700 ${
//                 hoveredCard === member.id ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
//               } overflow-hidden`}>
//                 <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 ${member.borderColor} relative shadow-inner`}>
//                   <div className="absolute top-2 right-2 animate-bounce">
//                     <Heart className="w-4 h-4 text-gray-400" />
//                   </div>
//                   <h5 className={`${member.textColor} font-semibold mb-3 text-sm uppercase tracking-wide flex items-center`}>
//                     <Target className="w-3 h-3 mr-2" />
//                     Additional Expertise
//                   </h5>
//                   <div className="space-y-3">
//                     {member.keyContributions.length > 3 && member.keyContributions.slice(3).map((item, itemIndex) => (
//                       <div key={itemIndex} className="flex items-start text-sm text-gray-700 hover:text-gray-800 transition-colors duration-300">
//                         <div className={`w-2 h-2 ${member.accentColor} rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse`}></div>
//                         <span className="leading-relaxed font-medium">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Animated Bottom Accent */}
//             <div className={`h-2 ${member.accentColor} transition-all duration-500 relative overflow-hidden ${
//               hoveredCard === member.id ? 'h-3' : ''
//             }`}>
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1500"></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Collaborative Approach Section */}
//       <div className="max-w-6xl mx-auto mt-24 bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-12 md:p-16 relative overflow-hidden group animate-fade-in-up">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//         <div className="text-center mb-12 relative z-10">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
//             <Target className="w-10 h-10 text-white animate-spin-slow" />
//           </div>
//           <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4 tracking-tight">
//             Our Collaborative Approach
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto mb-8 rounded-full"></div>
//         </div>

//         <p className="text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed text-xl font-medium relative z-10">
//           At OZ Media Planet, our departments work in seamless synergy, ensuring that creative strategies are
//           technically feasible and technology solutions are perfectly aligned with your brand identity and business objectives.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
//           {[
//             {
//               text: "End-to-end project lifecycle management with seamless transitions from Strategy → Design → Development → Promotion",
//               icon: <Target className="w-5 h-5" />,
//               color: "hover:border-emerald-400"
//             },
//             {
//               text: "Transparent communication protocols with dedicated project managers and regular milestone updates",
//               icon: <Users className="w-5 h-5" />,
//               color: "hover:border-violet-400"
//             },
//             {
//               text: "Agile development methodology with milestone-driven progress tracking and continuous client feedback",
//               icon: <Zap className="w-5 h-5" />,
//               color: "hover:border-rose-400"
//             },
//             {
//               text: "Comprehensive client education and ongoing post-project support ensuring sustainable long-term growth",
//               icon: <Award className="w-5 h-5" />,
//               color: "hover:border-amber-400"
//             }
//           ].map((feature, index) => (
//             <div key={index} className={`flex items-start p-6 rounded-xl hover:bg-gray-50 transition-all duration-500 group/item border-2 border-gray-100 ${feature.color} hover:shadow-lg hover:-translate-y-1 animate-slide-up`} style={{animationDelay: `${index * 100}ms`}}>
//               <div className="text-slate-700 mt-1 mr-4 flex-shrink-0 group-hover/item:scale-125 group-hover/item:animate-bounce transition-transform duration-300">
//                 {feature.icon}
//               </div>
//               <p className="text-gray-700 leading-relaxed font-medium text-base group-hover/item:text-gray-800 transition-colors duration-300">
//                 {feature.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slide-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes card-enter {
//           from { opacity: 0; transform: translateY(50px) rotate(5deg); }
//           to { opacity: 1; transform: translateY(0) rotate(0deg); }
//         }
//         @keyframes expand {
//           from { width: 0; }
//           to { width: 8rem; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }
//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out forwards;
//         }
//         .animate-card-enter {
//           animation: card-enter 0.8s ease-out forwards;
//         }
//         .animate-expand {
//           animation: expand 1s ease-out 0.5s forwards;
//           width: 0;
//         }
//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
//         .animate-fade-in-up {
//           animation: slide-up 1s ease-out forwards;
//           animation-delay: 1s;
//           opacity: 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TeamSection;
import rajeev from "../../assets/images/Rajeev.png";
import kajal from "../../assets/images/kajal.jpg";
import palak from "../../assets/images/palak.png";
import Atul from "../../assets/images/Atul.png";
import Suryansh from "../../assets/images/Suryansh.jpeg";
import { useState } from "react";
import {
  User,
  Users,
  Code,
  Smartphone,
  Palette,
  UserCheck,
  Award,
  Target,
  Zap,
  Star,
  Heart,
} from "lucide-react";

const TeamSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Avni ",
      position: "Chief Executive Officer (CEO)",
      department: "Leadership & Strategic Management",
      icon: <Users className="w-8 h-8" />,
      profilePhoto:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      description:
        "Visionary founder and strategic architect of OZ Media Planet, driving digital innovation and business transformation across industries. With profound expertise in market positioning and organizational leadership, Avni shapes the company's future while maintaining excellence in client relationships and strategic partnerships.",
      keyContributions: [
        "Strategic business development and partnership growth",
        "Innovation leadership and comprehensive market research",
        "Executive oversight of large-scale digital transformation projects",
        "Building high-performance organizational culture focused on creativity and results",
      ],
    },
    {
      id: 2,
      name: "Kajal Agrahari",
      position: "Human Resources Manager",
      department: "People Operations & Development",
      icon: <UserCheck className="w-8 h-8" />,
      profilePhoto:kajal,
      description:
        "Dynamic HR leader specializing in talent acquisition, employee development, and organizational growth. Kajal creates thriving workplace environments that foster creativity, professional advancement, and team collaboration while ensuring alignment with company objectives and industry best practices.",
      keyContributions: [
        "Comprehensive talent acquisition and strategic onboarding programs",
        "Employee engagement initiatives and internal operations management",
        "Advanced training programs, skill development workshops, and performance optimization",
        "Strategic workforce planning aligned with organizational growth objectives",
      ],
    },
    {
      id: 3,
      name: "Atul Gurjar",
      position: "Lead UI/UX Designer",
      department: "Creative Design Division",
      icon: <Palette className="w-8 h-8" />,
      profilePhoto: Atul,
      description:
        "Creative design strategist and user experience architect, specializing in human-centered design principles. Atul transforms complex ideas into intuitive, engaging digital experiences that seamlessly blend aesthetic appeal with functional excellence across web and mobile platforms.",
      keyContributions: [
        "Advanced UI/UX design for web and mobile application platforms",
        "Comprehensive wireframing, prototyping, and user journey optimization",
        "Interactive product design with accessibility and usability focus",
        "Brand identity development, visual design systems, and motion graphics",
      ],
    },
    {
      id: 4,
      name: "Palak Tiwari",
      position: "Senior Frontend Developer & UI Specialist",
      department: "Frontend Technology Division",
      icon: <Code className="w-8 h-8" />,
      profilePhoto: palak,
      description:
        "Frontend development expert specializing in creating stunning user interfaces and seamless user experiences. Palak combines technical proficiency with design sensibility to build responsive, performant web applications using modern frameworks and cutting-edge technologies.",
      keyContributions: [
        "Advanced React.js and Angular development with component-based architectures",
        "Responsive web design implementation with CSS3, Tailwind, and modern frameworks",
        "Frontend performance optimization and cross-browser compatibility solutions",
        "Integration of animations, micro-interactions, and accessibility best practices",
      ],
    },
    {
      id: 5,
      name: "Rajeev Patel",
      position: "Senior Backend Developer & System Architect",
      department: "Backend Technology Division",
      icon: <Code className="w-8 h-8" />,
      profilePhoto: rajeev,
      description:
        "Backend development specialist and system architecture expert, focusing on scalable server-side solutions and database optimization. Rajeev ensures robust, secure, and high-performance backend systems that power complex web applications and enterprise solutions.",
      keyContributions: [
        "Backend development with Node.js, Laravel, PHP, and Python frameworks",
        "Database design and optimization (MySQL, MongoDB, PostgreSQL, Redis)",
        "API development, microservices architecture, and third-party integrations",
        "Cloud infrastructure management (AWS, DigitalOcean) and DevOps implementation",
      ],
    },
    {
      id: 6,
      name: "Suryansh Mishra",
      position: "Mobile App & Software Developer",
      department: "Mobile Technology Division",
      icon: <Smartphone className="w-8 h-8" />,
      profilePhoto: Suryansh,
      description:
        "Mobile application specialist and software development expert, creating innovative solutions for complex business challenges. Suryansh leads projects from conceptualization to deployment, ensuring exceptional user experiences across Android, iOS, and hybrid platforms with AI-powered features.",
      keyContributions: [
        "Native and cross-platform mobile app development (Android Studio, Flutter, React Native)",
        "Custom software development for business process automation and optimization",
        "Mobile UI/UX design integration and user experience enhancement",
        "App store publishing, post-launch maintenance, performance optimization, and AI feature integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#cfcfcf] py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#005f73]/20 rounded-full animate-float opacity-30"></div>
        <div
          className="absolute top-40 right-20 w-2 h-2 bg-[#005f73]/20 rounded-full animate-bounce opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-2.5 h-2.5 bg-[#005f73]/20 rounded-full animate-pulse opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-2 h-2 bg-[#005f73]/20 rounded-full animate-ping opacity-35"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#005f73]/20 rounded-full animate-pulse opacity-25"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-[#005f73]/20 rounded-full animate-bounce opacity-30"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      {/* Header Section */}
      <div className="max-w-9xl mx-auto text-center mb-20 relative">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#005f73] to-[#0a4d63] rounded-2xl mb-8 shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          <Users className="w-12 h-12 text-white relative z-10 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-[#0f294d] mb-6 tracking-tight animate-fade-in">
          Meet Our Amazing Team
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-[#005f73] to-[#0a4d63] mx-auto mb-8 rounded-full animate-expand"></div>
        <p className="text-lg md:text-2xl text-[#0f294d]/90 max-w-7xl mx-auto leading-relaxed font-medium animate-slide-up">
          At OZ Media Planet, our strength lies in a highly skilled,
          multidisciplinary team committed to delivering impactful digital
          solutions. Our diverse team combines strategic vision, technical
          proficiency, and creative excellence to ensure every client project
          exceeds expectations and drives sustainable growth.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`group relative bg-white/50 rounded-2xl shadow-xl  hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 overflow-hidden border-2 border-[#005f73]/20 hover:border-[#005f73]/60 ${
              hoveredCard === member.id ? "shadow-2xl scale-105 -rotate-1" : ""
            } animate-card-enter`}
            onMouseEnter={() => setHoveredCard(member.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#005f73]/10 to-[#005f73]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Profile Photo Section */}
            <div className="relative p-8 text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#005f73]/20 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#005f73]/30 group-hover:border-[#005f73]/80 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <img
                    src={member.profilePhoto}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#005f73] rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                  <Star className="w-4 h-4 text-white animate-spin-slow" />
                </div>
              </div>
            </div>

            {/* Card Header */}
            <div className="px-8 pb-6 text-center">
              <div className="mb-4">
                <div className="text-sm font-semibold text-[#005f73] uppercase tracking-wider mb-2 group-hover:text-[#005f73]/80 transition-colors duration-300">
                  {member.department}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-[#0f294d] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {member.name}
              </h3>
              <p className="text-[#0f294d]/90 text-base font-semibold">
                {member.position}
              </p>
            </div>

            {/* Card Body */}
            <div className="px-8 pb-8">
              <p className="text-[#0f294d]/90 text-base leading-relaxed mb-8 font-medium group-hover:text-[#0f294d] transition-colors duration-300">
                {member.description}
              </p>

              {/* Key Contributions */}
              <div className="mb-6">
                <h4 className="text-[#005f73] font-bold mb-5 text-base uppercase tracking-wide flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Award className="w-4 h-4 mr-2 animate-pulse" />
                  Key Expertise
                </h4>
                <div className="space-y-4">
                  {member.keyContributions
                    .slice(0, 3)
                    .map((contribution, contributionIndex) => (
                      <div
                        key={contributionIndex}
                        className="flex items-start text-base text-[#0f294d]/90 group-hover:text-[#0f294d] transition-all duration-300 hover:translate-x-2"
                        style={{
                          animationDelay: `${contributionIndex * 100}ms`,
                        }}
                      >
                        <div className="w-2.5 h-2.5 bg-[#005f73] rounded-full mt-2.5 mr-4 flex-shrink-0 animate-pulse group-hover:animate-bounce"></div>
                        <span className="leading-relaxed font-medium">
                          {contribution}
                        </span>
                      </div>
                    ))}
                  {member.keyContributions.length > 3 && (
                    <div className="text-sm text-[#005f73]/80 mt-4 ml-6 font-medium group-hover:text-[#005f73] transition-colors duration-300">
                      <Zap className="w-3 h-3 inline mr-1 animate-pulse" />+
                      {member.keyContributions.length - 3} additional
                      specializations
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Overlay for More Details */}
              <div
                className={`transition-all duration-700 ${
                  hoveredCard === member.id
                    ? "max-h-72 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-[#005f73] relative shadow-inner">
                  <div className="absolute top-2 right-2 animate-bounce">
                    <Heart className="w-4 h-4 text-[#005f73]/40" />
                  </div>
                  <h5 className="text-[#005f73] font-semibold mb-3 text-sm uppercase tracking-wide flex items-center">
                    <Target className="w-3 h-3 mr-2" />
                    Additional Expertise
                  </h5>
                  <div className="space-y-3">
                    {member.keyContributions.length > 3 &&
                      member.keyContributions
                        .slice(3)
                        .map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start text-sm text-[#0f294d]/90 hover:text-[#0f294d] transition-colors duration-300"
                          >
                            <div className="w-2 h-2 bg-[#005f73] rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                            <span className="leading-relaxed font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Bottom Accent */}
            <div
              className={`h-2 bg-[#005f73] transition-all duration-500 relative overflow-hidden ${
                hoveredCard === member.id ? "h-3" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Collaborative Approach Section */}
      

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes card-enter {
          from {
            opacity: 0;
            transform: translateY(50px) rotate(5deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-card-enter {
          animation: card-enter 0.8s ease-out forwards;
        }
        .animate-expand {
          animation: expand 1s ease-out 0.5s forwards;
          width: 0;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-fade-in-up {
          animation: slide-up 1s ease-out forwards;
          animation-delay: 1s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default TeamSection;
