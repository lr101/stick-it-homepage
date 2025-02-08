"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import DownloadButtons from "./DownloadButtons";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/images/background/1.jpg",
    "/images/background/2.jpg",
    "/images/background/3.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [backgroundImages.length]);

  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 3 } },
    exit: { opacity: 0, transition: { duration: 3 } },
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 h-screen w-screen overflow-hidden">
      {/* Background Image Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience Sticker Sharing Like Never Before!
        </motion.h1>
        <p className="text-lg max-w-2xl text-white">
          Upload pictures, share with groups, and tag stickers right where you took them. Explore new spots on an interactive map! 🌍📸
        </p>
        <DownloadButtons />
      </div>
    </section>
  );
};

export default HeroSection;
