"use client";

import Image from "next/image";
import React, { useMemo, useState, useCallback, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";

import hero01 from "@/public/hero-image/image-01.png";
import hero02 from "@/public/hero-image/image-02.png";
import hero03 from "@/public/hero-image/image-03.png";

interface HeroCarouselProps {
  prefersReducedMotion: boolean | null;
  isLoaded: boolean;
}

export const HeroCarousel = ({ prefersReducedMotion, isLoaded }: HeroCarouselProps) => {
  const slides = useMemo(
    () => [
      { src: hero01, alt: "Outdoor Patio" },
      { src: hero02, alt: "Main Living Room" },
      { src: hero03, alt: "Secondary Lounge" },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const count = slides.length;

  // For sliding: Calculate prev and next slide indices with wrapping
  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  // Calculate proper direction for wrap-around navigation
  const calculateDirection = useCallback((from: number, to: number): 1 | -1 => {
    if (from === to) return 1;
    // Handle wrap-around: last to first should go forward (1)
    if (from === count - 1 && to === 0) return 1;
    // Handle wrap-around: first to last should go backward (-1)
    if (from === 0 && to === count - 1) return -1;
    // Normal case: higher index = forward, lower index = backward
    return to > from ? 1 : -1;
  }, [count]);

  // Sliding goTo with stable callback
  const goTo = useCallback((idx: number) => {
    if (idx === activeIndex) return;
    setDirection(calculateDirection(activeIndex, idx));
    setActiveIndex(idx);
  }, [activeIndex, calculateDirection]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  useEffect(() => {
    if (isPaused) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      goNext();
    }, 4500);

    return () => window.clearInterval(id);
  }, [isPaused, goNext]);

  // 3D Carousel settings
  const transitionDuration = 0.7;
  const transitionEase = [0.32, 0.72, 0, 1] as const;
  const rotateAngle = 45; // Rotation angle for 3D effect

  // 3D Center panel variants - rotates in/out with perspective
  const slideVariants3D = {
    enter: (dir: number) => ({
      x: dir > 0 ? "80%" : "-80%",
      rotateY: dir > 0 ? -rotateAngle : rotateAngle,
      scale: 0.85,
      opacity: 0.6,
      z: -150,
    }),
    center: {
      x: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      z: 0,
      transition: {
        type: "tween" as const,
        duration: transitionDuration,
        ease: transitionEase,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-80%" : "80%",
      rotateY: dir > 0 ? rotateAngle : -rotateAngle,
      scale: 0.85,
      opacity: 0.6,
      z: -150,
      transition: {
        type: "tween" as const,
        duration: transitionDuration,
        ease: transitionEase,
      },
    }),
  };

  // 3D Side panel variants - subtle 3D rotation matching the carousel
  const sideSlideVariants3D = {
    enter: (dir: number) => ({
      x: dir > 0 ? "50%" : "-50%",
      rotateY: dir > 0 ? -25 : 25,
      scale: 0.9,
      opacity: 0,
    }),
    center: {
      x: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween" as const,
        duration: transitionDuration,
        ease: transitionEase,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-50%" : "50%",
      rotateY: dir > 0 ? 25 : -25,
      scale: 0.9,
      opacity: 0,
      transition: {
        type: "tween" as const,
        duration: transitionDuration,
        ease: transitionEase,
      },
    }),
  };

  // Static 3D styles for side panels (angled towards center)
  const leftPanel3DStyle = {
    transform: "perspective(1000px) rotateY(15deg)",
    transformOrigin: "right center",
  };

  const rightPanel3DStyle = {
    transform: "perspective(1000px) rotateY(-15deg)",
    transformOrigin: "left center",
  };

  return (
    <div className="relative md:min-h-[60vh] md:h-screen w-full ">
      {/* Mobile: 3D centered image with left/right peeks */}
      <div
        className="md:hidden relative w-full overflow-hidden mt-[100px]"
        style={{ perspective: "1000px" }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div 
          className="flex items-center justify-center gap-[5.32%]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Left side panel - angled towards center */}
          <motion.button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="w-[22.7%] h-[132.62203979492188px] overflow-hidden relative"
            style={leftPanel3DStyle}
            initial={prefersReducedMotion ? false : { scale: 1.05, opacity: 0, x: -20 }}
            animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 0.85, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.1 }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, opacity: 1 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={prevIndex}
                custom={direction}
                variants={prefersReducedMotion ? undefined : sideSlideVariants3D}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <Image
                  src={slides[prevIndex].src}
                  alt={slides[prevIndex].alt}
                  fill
                  sizes="(min-width: 768px) 22vw, 32vw"
                  placeholder="blur"
                  quality={82}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Main center slider with 3D perspective */}
          <motion.div
            className="w-[77.2%] h-[176px] overflow-hidden relative"
            style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
            initial={prefersReducedMotion ? false : { scale: 1.1, opacity: 0 }}
            animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          >
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={prefersReducedMotion ? undefined : slideVariants3D}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
              >
                <Image
                  src={slides[activeIndex].src}
                  alt={slides[activeIndex].alt}
                  fill
                  sizes="(min-width: 768px) 56vw, 84vw"
                  placeholder="blur"
                  quality={82}
                  priority={activeIndex === 0}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right side panel - angled towards center */}
          <motion.button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="w-[22.7%] h-[132.62203979492188px] overflow-hidden relative"
            style={rightPanel3DStyle}
            initial={prefersReducedMotion ? false : { scale: 1.05, opacity: 0, x: 20 }}
            animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 0.85, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.1 }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, opacity: 1 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={nextIndex}
                custom={direction}
                variants={prefersReducedMotion ? undefined : sideSlideVariants3D}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <Image
                  src={slides[nextIndex].src}
                  alt={slides[nextIndex].alt}
                  fill
                  sizes="(min-width: 768px) 22vw, 32vw"
                  placeholder="blur"
                  quality={82}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Desktop: 3D 3-panel layout with overlay controls */}
      <div
        className="hidden md:flex relative h-full items-center justify-center gap-2 md:gap-[4.44vw] mx-auto px-2 md:px-0"
        style={{ perspective: "1500px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Panel - 3D angled towards center */}
        <motion.div
          className="w-[17.8%] h-[48.21vh] overflow-hidden relative cursor-pointer"
          style={leftPanel3DStyle}
          initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
          animate={prefersReducedMotion || !isLoaded ? {} : { opacity: 0.85, x: 0 }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.02, opacity: 1 }}
          onClick={goPrev}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 }}
        >
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={prevIndex}
              custom={direction}
              variants={prefersReducedMotion ? undefined : sideSlideVariants3D}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={slides[prevIndex].src}
                alt={slides[prevIndex].alt}
                fill
                sizes="22vw"
                placeholder="blur"
                quality={82}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Center Panel - 3D rotation on transition */}
        <motion.div
          className="w-[64.31%] h-[64vh] bg-gray-600 overflow-hidden relative"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
          initial={prefersReducedMotion ? false : { scale: 1.1, opacity: 0 }}
          animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
        >
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={prefersReducedMotion ? undefined : slideVariants3D}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            >
              <Image
                src={slides[activeIndex].src}
                alt={slides[activeIndex].alt}
                fill
                sizes="56vw"
                placeholder="blur"
                quality={82}
                priority={activeIndex === 0}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right Panel - 3D angled towards center */}
        <motion.div
          className="w-[17.8%] h-[48.21vh] overflow-hidden relative cursor-pointer"
          style={rightPanel3DStyle}
          initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
          animate={prefersReducedMotion || !isLoaded ? {} : { opacity: 0.85, x: 0 }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.02, opacity: 1 }}
          onClick={goNext}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 }}
        >
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={nextIndex}
              custom={direction}
              variants={prefersReducedMotion ? undefined : sideSlideVariants3D}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={slides[nextIndex].src}
                alt={slides[nextIndex].alt}
                fill
                sizes="22vw"
                placeholder="blur"
                quality={82}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
