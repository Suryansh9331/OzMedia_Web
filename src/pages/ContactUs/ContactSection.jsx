



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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
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
          backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8PEBAPEA8PEA8PDw8PEA8PDw8NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGi0dHR0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYABwj/xAA7EAABAwIEBAMGBAQGAwAAAAABAAIDBBEFEiExBkFRYRMicQcyQoGRoRQjUrEWksHRFWJygqLwF0NT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAEDAgQFBv/EACsRAAICAgICAgEDAwUAAAAAAAABAhEDEiExBEETUWEUIjIFsdFCUmKRof/aAAwDAQACEQMRAD8A8uXSc5yAOSA5ACIAUIAVAHJgcgBwCBDgmAqBCIGOCYh9kwGOCTARIB7QmB7ZwZA1tDT5ebAT6r5/Lzkm39nr9Ril9IOZVkRxakFnmHtNiAqIyNzHr8jou/8Ap/Ul+SPldRZinFejRxWSwvWWjSYVpJVhoopBiCXRYaN2Wo5kqCy1HOnQrLDJ0UFk7ahOhWEKO5W4xIzmFYtFSjnciTxU6FsQyTLSiTlMhMq1RPc8AUjvOQByAOQAiAFQAqAFTAUBACoEKEwHIEcAgY4JiJAEwGFIDg1ICaOJFmkj1P2dYo10H4ZxAfHfJf4mdvReN5UNcjfp/wBz0sb2gvwbLKoUOyOokbG0veQABck6aJPgcU26R5XxDmrZ3SjSNvlaT0HZd2CSwxp9szlxPI+OkAqjCgPid9l0rPZCXjpeylJAWHqOqtGVnPKDiWqV6bQJhWKXRYo1ZO2ZFBZPHMihWTtnToLLlGS49k1GzEp0aSkIACqonJKZZfUABNRJyyIoVGJAc1RQISyg6TGRfdU0RJ5WKMWb1T+MXynj64j2zkAcgDkAImAoQAoQAtkAKgDkCHBMBQUCOQMcExEgcgBqAJGBJsZZhWWbQYoJchDmkhw1BBsQVx5ltwz0MHBqYeKahrQMzXd3A3+xXB8X02dbhF80DsSxeafR7/Kfhbo2/fr81SGNR5B16ElcGtyjYLEbbs1JJKgPVS3K64nJMqSgEEFWjwc81aKkC6TkRfY7RI0Pa9BmyZsidBZPC4uNk0jMpUH6KMgCwVoxOPJkLElS5oVVA4p5aBtTiMhvqqaoju2DZap55oo2nH2Vn5zrqimPaHoqundfdLk2tWZdcB7JyAFQBxQAgTEKgY4IAVAjkAcmAoQByAFQBwKAHXTEKEhkrEmNFiMLDZtItRzKUonTCVFk1WgUfj5Oh5uCN1WdD01WljJvMEp6gPaHDUEXXNGGrpnTLJsrQMlcV0JHNJkT32Fz/wBKpFWyM3SIYF0HMi6BokM4FAh4emIL4HBmN1WCOfNI2NNTaDRbs5GrI6qkutxkQnjKTqFq3sS0KVVRNGy3FmJRoqPiFjstGAJND5j6rVApsyK8o+lFQByAOTAVAhQgBUAKgDkAcgDkwFQByAFCAHhAHWQA9qAJhIs6mlIUSWS1NKdCeKUtQ3OdISnqJzsM8NYVVVLssLfy/ic+4YPQ9fRSyRi++y2FzXXRqargKUMzCRpfb3ToLqKVM6HT67MRiuHzwvyzMLelvdPoV1Q1rg48ikn+4jgWjBdakM4BMywnh+DvkIJFh+63GJKeVLhGxwvCxGALKnRyu5MNMisFizWpDOxaiyc0BqxxauiPJxTtAGvrCOqqkQbsCyYk4XTujUcbZUdWX1Rsh/CzOLyz6I5ACoAVMDkCHBACoGdZAHIEKgBQEwFyoAUBIY4NQBI1iYDsi2kYk6HBi0omNh2VPUW4+GBz3BjGue92jWtBc4nsAsuKXZpSvg9H4R4JjawS1cd5HaiN+zBy06rlnk5pHZDFxb7NHNwvROteCOw5WCls/spqvoIQNjiAaxrWNGgAFgs2b1s6WsYOYSc0ajikDMUpIKqMteAe/MFEZ/Q5Y300eVYrh34eZ0e7b+U9l1RlsjiyQ0dHQROeQGi5WkrJt0uTU4NgFrOcLlVUaOWeW+jVU1EGgaIbMJWWg0BIfR2dFC2EcNEDBWIxixVsbOPNFGUrmgXXUjifBm8QjHJKa4LYZcgkkrn5PSVUU1yHaKgBUAcgBUxDkDFCAOQByAFQAoQA4IAVIY9qAJ2BbiZkI4qpFjcydmaHRguIa0EucQ0AblxNgEWFHtvCnDkdHE0ZW+MWjxZbXc53MA8mjouCc3N/g9GEFjVLsLVkwYP7qUnRbFFyZm6riDI7Ldc/yM9GPiJgau4ie7RgKVtl44IxKBqJz5iSkUUUczEpWA6lNGZwTKxYK02Js8LtwunR5HmY+LRpMGwRsYGmq7eEeC5OT5D8UIaFluwSom8QJUPYa7VMHyQuNkzD4GukRQnIE4jIrwRy5WZfESbFXRyszVS/WyTZfHEqOYsUdCkwauA9UVAHIAWyAFsmAoQA4JALZACIA5MBwQAqAFCQ0SRhAyxbRWiiUmQSFaZNDLpDN37MeHzLKK2QflREiEH45ubvRv7+ihmyUtUXw47e3pHqk0oY265m6R1Qg5OjHcQYqScrTrtouOctme14+BRVlPDMGdJeSTQWO6FFs1PPGLpdlmHDIQTqD35JqJmWWTXRc8GFwIGwWqRLbIgbiFA3Ie+yVUUjNtmfpm+DOwt66qsZEs0LR6LQPa9oI5/uu6E9kfO5sOkx9Q0hUicuRNIHOkN1akcrkyRspWWjakQzyFNRFKTKZqrbrepHdgrEK8bKkYk5SsHSyAgrZNmUxM2cVPI6O3x1aKXiqW50/EVLLkO4UIAWyYCoA5AjgmA8JAKUDGoAcAmIcEwOskwECQyeFaQmSucrxRCTsrPKyxpBDhzCHVlQyFug1dI7kyIbn7gepU5z1VlceNzlR7phtAyCFkbAGsjaGtHQf35n1XHy+Wd3C/agNj+IloIB1OgC5skj0vFwrtgn8KGN8WXUkXaCpVR177vWJl8cxOZ28j8g2aHENA9Ar41fZLNUFa4If4htGGgm618LJfqoVfssUvEBFhfTn3S+Oh/PGRooKvOy56aBZY4rkDVDrOLyNAdEolJoN8NYqRJlPuu+x5LoxSp0eZ5eLaNrtG1sHBdXR5DVg+qp7aqsZHJkxlJzwN1SjnuhjZmu00TpoFJMpV9PpotxZOcTH4sxwKqYilZRFWQ210JjePkCVslyoZHbO/BDVFZSOgaoHQKgDkAOAumDdFqSgcGh1wb8hutvHJKyKyxboqFpG6zRQcEhoUpDEsmFD0xHIEciwEakMmBVIonJjXvW2zCRGVg0ereyvAy2mdUu0NQ7y6a+EwkD5E3P0XNm/c6+jswPSN+3/Y1+M1gijtzsoZZaqjr8XE8krMzR0jp5M7gS0a27DkuWKtnqZcixql2VMcklcTcEAaAW0AWW23yUwqMY8GKxcSZSCNCdxyXVhqzk8vfRop0WA1cwzRQSOadnEBjD6OcQCulziu2eUsc30jSYPwLVOcDK+KIDlm8R/wBBp91OU0+i8Iyg7kbqh4UawDNK52nJoAU/jsq/Ma6RBX8MxOt53WHIgWv6rGtM2vJlJco6g4Yib5g/6KiRKeb1RoY2ZRa9/wCqvGf2edPE+0V55RsrxRxTkugPikd2khXxs480ODDjFXxTEOJtddFro51jdWg6MXa5u6WgbP2AMWq2m6fSHFWZueRYbOqMSi86qLZ1RQgWbNUQqBexQgLHAoGTQW1+y1EzIv0dQW6HUK8JUcuTHfJelpWPFxZUcUyMckouivDgznnyj7KTxWXWegjNwNV5c8QZM22zHDN6WNlOWOvZSGe+01/6Z+soZYXZZY3xu6PaW/S+6y4tFYzjLpkKzZs5MVCFAhWpoTFJVCZHdIAlw5hZq6qGnF7PdeQjlENXH6afNZnLVWUxw2lR9AMayGJrGgNa1oa1jeTQNlySlS5OuMXN8AGsp31ElreW+i5GnOR6uOccGP8AIVoYWs8g3GhXTCKR5+WbnyyxPQseCC0arTgmSjllF8MzzeGIzOC8Xjb5sp2c6+l+ygsdSO9+Y5Y/yFnxxg2IbYaWst1GyKlOuGOyxkGwAI2I0T1i0Y2mmrKdLi9xY76hSjl9F8vi82iCuq/Kbm10SkaxY+eDNniHw3lgvl5crLUejeSCXZfjx4Ob74B7rVMkkl6LcWIh7M17nn67Fehh/dE+f82OmRkE1ZcEKyjTONytGFx5v5l1czDi0URIQN0BqitNITzWWUikUpnqcnReESo5yg2dCQ3Os2ao5I0KgBQUAPY6yALEb7rSZlovU9QW2V4SOeeOzY8Nzsdba6pLlHFTUuTWskyC7TY9lGrLqVdETsfp3nwahrDfTzgOafqmsT/0sHlT7RUreDcPqAXMZ4ROzoXW/wCJu37LDT9o3HK3/GRmsR9m8rbmCdkg5NkaY3fzC4P2WNUWWeS/kjLYhgFVBfxYJAB8YbnZbrmbcD5o0aNrNB+we1OKG2NcmZG2QM1vszxaKlrfzrBszPCEhF8j8wI9Advop5FaKYmk6+z2VzoiM2YO7g3XM0mda3XHQPmxBrCTaw681i6LLG5A1uI+fM036g80RZScOKZoaOqD2gg68wqpnFJUydzLkFJoSdA2vonE6HRRnjfo7cOeKVMg/Dhti54HIi+p9Amko9sbnKfEUVKPDvMTra5I9LqahzZXJmqNFypwwOC3LHZDH5DiAKjhhpuSUKLRWXkJ+jK45QGI6FbizL5VlTD8SdGwtvzXoePwjxPP/dJBCLESQT2XQ0eelQFrpy91ytozRUkfZDNRVlGaZSlMvCBSlkuueUrOqMaIismhEgHoGcgB7WkosaRago3O5KbmkVjibCEODuIUX5CTLrxG0Q1FK+PcFXhlUujnyYHHtD6CqfG4FhXXjmcOXGmamLHZiyxF1bU5DP4rVPeSSCszLY4okwbieopiASXx9DuPRYWT1Lk1Px1LmPDN3hfGEMoF3AHodCnpF9HO3kh/JBuHEY3bELLxtAs0X2VK/B6OouZIYnOPxgBr/wCYapU/ZpZK/izN1/s/hdcwyyRnkHWlb/Q/dFI0vIku+TO13BNZHctDJR/kdZ30db9ylqysfIi++ABVUksR/MjkjIOmZpbr2JWWmuy0Zxl07Njw1x4Y8sc4u3bOP6hQlj9o7oeRxUz0KCemq2BzXNcCORCk4/ZeM3HmJBJhAZq06LGtFvl24ZHBWtafK8XHdFmZY7DNFjMb/KXAO6dVpSOeeGSL8sgy8j2KcqZiN39A4aXd4cd+wP8AdYUEuaOhzk+NnQFxXiSaHaKK3Wzjb7p2P4l22UYuLXP95wHYCwWXZtY4eh1TxO3LvdZdm1jguTFY1jBlcbKsIfZPLlSVIHwxlejhXB4nky5CzBZvyV6OKwTVSWum3QRVgqoqLrnnkOyGOio591FsskMKyaEQI5AE7YSVnYootlyCgJ5KcsqRWOBsMUWDE8lzT8ijsx+MaCiwcC2i4557OuOJILw4eByXO5tleBKrCWPFiAtQzSi+DMoxkqYG/hpodpoF6vj+XfZ5nkeGvQRhwrKNQF6sMyZ4uXxmmMqMLY7cBU3IfG0C6rAWHkm0mNTlEA12EZPdU5Y/ovHNfDKcdXPEfK9wt3WNpxNvHjn2gjS8V1LNyHDvoVr5n7RCXhwfToM0fHewexw7jVP5IPvgm/Emv4uw7ScWQSW849DoVpKL6ZKWPLHtB6lbFM25LSD6EFSnJxfBfF46mrlwUqzgigmv5GtPWPyH7aKbn9o6Y4XHqQJPs9mhJfR1bmHfJILtPa4/ssNxfZaDyQ5TKOKyY1AwtfG2QbZ4jm0623SWFS65LPzXBfuVGDmq52vJc6Rrydb5m/Za1rhomszk9lI33AkwlAdLdzh8RN0SxKrRqHmS21kb4VLGkC4XM1R1xe5IZARulY0mgRisLHg3ISLRMLiVC1rjlfZaQmkCZgRu4LSiTcq9j8LpmvJJ1AOirCFnJlypIIfhxmNhoF6EIpI8fJPaRVxKqDBZDlQoQbM5U1JcueeSztx4qKZKiWoRACFIYiBHIA2lNhHZeXLOexHAkGKTCwLaLmnms6I40gvTUYHJQc2zfRfjiAWAslAQIa4oNFWoNtQtwk0+BtJgqpxZ8fcL08OaRxZsESgeJG31C745XR5s8MbJo8bidz+qqspCWAq107HC4IKrHJZCWGgBPGCVvsxbRJFSNct6om8jsszcOPLQ4RvAPOxUmoN1ZeLyVdA2fB3t5H6LLxfRtZfsiiqamHRkkjB0Djb6LGrRRTTCNLxdWM3fm/1C37I2YnFMM0XtFkbbxGH1aQUri+0LWS6Ybi47p5m5XOyk/qFlqKinaJ5FOUaJWikqPedE8HkbKrm6OJeNJPl0EKLAKdgPg/l3/SdFJ5PwdccL+wVi3D1dmD4JmuA1yu0+4U5OMjpxPJDrkB1+O11MMs0Txb4hq0/NT+JHUvL+0AKriqeTnZNQSMy8mT6KzXVUuoa8/KyHKKBQzS6TJYcCrJCAI3a9SEvkgafjZvaNxgnB8jGDM5odboTqtrPFeiE/Ek+2S1nC0wByPDj3FlT9bH6JL+mv/cZDFuGa69/DzDsVN+TGRaPhSiuKYAnwuoZ70Mg/2k/skpJ+weKa9EDaSU7RyH0Y5O0LSX0Xabh+rk92F9urtFlzijcfHyP0FIOBKxwufDb6m6z8sSn6WXtkv/j+p/8ApF90fKhPxn9jTwBWfqi/mKfyIz8D+zZxwAL5xyPcLUbQsjJ2oESAoFQpcgZG5yZoqVT9FqKGZjFH7r0MKObM+DOTnVehFcHmzfIwFaonZxlI5lUiiM2Qmd3VWUmiDimWaHFHRSMfYODXBxB5gck93QviV2e4YPVw1lOySMghzdRzaeYI5FccrTO+LXogq8CY64c0O6HmmpyXsbhFmOxnhvI42GirHO/Zh+GpcxM1VYYBfT7KqyQkQlgyQBc2H9EaJ9E9pLtFWSjcFl42NZEyIZ27Ej0JCxTRu0whR8RVUWjZXEDk7VGzHSD1F7Qqhts7Q7uDZHH0Kn6Yah45ppxklbYnTzNuLoSSBpy4DuHcJUTvzhG0udrmG3yC58mTbo6sGJ4e+Qn/AIdE3QNaubVHoxySokjp2jYAJ6ilkbJBUhpsUXRj43JWh34lqdmdGQzVLeyVmo42Qh0bt2tPyTTCUGh8cEI2Y36BbVEXsPkYy2gA9ENBGTTKpsDoslditUzAJG4qymcTATsXxkIK8M7SRpQBK1yAJA5ACFyBkbnJjB9bLoqwXIPhGWxObdenhicGeQDe7VdiR57fI260kTbEcVVEpELimZGkpDCOB4/UUcmeF9gT5mHVjx3H9VlpM3GTiescNcf01UAyQ+DNtkedHH/K7mpONF4tS6NFU0zJW8iDspPkvCbgzKYvw/vlWeUdsZxmuTIYhhMrL6LccrRPJ4sJdASZz26Fq6I5zgyeJXorOmB3Cp8qZzPC0RvawouLM6yRC6EcilqvQ9n7LOD02aoiB2za/JTyJqLOjx2nkR7hROyQtA6LiTaR6MkpTKZlcSd1hWzp1ikPY9/dbpkpKIJq535+ajJcnVjUVEl8Z1ua0kTdWUZ6h/dGppNDIqxwTozKmTDEnBaRNwRJ/iTrLRJwRCzEzqgHErT4mU6DhA19SCSUULYMhy8M7R7XoAla9Ax+dACF6BkT3rQwRiE266MSMTfBlq+W5K9THE8rNLkHEroORiXW0TbGOctmCO6QCEpDoagYl0ho3fCPtAfBaKpJdGNA/cgd1KUPo6o5VLif/f8Ak9Jo8Xp6kAxyNdfoQpFUmlaJKvCmSDZLUcc7iAMQ4Wab2CWp0R8hPsyuJ8K2uQ1GzQ3HHMzlXg7mLayEp+KvQMkgcFVTOSeFoWmnfG9rxu03WnK1RiMXCSZ7XwxisVRAw3F7WI5grmqjtmney6YVa1g5BLgG5SEdI3kE7FpL2VRRBxvZZ1TKPI4qh0tA2ybRhZG2DpcPvyWaLqZE3CQhRB5aJxhDVrUk87GS4NcaJ6mfmBdbhbmg2CVUbU0wJPSSC90WNg51PJdPYxRog9eJR6A4SJUBI2RFDH+IgZxkRQEEsmi0kOwDiU+67cUTmyy4M5UyXK9GCPLyO2VnFVRBjCVtE2MJTFQl0h0JdIBCUDESARAE9JVyROD43uY4c2myT5NRk49G84d9pL47Mqm5ht4jd/mFlw+iqyp9nouE47TVTbxSNcbXIvqPkptNG1+CzUUzXDYLJqMmmZTG8DB22WGjvxZNlyZSswIg6apbNFvjTB8uCu6J7k5eOiGm8andeNxb25LTkn2ZWOUOgk3i2pAsQD31WdV9mlOu4nfxdUcgPqnp+RPJ/wASxDx1UN3YD80a/km3B9oeePZ/0D6o1f2K4fRXqON6hwsGgfNPX8hvFdIF1HFFW7/2W9FpRROWV+kNi4oq2m/iE+qeqJub9oN0XHk7R52B46hOjLSYVh43Y8WMTv3SY1H6JH41E/4CPkstFUmU3V0V9is0asTOvIo7rFD0qHY9siKGO8RFAIZU6GVaqewVIRtmW6RnK+dehiicGaYJe5dSRwSZC4raJMYStmREAJdIYhKAOSARAHIA4IAcEwJqWqfE4Pje5j2m4c0kG6KGm0+D0nhj2hNeGxVRySkhoktaN/c/pP2UJwa5R1Y8kZcS4Zs3PEg69uakdSWpGKBjuSNTbytDnYMwjZGpj9QwXW8Mh17BJwKx8pezM1/DRaTolyi6lGQIqcHc3kixOK9FA0br7J2YcBj6Rw5J2YcCF0BWrMOI11KeiaZNwJo8NJRsHxhGgwzKbOFwlsNQo0dFhUY1ACAbCRpGW90fQJUJMqOomX90JGgUHLyqOwXOih2KHoodimRFDsY6Va1CwdXzq+OJDJIz1VLqvQhE83JOypmVjmbGkpoyNJTEJdAxEWByQCIA5ACoA5ACoA66dgcgArg3EdVSOaYpHFgIJieS6Nw6W+H5WWHFMpHLKPTPWOFeL6atAZcRT21heRmPdh+IffspOLRdZFLo0+e3dIdCiUIFqyKana/kkajJxB9VhjXckmi8czAtVgIFyAlqVWZPsGzYZa92pUU2T6BFRh+uyEJisoxtZMzRdgpBbZFgW46bsgyy/DTOA0TRKTJHRlMzaISwphZmQ5eSd4pcgYmZMBrnp0FkL5FtITYKrpF1Y0cuWQIlC64nnzICqIiNJTEcgYiQCIA66AOQByAOQAqAOQByAFyoA6yAEa4gggkEEEEGxB6goA23DntFqIMsdSDURDTPtM0euz/nr3WHD6KrI/Z6ThOO0lYLwSseQLlnuyN9WnUKbi0VjL6CTRZFDbsclQWMc0c0GrKtRTg8rpG4ugPU0wB91I6Y8rsg/DN6JGixFRNsnRJzZMKUIow5MnaAAmSZFIAmIisEwMM0rymeiOKQxritIYwlMRBIVuJlg6cXK6oHLkFGHkturxkcsocAuqgLSrI52ioUxCJAIgDkDOQByBCoA5AHIA5ADmC6ACFPSZkDHy0NkhFOSnsmBAWIAWGV0bg9jnMe03a5pLXA9iED6PQuGPaS4FsVaLjQCoYPN/vYN/UfRYcPorHJ6Z6bFI1zQ4aggEHUaKZRjigRE8EbJUbTXsrlpO4CRS0uiCSjub6JUaWWhzKeydGJZBZA0Baoxu2Vr80h2N3QAuRMR//Z",
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
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#0f294d] to-[#073757] text-white font-semibold text-lg shadow-md transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;