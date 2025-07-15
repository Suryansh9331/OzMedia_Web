import Card from "../../components/common/Card";
import Button from "../../components/ui/Button";

const VisionMissionSection = () => {
  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:px-16 ">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-10 sm:mb-12 text-center sm:text-left">
          <h2 className="text-[#fd4360] font-montserrat font-bold text-base sm:text-lg md:text-xl mb-2">
            About Us
          </h2>
          <h3 className="text-white font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
            We love what we do
          </h3>
          <p className="text-white font-roboto leading-6 sm:leading-7 text-sm sm:text-base max-w-2xl mx-auto sm:mx-0 mb-">
            Oz Media Planet is one of the largest Internet marketing agencies in
            India.we have been providing our clients with comprehensive
            solutions for online promotion, increasing sales and making each
            business really profitable.
          </p>
          <p className="text-white font-roboto leading-6 sm:leading-7 text-sm sm:text-base max-w-2xl mx-auto sm:mx-0">
            {" "}
            We have completed over 2,500 successful projects in various fields
            and directions. Oz Media Planet team consists of more than 120
            certified specialists: SEO experts, developers, SMM, PPC
            specialists, etc. We change the Internet world for the better!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card
            title="Brand Promises"
            description="With Oz Media Planet you always have a partner for whom you and your business are the top priority. And this means that Oz Media Planet is more than an Internet marketing agency. We are your reliable partner, whom you can always rely on. It's more than just SEO, SMM, PPC. We are as interested in your success as we are in ours. Therefore, with us you get more than with someone else."
            className="relative"
            icon="/images/img_lineiconsbundlexubzu9k_1_1.png"
          />
          <Card
            title="Brand Promises"
            description="With Oz Media Planet you always have a partner for whom you and your business are the top priority. And this means that Oz Media Planet is more than an Internet marketing agency. We are your reliable partner, whom you can always rely on. It's more than just SEO, SMM, PPC. We are as interested in your success as we are in ours. Therefore, with us you get more than with someone else."
            className="relative"
            icon="/images/img_lineiconsbundlexubzu9k_1_1.png"
          />
        </div>

        {/* Read More Button */}
        <div className="mt-6 sm:mt-8 flex justify-center sm:justify-start">
          <Button
            type="primary"
            className="border-2 border-[#fd4360] rounded-lg text-white font-bold py-3 px-6 sm:py-4 sm:px-8 flex items-center text-sm sm:text-base"
          >
            Read More
            <img
              src="/images/img_plus.svg"
              alt="Plus"
              className="ml-2 w-3 h-3 sm:w-4 sm:h-4"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
