// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import classNames from "classnames";
// import "../style.css";
// import AnimatedToggleIcon from "../../AmimatedToggleIcon";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { RxCross1 } from "react-icons/rx";
// import { socialIcons } from "../../../assets";
// import { useScroll } from "motion/react";
// import { motion } from "framer-motion";

// const ACTIVE_COLOR = [
//   { linkColor: "#ffffff", bgColor: "#000000" },
//   { linkColor: "#ffffff", bgColor: "#FD273F" },
//   { linkColor: "#ffffff", bgColor: "#8837B9" },
//   { linkColor: "#ffffff", bgColor: "#FFE41B" },
//   { linkColor: "#ffffff", bgColor: "#7FCDFA" },
//   { linkColor: "#ffffff", bgColor: "#00CCB6" },
//   { linkColor: "#ffffff", bgColor: "#FD7B41" },
//   { linkColor: "#ffffff", bgColor: "#CFBBF7" },
// ];

// const Header = () => {
//   const { scrollYProgress } = useScroll();
//   const [open, setOpen] = useState(false);
//   const [activeColor, setActiveColor] = useState(0);

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflowY = "hidden";
//     } else {
//       document.body.style.overflowY = "auto";
//     }

//     return () => {
//       document.body.style.overflowY = "auto";
//     };
//   }, [open]);

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   const navLinks = [
//     { id: 1, path: "/", label: "Home" },
//     { id: 2, path: "/about", label: "About Us" },
//     { id: 3, path: "/it-services", label: "It Services" },
//     { id: 4, path: "/digital-marketing", label: "Digital Marketing" },
//     { id: 5, path: "/contact", label: "Contact Us" },
//     { id: 6, path: "/our-teams", label: "Our Teams" },
//   ];

//   console.log(socialIcons, "socialIcons");

//   return (
//     <>
//       <div className="bg-transparent p-4 xl:px-28 sm:px-14 px-10 flex justify-between items-center relative z-50 ">
//         <motion.div
//           id="scroll-indicator"
//           style={{
//             scaleX: scrollYProgress,
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             height: 5,
//             originX: 0,
//             backgroundColor: "#ff0088",
//           }}
//         />

//         <Link to="./">
//           {/* <img src={logo} className="h-18 object-cover" alt="Logo" /> */}
//           <h1 className="text-white text-2xl">Oz Media</h1>
//         </Link>

//         <AnimatedToggleIcon
//           closeIcon={<HiMenuAlt3 />}
//           openIcon={<RxCross1 />}
//           openColor="text-white"
//           closeColor="text-white"
//           isOpen={open}
//           onClick={() => setOpen(!open)}
//           size="text-4xl"
//           className="font-bold"
//         />
//       </div>

//       {/* Full-screen sliding menu */}
//       <div
//         style={{
//           color: ACTIVE_COLOR[activeColor].linkColor,
//           backgroundColor: ACTIVE_COLOR[activeColor].bgColor,
//         }}
//         className={classNames(
//           "fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-40 p-4 sm:p-10 md:p-20 lg:p-40 ",
//           "transition-all duration-500 ease-in-out",
//           {
//             "translate-y-0": open,
//             "-translate-y-full": !open,
//           }
//         )}
//       >
//         <img
//           src="./images/img_abstractgeometricseamlesspatterns2zqt82c_2.png"
//           className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
//         />

//         <div className="w-full flex  ">
//           <div className="w-1/2  sm:w-full">
//             <ul className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5em] font-bold space-y-6 ">
//               {navLinks.map((item) => (
//                 <li
//                   className="transition-transform duration-300 ease-in-out hover:scale-[1.01] cursor-pointer"
//                   key={item.id}
//                 >
//                   <Link
//                     className="hover:text-black"
//                     onMouseEnter={() => {
//                       setActiveColor(item.id);
//                     }}
//                     onMouseOut={() => {
//                       setActiveColor(0);
//                     }}
//                     to={item.path}
//                     onClick={() => setOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="w-1/2 ">
//             {/* <img src="" className="w-full h-full " /> */}
//           </div>
//         </div>
//         <div className="absolute bottom-10 right-10 flex gap-6">
//           {Object.values(socialIcons).map((icon, index) => (
//             <Link>
//               <img
//                 key={index}
//                 src={icon}
//                 alt={`social-icon-${index}`}
//                 className="filter brightness-50 hover:brightness-150 transition duration-300 cursor-pointer"
//               />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MessageCircle } from 'lucide-react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About Us', href: '#about' },
//     { name: ' IT Services', href: '#services' },
//     { name: 'Digital Marketing ', href: '#portfolio' },
//     { name: 'Carrier Opportunities', href: '#blog' },
//     { name: 'Departments', href: '#contact' },
//     { name: 'Our Teams', href: '#contact' },

//   ];

//   const socialLinks = [
//     { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/1234567890', color: 'hover:text-green-500' },
//     { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-600' },
//     { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-500' },
//     { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-700' },
//     { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
//     { name: 'Email', icon: Mail, href: 'mailto:info@ozmedia.com', color: 'hover:text-red-500' },
//     { name: 'Phone', icon: Phone, href: 'tel:+1234567890', color: 'hover:text-purple-500' }
//   ];

//   const ModernHamburgerIcon = ({ isOpen }) => (
//     <div className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer">
//       <div className={`w-6 h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
//       <div className={`w-6 h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out my-1 ${isOpen ? 'opacity-0' : ''}`} />
//       <div className={`w-6 h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
//     </div>
//   );

//   return (
//     <>
//       {/* Blur Overlay */}
//       <div
//         className={`fixed inset-0 z-30 transition-all duration-500 ease-in-out ${
//           isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//         }`}
//         style={{
//           background: 'rgba(0, 0, 0, 0.3)',
//           backdropFilter: 'blur(8px)',
//           WebkitBackdropFilter: 'blur(8px)'
//         }}
//         onClick={() => setIsMenuOpen(false)}
//       />

//       {/* Navbar */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
//           isScrolled
//             ? 'bg-[#c4bec7] shadow-lg mx-4 mt-4 rounded-full backdrop-blur-md'
//             : 'bg-[#c4bec7] mx-0 mt-0 rounded-none'
//         }`}
//         style={{
//           backgroundColor: '#c4bec7',
//           boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.1)' : 'none'
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             {/* Brand Logo */}
//             <div className="flex-shrink-0">
//               <h1 className="text-2xl md:text-3xl font-bold text-black tracking-wide transform hover:scale-105 transition-transform duration-300 cursor-pointer">
//                 <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
//                   Oz Media
//                 </span>
//               </h1>
//             </div>

//             {/* Right Side Controls */}
//             <div className="flex items-center space-x-4">
//               {/* Get in Touch Button */}
//               <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium">
//                 Get in Touch
//               </button>

//               {/* Modern Hamburger Menu Button */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 onMouseEnter={() => setIsMenuOpen(true)}
//                 className="relative p-3 rounded-full hover:bg-black hover:bg-opacity-10 transition-all duration-300 transform hover:scale-110 focus:outline-none group"
//               >
//                 <ModernHamburgerIcon isOpen={isMenuOpen} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mega Dropdown Menu */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
//           isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//         } md:block`}
//         style={{
//           marginTop: isScrolled ? '5.5rem' : '4.5rem',
//           marginLeft: isScrolled ? '1rem' : '0',
//           marginRight: isScrolled ? '1rem' : '0',
//           maxHeight: 'calc(100vh - 6rem)',
//         }}
//         onMouseLeave={() => setIsMenuOpen(false)}
//       >
//         <div
//           className={`relative max-w-5xl mx-auto rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden ${
//             isMenuOpen ? 'animate-unroll' : 'animate-roll-up'
//           }`}
//           style={{
//             background: 'linear-gradient(135deg, rgba(196, 190, 199, 0.95) 0%, rgba(212, 205, 215, 0.95) 50%, rgba(196, 190, 199, 0.95) 100%)',
//             boxShadow: '0 25px 50px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
//             border: '1px solid rgba(255,255,255,0.2)',
//             maxHeight: 'calc(100vh - 8rem)',
//             transformOrigin: 'top center',
//           }}
//         >
//           <div className="overflow-y-auto h-full">
//           {/* Close Button */}
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="absolute top-4 right-4 p-3 rounded-full bg-black bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110 hover:rotate-90 z-50 group"
//           >
//             <div className="w-5 h-5 relative">
//               <div className="absolute inset-0 w-5 h-0.5 bg-black rounded-full transform rotate-45 top-2 group-hover:bg-red-500 transition-colors duration-300"></div>
//               <div className="absolute inset-0 w-5 h-0.5 bg-black rounded-full transform -rotate-45 top-2 group-hover:bg-red-500 transition-colors duration-300"></div>
//             </div>
//           </button>

//           <div className="p-4 md:p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
//               {/* Navigation Links Section */}
//               <div className="lg:col-span-2">
//                 <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 flex items-center">
//                   <div className="w-1 h-5 md:h-6 bg-gradient-to-b from-black to-gray-600 rounded-full mr-3 md:mr-4"></div>
//                   <span className="tracking-wide">Navigation</span>
//                 </h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
//                   {navLinks.map((link, index) => (
//                     <a
//                       key={link.name}
//                       href={link.href}
//                       className="group relative overflow-hidden bg-white bg-opacity-40 hover:bg-opacity-70 rounded-lg md:rounded-xl p-3 md:p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1"
//                       style={{
//                         animationDelay: `${index * 0.1}s`,
//                         animation: isMenuOpen ? 'slideInFromTop 0.6s ease-out forwards' : 'none'
//                       }}
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                       <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       <span className="relative z-10 text-black font-semibold group-hover:text-gray-900 transition-colors duration-300 text-sm md:text-base tracking-wide">
//                         {link.name}
//                       </span>
//                       <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 group-hover:w-full transition-all duration-500"></div>
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Social Media & Contact Section */}
//               <div>
//                 <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 flex items-center">
//                   <div className="w-1 h-5 md:h-6 bg-gradient-to-b from-black to-gray-600 rounded-full mr-3 md:mr-4"></div>
//                   <span className="tracking-wide">Connect</span>
//                 </h3>
//                 <div className="space-y-2 md:space-y-3">
//                   {socialLinks.slice(0, 4).map((social, index) => {
//                     const IconComponent = social.icon;
//                     return (
//                       <a
//                         key={social.name}
//                         href={social.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`group flex items-center space-x-3 md:space-x-4 p-2.5 md:p-3 bg-white bg-opacity-40 hover:bg-opacity-70 rounded-lg md:rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
//                         style={{
//                           animationDelay: `${(index + navLinks.length) * 0.1}s`,
//                           animation: isMenuOpen ? 'slideInFromTop 0.6s ease-out forwards' : 'none'
//                         }}
//                       >
//                         <div className="relative">
//                           <IconComponent className="w-4 md:w-5 h-4 md:h-5 text-black group-hover:scale-125 transition-all duration-300" />
//                           <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 scale-0 group-hover:scale-150 transition-all duration-300"></div>
//                         </div>
//                         <span className="text-black font-semibold text-sm md:text-base tracking-wide">{social.name}</span>
//                         <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="w-2 h-2 bg-current rounded-full"></div>
//                         </div>
//                       </a>
//                     );
//                   })}
//                 </div>

//                 {/* Contact Information */}
//                 <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white bg-opacity-50 rounded-lg md:rounded-xl border border-white border-opacity-30 hover:bg-opacity-70 transition-all duration-300">
//                   <h4 className="text-base md:text-lg font-bold text-black mb-2 md:mb-3 tracking-wide">Contact Info</h4>
//                   <div className="space-y-2 md:space-y-3">
//                     <div className="flex items-center group">
//                       <Mail className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 text-black group-hover:scale-110 transition-transform duration-300" />
//                       <span className="text-black font-medium text-sm md:text-base tracking-wide">info@ozmedia.com</span>
//                     </div>
//                     <div className="flex items-center group">
//                       <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 text-black group-hover:scale-110 transition-transform duration-300" />
//                       <span className="text-black font-medium text-sm md:text-base tracking-wide">+1 (234) 567-8900</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Get in Touch Button */}
//             <div className="md:hidden mt-4">
//               <button
//                 className="w-full bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold text-sm tracking-wide"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Get in Touch
//               </button>
//             </div>

//             {/* Decorative Elements */}
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-20 rounded-t-2xl"></div>
//             <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-20 rounded-b-2xl"></div>
//           </div>
//         </div>
//       </div>
//       </div>
//       <style jsx>{`
//         @keyframes slideInFromTop {
//           from {
//             transform: translateY(-40px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes unroll {
//           from {
//             height: 0;
//             transform: scaleY(0);
//             opacity: 0;
//           }
//           to {
//             height: auto;
//             transform: scaleY(1);
//             opacity: 1;
//           }
//         }

//         @keyframes roll-up {
//           from {
//             height: auto;
//             transform: scaleY(1);
//             opacity: 1;
//           }
//           to {
//             height: 0;
//             transform: scaleY(0);
//             opacity: 0;
//           }
//         }

//         .animate-unroll {
//           animation: unroll 0.6s ease-out forwards;
//         }

//         .animate-roll-up {
//           animation: roll-up 0.4s ease-in forwards;
//         }
//       `}</style>
//    </>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from 'react';
// import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MessageCircle } from 'lucide-react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About Us', href: '#about' },
//     { name: ' IT Services', href: '#services' },
//     { name: 'Digital Marketing ', href: '#portfolio' },
//     { name: 'Carrier Opportunities', href: '#blog' },
//     { name: 'Departments', href: '#contact' },
//     { name: 'Our Teams', href: '#contact' },
//   ];

//   const socialLinks = [
//     { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/1234567890', color: 'hover:text-green-500' },
//     { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-600' },
//     { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-500' },
//     { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-700' },
//     { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
//     { name: 'Email', icon: Mail, href: 'mailto:info@ozmedia.com', color: 'hover:text-red-500' },
//     { name: 'Phone', icon: Phone, href: 'tel:+1234567890', color: 'hover:text-purple-500' }
//   ];

//   const ModernHamburgerIcon = ({ isOpen }) => (
//     <div className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer">
//       <div className={`w-6 h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
//       <div className={`w-6 h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out my-1 ${isOpen ? 'opacity-0' : ''}`} />
//       <div className={`w-6 h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
//     </div>
//   );

//   return (
//     <>
//       {/* Blur Overlay */}
//       <div
//         className={`fixed inset-0 z-30 transition-all duration-500 ease-in-out ${
//           isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//         }`}
//         style={{
//           background: 'rgba(0, 0, 0, 0.3)',
//           backdropFilter: 'blur(8px)',
//           WebkitBackdropFilter: 'blur(8px)'
//         }}
//         onClick={() => setIsMenuOpen(false)}
//       />

//       {/* Navbar */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
//           isScrolled
//             ? 'bg-[#c4bec7] shadow-lg mx-4 mt-4 rounded-full backdrop-blur-md'
//             : 'bg-[#c4bec7] mx-0 mt-0 rounded-none'
//         }`}
//         style={{
//           backgroundColor: '#c4bec7',
//           boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.1)' : 'none'
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex-shrink-0">
//               <h1 className="text-2xl md:text-3xl font-bold text-black tracking-wide transform hover:scale-105 transition-transform duration-300 cursor-pointer">
//                 <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
//                   Oz Media
//                 </span>
//               </h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium">
//                 Get in Touch
//               </button>
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 onMouseEnter={() => setIsMenuOpen(true)}
//                 className="relative p-3 rounded-full hover:bg-black hover:bg-opacity-10 transition-all duration-300 transform hover:scale-110 focus:outline-none group"
//               >
//                 <ModernHamburgerIcon isOpen={isMenuOpen} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mega Dropdown Menu */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
//           isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//         } md:block`}
//         style={{
//           marginTop: isScrolled ? '5.5rem' : '4.5rem',
//           marginLeft: isScrolled ? '1rem' : '0',
//           marginRight: isScrolled ? '1rem' : '0',
//           maxHeight: 'calc(100vh - 6rem)',
//         }}
//         onMouseLeave={() => setIsMenuOpen(false)}
//       >
//         <div
//           className={`relative max-w-5xl mx-auto rounded-2xl shadow-2xl backdrop-blur-xl ${
//             isMenuOpen ? 'animate-unroll' : 'animate-roll-up'
//           }`}
//           style={{
//             background: 'linear-gradient(135deg, rgba(196, 190, 199, 0.95) 0%, rgba(212, 205, 215, 0.95) 50%, rgba(196, 190, 199, 0.95) 100%)',
//             boxShadow: '0 25px 50px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
//             border: '1px solid rgba(255,255,255,0.2)',
//             transformOrigin: 'top center',
//           }}
//         >
//           {/* SCROLLABLE CONTENT */}
//           <div className="max-h-[80vh] overflow-y-auto p-4 md:p-8">
//             {/* Close Button */}
//             <button
//               onClick={() => setIsMenuOpen(false)}
//               className="absolute top-4 right-4 p-3 rounded-full bg-black bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110 hover:rotate-90 z-50 group"
//             >
//               <div className="w-5 h-5 relative">
//                 <div className="absolute inset-0 w-5 h-0.5 bg-black rounded-full transform rotate-45 top-2 group-hover:bg-red-500 transition-colors duration-300"></div>
//                 <div className="absolute inset-0 w-5 h-0.5 bg-black rounded-full transform -rotate-45 top-2 group-hover:bg-red-500 transition-colors duration-300"></div>
//               </div>
//             </button>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
//               <div className="lg:col-span-2">
//                 <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 flex items-center">
//                   <div className="w-1 h-5 md:h-6 bg-gradient-to-b from-black to-gray-600 rounded-full mr-3 md:mr-4"></div>
//                   <span className="tracking-wide">Navigation</span>
//                 </h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
//                   {navLinks.map((link, index) => (
//                     <a
//                       key={link.name}
//                       href={link.href}
//                       className="group relative overflow-hidden bg-white bg-opacity-40 hover:bg-opacity-70 rounded-lg md:rounded-xl p-3 md:p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1"
//                       style={{
//                         animationDelay: `${index * 0.1}s`,
//                         animation: isMenuOpen ? 'slideInFromTop 0.6s ease-out forwards' : 'none'
//                       }}
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                       <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       <span className="relative z-10 text-black font-semibold group-hover:text-gray-900 transition-colors duration-300 text-sm md:text-base tracking-wide">
//                         {link.name}
//                       </span>
//                       <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 group-hover:w-full transition-all duration-500"></div>
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Social Media & Contact Section */}
//               <div>
//                 <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 flex items-center">
//                   <div className="w-1 h-5 md:h-6 bg-gradient-to-b from-black to-gray-600 rounded-full mr-3 md:mr-4"></div>
//                   <span className="tracking-wide">Connect</span>
//                 </h3>
//                 <div className="space-y-2 md:space-y-3">
//                   {socialLinks.slice(0, 4).map((social, index) => {
//                     const IconComponent = social.icon;
//                     return (
//                       <a
//                         key={social.name}
//                         href={social.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`group flex items-center space-x-3 md:space-x-4 p-2.5 md:p-3 bg-white bg-opacity-40 hover:bg-opacity-70 rounded-lg md:rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
//                         style={{
//                           animationDelay: `${(index + navLinks.length) * 0.1}s`,
//                           animation: isMenuOpen ? 'slideInFromTop 0.6s ease-out forwards' : 'none'
//                         }}
//                       >
//                         <div className="relative">
//                           <IconComponent className="w-4 md:w-5 h-4 md:h-5 text-black group-hover:scale-125 transition-all duration-300" />
//                           <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 scale-0 group-hover:scale-150 transition-all duration-300"></div>
//                         </div>
//                         <span className="text-black font-semibold text-sm md:text-base tracking-wide">{social.name}</span>
//                       </a>
//                     );
//                   })}
//                 </div>

//                 <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white bg-opacity-50 rounded-lg md:rounded-xl border border-white border-opacity-30 hover:bg-opacity-70 transition-all duration-300">
//                   <h4 className="text-base md:text-lg font-bold text-black mb-2 md:mb-3 tracking-wide">Contact Info</h4>
//                   <div className="space-y-2 md:space-y-3">
//                     <div className="flex items-center group">
//                       <Mail className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 text-black group-hover:scale-110 transition-transform duration-300" />
//                       <span className="text-black font-medium text-sm md:text-base tracking-wide">info@ozmedia.com</span>
//                     </div>
//                     <div className="flex items-center group">
//                       <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 text-black group-hover:scale-110 transition-transform duration-300" />
//                       <span className="text-black font-medium text-sm md:text-base tracking-wide">+1 (234) 567-8900</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Get in Touch Button */}
//             <div className="md:hidden mt-4">
//               <button
//                 className="w-full bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold text-sm tracking-wide"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Get in Touch
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideInFromTop {
//           from {
//             transform: translateY(-40px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes unroll {
//           from {
//             height: 0;
//             transform: scaleY(0);
//             opacity: 0;
//           }
//           to {
//             height: auto;
//             transform: scaleY(1);
//             opacity: 1;
//           }
//         }

//         @keyframes roll-up {
//           from {
//             height: auto;
//             transform: scaleY(1);
//             opacity: 1;
//           }
//           to {
//             height: 0;
//             transform: scaleY(0);
//             opacity: 0;
//           }
//         }

//         .animate-unroll {
//           animation: unroll 0.6s ease-out forwards;
//         }

//         .animate-roll-up {
//           animation: roll-up 0.4s ease-in forwards;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Header;
import logo from "../../../assets/images/logo.jpg"
import React, { useState, useEffect } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "IT Services", href: "/it-services" },
    { name: "Digital Marketing", href: "/digital-marketing" },

    { name: "Departments", href: "/organization-departments" },
    { name: "Our Teams", href: "/our-teams" },
    { name: "Connect", href: "/contact" },
    { name: "policies", href: "/privacy-policy" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/1234567890",
      color: "hover:text-green-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-700",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:info@ozmedia.com",
      color: "hover:text-red-500",
    },
    {
      name: "Phone",
      icon: Phone,
      href: "tel:+1234567890",
      color: "hover:text-purple-500",
    },
  ];

  const ModernHamburgerIcon = ({ isOpen }) => (
    <div className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer">
      <div
        className={`w-6 h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-1" : ""
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out my-1 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-black rounded-full transform transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-1" : ""
        }`}
      />
    </div>
  );

  return (
    <>
      {/* Blur Overlay */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-[#c4bec7] shadow-lg mx-4 mt-4 rounded-full backdrop-blur-md"
            : "bg-[#c4bec7] mx-0 mt-0 rounded-none"
        }`}
        style={{
          backgroundColor: "#c4bec7",
          boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-2xl md:text-3xl font-bold text-black tracking-wide transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Link to="/" className="flex items-center space-x-2">
                  {/* Logo Image */}
                  <img
                    src={logo} // replace with actual path e.g., /assets/logo.png or import it
                    alt="Logo"
                    className="w-8 h-8 md:w-12 md:h-12 object-contain"
                  />

                  {/* Oz Media Text */}
                  <span className="bg-gradient-to-r from-black to bg-slate-900 bg-clip-text text-transparent">
                   Media Planet
                  </span>
                </Link>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/contact">
                <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium">
                  Get in Touch
                </button>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onMouseEnter={() => setIsMenuOpen(true)}
                className="relative p-3 rounded-full hover:bg-black hover:bg-opacity-10 transition-all duration-300 transform hover:scale-110 focus:outline-none group"
              >
                <ModernHamburgerIcon isOpen={isMenuOpen} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Dropdown */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:block`}
        style={{
          marginTop: isScrolled ? "5.5rem" : "4.5rem",
          marginLeft: isScrolled ? "1rem" : "0",
          marginRight: isScrolled ? "1rem" : "0",
          maxHeight: "calc(100vh - 6rem)",
        }}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <div
          className={`relative max-w-5xl mx-auto rounded-2xl   shadow-2xl backdrop-blur-xl ${
            isMenuOpen ? "animate-unroll" : "animate-roll-up"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(196, 190, 199, 0.95) 0%, rgba(212, 205, 215, 0.95) 50%, rgba(196, 190, 199, 0.95) 100%)",
            boxShadow:
              "0 25px 50px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
            border: "2px solid [#073757] ",
            transformOrigin: "top center",
          }}
        >
          <div className="max-h-[80vh] overflow-y-auto p-4 md:p-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-3 rounded-full bg-black bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110 hover:rotate-90 z-50 group"
            >
              <div className="w-5 h-5 relative">
                <div className="absolute inset-0 w-5 h-0.5 bg-black rounded-full transform rotate-45 top-2 group-hover:bg-red-500 transition-colors duration-300"></div>
                <div className="absolute inset-0 w-5 h-0.5 bg-black rounded-full transform -rotate-45 top-2 group-hover:bg-red-500 transition-colors duration-300"></div>
              </div>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 flex items-center">
                  <div className="w-1 h-5 md:h-6 bg-gradient-to-b from-black to-gray-600 rounded-full mr-3 md:mr-4"></div>
                  <span className="tracking-wide">Navigation</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="group relative overflow-hidden cursor-pointer bg-white/50 border-2 border-[#073757] hover:bg-opacity-70 rounded-lg md:rounded-xl shadow-lg p-3 md:p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: isMenuOpen
                          ? "slideInFromTop 0.6s ease-out forwards"
                          : "none",
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 text-[#073757] font-bold group-hover:text-gray-900 transition-colors duration-300 text-sm md:text-base tracking-wide">
                        {link.name}
                      </span>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 group-hover:w-full transition-all duration-500"></div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 flex items-center">
                  <div className="w-1 h-5 md:h-6 bg-gradient-to-b from-black to-gray-600 rounded-full mr-3 md:mr-4"></div>
                  <span className="tracking-wide">Connect</span>
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {socialLinks.slice(0, 4).map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center space-x-3 md:space-x-4 p-2.5 md:p-3 bg-white bg-opacity-40 hover:bg-opacity-70 rounded-lg md:rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                        style={{
                          animationDelay: `${(index + navLinks.length) * 0.1}s`,
                          animation: isMenuOpen
                            ? "slideInFromTop 0.6s ease-out forwards"
                            : "none",
                        }}
                      >
                        <IconComponent className="w-4 md:w-5 h-4 md:h-5 text-black group-hover:scale-125 transition-all duration-300" />
                        <span className="text-[#0f294d] font-bold text-sm md:text-base tracking-wide">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white bg-opacity-50 rounded-lg md:rounded-xl border border-white border-opacity-30 hover:bg-opacity-70 transition-all duration-300">
                  <h4 className="text-base md:text-lg font-bold text-black mb-2 md:mb-3 tracking-wide">
                    Contact Info
                  </h4>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center group">
                      <Mail className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 text-black group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-black font-medium text-sm md:text-base tracking-wide">
                        info@ozmedia.com
                      </span>
                    </div>
                    <div className="flex items-center group">
                      <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3 text-black group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-black font-medium text-sm md:text-base tracking-wide">
                        0731-4071492
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden mt-4">
           <a href="">
              <button
                className="w-full bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold text-sm tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </button>
           </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            transform: translateY(-40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes unroll {
          from {
            height: 0;
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            height: auto;
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes roll-up {
          from {
            height: auto;
            transform: scaleY(1);
            opacity: 1;
          }
          to {
            height: 0;
            transform: scaleY(0);
            opacity: 0;
          }
        }

        .animate-unroll {
          animation: unroll 0.6s ease-out forwards;
        }

        .animate-roll-up {
          animation: roll-up 0.4s ease-in forwards;
        }
      `}</style>
    </>
  );
};

export default Header;
