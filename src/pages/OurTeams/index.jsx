import HeroSection from "../../components/common/HeroSection";
import TeamSection from "./TeamSection";
import FaqSection from "../Home/FaqSection";

const OurTeamsPage = () => {
  return (
    <div>
      <HeroSection
        title="Our Team"
        leftImg="/Assets/Group (2).png"
        rightImg="/Assets/Looper-4 (1).png"
      />

      <TeamSection />

      {/* Section with Image and Text */}
      <section className="container mx-auto flex flex-col md:flex-row gap-10 items-center my-16 px-4 md:px-0">
        <div className="w-full md:w-1/2">
          <img
            src="/Assets/Rectangle 5206.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-[#073757] font-montserrat">
            Partner with a Digital Marketing Agency Focused on Driving Growth.
          </h1>
          <p className="text-base md:text-lg mb-4 text-gray-700">
            There are jobs – and then there are careers. At OZ Media, we offer
            the chance to do work that truly makes a difference.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            It’s an opportunity to challenge yourself, grow your skillset, and
            achieve new heights. Imagine being surrounded by smart, ambitious,
            and driven individuals every single day. That’s the experience we
            promise at OZ Media. Sound like the right fit for you? Let’s build
            something extraordinary together.
          </p>
          <div className="py-4">
            <button
              className="bg-[#FCC735] text-[#1C1C1C] font-semibold rounded-full px-18  py-4 
             text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300"
            >
              See More
            </button>
          </div>
        </div>
      </section>

      {/* Centered Image Section */}
      <section className="container mx-auto px-4 py-10 md:py-20">
        <img
          src="/Assets/Rectangle 5207.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </section>

      {/* CTA Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center px-4 md:px-10 py-16">
        <div className="relative z-20 max-w-7xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 text-[#073757] font-montserrat">
            Partner with a Digital Marketing Agency Focused on Driving Growth.
          </h1>
          <p className="text-base md:text-lg mb-8 text-gray-700">
            Join forces with a professional digital marketing agency that
            understands your unique goals. From strategy to execution, we craft
            innovative solutions that elevate your brand, engage your audience,
            and drive sustainable growth. Let us help you achieve measurable
            success in today's dynamic digital environment.
          </p>
          <a href="/contact">
            <button className="border-2 border-[#000000] text-[#000000] px-6 py-3 rounded-md hover:bg-[#000000] hover:text-white transition-all duration-300">
              Consult Our Expert +
            </button>
          </a>
        </div>
      </section>

      {/* FAQ Section with Background Image */}
      <section className="relative z-10 p-4 md:p-20">
        <img
          src="/images/img_abstractgeometricseamlesspatterns2zqt82d_1.png"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            opacity-15 pointer-events-none -z-10 w-full max-w-3xl object-contain"
        />
        <FaqSection />
      </section>
    </div>
  );
};

export default OurTeamsPage;
