import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: "/images/img_quotesicon_1.png",
    quote: `At Oz Media Planet, we don't just follow trends—we create them. We
            are a powerhouse of Digital Marketing and Information Technology
            Development, blending strategy, creativity, and innovation to
            transform businesses into industry leaders.`,
    name: "Jacob Kornelius",
    designation: "CEO Youseo",
  },
  {
    id: 2,
    image: "/images/img_quotesicon_1.png",
    quote: `At Oz Media Planet, we don't just follow trends—we create them. We
            are a powerhouse of Digital Marketing and Information Technology
            Development, blending strategy, creativity, and innovation to
            transform businesses into industry leaders.`,
    name: "Emily Carter",
    designation: "Marketing Head",
  },
  {
    id: 3,
    image: "/images/img_quotesicon_1.png",
    quote: `At Oz Media Planet, we don't just follow trends—we create them. We
            are a powerhouse of Digital Marketing and Information Technology
            Development, blending strategy, creativity, and innovation to
            transform businesses into industry leaders.`,
    name: "Michael Brown",
    designation: "Founder at StartUp",
  },
];

const TestimonialsCarouselSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="">
      <div className="container mx-auto">
        <div className="relative flex items-center">
          <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                className="flex flex-col md:flex-row gap-8   p-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="md:w-1/5 flex justify-center md:justify-start">
                  <img
                    src={testimonials[currentIndex].image}
                    alt="Quotes"
                    className="w-[210px] h-[210px] object-contain"
                  />
                </div>

                <div className="md:w-4/5">
                  <div className="mb-12">
                    <p className="text-white text-xl leading-9 mb-8">
                      {testimonials[currentIndex].quote}
                    </p>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-[#fd4360] text-sm">
                        {testimonials[currentIndex].designation}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <img
                      src="/images/img_abstractgeometricseamlesspatterns2zqt82e_2.png"
                      alt="Abstract Pattern"
                      className="w-[255px] h-[33px]"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-[#fd4360]" : "bg-gray-500"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarouselSec;
