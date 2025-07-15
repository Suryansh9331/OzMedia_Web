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

const testimonials = [
  {
    image: "/Assets/BG (1).png",
    name: "Jenny Wilson",
    company: "Grower.io",
    review:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
  {
    image: "/Assets/BG (2).png",
    name: "Devon Lane",
    company: "DLDesign.co",
    review:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
  {
    image: "/Assets/BG.png",
    name: "Devon Lane",
    company: "DLDesign.co",
    review:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
  {
    image: "/Assets/BG.png",
    name: "Devon Lane",
    company: "DLDesign.co",
    review:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
  {
    image: "/Assets/BG.png",
    name: "Devon Lane",
    company: "DLDesign.co",
    review:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
  {
    image: "/Assets/BG.png",
    name: "Devon Lane",
    company: "DLDesign.co",
    review:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
  {
    image: "/Assets/BG.png",
    name: "Devon Lane",
    company: "DLDesign.co",
    review:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
  {
    image: "/Assets/BG.png",
    name: "Devon Lane",
    company: "DLDesign.co",
    review:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
  {
    image: "/Assets/BG.png",
    name: "Devon Lane",
    company: "DLDesign.co",
    review:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
];

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
    <div className="text-gray-900">
      <main>
        <HeroSection
          title="About Us"
          rightImg="/Assets/Rotate.png"
          leftImg="/Assets/About us 1.png"
        />

        {/* About Us Section */}
        <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-18 items-center">
          <div>
            <h2 className="text-[#073757] font-montserrat font-extrabold text-5xl mb-2">
              About Us
            </h2>
            <h3 className="text-4xl font-semibold mb-4">We love what we do</h3>
            <p className="mb-4">
              Oz Media Planet is one of the largest Internet marketing agencies
              in India. We have been providing our clients with comprehensive
              solutions for online promotion, increasing sales and making each
              business really profitable.
            </p>
            <p>
              We have completed over 2,500 successful projects in various fields
              and directions. Oz Media Planet consists of more than 120
              certified specialists: SEO experts, developers, SMM, PPC
              specialists, etc. We change the Internet world for the better!
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/Assets/Group 44242.png"
              alt="About Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </section>

        {/* Brand Promises Section */}
        <section className="container mx-auto px-6 py-12 flex flex-col-reverse md:grid md:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center">
            <img
              src="/Assets/06 (1).png"
              alt="Brand Promises Illustration"
              className="max-w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-[#073757] font-montserrat font-extrabold text-5xl mb-2">
              Brand Promises
            </h2>
            <p className="mb-6">
              With Oz Media Planet, you always have a partner for whom you and
              your business are the top priority. This means Oz Media Planet is
              more than just an Internet marketing agency. We’re your reliable
              partner, committed to your success in SEO, SMM, PPC and beyond.
              You get more than just results—you get a partnership.
            </p>
            <Button
              type="primary"
              className="border-2 border-[#FCC735] bg-[#FCC735] hover:bg-[#FCC735] text-black font-bold py-3 px-6 rounded-lg text-sm sm:text-base flex items-center"
            >
              Read More
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className={`py-12 px-4 md:px-20 transition-all duration-1000 ease-out transform ${
            showTestimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
        </section>

        {/* Partners Section */}
        <section className="py-10 my-20">
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
