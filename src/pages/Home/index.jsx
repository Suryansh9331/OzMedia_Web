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
import FAQ from "./FaqSection";
import ParallaxHero from "./TagSection";

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
    <main className="overflow-hidden mb-20  bg-[#cfcfcf]">
      <div className="mx-4">
        <Banner />
      </div>

      <OverviewSection />

      <section className="min-h-auto ">
        <OurMission />
      </section>
      <section className="min-h-auto ">
        <OurVision />
      </section>

      <section className="h-auto container mx-auto px-4 sm:px-6 lg:px-8  sm:py-6 pb-8 lg:py-18   ">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-16 relative">
          <img
            src="/Assets/Group 53 (1).png"
            alt="Arrow icon"
            className="rotate-12 w-12 sm:w-14 md:w-16 lg:w-28"
          />
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-[#095383] to-[#02121D] bg-clip-text text-transparent font-display text-center sm:text-left">
              Our Values
            </h2>

            {/* Separator Line Under Heading Only */}
            <div className="mt-2 w-full h-[1px] bg-gradient-to-r from-[#095383] to-[#02121D] rounded-full"></div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <img
            src="/Assets/Group 304 (2).png"
            alt="Cover Image"
            className="mx-w-[700px] h-auto object-cover rounded-md"
          />
        </div>
      </section>

      <section className="relative h-auto bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-8 lg:px-16 flex items-center justify-center overflow-hidden">
        <img
          src={grid} // Replace with your image path
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="z-10">
          <div className="flex text-center justify-center gap-10 text-black">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-[#FA3594] to-[#941F58] bg-clip-text text-transparent font-display text-center sm:text-left">
              Why Choose Us
            </h2>
          </div>

          <p className="text-2xl max-w-7xl px-auto py-6 text-center">
            At Oz Media Planet, we don't just follow trends—we create them. We
            are a powerhouse of Digital Marketing and Information Technology
            Development, blending strategy, creativity, and innovation to
            transform businesses into industry leaders.
          </p>

          <p className="text-3xl font-bold max-w-7xl px-auto py-6 text-center">
            They Came. We Coded. They Cheered
          </p>

          {/* Bouncing Arrow Animation */}
          <div className="flex justify-center mt-6">
            <div className="animate-bounce">
              <svg
                className="w-12 h-12 text-pink-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>


      <section className="h-auto ">
        <TagSection />
      </section>
      <section className="h-auto">
        <FAQ />
      </section>

      <section className="py-10 ">
        <h2 className="text-2xl sm:text-4xl font-display mb-20  font-bold text-center bg-gradient-to-r from-[#5A1C72] to-[#2B0659] bg-clip-text text-transparent">
          Join the growing list of our satisfied customers
        </h2>
        <PartnersMarquee logos={logos} />
      </section>
      <section className=" pb-16">
        <div className="w-full lg:py-10 ">
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
              <div key={idx} className="text-black px-8">
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
