




import { useRef, useState } from "react";
import poster from "../../assets/images/parallax.jpg"
import poster1 from "../../assets/images/poster1.jpg"
import poster2 from "../../assets/images/poster2.jpg"
const CustomVideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="w-screen overflow-hidden">
      <div className="relative w-full   h-[80vh]">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src="/WhatsApp Video 2025-05-15 at 13.16.26_e46bad95.mp4"
          poster={poster2}
          controls={isPlaying}
        />

        {!isPlaying && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />
        )}

        {/* Play Button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={handlePlay}
              className="bg-white/30 hover:bg-white/40 p-5 rounded-full border border-white transition backdrop-blur-md"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}

        {/* Bottom Centered Heading */}
        <div className="absolute bottom-10 w-full text-center z-30 px-4">
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-md">
            See how we helped Groover grow 11x faster
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CustomVideoSection;
