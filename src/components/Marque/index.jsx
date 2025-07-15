const PartnersMarquee = ({ logos }) => {
  const scrollingLogos = [
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
  ];

  return (
    <div className=" py-6 overflow-hidden relative ">
      {/* Marquee Content */}
      <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-4">
        {scrollingLogos.map((logo, index) =>
          logo.type === "label" ? (
            <div
              key={index}
              className="flex flex-col items-center text-white shrink-0"
            >
              <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded mb-1">
                Logotype
              </span>
              <span className="border-2 border-purple-600 text-white font-bold text-sm px-2 py-1">
                {logo.name}
              </span>
            </div>
          ) : (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-8 shrink-0"
            />
          )
        )}
      </div>
    </div>
  );
};

export default PartnersMarquee;
