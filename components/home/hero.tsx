
"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";

import hero01 from "@/public/hero-image/image-01.png";
import hero02 from "@/public/hero-image/image-02.png";
import hero03 from "@/public/hero-image/image-03.png";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
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
  const [isFading, setIsFading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const count = slides.length;
  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  const goTo = (idx: number) => {
    if (idx === activeIndex) return;
    setIsFading(true);
    window.setTimeout(() => {
      setActiveIndex(idx);
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    // Trigger initial load animation
    setIsLoaded(true);
  }, []);

  const goPrev = () => goTo(prevIndex);
  const goNext = () => goTo(nextIndex);

  useEffect(() => {
    if (isPaused) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      goTo((activeIndex + 1) % count);
    }, 4500);

    return () => window.clearInterval(id);
  }, [activeIndex, count, isPaused]);

  const imageVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
    },
    exit: { 
      scale: 0.95, 
      opacity: 0,
    }
  };

  const sideImageVariants = {
    initial: { scale: 1.05, opacity: 0, x: -20 },
    animate: { 
      scale: 1, 
      opacity: 0.8,
      x: 0,
    }
  };

  const rightSideImageVariants = {
    initial: { scale: 1.05, opacity: 0, x: 20 },
    animate: { 
      scale: 1, 
      opacity: 0.8,
      x: 0,
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0, y: 30 },
    animate: { 
      scale: 1, 
      opacity: 1,
      y: 0,
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1,
      y: 0,
    }
  };

  const headingVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1,
      y: 0,
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFDFA]">
      {/* Big Title */}
      <div className="relative md:min-h-[60vh] md:h-screen w-full mt-[30px] pt-6 md:pt-10 ">
        {/* Mobile: centered image with left/right peeks (like screenshot) */}
        <div
          className="md:hidden relative w-full overflow-hidden"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-center gap-3 md:px-3">
            <motion.button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="w-[32%] h-[190px] overflow-hidden relative opacity-80"
              initial={prefersReducedMotion ? false : { scale: 1.05, opacity: 0, x: -20 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 0.8, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.1 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, opacity: 1 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={prevIndex}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={prefersReducedMotion ? {} : imageVariants}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
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

            <motion.div 
              className="w-[84%] h-[230px] overflow-hidden relative"
              initial={prefersReducedMotion ? false : { scale: 1.1, opacity: 0 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={prefersReducedMotion ? {} : imageVariants}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="absolute inset-0"
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

            <motion.button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="w-[32%] h-[190px] overflow-hidden relative opacity-80"
              initial={prefersReducedMotion ? false : { scale: 1.05, opacity: 0, x: 20 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 0.8, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.1 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, opacity: 1 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={nextIndex}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={prefersReducedMotion ? {} : imageVariants}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
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

          {/* Mobile dots (no overlay arrows) */}
          {/* <div className="mt-3 flex items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={[
                  "h-2 w-2 rounded-full transition-all",
                  idx === activeIndex ? "bg-[#523e0f] w-6" : "bg-[#523e0f]/30",
                ].join(" ")}
              />
            ))}
          </div> */}
        </div>

        {/* Desktop: 3-panel layout with overlay controls */}
        <div
          className="hidden md:flex relative h-full items-center justify-center gap-2 md:gap-4 mx-auto px-2 md:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Panel */}
          <motion.div 
            className="w-[22%] h-[85%] overflow-hidden relative cursor-pointer"
            initial={prefersReducedMotion ? false : "initial"}
            animate={prefersReducedMotion || !isLoaded ? {} : "animate"}
            variants={prefersReducedMotion ? {} : sideImageVariants}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02, opacity: 1 }}
            onClick={goPrev}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={prevIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={prefersReducedMotion ? {} : imageVariants}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
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

          {/* Center Panel */}
          <motion.div 
            className="w-[56%] h-full overflow-hidden relative"
            initial={prefersReducedMotion ? false : { scale: 1.1, opacity: 0 }}
            animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={prefersReducedMotion ? {} : imageVariants}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="absolute inset-0"
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

            {/* Controls */}
            {/* <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-between px-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="rounded-full bg-black/30 text-white backdrop-blur-sm px-3 py-2 text-sm hover:bg-black/40 transition-colors"
              >
                ←
              </button>

              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goTo(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={[
                      "h-2 w-2 rounded-full transition-all",
                      idx === activeIndex ? "bg-white w-6" : "bg-white/60",
                    ].join(" ")}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="rounded-full bg-black/30 text-white backdrop-blur-sm px-3 py-2 text-sm hover:bg-black/40 transition-colors"
              >
                →
              </button>
            </div> */}
          </motion.div>

          {/* Right Panel */}
          <motion.div 
            className="w-[22%] h-[85%] overflow-hidden relative cursor-pointer"
            initial={prefersReducedMotion ? false : "initial"}
            animate={prefersReducedMotion || !isLoaded ? {} : "animate"}
            variants={prefersReducedMotion ? {} : rightSideImageVariants}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02, opacity: 1 }}
            onClick={goNext}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={nextIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={prefersReducedMotion ? {} : imageVariants}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
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

        <motion.div 
          className="relative z-20 mt-6 md:-mt-24 text-center"
          initial={prefersReducedMotion ? false : "initial"}
          animate={prefersReducedMotion || !isLoaded ? {} : "animate"}
          variants={prefersReducedMotion ? {} : logoVariants}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.4 }}
        >
          <motion.div 
            className="font-serif text-[14vw] flex items-center justify-center gap-2 ng-none tracking-widest text-[#e2b84b] md:text-[10rem]"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <Image
              src="/logo/verunia-svg.svg"
              alt="Verunia"
              width={100}
              height={184}
              unoptimized
              className="w-auto h-[100px] md:h-[184px] object-contain"
            />
          </motion.div>
          <motion.div 
            className="flex items-center justify-center gap-3 md:gap-6 mt-4 md:mt-8 w-full px-4 md:px-8"
            initial={prefersReducedMotion ? false : "initial"}
            animate={prefersReducedMotion || !isLoaded ? {} : "animate"}
            variants={prefersReducedMotion ? {} : textVariants}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.6 }}
          >
            <motion.div 
              className="h-px bg-[#a9a29d] flex-1 opacity-60 hidden sm:block"
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.8 }}
            />
            <p className="text-[#a9a29d] text-xs md:text-sm font-light tracking-widest md:tracking-[0.15em] uppercase whitespace-nowrap">
              Furniture And Interiors For Modern Work And Living
            </p>
            <motion.div 
              className="h-px bg-[#a9a29d] flex-1 opacity-60 hidden sm:block"
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="flex items-center justify-center px-4 md:px-8 py-[40px] md:py-[200px]"
        initial={prefersReducedMotion ? false : "initial"}
        animate={prefersReducedMotion || !isLoaded ? {} : "animate"}
        variants={prefersReducedMotion ? {} : headingVariants}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.8 }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="font-fraunces not-italic md:text-[48px] text-[24px] md:leading-[60px] leading-[32px] [-letter-spacing:--0.02em] text-center max-w-[900px] mx-auto text-[#523E0F]"
          >
            <motion.span 
              className="font-semibold"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.9 }}
            >
              Verunia Group
            </motion.span>{" "}
            <motion.span 
              className="font-extralight"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay: 1 }}
            >
              brings together dedicated brands in office furniture, interior design and luxury interiors,
              delivering projects and products across the region and beyond.{" "}
            </motion.span>
          </h2>
        </div>
      </motion.div>
    </section>
  );
}