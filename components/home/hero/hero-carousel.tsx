"use client";

import Image from "next/image";
import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// REPLACE WITH YOUR IMPORTS
import hero01 from "@/public/hero-image/image-01.png";
import hero02 from "@/public/hero-image/image-02.png";
import hero03 from "@/public/hero-image/image-03.png";

interface HeroCarouselProps {
  prefersReducedMotion?: boolean | null;
  isLoaded?: boolean;
}

export const HeroCarousel = ({ prefersReducedMotion, isLoaded = true }: HeroCarouselProps) => {
  const slides = useMemo(
    () => [
      { src: hero01, alt: "Outdoor Patio" },
      { src: hero02, alt: "Main Living Room" },
      { src: hero03, alt: "Secondary Lounge" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const getSlideContent = (i: number) => {
    const wrappedIndex = ((i % slides.length) + slides.length) % slides.length;
    return slides[wrappedIndex];
  };

  // --- DESKTOP VARIANTS (UNCHANGED) ---
  const desktopVariants = {
    center: {
      width: "64.31%",
      height: "64vh",
      left: "50%",
      x: "-50%",
      zIndex: 10,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
    left: {
      width: "17.8%",
      height: "48.21vh",
      left: "calc(50% - 32.155% - 4.44vw - 8.9%)",
      x: "-50%",
      zIndex: 30,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
    right: {
      width: "17.8%",
      height: "48.21vh",
      left: "calc(50% + 32.155% + 4.44vw + 8.9%)",
      x: "-50%",
      zIndex: 30,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
    farLeft: {
      width: "17.8%",
      height: "48.21vh",
      left: "-20%",
      x: "-50%",
      zIndex: 10,
      opacity: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
    farRight: {
      width: "17.8%",
      height: "48.21vh",
      left: "120%",
      x: "-50%",
      zIndex: 10,
      opacity: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  // --- MOBILE VARIANTS (MATCHING UPLOADED IMAGE) ---
  const mobileVariants = {
    center: {
      width: "75vw",        // Large, dominant center image
      height: "55vh",       // Taller portrait aspect ratio
      left: "50%",
      x: "-50%",
      zIndex: 10,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
    left: {
      width: "20vw",        // Narrow side strips
      height: "35vh",       // Much shorter than center
      // Math: Center(50%) - HalfCenter(37.5vw) - Gap(3vw) - HalfSide(10vw)
      left: "calc(50% - 37.5vw - 3vw - 10vw)", 
      x: "-50%",
      zIndex: 30,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
    right: {
      width: "20vw",
      height: "35vh",
      // Math: Center(50%) + HalfCenter(37.5vw) + Gap(3vw) + HalfSide(10vw)
      left: "calc(50% + 37.5vw + 3vw + 10vw)",
      x: "-50%",
      zIndex: 30,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
    farLeft: {
      width: "20vw",
      height: "35vh",
      left: "-50%",
      x: "-50%",
      zIndex: 10,
      opacity: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
    farRight: {
      width: "20vw",
      height: "35vh",
      left: "150%",
      x: "-50%",
      zIndex: 10,
      opacity: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* --- DESKTOP VIEW --- */}
      <div 
        className="flex relative w-full md:h-screen h-[70vh] md:mt-0 mt-[50px] items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const virtualIndex = index + offset;
            const content = getSlideContent(virtualIndex);
            
            let pos = "center";
            if (offset === -1) pos = "left";
            else if (offset === 1) pos = "right";
            else if (offset < -1) pos = "farLeft";
            else if (offset > 1) pos = "farRight";

            return (
              <motion.div
                key={virtualIndex}
                layout
                variants={desktopVariants}
                initial={offset > 0 ? "farRight" : "farLeft"}
                animate={pos}
                exit={offset < 0 ? "farLeft" : "farRight"}
                className="absolute top-1/2 -translate-y-1/2 overflow-hidden cursor-pointer shadow-2xl"
                style={{ top: "50%" }}
                onClick={() => {
                  if (pos === "left") setIndex(index - 1);
                  if (pos === "right") setIndex(index + 1);
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={content.src}
                    alt={content.alt}
                    fill
                    quality={90}
                    priority={pos === "center"}
                    className="object-cover"
                    sizes={pos === 'center' ? "65vw" : "20vw"}
                  />
                  <div 
                    className="absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none"
                    style={{ opacity: pos === 'center' ? 0 : 0.1 }} 
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>


      {/* --- MOBILE VIEW --- */}
      <div 
        className="hidden relative w-full h-[70vh]  items-center justify-center overflow-hidden"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const virtualIndex = index + offset;
            const content = getSlideContent(virtualIndex);
            
            let pos = "center";
            if (offset === -1) pos = "left";
            else if (offset === 1) pos = "right";
            else if (offset < -1) pos = "farLeft";
            else if (offset > 1) pos = "farRight";

            return (
              <motion.div
                key={virtualIndex}
                layout
                variants={mobileVariants}
                initial={offset > 0 ? "farRight" : "farLeft"}
                animate={pos}
                exit={offset < 0 ? "farLeft" : "farRight"}
                // Removed bg-colors and added shadow for clean look
                className="absolute overflow-hidden shadow-lg "
                style={{ top: "20%", transform: "translateY(-50%)" }}
                onClick={() => {
                   if (pos === "left") setIndex(index - 1);
                   if (pos === "right") setIndex(index + 1);
                }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={content.src} 
                    alt={content.alt} 
                    fill 
                    className="object-cover" 
                    sizes={pos === "center" ? "75vw" : "20vw"}
                  />
                  {/* Optional: Slight dim on side images for depth */}
                  <div 
                    className="absolute inset-0 bg-white/10 transition-opacity duration-500 pointer-events-none"
                    style={{ opacity: pos === 'center' ? 0 : 0.2 }} 
                  />
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
      
    </div>
  );
};