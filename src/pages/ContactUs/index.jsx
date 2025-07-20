import HeroSection from "../../components/common/HeroSection";
import ContactSection from "./ContactSection";

const ContactUsPage = () => {
  return (
    <div className="bg-[#cfcfcf]">
      <HeroSection
        title="Contact Us"
        subtitle=""
        leftImg="/Assets/contact us 1.png"
        rightImg="/Assets/Looper-1 (2).png"
      />

      <ContactSection />
       <div className="mt-6 mb-6 flex items-center justify-center">
      <div className="w-full max-w-2xl flex items-center justify-center gap-3 text-[#073757]">
        <span className="flex-grow h-0.5 bg-[#073757]"></span>
        <span className="text-[#073757] text-lg">●</span>
        <span className="flex-grow h-0.5 bg-[#073757]"></span>
      </div>
    </div>
      <section class="container mx-auto h-[80vh] p-6 bg-[#cfcfcf]">
        <iframe
          class="w-full h-full border-0 rounded-3xl"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.1820128431408!2d75.89705462916167!3d22.74740151733241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdeea12c9f59%3A0xb173d983a1973714!2sORO%20Real%20Estate%20Private%20Limited!5e0!3m2!1sen!2sin!4v1748355808404!5m2!1sen!2sin"
        ></iframe>
      </section>

      {/* <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-[#fd4360] font-bold text-xl mb-4">
              Digital Marketing & IT Solutions
            </h2>
            <h3 className="text-white font-bold   text-3xl  sm:text-4xl md:text-5xl mb-6 flex items-center flex-wrap gap-2">
              Fueling Your Brand's Digital Growth
              <img
                src="/images/icon_shapes_37.svg"
                alt="Shape Icon"
                className="mx-6 h-6 md:h-8 animate-bounce inline-block"
              />
            </h3>
            <p className="text-white text-xl">
              At <strong className="text-[#fd4360]">OZ Media</strong>, we
              specialize in driving business success through
              <strong className="text-[#fd4360]">
                {" "}
                impactful digital marketing strategies
              </strong>{" "}
              and{" "}
              <strong className="text-[#fd4360]">tailored IT solutions</strong>.
              From enhancing your{" "}
              <strong className="text-[#fd4360]">online visibility</strong> with
              social media marketing, SEO, and paid advertising to streamlining
              operations with
              <strong className="text-[#fd4360]">end-to-end IT services</strong>
              , we are your trusted partner in digital transformation.
              <br />
              <br />
              Our expert team focuses on delivering measurable results, ensuring
              your brand not only stands out but also achieves{" "}
              <strong className="text-[#fd4360]">sustainable growth</strong> in
              a competitive landscape. Whether you're a startup or an
              established enterprise, OZ Media crafts{" "}
              <strong className="text-[#fd4360]">custom strategies</strong> that
              align with your business goals and resonate with your audience.
              <br />
              <br />
              Let’s collaborate to turn your vision into a thriving digital
              presence that drives real business impact.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto w-full h-[1px] bg-[#fd4360] my-10" /> */}
    </div>
  );
};

export default ContactUsPage;
