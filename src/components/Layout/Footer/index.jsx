// import { Link } from 'react-router-dom';
// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight
// } from 'lucide-react';

// const Footer = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         duration: 0.6
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const socialVariants = {
//     hidden: { scale: 0, rotate: -180 },
//     visible: {
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 260,
//         damping: 20
//       }
//     }
//   };

//   const linkHoverVariants = {
//     hover: {
//       x: 5,
//       color: "#fd4360",
//       transition: { duration: 0.2 }
//     }
//   };

//   const socialLinks = [
//     { icon: Facebook, href: "#", label: "Facebook" },
//     { icon: Twitter, href: "#", label: "Twitter" },
//     { icon: Instagram, href: "#", label: "Instagram" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" }
//   ];

//   const companyLinks = [
//   "Home" ,  "About Us", "IT services",  "Carrier Opportunities", "Digital Marketing Services" ,"Ads Services", "Departments", "Our Team"
//   ];

//   const customerLinks = [
//     "Client Support", "FAQs", "Contact Us" ,"24/7 Support", "Feedback", "Testimonials"
//   ];

//   const additionalLinks = [
//     "OzMediaplanet", "Oz Learning", "Oz International",
//   ];

//   return (
//     <footer className="relative bg-gray-900 text-white overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.3"/></pattern></defs><rect width="100%" height="100%" fill="%23001219"/><rect width="100%" height="100%" fill="url(%23grid)"/><circle cx="1600" cy="200" r="300" fill="%23005f73" opacity="0.1"/><circle cx="300" cy="800" r="200" fill="%23fd4360" opacity="0.1"/></svg>')`
//         }}
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50" />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20" />

//       {/* Content */}
//       <motion.div
//         className="relative z-10 max-w-7xl mx-auto px-6 py-16"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
//           {/* Logo and Company Description */}
//           <motion.div
//             className="lg:col-span-2"
//             variants={itemVariants}
//           >
//             <motion.div
//               className="flex items-center mb-6"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               {/* Logo placeholder - replace with your actual logo */}
//               <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
//                 <img
//                   src="/api/placeholder/48/48"
//                   alt="Company Logo"
//                   className="w-8 h-8 object-contain"
//                   style={{ filter: 'brightness(0) invert(1)' }}
//                 />
//               </div>
//               <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 YourBrand
//               </h2>
//             </motion.div>

//             <motion.p
//               className="text-gray-200 text-md leading-relaxed mb-6 max-w-md"
//               variants={itemVariants}
//             >
//               We create digital experiences for brands and companies by using cutting-edge technology.
//               Our innovative solutions help businesses transform their digital presence and engage with customers effectively.
//             </motion.p>

//             {/* Social Media Icons */}
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={social.label}
//                   href={social.href}
//                   className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center hover:from-red-500 hover:to-pink-600 transition-all duration-300 group"
//                   variants={socialVariants}
//                   whileHover={{
//                     scale: 1.1,
//                     y: -2,
//                     boxShadow: "0 10px 25px rgba(253, 67, 96, 0.3)"
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <social.icon className="w-4 h-4 text-white group-hover:text-white transition-colors" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Company Links */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-lg font-semibold mb-6 text-white relative">
//               Company
//               <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-red-400 to-pink-500 rounded-full" />
//             </h3>
//             <ul className="space-y-3">
//               {companyLinks.map((link, index) => (
//                 <motion.li key={index} variants={linkHoverVariants} whileHover="hover">
//                   <Link href="#" className="text-gray-300 hover:text-white text-sm flex items-center group transition-colors">
//                     <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     {link}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Customer Links */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-lg font-semibold mb-6 text-white relative">
//               Customer
//               <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
//             </h3>
//             <ul className="space-y-3">
//               {customerLinks.map((link, index) => (
//                 <motion.li key={index} variants={linkHoverVariants} whileHover="hover">
//                   <Link href="#" className="text-gray-300 hover:text-white text-sm flex items-center group transition-colors">
//                     <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     {link}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Additional Links & Contact */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-lg font-semibold mb-6 text-white relative">
//               Domains
//               <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
//             </h3>
//             <ul className="space-y-3 mb-8">
//               {additionalLinks.map((link, index) => (
//                 <motion.li key={index} variants={linkHoverVariants} whileHover="hover">
//                   <Link href="#" className="text-gray-300 hover:text-white text-sm flex items-center group transition-colors">
//                     <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     {link}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>

//             {/* Contact Info */}
//             <div className="pt-14 space-y-2">
//               <div className="flex items-center text-gray-400 text-sm">
//                 <Mail className="w-4 h-4 mr-3 text-red-400" />
//                 <span>info@ozmediaplanet.com</span>
//               </div>
//               <div className="flex items-center text-gray-400 text-sm">
//                 <Phone className="w-4 h-4 mr-3 text-blue-400" />
//                 <span>0731-4071492</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Section */}
//         <motion.div
//           className="mt-14 pt-8 border-t  border-gray-700"
//           variants={itemVariants}
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <motion.p
//               className="text-gray-400 text-sm"
//               whileHover={{ color: "#ffffff" }}
//               transition={{ duration: 0.2 }}
//             >
//               © 2024 OzMediaPlanet  All rights reserved.
//             </motion.p>

//             <div className="flex space-x-6">
//               {['Privacy Policy', 'Legal Notice', 'Terms of Service'].map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   className="text-gray-400 hover:text-white text-sm transition-colors relative group"
//                   whileHover={{ y: -1 }}
//                 >
//                   {item}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300" />
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Decorative Elements */}
//       <motion.div
//         className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-red-500/10 to-pink-500/10 blur-lg"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.3, 0.6, 0.3],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />

//       <motion.div
//         className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-xl"
//         animate={{
//           scale: [1.2, 1, 1.2],
//           opacity: [0.6, 0.3, 0.6],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1
//         }}
//       />
//     </footer>
//   );
// };

// export default Footer;
import logo from "../../../assets/images/logo.jpg";
import logo2 from "../../../assets/images/logo (2).jpg";
import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const linkHoverVariants = {
    hover: {
      x: 5,
      color: "#fd4360",
      transition: { duration: 0.2 },
    },
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const companyLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "IT services", to: "/it-services" },
   
    { label: "Digital Marketing Services", to: "/digital-marketing" },
    { label: "Ads Services", to: "/ads-services" },
    { label: "Departments", to: "/organization-departments" },
    { label: "Our Team", to: "/team" },
  ];

  const customerLinks = [
    { label: "Client Support", to: "/contact" },
    { label: "FAQs", to: "/about" },
    { label: "Contact Us", to: "/contact" },
    { label: "24/7 Support", to: "/contact" },
    { label: "Feedback", to: "/contact" },
    { label: "Testimonials", to: "about" },
  ];

  const additionalLinks = [
    { label: "OzMediaplanet", to: "/ozmediaplanet" },
    { label: "Oz Learning", to: "/ozlearning" },
    { label: "Oz International", to: "/ozinternational" },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background SVG Grid & Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.3"/></pattern></defs><rect width="100%" height="100%" fill="%23001219"/><rect width="100%" height="100%" fill="url(%23grid)"/><circle cx="1600" cy="200" r="300" fill="%23005f73" opacity="0.1"/><circle cx="300" cy="800" r="200" fill="%23fd4360" opacity="0.1"/></svg>')`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.div
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-20 h-20  rounded-xl flex items-center justify-center mr-2 ">
                <img
                  src={logo2}
                  alt="Company Logo"
                  className="w-16 h-16 object-contain"
                 
                />
              </div>
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
               Oz Media Planet
              </h2>
            </motion.div>
            <motion.p
              className="text-gray-200 text-md leading-relaxed mb-6 max-w-md"
              variants={itemVariants}
            >
              We create digital experiences for brands and companies by using
              cutting-edge technology. Our innovative solutions help businesses
              transform their digital presence and engage with customers
              effectively.
            </motion.p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center hover:from-red-500 hover:to-pink-600 transition-all duration-300 group"
                  variants={socialVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(253, 67, 96, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-white group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Company
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-red-400 to-pink-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white text-sm flex items-center group transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Customer
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {customerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white text-sm flex items-center group transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Additional + Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Domains
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
            </h3>
            <ul className="space-y-3 mb-8">
              {additionalLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white text-sm flex items-center group transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="pt-14 space-y-2">
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-3 text-red-400" />
                <span>info@ozmediaplanet.com</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span>0731-4071492</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-14 pt-8 border-t border-gray-700"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 text-sm"
              whileHover={{ color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              © 2024 OzMediaPlanet All rights reserved.
            </motion.p>

            <div className="flex space-x-6">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Legal Notice", to: "/legal-notice" },
                { label: "Terms of Service", to: "/terms-of-service" },
              ].map((item, index) => (
                <motion.div key={index} whileHover={{ y: -1 }}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-white text-sm transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Blurs */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-red-500/10 to-pink-500/10 blur-lg"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </footer>
  );
};

export default Footer;
