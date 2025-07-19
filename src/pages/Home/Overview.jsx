import React, { useEffect, useRef, useState } from 'react';

const OverviewSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="planeSec"
      className=" min-h-[40vh] relative flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-8xl px-4 sm:px-6 md:px-12 lg:px-20 py-10 flex flex-col gap-8 md:gap-12 items-center">
        {/* Heading with pink underline */}
        <div className="overflow-hidden w-full text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black  font-montserrat pb-4 relative inline-block">
            Overview
            <span 
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#fd4360] transition-all duration-1000 ease-out ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
              style={{ transformOrigin: 'left center' }}
            ></span>
          </h1>
        </div>
        
        {/* Content paragraphs */}
        <div className={`overflow-hidden w-full transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <p className="text-lg sm:text-xl md:text-2xl font-medium font-display leading-relaxed text-center text-black">
            OZ Media Planet: Transforming Brands through Innovation, Strategy, and Technology
          </p>
        </div>
        
        <div className={`overflow-hidden w-full transition-all duration-700 ease-out delay-100 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <p className="text-base sm:text-lg md:text-xl font-normal font-display leading-relaxed text-center">
            At OZ Media Planet, we redefine how brands connect with audiences in the digital age. We are a
            full-spectrum digital marketing and technology services agency, providing tailored solutions that
            blend data-driven strategy, creative storytelling, and cutting-edge technology.
          </p>
        </div>
        
        <div className={`overflow-hidden w-full transition-all duration-700 ease-out delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <p className="text-base sm:text-lg md:text-xl font-normal font-display leading-relaxed text-center">
            Driven by a client-first philosophy, we serve as a strategic partner to brands aiming to scale,
            transform, and dominate in competitive markets. From market disruptors and startups to established
            enterprises, our integrated solutions help organizations elevate their brand value and achieve
            sustainable growth.
          </p>
        </div>

       
        {/* Glowing animated separator */}
        <div className={`relative w-52 h-0.5 my-8 overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-[#fd4360] "></div>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fd4360] to-transparent animate-glow-sweep"
            style={{
              animationDuration: '3s',
              width: '50%',
              transform: 'translateX(-100%)'
            }}
          ></div>
        </div>
    

      {/* Add the animation keyframes */}
      <style jsx global>{`
        @keyframes glow-sweep {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(200%);
            opacity: 0;
          }
        }
        .animate-glow-sweep {
          animation: glow-sweep 3s ease-in-out infinite;
        }
      `}</style>
      </div>
    </section>
  );
};

export default OverviewSection;