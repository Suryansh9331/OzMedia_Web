import React, { useState } from "react";
import AnimatedToggleIcon from "../../components/AmimatedToggleIcon/index";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const faqs = [
  {
    question: "What does OZ Media actually do?",
    answer:
      "We’re a hybrid digital agency that blends strategic marketing with custom IT development. From brand campaigns to mobile apps, we help businesses grow creatively and scale technically — all under one roof.",
  },
  {
    question:
      "Can I hire you for just one service — like marketing or development?",
    answer:
      "Yes. You can work with us for just digital marketing, just development, or go all in with a full-stack solution. We’re flexible and custom-built to fit your needs.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Easy. Just fill out our contact form, drop us a message, or schedule a quick discovery call. We’ll understand your goals, suggest a solution, and take it from there.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "Most agencies specialize in one thing. We bring creative strategy and smart technology together — so your brand looks amazing and runs flawlessly.",
  },
  {
    question: "What tech stack and marketing tools do you specialize in?",
    answer:
      "We build on React, Vue, Laravel, Node.js, and cloud platforms like AWS & Azure. On the marketing side, we rock Google Ads, Meta Ads, HubSpot, SEO tools, and data analytics suites. If it moves pixels or processes data, we know it.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#D9A7F4] py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
      

        {/* FAQ Items */}
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-lg bg-[#D9A7F4]  overflow-hidden transition"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 hover:bg-[#e6c7f5] transition"
              >
                <span className="text-black text-base sm:text-lg font-medium">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <AnimatedToggleIcon
                    isOpen={isOpen}
                    size="text-lg"
                    closeIcon={<RiArrowDropDownLine />}
                    openIcon={<RiArrowDropUpLine />}
                  />
                </span>
              </button>

              {/* Answer */}
              <div
                className={`text-black text-base px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
