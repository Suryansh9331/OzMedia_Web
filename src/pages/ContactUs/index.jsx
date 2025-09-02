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

         </div>
  );
};

export default ContactUsPage;
