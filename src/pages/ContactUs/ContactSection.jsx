



// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     alert('Message sent successfully!');
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       address: '',
//       message: ''
//     });
//     setIsSubmitting(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0f294d' }}>
//             Contact Us
//           </h1>
//           <p className="text-lg max-w-2xl mx-auto" style={{ color: '#073757' }}>
//             We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//               <h2 className="text-2xl font-semibold mb-8" style={{ color: '#0f294d' }}>
//                 Get In Touch
//               </h2>
              
//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0f294d' }}>
//                     <Mail className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold" style={{ color: '#0f294d' }}>Email</h3>
//                     <p style={{ color: '#073757' }}>hello@company.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0f294d' }}>
//                     <Phone className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold" style={{ color: '#0f294d' }}>Phone</h3>
//                     <p style={{ color: '#073757' }}>+1 (555) 123-4567</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0f294d' }}>
//                     <MapPin className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold" style={{ color: '#0f294d' }}>Address</h3>
//                     <p style={{ color: '#073757' }}>
//                       123 Business Street<br />
//                       Suite 100<br />
//                       City, State 12345
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//             <h2 className="text-2xl font-semibold mb-8" style={{ color: '#0f294d' }}>
//               Send Message
//             </h2>

//             <div className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#0f294d' }}>
//                     Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none transition-all duration-200"
//                     style={{ 
//                       focusRingColor: '#0f294d',
//                       color: '#073757'
//                     }}
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#0f294d' }}>
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none transition-all duration-200"
//                     style={{ 
//                       focusRingColor: '#0f294d',
//                       color: '#073757'
//                     }}
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#0f294d' }}>
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none transition-all duration-200"
//                     style={{ 
//                       focusRingColor: '#0f294d',
//                       color: '#073757'
//                     }}
//                     placeholder="(555) 123-4567"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="address" className="block text-sm font-medium mb-2" style={{ color: '#0f294d' }}>
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     id="address"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none transition-all duration-200"
//                     style={{ 
//                       focusRingColor: '#0f294d',
//                       color: '#073757'
//                     }}
//                     placeholder="Your address"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#0f294d' }}>
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 resize-vertical"
//                   style={{ 
//                     focusRingColor: '#0f294d',
//                     color: '#073757'
//                   }}
//                   placeholder="Tell us how we can help you..."
//                 />
//               </div>

//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//                 style={{ 
//                   backgroundColor: '#0f294d',
//                   ':hover': { backgroundColor: '#073757' }
//                 }}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#073757'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#0f294d'}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                     <span>Sending...</span>
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { motion } from "framer-motion";
// import { useState } from "react";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you for your message! We'll get back to you soon.");
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//       message: "",
//     });
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 10,
//         stiffness: 100,
//       },
//     },
//   };

//   const formItemVariants = {
//     hidden: { x: 30, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 15,
//         stiffness: 100,
//       },
//     },
//   };

//   return (
//     <div className="relative h-auto bg-[#cfcfcf]/50 overflow-hidden">
//       {/* Background Image - Top Right */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.2 }}
//         transition={{ duration: 1.5, delay: 0.5 }}
//         className="absolute top-0 right-0 w-full  h-full bg-cover bg-no-repeat bg-center"
//         style={{
//           backgroundImage: "",
//           maskImage: "linear-gradient(to bottom, black, transparent)",
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
//           className="text-center mb-16"
//         >
//           <motion.h1 
//             className="text-4xl md:text-6xl font-extrabold text-[#0f294d] mb-3"
//             whileHover={{ scale: 1.02 }}
//           >
//             Get in Touch
//           </motion.h1>
//           <motion.p 
//             className="text-2xl text-[#073757] max-w-3xl mx-auto"
//             whileHover={{ scale: 1.01 }}
//           >
//             We're here to help and answer any questions you might have.
//           </motion.p>
//         </motion.div>

//         {/* Content */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
//         >
//           {/* Contact Info */}
//           <motion.div className="space-y-8">
//             <motion.div
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#0f294d]"
//             >
//               <div className="flex items-start">
//                 <div className="p-3 rounded-lg bg-gradient-to-br from-[#0f294d] to-[#073757] text-white mr-5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#0f294d] mb-2">Email Us</h3>
//                   <p className="text-[#073757]">info@ozmediaplanet.com</p>
//                   <p className="text-[#073757]">support@ozmediaplanet.com</p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#0f294d]"
//             >
//               <div className="flex items-start">
//                 <div className="p-3 rounded-lg bg-gradient-to-br from-[#0f294d] to-[#073757] text-white mr-5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#0f294d] mb-2">Call Us</h3>
//                   <p className="text-[#073757]">0731-4071492</p>
//                   <p className="text-[#073757]">Mon-Sat: 9am-8pm</p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#0f294d]"
//             >
//               <div className="flex items-start">
//                 <div className="p-3 rounded-lg bg-gradient-to-br from-[#0f294d] to-[#073757] text-white mr-5">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#0f294d] mb-2">Visit Us</h3>
//                   <p className="text-[#073757]">
//                     2nd Floor, Property No. 7, PU4, <br />
//                     Indore (M.P.)<br />
                    
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div 
//             variants={itemVariants}
//             className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#073757] relative overflow-hidden"
//           >
//             {/* Decorative element */}
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0f294d] to-[#073757]"></div>
            
//             <motion.h2 
//               className="text-3xl font-bold text-[#0f294d] mb-8 text-center"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Send a Message
//             </motion.h2>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <motion.div variants={formItemVariants}>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-[#073757] mb-1"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0f294d] focus:border-transparent transition-all duration-200"
//                   placeholder="John Doe"
//                 />
//               </motion.div>

//               <motion.div variants={formItemVariants}>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-[#073757] mb-1"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0f294d] focus:border-transparent transition-all duration-200"
//                   placeholder="you@example.com"
//                 />
//               </motion.div>

//               <motion.div variants={formItemVariants}>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-[#073757] mb-1"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0f294d] focus:border-transparent transition-all duration-200"
//                   placeholder="+1 (123) 456-7890"
//                 />
//               </motion.div>

//               <motion.div variants={formItemVariants}>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-[#073757] mb-1"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0f294d] focus:border-transparent transition-all duration-200"
//                   placeholder="How can we help you?"
//                 ></textarea>
//               </motion.div>

//               <motion.div variants={formItemVariants}>
//                 <motion.button
//                   whileHover={{ 
//                     scale: 1.02,
//                     boxShadow: "0 5px 15px rgba(15, 41, 77, 0.3)"
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#0f294d] to-[#073757] text-white font-semibold text-lg shadow-md transition-all duration-300"
//                 >
//                   Send Message
//                 </motion.button>
//               </motion.div>
//             </form>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;


import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://sheetdb.io/api/v1/le2crpmcyv96f", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              "Name": formData.name,
              "Email": formData.email,
              "Phone": formData.phone,
              "Address": formData.address,
              "Message": formData.message,
            }
          ]
        }),
      });

      const data = await response.json();
      console.log("Form submitted successfully:", data);
      
      setShowThankYou(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
      
      // Hide thank you message after 5 seconds
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const formItemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative h-auto bg-[#cfcfcf]/50 overflow-hidden">
      {/* Background Image - Top Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-0 right-0 w-full  h-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-[#0f294d] mb-3"
            whileHover={{ scale: 1.02 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-2xl text-[#073757] max-w-3xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            We're here to help and answer any questions you might have.
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div className="space-y-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#0f294d]"
            >
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#0f294d] to-[#073757] text-white mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0f294d] mb-2">Email Us</h3>
                  <p className="text-[#073757]">info@ozmediaplanet.com</p>
                  <p className="text-[#073757]">support@ozmediaplanet.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#0f294d]"
            >
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#0f294d] to-[#073757] text-white mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0f294d] mb-2">Call Us</h3>
                  <p className="text-[#073757]">0731-4071492</p>
                  <p className="text-[#073757]">Mon-Sat: 9am-8pm</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#0f294d]"
            >
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#0f294d] to-[#073757] text-white mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0f294d] mb-2">Visit Us</h3>
                  <p className="text-[#073757]">
                    2nd Floor, Property No. 7, PU4, <br />
                    Indore (M.P.)<br />
                    
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#073757] relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0f294d] to-[#073757]"></div>
            
            <motion.h2 
              className="text-3xl font-bold text-[#0f294d] mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Send a Message
            </motion.h2>
            
            {showThankYou ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-green-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-[#0f294d] mb-2">
                  Thank You!
                </h3>
                <p className="text-lg text-[#073757]">
                  Thank you for your response. Our team will connect with you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#073757] mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0f294d] focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#073757] mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0f294d] focus:border-transparent transition-all duration-200"
                    placeholder="you@example.com"
                  />
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#073757] mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0f294d] focus:border-transparent transition-all duration-200"
                    placeholder="+1 (123) 456-7890"
                  />
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-[#073757] mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0f294d] focus:border-transparent transition-all duration-200"
                    placeholder="Your address"
                  />
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#073757] mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0f294d] focus:border-transparent transition-all duration-200"
                    placeholder="How can we help you?"
                  ></textarea>
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 5px 15px rgba(15, 41, 77, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#0f294d] to-[#073757] text-white font-semibold text-lg shadow-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;