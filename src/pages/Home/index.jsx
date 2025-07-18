import { useRef } from "react";
import gsap from "gsap";
import grid from "../../assets/grid.png";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import TagSection from "./TagSection";
import FaqSection from "./FaqSection";
import { useGSAP } from "@gsap/react";
import OurMission from "./OurMission";
import OurVision from "./OurVission";
import Banner from "./Banner";

import PartnersMarquee from "../../components/Marque";
import CustomVideoSection from "./VideoSection";
import OverviewSection from "./Overview";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

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

const HomePage = () => {
  const planeRef = useRef(null);
  const planeRef2 = useRef(null);

  useGSAP(() => {
    const screenWidth = window.innerWidth;

    const path = [
      { x: 0, y: 0 },
      { x: 200, y: 200 },
      { x: screenWidth / 3, y: -200 },
      { x: (2 * screenWidth) / 3, y: 200 },
      { x: screenWidth, y: 0 },
    ];
    const path2 = [
      { x: screenWidth, y: 0 },
      { x: screenWidth / 3, y: -200 },
      { x: 200, y: 200 },
      { x: 0, y: 0 },
      { x: -200, y: -200 },
      { x: -screenWidth / 3, y: 100 },
      { x: -(2 * screenWidth) / 3, y: -200 },
      { x: -screenWidth, y: -10 },
    ];

    gsap.to(planeRef2.current, {
      motionPath: {
        path: path2,
        curviness: 1.5,
        autoRotate: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: "#planeSec",
        start: "center bottom",
        end: "top top",
        scrub: true,
        // markers: true,
      },
    });

    gsap.to(planeRef.current, {
      motionPath: {
        path,
        curviness: 1.5,
        autoRotate: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: "#planeSec",
        start: "center bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      quote: "This is an amazing product!",
      name: "John Doe",
      designation: "CEO, Company A",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      quote: "Fantastic service and support.",
      name: "Jane Smith",
      designation: "CTO, Company B",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      quote: "Highly recommended for everyone.",
      name: "Michael Johnson",
      designation: "Manager, Company C",
    },
  ];

  return (
    <main className="overflow-hidden mb-20">
      <div className="mx-4">
        <Banner />
      </div>
    
     <OverviewSection/>

      <section className="min-h-auto ">
        <OurMission />
      </section>
      <section className="min-h-auto ">
        <OurVision />
      </section>

      <section className="h-auto p-4 md:p-20 ">
        <TagSection />
      </section>
      <section className="min-h-screen container mx-auto  px-4 sm:px-6 lg:px-8 py-20 ">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10 sm:mb-16">
          <img
            src="/Assets/Group 53 (1).png"
            alt="Arrow icon"
            className="rotate-12 w-12 sm:w-14 md:w-16 lg:w-20"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-[#095383] to-[#02121D] bg-clip-text text-transparent font-display text-center sm:text-left">
            Our Values
          </h2>
        </div>
        {/* Image Section */}``
        <div className=" mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <img
            src="/Assets/Group 304 (2).png"
            alt="Cover Image"
            className="mx-w-[700px] h-auto object-cover rounded-md "
          />
        </div>
      </section>

      <section className="relative h-[70vh] bg-cover bg-center bg-no-repeat  py-20 px-4 sm:px-8 lg:px-16 flex items-center justify-center overflow-hidden">
        <img
          src={grid} // Replace with your image path
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="">
          <div className="flex text-center justify-center gap-10 text-black">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-[#FA3594] to-[#941F58] bg-clip-text text-transparent font-display text-center sm:text-left">
              Why Choose Us
            </h2>
          </div>
          <p className="text-2xl max-w-7xl px-auto py-6 text-center ">
            At Oz Media Planet, we don't just follow trends—we create them. We
            are a powerhouse of Digital Marketing and Information Technology
            Development, blending strategy, creativity, and innovation to
            transform businesses into industry leaders.
          </p>
          <p className="text-3xl font-bold max-w-7xl px-auto py-6 text-center">
            They Came. We Coded. They Cheered
          </p>
        </div>
      </section>

      <section className="min-h-screen relative z-0 overflow-hidden my-14">
        {/* Header */}
        <p className="text-pink-500 text-2xl font-semibold text-center">FAQ</p>
        <h2 className="text-2xl sm:text-4xl font-display  font-bold text-center bg-gradient-to-r from-[#5A1C72] to-[#2B0659] bg-clip-text text-transparent">
          Got Questions? We’ve Got Real Answers.
        </h2>
        <div className="p-4 md:p-20 relative z-10">
          <FaqSection />
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl sm:text-4xl font-display mb-20  font-bold text-center bg-gradient-to-r from-[#5A1C72] to-[#2B0659] bg-clip-text text-transparent">
          Join the growing list of our satisfied customers
        </h2>
        <PartnersMarquee logos={logos} />
      </section>
      <section className=" py-16">
        <div className="max-w-[80%] mx-auto px-2 sm:px-6 lg:px-8">
          <CustomVideoSection />
          {/* Testimonials */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                quote:
                  "We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it.",
                name: "Darlene Robertson",
                title: "Product Manager at Jomanar",
              },
              {
                quote:
                  "I didn’t know designing in Webflow could be this individualized. I’d never considered it before, but Landingfolio changed my mind.",
                name: "Bessie Cooper",
                title: "Freelance UX Designer",
              },
              {
                quote:
                  "We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it.",
                name: "Arlene McCoy",
                title: "Product Designer at Martina.co",
              },
            ].map(({ quote, name, title }, idx) => (
              <div key={idx} className="text-black">
                <p className="text-lg mb-4">"{quote}"</p>
                <p className="font-bold">{name}</p>
                <p className="text-sm text-gray-500">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
