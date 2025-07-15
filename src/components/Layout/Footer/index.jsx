import React, { useEffect, useState } from "react";
import { socialIcons } from "../../../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const texts = [
  { text: "Your idea", color: "text-[#8837B9]" },
  { text: "Your business", color: "text-[#095383]" },
  { text: "Your vision", color: "text-[#F24C41]" },
];

const Footer = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[index].text;
    if (typingIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const wait = setTimeout(() => {
        setTypingIndex(0);
        setDisplayText("");
        setIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
      return () => clearTimeout(wait);
    }
  }, [typingIndex, index]);

  return (
    <div className="bg-black overflow-hidden">
      {/* Top Section */}
      <section className="py-10 container mx-auto relative flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Let’s talk about
          </h1>
          <motion.p
            className={`text-2xl sm:text-3xl md:text-4xl font-bold ${texts[index].color}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.p>
        </div>
        <a href="/contact">
          <button className="border-2 rounded-full border-[#FCC735] text-white px-8 sm:px-16 py-3 sm:py-4 text-base sm:text-lg hover:bg-[#FCC735] transition-all duration-300">
            Sign Up
          </button>
        </a>
      </section>

      {/* Divider */}
      <div className="container mx-auto w-full h-[1px] bg-[#fd4360] my-10" />

      {/* Footer Section */}
      <footer className="text-white container mx-auto relative pb-10 overflow-hidden  ">
        {/* Centered Background Image */}
        <img
          src="/images/img_abstractgeometricseamlesspatterns2zqt82c_2.png"
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 sm:h-72 md:h-96 opacity-20 pointer-events-none z-0"
        />

        {/* Footer Content */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[#fd4360]">
              About OZ Media Planet
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              We blend creative marketing with smart technology to grow your
              brand and scale your business — all under one roof.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              {Object.values(socialIcons).map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Social icon ${index + 1}`}
                >
                  <img
                    src={icon}
                    alt={`social-icon-${index}`}
                    className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-75 hover:brightness-125 transition duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-base text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/our-teams" className="hover:text-white transition">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-base text-gray-400">
              <li>
                <Link
                  to="/digital-marketing"
                  className="hover:text-white transition"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="hover:text-white transition">
                  IT Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Subdomain */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Subdomain
            </h3>
            <ul className="space-y-2 text-base text-gray-400">
              <li>
                <Link to="#" className="hover:text-white transition">
                  Oz Learnings
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">
                  IT Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
