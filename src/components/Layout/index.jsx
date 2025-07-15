import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Header from "./header";

function LoadingThreeDotsJumping() {
  const dotVariants = {
    jump: {
      y: [-10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 px-4"
      animate="jump"
      transition={{ staggerChildren: 0.15 }}
    >
      <div className="text-pink-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex flex-wrap items-end justify-center gap-3 ">
        Loading
        <div className="flex gap-2 items-end">
          <motion.div
            className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-pink-600"
            variants={dotVariants}
          />
          <motion.div
            className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-pink-600"
            variants={dotVariants}
          />
          <motion.div
            className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-pink-600"
            variants={dotVariants}
          />
        </div>
      </div>
    </motion.div>
  );
}

// 👇 Main Layout Component
const Layout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center "
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingThreeDotsJumping />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="App">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
