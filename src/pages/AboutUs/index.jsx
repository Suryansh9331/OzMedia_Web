// import HeroSection from "../../components/common/HeroSection";
// import Button from "../../components/ui/Button";
// import TestimonialCard from "./Card";
// import PartnersMarquee from "../../components/Marque";
// import ContactSection from "../ContactUs/ContactSection";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/bundle";

// const logos = [
//   { src: "/Assets/asus_logo.svg.png", alt: "BestBank" },
//   { src: "/Assets/google_logo.svg.png", alt: "dataBites" },
//   { src: "/Assets/huawei_logo.svg.png", alt: "MarketSavy" },
//   { src: "/Assets/Logo.svg.png", alt: "EpicDev" },
//   { src: "/Assets/intel_logo.svg.png", alt: "BestBank" },
//   {
//     src: "/Assets/samsung_fire__marine_insurance_logo.svg.png",
//     alt: "BestBank",
//   },
//   { src: "/Assets/tech_mahindra_logo.svg.png", alt: "BestBank" },
//   { src: "/Assets/oracle_logo.svg.png", alt: "BestBank" },
// ];

// const testimonials = [
//   {
//     image: "/Assets/BG (1).png",
//     name: "Jenny Wilson",
//     company: "Grower.io",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
//   {
//     image: "/Assets/BG (2).png",
//     name: "Devon Lane",
//     company: "DLDesign.co",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
//   {
//     image: "/Assets/BG.png",
//     name: "Devon Lane",
//     company: "DLDesign.co",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
// ];

// const AboutUs = () => {
//   return (
//     <div className=" text-gray-900">
//       <main>
//         <HeroSection
//           title="About Us"
//           rightImg="/Assets/Rotate.png"
//           leftImg="/Assets/About us 1.png"
//         />

//         {/* About Us Section */}
//         <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-18 items-center">
//           <div>
//             <h2 className="text-[#073757] font-montserrat font-extrabold text-5xl mb-2">
//               About Us
//             </h2>
//             <h3 className="text-4xl font-semibold mb-4">We love what we do</h3>
//             <p className="mb-4">
//               Oz Media Planet is one of the largest Internet marketing agencies
//               in India. We have been providing our clients with comprehensive
//               solutions for online promotion, increasing sales and making each
//               business really profitable.
//             </p>
//             <p>
//               We have completed over 2,500 successful projects in various fields
//               and directions. Oz Media Planet consists of more than 120
//               certified specialists: SEO experts, developers, SMM, PPC
//               specialists, etc. We change the Internet world for the better!
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <img
//               src="/Assets/Group 44242.png"
//               alt="About Illustration"
//               className="max-w-full h-auto"
//             />
//           </div>
//         </section>

//         {/* Brand Promises Section */}
//         <section className="container mx-auto px-6 py-12 flex flex-col-reverse md:grid md:grid-cols-2 gap-20  items-center">
//           <div className="flex justify-center">
//             <img
//               src="/Assets/06 (1).png"
//               alt="Brand Promises Illustration"
//               className="max-w-full h-auto"
//             />
//           </div>
//           <div>
//             <h2 className="text-[#073757] font-montserrat font-extrabold text-5xl mb-2">
//               Brand Promises
//             </h2>
//             <p className="mb-6">
//               With Oz Media Planet, you always have a partner for whom you and
//               your business are the top priority. This means Oz Media Planet is
//               more than just an Internet marketing agency. We’re your reliable
//               partner, committed to your success in SEO, SMM, PPC and beyond.
//               You get more than just results—you get a partnership.
//             </p>
//             <Button
//               type="primary"
//               className="border-2 border-[#FCC735] bg-[#FCC735] hover:bg-[#FCC735] text-black font-bold py-3 px-6 rounded-lg text-sm sm:text-base flex items-center"
//             >
//               Read More
//             </Button>
//           </div>
//         </section>
//         {/* <section className=" py-12 px-4 md:px-20">
//           <h1 className="text-[#073757] font-bold font-montserrat text-5xl">
//             Testimonials
//           </h1>
//           <p className="text-2xl my-4 font-bold">We love what we do</p>
//           <div className=" mx-auto grid gap-6 md:grid-cols-3">
//             {testimonials.map((t, index) => (
//               <TestimonialCard key={index} {...t} />
//             ))}
//           </div>
//         </section> */}
//         <section className="py-12 px-4 md:px-20">
//           <h1 className="text-[#073757] font-bold font-montserrat text-5xl">
//             Testimonials
//           </h1>
//           <p className="text-2xl my-4 font-bold">We love what we do</p>

//           <div className="w-full">
//             <Swiper
//               modules={[Autoplay]}
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//               loop={true}
//               breakpoints={{
//                 640: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//               spaceBetween={20}
//               className="my-8"
//             >
//               {testimonials.map((t, index) => (
//                 <SwiperSlide key={index}>
//                   <TestimonialCard {...t} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </section>
//         <section className="py-10 my-20">
//           <h2 className="text-2xl sm:text-4xl font-display mb-20  font-bold text-center bg-gradient-to-r from-[#5A1C72] to-[#2B0659] bg-clip-text text-transparent">
//             Join the growing list of our satisfied customers
//           </h2>
//           <PartnersMarquee logos={logos} />
//         </section>
//         <ContactSection />
//       </main>
//     </div>
//   );
// };

// export default AboutUs;

import { motion } from "framer-motion";
import promiseImg  from "../../assets/images/promise.png"
import { useEffect, useState } from "react";
import HeroSection from "../../components/common/HeroSection";
import Button from "../../components/ui/Button";
import TestimonialCard from "./Card";
import PartnersMarquee from "../../components/Marque";
import ContactSection from "../ContactUs/ContactSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import OurApproachSection from "./Approach";
import TestimonialSection from "./Testimonial";
import { Link } from "react-router-dom";
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const logos = [
  { src: "/Assets/asus_logo.svg.png", alt: "BestBank" },
  { src: "/Assets/google_logo.svg.png", alt: "dataBites" },
  { src: "/Assets/huawei_logo.svg.png", alt: "MarketSavy" },
  { src: "/Assets/Logo.svg.png", alt: "EpicDev" },
  { src: "/Assets/intel_logo.svg.png", alt: "BestBank" },
  {
    src: "/Assets/samsung_fire__marine_insurance_logo.svg.png",
    alt: "BestBank",
  },
  { src: "/Assets/tech_mahindra_logo.svg.png", alt: "BestBank" },
  { src: "/Assets/oracle_logo.svg.png", alt: "BestBank" },
];

// const testimonials = [
//   {
//     image: "/Assets/BG (1).png",
//     name: "Jenny Wilson",
//     company: "Grower.io",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
//   {
//     image: "/Assets/BG (2).png",
//     name: "Devon Lane",
//     company: "DLDesign.co",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
//   {
//     image: "/Assets/BG.png",
//     name: "Devon Lane",
//     company: "DLDesign.co",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
//   {
//     image: "/Assets/BG.png",
//     name: "Devon Lane",
//     company: "DLDesign.co",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
//   {
//     image: "/Assets/BG.png",
//     name: "Devon Lane",
//     company: "DLDesign.co",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
//   {
//     image: "/Assets/BG.png",
//     name: "Devon Lane",
//     company: "DLDesign.co",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
//   {
//     image: "/Assets/BG.png",
//     name: "Devon Lane",
//     company: "DLDesign.co",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
//   {
//     image: "/Assets/BG.png",
//     name: "Devon Lane",
//     company: "DLDesign.co",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
//   {
//     image: "/Assets/BG.png",
//     name: "Devon Lane",
//     company: "DLDesign.co",
//     review:
//       "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
//   },
// ];

const AboutUs = () => {
  const [isClient, setIsClient] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timeout = setTimeout(() => {
      setShowTestimonials(true);
    }, 100); // Delay for fade-in animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="text-gray-900 ">
      <main>
        <HeroSection
          title="About Us"
          rightImg="/Assets/Rotate.png"
          leftImg="/Assets/About us 1.png"
        />
       <section className="w-full bg-white lg:py-20 py-8 px-6 relative z-10 overflow-hidden">
  <div className="max-w-full mx-auto text-center">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.3 }}
      className="text-5xl font-extrabold text-[#073757] mb-4 font-montserrat"
    >
      Who We Are
    </motion.h2>

    {/* Subheading */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ amount: 0.3 }}
      className="text-2xl text-gray-600 mb-10"
    >
      Eliminating digital fragmentation with unified, powerful solutions
    </motion.p>

    {/* Main Paragraph */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ amount: 0.3 }}
      className="text-lg text-gray-700 leading-relaxed mb-12 w-full mx-auto"
    >
      <p className="mb-6">
        <strong>OZ Media Planet</strong> is a collective of creative strategists,
        designers, developers, and performance marketers working together to craft
        purposeful digital experiences. We offer a one-stop partnership for brands
        needing marketing, technology, and branding — all under one roof.
      </p>
      <p>
        We don’t believe in one-size-fits-all. Every brand is unique, and so is
        every strategy, campaign, and design we create.
      </p>
    </motion.div>

    {/* Industry Grid as Boxes */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ amount: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
    >
      {[
        "E-commerce",
        "Logistics & Transportation",
        "Fashion & Beauty",
        "Technology & SaaS",
        "Healthcare",
        "Events & Media",
      ].map((industry, index) => (
        <div
          key={index}
          className="bg-[#f5f9fc] text-[#073757] shadow-sm border border-[#dce5ec] p-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-md"
        >
          {industry}
        </div>
      ))}
    </motion.div>

    {/* Closing Statement */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ amount: 0.3 }}
      className="text-gray-700 text-base mt-12 max-w-6xl mx-auto leading-relaxed"
    >
      From launching startups to transforming enterprise brands, we help our
      clients scale with confidence and clarity. At OZ Media Planet, we deliver
      not just results — but meaningful digital impact.
    </motion.p>

    {/* Let’s Connect Button */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ amount: 0.3 }}
      className="mt-8"
    >
      <Link
        to = "/contact" // adjust this anchor to your actual contact section ID
        className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#073757] rounded-full shadow-md hover:bg-[#052d47] transition-all duration-300 transform hover:scale-105"
      >
        Let’s Connect
      </Link>
    </motion.div>

    {/* Decorative Separator Line */}
    <div className="mt-16 flex items-center justify-center">
      <div className="w-full max-w-xl flex items-center justify-center gap-3 text-[#073757]">
        <span className="flex-grow h-px bg-[#073757]"></span>
        <span className="text-[#073757] text-lg">●</span>
        <span className="flex-grow h-px bg-[#073757]"></span>
      </div>
    </div>
  </div>
</section>


        <section className="container mx-auto lg:px-16 px-6">
          {/* Top Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Text Content with Framer Motion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              <h2 className="text-[#073757] font-montserrat font-extrabold text-5xl mb-4 leading-tight">
                About Us
              </h2>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                We Love What We Do
              </h3>

              <p className="text-gray-700 leading-relaxed text-xl mb-4">
                <strong className="text-[#073757]">Oz Media Planet</strong> is
                one of India’s leading Internet marketing agencies. We deliver
                comprehensive online promotion strategies that drive real
                business growth and success.
              </p>

              <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2 mb-6">
                <li>
                  <strong>2,500+ projects</strong> completed successfully across
                  various industries.
                </li>
                <li>
                  <strong>120+ certified professionals</strong>: SEO,
                  developers, PPC, SMM, and more.
                </li>
                <li>
                  End-to-end digital strategies tailored for client growth and
                  profitability.
                </li>
              </ul>
            </motion.div>

            {/* Right Image with Framer Motion */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              <img
                src="/Assets/Group 44242.png"
                alt="About Illustration"
                className="max-w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Expanded Content - Full Width Below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ amount: 0.3 }}
            className="mt-12"
          ></motion.div>
        </section>

        {/* Brand Promises Section */}
        <section className="container mx-auto px-6 py-20 flex flex-col-reverse md:grid md:grid-cols-2 gap-20 items-center overflow-hidden">
          {/* Left Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={promiseImg}
              alt="Brand Promise Illustration"
              className="max-w-full h-auto "
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-[#073757] font-extrabold font-montserrat text-4xl sm:text-5xl leading-tight mb-6"
            >
              Brand Promises
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4"
            >
              At{" "}
              <span className="text-[#073757] font-semibold">
                Oz Media Planet
              </span>
              , we don't just deliver digital solutions — we build
              growth-focused partnerships. Our promise is not just service —
              it’s strategic transformation.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              className="space-y-4 text-base text-gray-700 mb-6"
            >
              <li className="flex gap-2">
                <span className="text-[#FCC735] font-bold">✓</span>
                <span>
                  <strong className="text-[#073757]">
                    Tailored Execution:
                  </strong>{" "}
                  Custom strategies for your market, audience, and goals.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FCC735] font-bold">✓</span>
                <span>
                  <strong className="text-[#073757]">
                    End-to-End Services:
                  </strong>{" "}
                  From SEO & SMM to branding & automation — all in-house.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FCC735] font-bold">✓</span>
                <span>
                  <strong className="text-[#073757]">
                    Proactive Partnership:
                  </strong>{" "}
                  We think, act, and evolve with your brand — as a real
                  extension of your team.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FCC735] font-bold">✓</span>
                <span>
                  <strong className="text-[#073757]">
                    Data-Driven Growth:
                  </strong>{" "}
                  Transparent insights, adaptive strategies, and measurable
                  success.
                </span>
              </li>
            </motion.ul>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 italic text-base sm:text-lg mb-8"
            >
              Oz Media Planet isn’t just a service provider — we are your
              dedicated digital growth partner, focused on building brands that
              last.
            </motion.p>

            <motion.div variants={fadeUp}>
            <Link to ="/contact"> 
              <Button
                type="primary"
                className="border-2 border-[#FCC735] bg-[#FCC735] hover:bg-[#fcd74e] text-black font-semibold py-3 px-6 rounded-lg text-sm sm:text-base transition-all duration-300"
              >
                Read More
              </Button>
            </Link>
            </motion.div>
          </motion.div>
        </section>


 <section > 
<OurApproachSection/>
 </section>
        {/* Testimonials Section */}
        {/* <section
          className={`py-12 px-4 md:px-20 transition-all duration-1000 ease-out transform ${
            showTestimonials
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-[#073757] font-bold font-montserrat text-5xl">
            Testimonials
          </h1>
          <p className="text-2xl my-4 font-bold">We love what we do</p>

          <div className="w-full">
            {isClient && (
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                spaceBetween={20}
                className="my-8"
              >
                {testimonials.map((t, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialCard {...t} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </section> */}

    <TestimonialSection showTestimonials={showTestimonials} />

        {/* Partners Section */}
        <section className="lg:py-10 sm:py-4  ">
          <h2 className="text-2xl sm:text-4xl font-display mb-20 font-bold text-center bg-gradient-to-r from-[#5A1C72] to-[#2B0659] bg-clip-text text-transparent">
            Join the growing list of our satisfied customers
          </h2>
          <PartnersMarquee logos={logos} />
        </section>

        <ContactSection />
      </main>
    </div>
  );
};

export default AboutUs;
