import { useRef, useState } from "react";

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
    <section className="py-16 ">
      <div className="relative rounded-xl overflow-hidden max-w-8xl mx-auto shadow-xl  ">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-[70vh] object-cover"
          src="/WhatsApp Video 2025-05-15 at 13.16.26_e46bad95.mp4" // Replace with actual path
          poster="/Assets/testimonial-banner.png" // Optional preview image
          controls={isPlaying}
        />

        {/* Play Button (Only show if video hasn't started) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlay}
              className="bg-white/30 hover:bg-white/40 backdrop-blur-md p-4 rounded-full border border-white transition"
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

        {/* Centered Title at Bottom */}
        <div className="absolute bottom-20 w-full text-center">
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold drop-shadow">
            See how we helped Groover to grow 11x faster
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CustomVideoSection;
