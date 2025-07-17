import Button from "../../components/Buttons";

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center border-2 border-[#17003E17] rounded-b-3xl bg-purple/10">
      {/* Bouncing Calendar Image - Center Top */}
      <img
        src="/Assets/Calender.png"
        alt="Calendar"
        className="absolute top-10 left-1/2 transform -translate-x-1/2 mt-4 animate-bounce z-20 w-20 sm:w-28 md:w-40"
      />

      {/* Main Content */}
      <div className="relative mt-10 z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-24 text-black flex flex-col lg:flex-row items-center justify-between gap-12 py-20 text-center lg:text-left">
        {/* Text Section */}
        <div className="flex-1 w-full lg:w-1/2 max-w-5xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight ">
            Innovate <span className="text-[#fd4360]">Inspire</span>
            <br className="hidden md:block" />
            Impact
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-montserrat font-semibold">
            Marketing That Moves, Technology
            <br className="hidden md:block" />
            That Builds, All Under One Roof.
          </p>

          <p className="text-sm sm:text-base md:text-lg xl:text-xl font-display">
            We are OZ Media — a hybrid digital force blending high-impact
            <br className="hidden sm:block" />
            marketing with high-performance development.
          </p>
        </div>

        {/* Graphic Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/Assets/Group 44238.png"
            alt="Banner Graphic"
            className="w-full max-w-[800px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
