import HeroSection from "../../components/common/HeroSection";
import BlogSection from "../Marketing/BlogSection";
import FeatureSection from "../Marketing/ContentLayout";
import TechServices from "./TechServies";

const services = [
  {
    id: 1,
    icon: "/Assets/seo 1 (2).png",
    title: "WEBSITE DEVELOPMENT",
    reverse: false,
    description:
      "A website is more than just an online space—it’s where brands come to life. Every element, from design to functionality, should create a seamless experience that captivates and converts. With expert craftsmanship and cutting-edge technology, we build websites that don’t just meet expectations—they set new standards.",
  },
  {
    id: 1,
    icon: "/Assets/social media 1 (2).png",
    title: "SOFTWARE DEVELOPMENT",
    reverse: true,
    description:
      "We specialize in building robust, scalable software solutions using a variety of cutting-edge technologies. Whether it’s Python, MERN, MEAN, PHP, Java, or mobile app development, our team delivers high-quality, custom-built applications tailored to your business needs. With expertise across multiple languages and frameworks, we create software.",
  },

  {
    id: 3,
    icon: "/Assets/CREATIVE STUDIO 1 (1).png",
    title: "APP DEVELOPMENT",
    reverse: false,
    description:
      "We build custom, high-performance mobile apps for iOS, Android, and cross-platform platforms. Our team ensures seamless user experiences, fast performance, and secure integrations. From concept to launch, we deliver apps that are reliable, scalable, and designed to meet your business needs. Whether native or hybrid..",
  },
  {
    id: 4,
    icon: "/Assets/social media 1 (2).png",
    title: "GRAPHIC DESIGNING",
    reverse: true,
    description:
      "We specialize in building robust, scalable software solutions using a variety of cutting-edge technologies. Whether it’s Python, MERN, MEAN, PHP, Java, or mobile app development, our team delivers high-quality, custom-built applications tailored to your business needs. With expertise across multiple languages and frameworks, we create software.",
  },
  {
    id: 6,
    icon: "/Assets/social media 1 (2).png",
    reverse: false,
    title: "API DEVELOPMENT",
    description:
      "We create powerful, secure, and scalable APIs that connect your applications seamlessly. Our expert developers build custom APIs that enable smooth data exchange, enhance functionality, and improve system integrations. Whether you need RESTful or GraphQL APIs, we ensure your API solutions are reliable and future-proof.",
  },
  {
    id: 7,
    icon: "/Assets/digital advertise 1 (1).png",
    title: "E-COMMERCE WEB DEVELOPMENT",
    reverse: true,
    description:
      "We create dynamic, user-friendly e-commerce websites that drive sales and deliver seamless shopping experiences. From product catalogs to secure payment integration, our solutions are built for speed, scalability, and success. Whether you need a custom store or a platform like Shopify, WooCommerce, or Magento — we turn your online vision into a high-performing digital storefront.",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "🤖 AI Agents: From Co-Pilot to Autopilot",
    date: "May 7, 2025",
    comments: "No Comments",
    excerpt:
      "Explore how AI agents are evolving from basic co-pilots to autonomous systems capable of executing complex tasks with minimal human input.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    link: "https://www.ft.com/content/3e862e23-6e2c-4670-a68c-e204379fe01f",
  },
  {
    id: 2,
    title: "🌐 Big Tech's AI-Powered Message: Do More with Less",
    date: "May 12, 2025",
    comments: "No Comments",
    excerpt:
      "Discover how major tech companies are leveraging AI to optimize operations and increase productivity with leaner teams.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    link: "https://www.businessinsider.com/bi-today-big-tech-ai-do-more-with-less-2025-5",
  },
  {
    id: 3,
    title: "🧠 Living Intelligence: The Next Frontier in AI",
    date: "April 30, 2025",
    comments: "No Comments",
    excerpt:
      "Delve into the concept of Living Intelligence, where AI, biotechnology, and advanced sensors converge to create adaptive systems.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    link: "https://en.wikipedia.org/wiki/Living_Intelligence",
  },
];

const ItServicesPage = () => {
  return (
    <div className="w-full">
      <HeroSection
        title="IT Services"
        leftImg="/Assets/Group.png"
        rightImg="/Assets/circle (1).png"
      />

      {/* Intro Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <h3 className="text-[#073757] font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
          IT Services
        </h3>
        <p className="text-[#000000] font-bold text-xl sm:text-3xl md:text-4xl leading-tight">
          Innovative IT Services for Seamless <br className="hidden sm:block" />
          Digital Transformation
        </p>
      </section>

      {/* Info & Image Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10 py-10">
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src="/Assets/Smart Personal Assistant Ai Illustration 1 (1).png"
            alt="Digital Transformation"
            className="w-full h-auto max-h-[500px] md:max-h-[650px] object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h3 className="text-[#073757] font-bold text-3xl sm:text-4xl md:text-5xl">
            Smarter IT, Better Business
          </h3>

          <p className="text-[#151515] text-base sm:text-lg md:text-xl leading-relaxed font-display">
            Don’t just chase vanity metrics — let your brand grow where it truly
            counts. At Your Oz media, we turn clicks into conversions, followers
            into customers, and campaigns into measurable success.
          </p>

          <p className="text-[#151515] text-base sm:text-lg md:text-xl leading-relaxed font-display">
            Our expertise ensures seamless integration, robust security, and
            scalable systems to meet your evolving needs.
          </p>

          <div className="bg-[#CC9500] p-4 sm:p-6 md:p-10 text-white text-base sm:text-lg md:text-2xl font-bold rounded-tr-2xl rounded-bl-2xl shadow-lg">
            Empowering Growth with Innovative IT Solutions Transforming
            Challenges
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[#000000] font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-12">
          Empowering Digital Excellence
        </h1>
        <div className="space-y-16">
          {services.map((item) => (
            <FeatureSection
              key={item.id}
              title={item.title}
              reverse={item.reverse}
              imgSrc={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

// const ItServicesPage = () => {
//   return (
//     <div className="">
//       <HeroSection
//         title="IT Services"
//         leftImg="/Assets/Group.png"
//         rightImg="/Assets/circle (1).png"
//       />

//       <section className="container mx-auto my-20">
//         <h3 className="text-[#073757] font-bold text-5xl md:text-5xl mb-4">
//           IT Services
//         </h3>
//         <p className="text-[#000000] font-bold text-5xl md:text-4xl mb-4">
//           Innovative IT Services for Seamless <br /> Digital Transformation
//         </p>
//       </section>

//       <section className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 py-10">
//         <div className="w-full md:w-1/2">
//           <img
//             src="/Assets/Smart Personal Assistant Ai Illustration 1 (1).png"
//             alt="Digital Marketing"
//             className="w-full h-[650px] object-contain"
//           />
//         </div>

//         <div className="w-full md:w-1/2 flex flex-col gap-8">
//           <h3 className="text-[#073757] font-bold text-5xl md:text-5xl mb-4">
//             Smarter IT, Better Business
//           </h3>

//           <p className="text-[#151515] text-base md:text-xl leading-relaxed font-display">
//             Don’t just chase vanity metrics — let your brand grow where it truly
//             counts. At Your Oz media, we turn clicks into conversions, followers
//             into customers, and campaigns into measurable success..
//           </p>

//           <p className="text-[#151515] text-base md:text-xl leading-relaxed font-display">
//             Our expertise ensures seamless integration, robust security, and
//             scalable systems to meet your evolving needs
//           </p>

//           <div className="bg-[#CC9500] p-6 md:p-10 text-white text-lg md:text-2xl font-bold rounded-tr-2xl rounded-bl-2xl shadow-lg">
//             Empowering Growth with Innovative IT Solutions Transforming
//             Challenges
//           </div>
//         </div>
//       </section>
//       <section className="py-16 container mx-auto">
//         <h1 className="text-[#000000] font-bold text-5xl md:text-4xl mb-4">
//           Empowering Digital Excellence
//         </h1>
//         {services.map((item) => {
//           return (
//             <FeatureSection
//               key={item.id}
//               title={item.title}
//               reverse={item.reverse}
//               imgSrc={item.icon}
//               description={item.description}
//             />
//           );
//         })}
//         {/* <BlogSection blogPosts={blogPosts} /> */}
//       </section>
//     </div>
//   );
// };

export default ItServicesPage;
