"use client";

import Image from "next/image";
import React, { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";

// REPLACE WITH YOUR IMPORTS
import hero01 from "@/public/hero-image/image-01.png";
import hero02 from "@/public/hero-image/image-02.png";
import hero03 from "@/public/hero-image/image-03.png";

interface HeroCarouselProps {
  prefersReducedMotion?: boolean | null;
  isLoaded?: boolean;
}

const SLIDES = [
  { src: hero01, alt: "Outdoor Patio" },
  { src: hero02, alt: "Main Living Room" },
  { src: hero03, alt: "Secondary Lounge" },
];

const OFFSETS = [-2, -1, 0, 1, 2] as const;

const DESKTOP_EASE = [0.25, 0.1, 0.25, 1] as const;
const MOBILE_EASE = [0.32, 0.72, 0, 1] as const;

const desktopVariants: Variants = {
  center: {
    width: "64.31%",
    height: "64vh",
    left: "50%",
    x: "-50%",
    zIndex: 60,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: DESKTOP_EASE },
  },
  left: {
    width: "17.8%",
    height: "48.21vh",
    left: "calc(50% - 32.155% - 4.44vw - 8.9%)",
    x: "-50%",
    zIndex: 30,
    opacity: 0.85,
    scale: 1,
    transition: { duration: 0.8, ease: DESKTOP_EASE },
  },
  right: {
    width: "17.8%",
    height: "48.21vh",
    left: "calc(50% + 32.155% + 4.44vw + 8.9%)",
    x: "-50%",
    zIndex: 30,
    opacity: 0.85,
    scale: 1,
    transition: { duration: 0.8, ease: DESKTOP_EASE },
  },
  farLeft: {
    width: "17.8%",
    height: "48.21vh",
    left: "-20%",
    x: "-50%",
    zIndex: 10,
    opacity: 0,
    scale: 1,
    transition: { duration: 0.8 },
  },
  farRight: {
    width: "17.8%",
    height: "48.21vh",
    left: "120%",
    x: "-50%",
    zIndex: 10,
    opacity: 0,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

const slideVariants3D: Variants = {
  enter: { opacity: 0, scale: 0.85, z: -150 },
  center: {
    opacity: 1,
    scale: 1,
    z: 0,
    transition: { duration: 0.7, ease: MOBILE_EASE },
  },
  exit: { opacity: 0, scale: 0.85, z: -150 },
};

export const HeroCarousel = ({ prefersReducedMotion, isLoaded = true }: HeroCarouselProps) => {
  void isLoaded;
  const slides = useMemo(() => SLIDES, []);

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // --- SHARED LOGIC ---
  const count = slides.length;
  
  // Wrapped index for the 3D mobile logic
  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;

  const goNext = useCallback(() => setIndex((prev) => (prev + 1) % count), [count]);
  const goPrev = useCallback(() => setIndex((prev) => (prev - 1 + count) % count), [count]);
  const pauseAutoPlay = useCallback(() => setIsPaused(true), []);
  const resumeAutoPlay = useCallback(() => setIsPaused(false), []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = setInterval(goNext, 3000);
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion, goNext]);

  const getSlideContent = useCallback((i: number) => {
    const wrappedIndex = ((i % count) + count) % count;
    return slides[wrappedIndex];
  }, [count, slides]);

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* --- DESKTOP VIEW (Layout from Block 1) --- */}
      <div 
        className="hidden md:flex relative w-full h-screen items-center justify-center overflow-hidden"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {OFFSETS.map((offset) => {
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
                variants={desktopVariants}
                initial={offset > 0 ? "farRight" : "farLeft"}
                animate={pos}
                exit={offset < 0 ? "farLeft" : "farRight"}
                className="absolute top-1/2 -translate-y-1/2 overflow-hidden cursor-pointer shadow-2xl"
                style={{ top: "50%" }}
                onClick={() => {
                  if (pos === "left") goPrev();
                  if (pos === "right") goNext();
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
                    style={{ opacity: pos === 'center' ? 0 : 0.15 }} 
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* --- MOBILE VIEW (3D Style from Block 2) --- */}
      <div
        className="md:hidden relative w-full h-[500px] flex items-center justify-center overflow-hidden mt-[100px]"
        style={{ perspective: "1000px" }}
        onTouchStart={pauseAutoPlay}
        onTouchEnd={resumeAutoPlay}
      >
        <div className="flex items-center justify-center gap-[2.5%] w-full" style={{ transformStyle: "preserve-3d" }}>
          
          {/* Mobile Left Peek */}
          <div 
            className="w-[7%] h-[350px]  relative opacity-60 overflow-hidden"
            style={{ transform: "perspective(1000px) rotateY(20deg)", transformOrigin: "right center" }}
            onClick={goPrev}
          >
             <Image src={slides[prevIndex].src} alt="prev" fill className="object-cover" sizes="25vw" />
          </div>

          {/* Mobile Center Slide */}
          <div className="w-[80%] h-[500px] relative" style={{ transformStyle: "preserve-3d" }}>
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={index}
                variants={slideVariants3D}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 shadow-xl overflow-hidden rounded-sm"
              >
                <Image
                  src={getSlideContent(index).src}
                  alt="active"
                  fill
                  priority
                  className="object-cover"
                  sizes="75vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Right Peek */}
          <div 
            className="w-[7%] h-[350px] relative opacity-60 overflow-hidden"
            style={{ transform: "perspective(1000px) rotateY(-20deg)", transformOrigin: "left center" }}
            onClick={goNext}
          >
             <Image src={slides[nextIndex].src} alt="next" fill className="object-cover" sizes="25vw" />
          </div>

        </div>
      </div>
    </div>
  );
};