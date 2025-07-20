import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Rohan Mehta",
    role: "Founder, Mehta Logistics",
    review:
      "OZ Media Planet transformed our digital operations with a highly responsive and professional approach. Their IT services helped us eliminate paperwork, automate key processes, and improve operational efficiency by over 40%.",
    keyPoints: [
      "Website design and development",
      "Custom CRM solution with automation features",
      "IT support and maintenance services",
      "Digital business transformation consulting",
      "Brand identity creation"
    ]
  },
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Neha Sharma",
    role: "Marketing Head, PureGlow Cosmetics",
    review:
      "Our partnership with OZ Media Planet resulted in a complete brand repositioning. We observed a 75% increase in social media engagement and a 35% uplift in sales conversion within three months.",
    keyPoints: [
      "End-to-end social media marketing",
      "Brand promotion campaigns and influencer marketing",
      "Paid advertising (Facebook, Instagram Ads)",
      "E-commerce conversion optimization",
      "Visual content creation (graphics, reels, videos)"
    ]
  },
  {
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Arjun Rao",
    role: "Co-founder, EventEase",
    review:
      "Working with OZ Media Planet on our event management app was seamless. Their support helped us launch a top-rated local event discovery platform.Oz media team gives us a complete solution from design to development and post-launch support.",
    keyPoints: [
      "Mobile application development (Android & iOS)",
      "UI/UX design for app and website",
      "Brand identity creation",
      "Website development with ticket booking",
      "App store optimization and post-launch support"
    ]
  },
  {
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Isha Verma",
    role: "Director, Bloom Organics",
    review:
      "OZ Media Planet exceeded our expectations in revamping our digital presence. Our website traffic improved by over 60%, and returning customer rate increased significantly.",
    keyPoints: [
      "Complete digital marketing suite (SEO, SEM, SMM)",
      "Website optimization and content marketing",
      "Influencer outreach and brand collaborations",
      "Google Ads and remarketing campaigns",
      "Email marketing for customer retention"
    ]
  }
];

const TestimonialSection = ({ showTestimonials }) => {
  return (
    <section
      className={`py-20 px-6 md:px-24 transition-all duration-1000 ease-out transform bg-[#f8f9fc] text-[#073757] ${
        showTestimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold mb-4">CLIENT TESTIMONIALS</h2>
        <p className="text-lg max-w-3xl mx-auto">
          At OZ Media Planet, we measure our success by the tangible results we deliver across industries—logistics, consumer goods, wellness, and more. Here's what our clients say:
        </p>
      </motion.div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={40}
        slidesPerView={1}
        className="max-w-6xl mx-auto shadow-xl rounded-3xl"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#073757]"
              />
              <p className="text-gray-700 italic mb-4">“{t.review}”</p>
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-[#f15a29] font-medium">{t.role}</p>
              <ul className="mt-4 text-sm text-gray-600 text-left list-disc list-inside">
                {t.keyPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl font-semibold mb-2">Why Clients Choose OZ Media Planet</h3>
        <ul className="list-disc list-inside max-w-xl mx-auto text-gray-700 text-sm">
          <li>Industry-specific tailored solutions</li>
          <li>Transparent project management and timely deliveries</li>
          <li>Long-term support and growth-focused strategies</li>
          <li>One-stop solution: branding, development, marketing, and IT services</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;