import React from "react";
import ServiceCards from "./ServiceCards";
import HeroSection from "../../components/common/HeroSection";
import PartnersMarquee from "../../components/Marque";
import BlogSection from "./BlogSection";
import FeatureSection from "./ContentLayout";
import { motion } from "framer-motion";
import { 
  FiTrendingUp, 
  FiCheck, 
  FiGlobe, 
  FiArrowRight,
  FiUsers,
  FiFilm,
  FiBarChart2,
  FiImage,
  FiLayers,
  FiShoppingCart,
  FiMessageSquare,
  FiPieChart,
  FiAward,
  FiTarget,
  FiDollarSign,
  FiMonitor,
  FiLink,
  FiHeart,
  FiMail,
  FiRefreshCw,
  FiSearch,
  FiTag,
  FiYoutube,
  FiShoppingBag
} from "react-icons/fi";
import { Link } from "react-router-dom";
// const logos = [
//   { src: "Fictional Company Logo.png", alt: "BestBank" },
//   { src: "/Fictional Company Logo-1.png", alt: "dataBites" },
//   { src: "Fictional Company Logo-2.png", alt: "MarketSavy" },
//   { src: "Fictional Company Logo-3.png", alt: "EpicDev" },
//   { src: "Fictional Company Logo-4.png", alt: "BestBank" },
// ];

// const blogPosts = [
//   {
//     id: 1,
//     title: "🚀 2025 Digital Marketing Trends You Can’t Ignore ",
//     date: "February 15, 2025",
//     comments: "No Comments",
//     excerpt:
//       "From AI-driven content to hyper-personalized campaigns, discover what’s shaping the digital landscape this year",
//     image:
//       "/pmc-media-group-blog-digital-marketing-trends-2025-ai-personalization-and-privacy-first-strategies.jpg",
//     link: "https://hiilite.com/12-digital-marketing-trends-to-look-out-for-in-2025/",
//   },
//   {
//     id: 2,
//     title: "🎯 Maximizing ROI: Smart Strategies for Paid Ads",
//     date: "April 24, 2025",
//     comments: "No Comments",
//     excerpt:
//       "Learn how to design high-converting ad campaigns that not only get clicks but deliver real business results",
//     image: "/technology-hologram-illustrated.jpg",
//     link: "https://johnwolfecompton.com/10-essential-tips-for-maximizing-your-roi-in-paid-digital-advertising/?utm_source=chatgpt.com",
//   },
//   {
//     id: 3,
//     title: "📸 Visual Storytelling: The Future of Brand Engagement",
//     date: "May 15, 2025",
//     comments: "No Comments",
//     excerpt:
//       "Why photos, videos, GIFs, and CGI are more than visuals—they’re your brand’s most powerful storytellers.",
//     image: "/nxJPkeMtJ21FY6jipui0ww9fTHUEfQZZs54BMleU5xuyB9zQB-tmp6p65nye5.png",
//     link: "https://blog.brandsatplayllc.com/blog/video-marketing-trends-2025-why-visual-storytelling-is-the-future",
//   },
// ];

// const services = [
//   {
//     id: 1,
//     icon: "/Assets/seo 1 (2).png",
//     title: "SEO",
//     reverse: false,
//     layoutType: "box",
//     description: (
//       <motion.div 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h3 className="text-xl font-bold mb-4 flex items-center text-[#073757]">
//               <FiTrendingUp className="mr-2" /> On-Page Optimization
//             </h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                 <span>Keyword research & implementation</span>
//               </li>
//               <li className="flex items-start">
//                 <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                 <span>Meta tags & content optimization</span>
//               </li>
//               <li className="flex items-start">
//                 <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                 <span>Technical SEO audits</span>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4 flex items-center text-[#073757]">
//               <FiGlobe className="mr-2" /> Off-Page Strategy
//             </h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                 <span>Backlink building & outreach</span>
//               </li>
//               <li className="flex items-start">
//                 <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                 <span>Local SEO dominance</span>
//               </li>
//               <li className="flex items-start">
//                 <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                 <span>Competitor analysis</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <button className="mt-8 bg-gradient-to-r from-[#073757] to-[#0a4a7a] hover:from-[#0a4a7a] hover:to-[#073757] text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto">
//           Boost My Rankings <FiArrowRight className="ml-2" />
//         </button>
//       </motion.div>
//     ),
//   },
//   {
//     id: 2,
//     icon: "/Assets/social media 1 (2).png",
//     title: "Social Media",
//     reverse: true,
//     layoutType: "icon-list",
//     description: (
//       <motion.div
//         initial={{ x: 50, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="space-y-6"
//       >
//         <div className="flex items-start">
//           <div className="bg-[#073757] p-3 rounded-full mr-4">
//             <FiUsers className="text-white text-xl" />
//           </div>
//           <div>
//             <h3 className="font-bold text-lg mb-2">Community Building</h3>
//             <p className="text-gray-600">Engage your audience with tailored content across Instagram, Facebook, LinkedIn & more.</p>
//           </div>
//         </div>
        
//         <div className="flex items-start">
//           <div className="bg-[#073757] p-3 rounded-full mr-4">
//             <FiFilm className="text-white text-xl" />
//           </div>
//           <div>
//             <h3 className="font-bold text-lg mb-2">Creative Storytelling</h3>
//             <p className="text-gray-600">Visual narratives that connect and convert through reels, stories, and posts.</p>
//           </div>
//         </div>
        
//         <div className="flex items-start">
//           <div className="bg-[#073757] p-3 rounded-full mr-4">
//             <FiTarget className="text-white text-xl" />
//           </div>
//           <div>
//             <h3 className="font-bold text-lg mb-2">Performance Analytics</h3>
//             <p className="text-gray-600">Data-driven optimizations to maximize your social ROI.</p>
//           </div>
//         </div>
        
//         <button className="mt-6 bg-[#073757] hover:bg-[#0a4a7a] text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl">
//           Grow My Audience
//         </button>
//       </motion.div>
//     ),
//   },
//   {
//     id: 3,
//     icon: "/Assets/CREATIVE STUDIO 1 (1).png",
//     title: "Creative Studio",
//     reverse: false,
//     layoutType: "grid",
//     description: (
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//       >
//         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//           <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//             <FiImage className="text-[#073757] text-xl" />
//           </div>
//           <h3 className="font-bold text-lg mb-2">Photography</h3>
//           <p className="text-gray-600">Professional product shoots and lifestyle imagery that showcases your brand.</p>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//           <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//             <FiFilm className="text-[#073757] text-xl" />
//           </div>
//           <h3 className="font-bold text-lg mb-2">Videography</h3>
//           <p className="text-gray-600">Promotional videos, testimonials, and behind-the-scenes content.</p>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//           <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//             <FiLayers className="text-[#073757] text-xl" />
//           </div>
//           <h3 className="font-bold text-lg mb-2">Motion Graphics</h3>
//           <p className="text-gray-600">Animated explainers and eye-catching social media animations.</p>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
//           <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//             <FiShoppingCart className="text-[#073757] text-xl" />
//           </div>
//           <h3 className="font-bold text-lg mb-2">E-commerce Content</h3>
//           <p className="text-gray-600">Platform-optimized visuals that drive conversions.</p>
//         </div>
        
//         <div className="md:col-span-2 text-center mt-4">
//           <button className="bg-gradient-to-r from-[#073757] to-[#0a4a7a] hover:from-[#0a4a7a] hover:to-[#073757] text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center">
//             Create My Content <FiArrowRight className="ml-2" />
//           </button>
//         </div>
//       </motion.div>
//     ),
//   },
//   // Continue with other services in similar fashion...
// ];
const layoutType1 = (items, buttonText) => (
  <div className="space-y-8">
    {items.map((item, index) => (
      <div key={index} className="flex items-start">
        <div className="bg-[#073757] p-2 rounded-full mr-3 flex-shrink-0">
          {item.icon}
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">{item.title}</h3>
          <p className="text-gray-600 text-lg">{item.description}</p>
        </div>
      </div>
    ))}
  <Link to="/contact">
    <button className="mt-16 bg-[#073757] hover:bg-[#0a4a7a] text-white font-bold py-4 px-6 rounded-full transition duration-300 lg:w-1/2 sm:w-full text-sm">
      {buttonText}
    </button>
  </Link>
  </div>
);

// Layout Type 2: Card List (like Service 6)
const layoutType2 = (items, buttonText) => (
  <div className="space-y-8">
    {items.map((item, index) => (
      <div key={index} className="bg-white p-4 rounded-lg shadow-lg border border-gray-100 hover:border-[#073757] transition duration-300">
        <div className="flex items-center mb-2">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            {item.icon}
          </div>
          <h3 className="font-bold text-xl mb-2">{item.title}</h3>
        </div>
        <p className="text-gray-600 text-lg">{item.description}</p>
      </div>
    ))}
  <Link to="/contact"> 
    <button className="mt-16 bg-[#073757] hover:bg-[#0a4a7a] text-white font-bold py-4 px-6 rounded-full transition duration-300 lg:w-1/2 sm:w-full text-sm">
      {buttonText}
    </button>
  </Link>
  </div>
);

const services = [
  {
    id: 1,
    icon: "/Assets/seo 1 (2).png",
    title: "SEO",
    reverse: false,
    layoutType: "type1",
    description: layoutType1([
      {
        icon: <FiTrendingUp className="text-white text-lg" />,
        title: "On-Page Optimization",
        description: "Keyword research, meta tags & technical SEO audits"
      },
      {
        icon: <FiGlobe className="text-white text-lg" />,
        title: "Off-Page Strategy",
        description: "Backlink building, local SEO & competitor analysis"
      },
      {
        icon: <FiBarChart2 className="text-white text-lg" />,
        title: "Performance Tracking",
        description: "Regular reporting and optimization based on data"
      }
    ], "Boost My Rankings")
  },
  {
    id: 2,
    icon: "/Assets/social media 1 (2).png",
    title: "Social Media",
    reverse: true,
    layoutType: "type1",
    description: layoutType1([
      {
        icon: <FiUsers className="text-white text-lg" />,
        title: "Community Building",
        description: "Engage your audience with tailored content"
      },
      {
        icon: <FiFilm className="text-white text-lg" />,
        title: "Creative Storytelling",
        description: "Visual narratives that connect and convert"
      },
      {
        icon: <FiBarChart2 className="text-white text-lg" />,
        title: "Performance Analytics",
        description: "Data-driven optimizations to maximize ROI"
      }
    ], "Grow My Audience")
  },
  {
    id: 3,
    icon: "/Assets/CREATIVE STUDIO 1 (1).png",
    title: "Creative Studio",
    reverse: false,
    layoutType: "type2",
    description: layoutType2([
      {
        icon: <FiImage className="text-[#073757] text-lg" />,
        title: "Photography",
        description: "Professional product shoots and lifestyle imagery"
      },
      {
        icon: <FiFilm className="text-[#073757] text-lg" />,
        title: "Videography",
        description: "Promotional videos and behind-the-scenes content"
      },
      {
        icon: <FiShoppingCart className="text-[#073757] text-lg" />,
        title: "E-commerce Content",
        description: "Platform-optimized visuals that drive conversions"
      }
    ], "Create My Content")
  },
  {
    id: 4,
    icon: "/Assets/social media 1 (2).png",
    title: "Dynamic Visual Content",
    reverse: true,
    layoutType: "type1",
    description: layoutType1([
      {
        icon: <FiFilm className="text-white text-lg" />,
        title: "Short-Form Video",
        description: "Engaging reels and TikTok content"
      },
      {
        icon: <FiImage className="text-white text-lg" />,
        title: "Animated GIFs",
        description: "Eye-catching motion graphics"
      },
      {
        icon: <FiLayers className="text-white text-lg" />,
        title: "CGI & AR",
        description: "Cutting-edge 3D product visualizations"
      }
    ], "Enhance My Visuals")
  },
  {
    id: 5,
    icon: "/Assets/email marketing 1 (1).png",
    title: "Email Marketing",
    reverse: false,
    layoutType: "type1",
    description: layoutType1([
      {
        icon: <FiMail className="text-white text-lg" />,
        title: "Campaign Strategy",
        description: "Segmented lists and personalized content"
      },
      {
        icon: <FiRefreshCw className="text-white text-lg" />,
        title: "Automation Flows",
        description: "Welcome series and re-engagement sequences"
      },
      {
        icon: <FiPieChart className="text-white text-lg" />,
        title: "Performance Tracking",
        description: "Optimize every send for maximum conversions"
      }
    ], "Optimize My Emails")
  },
  {
    id: 6,
    icon: "/Assets/social media 1 (2).png",
    title: "Content Management",
    reverse: true,
    layoutType: "type2",
    description: layoutType2([
      {
        icon: <FiMessageSquare className="text-[#073757] text-lg" />,
        title: "Content Calendar",
        description: "Strategic planning across all platforms"
      },
      {
        icon: <FiPieChart className="text-[#073757] text-lg" />,
        title: "Performance Tracking",
        description: "Monitor engagement metrics and optimize"
      },
      {
        icon: <FiAward className="text-[#073757] text-lg" />,
        title: "Brand Consistency",
        description: "Maintain unified voice across all channels"
      }
    ], "Manage My Content")
  },
  {
    id: 7,
    icon: "/Assets/digital advertise 1 (1).png",
    title: "Digital Advertising",
    reverse: false,
    layoutType: "type1",
    description: layoutType1([
      {
        icon: <FiTarget className="text-white text-lg" />,
        title: "Multi-Platform Campaigns",
        description: "Google, Meta, LinkedIn and TikTok advertising"
      },
      {
        icon: <FiDollarSign className="text-white text-lg" />,
        title: "ROI-Focused Strategy",
        description: "Maximize conversions while minimizing cost"
      },
      {
        icon: <FiMonitor className="text-white text-lg" />,
        title: "Real-Time Optimization",
        description: "Daily adjustments based on performance data"
      }
    ], "Launch My Campaign")
  },
  {
    id: 8,
    icon: "/Assets/payperclick 1 (1).png",
    title: "PPC Advertising",
    reverse: true,
    layoutType: "type2",
    description: layoutType2([
      {
        icon: <FiTarget className="text-[#073757] text-lg" />,
        title: "Search Ads",
        description: "Google Search Network campaigns"
      },
      {
        icon: <FiGlobe className="text-[#073757] text-lg" />,
        title: "Display & Remarketing",
        description: "Visual banner ads across websites"
      },
      {
        icon: <FiShoppingBag className="text-[#073757] text-lg" />,
        title: "Shopping Ads",
        description: "Product listings with images and prices"
      }
    ], "Maximize My ROI")
  },
  {
    id: 9,
    icon: "/Assets/digital advertise 1 (1).png",
    title: "Affiliate Marketing",
    reverse: false,
    layoutType: "type2",
    description: layoutType2([
      {
        icon: <FiLink className="text-[#073757] text-lg" />,
        title: "Program Setup",
        description: "Custom affiliate program creation"
      },
      {
        icon: <FiUsers className="text-[#073757] text-lg" />,
        title: "Influencer Partnerships",
        description: "Strategic collaborations with creators"
      },
      {
        icon: <FiDollarSign className="text-[#073757] text-lg" />,
        title: "Performance Tracking",
        description: "Real-time reporting on clicks and ROI"
      }
    ], "Start My Program")
  },
  {
    id: 10,
    icon: "/Assets/email marketing 1 (1).png",
    title: "GIFs & Videos",
    reverse: true,
    layoutType: "type1",
    description: layoutType1([
      {
        icon: <FiYoutube className="text-white text-lg" />,
        title: "Short-Form Video",
        description: "Platform-optimized vertical videos"
      },
      {
        icon: <FiFilm className="text-white text-lg" />,
        title: "Animated GIFs",
        description: "Eye-catching loops for social media"
      },
      {
        icon: <FiShoppingBag className="text-white text-lg" />,
        title: "Product Videos",
        description: "Showcase your products with 360° views"
      }
    ], "Animate My Brand")
  },
  {
    id: 11,
    icon: "/Assets/google ads 1 (1).png",
    title: "Google Ads",
    reverse: false,
    layoutType: "type1",
    description: layoutType1([
      {
        icon: <FiSearch className="text-white text-lg" />,
        title: "Search Network",
        description: "Text ads on Google search results"
      },
      {
        icon: <FiGlobe className="text-white text-lg" />,
        title: "Display Network",
        description: "Visual banner ads across websites"
      },
      {
        icon: <FiShoppingCart className="text-white text-lg" />,
        title: "Shopping Ads",
        description: "Product listings with images"
      }
    ], "Dominate Google")
  },
  {
    id: 12,
    icon: "/Assets/Influencer marketing 1 (1).png",
    title: "Influencer Marketing",
    reverse: true,
    layoutType: "type2",
    description: layoutType2([
      {
        icon: <FiUsers className="text-[#073757] text-lg" />,
        title: "Influencer Identification",
        description: "Find creators who align with your brand"
      },
      {
        icon: <FiHeart className="text-[#073757] text-lg" />,
        title: "Authentic Partnerships",
        description: "Genuine collaborations with audiences"
      },
      {
        icon: <FiPieChart className="text-[#073757] text-lg" />,
        title: "ROI Measurement",
        description: "Track conversions from influencer content"
      }
    ], "Connect With Influencers")
  }
];

const MarketingServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="mt-16 bg-[]">
      <HeroSection
        title="Digital Marketing"
        subtitle=""
        leftImg="/Assets/illustrator 1 (1).png"
        rightImg="Assets/Rotate Anti (2).png"
      />

      <section className="py-12 ">
        <div className=" mx-auto lg:px-4 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8"
          >
            <motion.h2 variants={itemVariants} className="text-[#073757] font-bold text-3xl md:text-6xl font-montserrat mb-6 lg:px-8 px-3">
              Digital Marketing
              <img
                src="/Assets/Breathe (1).png"
                alt=""
                className="mx-4 h-8 animate-bounce inline-block"
              />
            </motion.h2>
            <motion.h3 variants={itemVariants} className="text-black font-bold text-2xl md:text-5xl mb-4 lg:px-8 px-3">
              Transforming Digital Marketing with Strategy & Creativity
            </motion.h3>
            <motion.p variants={itemVariants} className="text-black text-xl lg:px-8  px-3">
              Digital success isn't just about being seen—it's about making an impact. OZ Media Planet crafts powerful marketing strategies that drive engagement, growth, and results.
            </motion.p>
          </motion.div>

          {services.map((item) => (
            <motion.div 
              key={item.id} 
              className=""
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <FeatureSection
                title={item.title}
                reverse={item.reverse}
                imgSrc={item.icon}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MarketingServicesPage;