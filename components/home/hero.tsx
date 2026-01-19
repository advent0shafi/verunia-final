
"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence, useScroll, useTransform, MotionValue } from "motion/react";

// Scroll-reveal character component
const ScrollChar = ({ 
  children, 
  progress, 
  range 
}: { 
  children: string; 
  progress: MotionValue<number>; 
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

// Scroll-reveal word component
const ScrollWord = ({ 
  children, 
  progress, 
  range,
  className 
}: { 
  children: string; 
  progress: MotionValue<number>; 
  range: [number, number];
  className?: string;
}) => {
  const chars = children.split("");
  const amount = range[1] - range[0];
  const step = amount / chars.length;

  return (
    <span className={`relative inline-block mr-[0.25em] ${className || ""}`}>
      {chars.map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <ScrollChar key={`char_${i}`} progress={progress} range={[start, end]}>
            {char}
          </ScrollChar>
        );
      })}
    </span>
  );
};

// Scroll-reveal text section component
const ScrollRevealText = ({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.3"]
  });

  // Define text parts with their styles
  const titleWords = "Verunia Group".split(" ");
  const descriptionWords = "brings together dedicated brands in office furniture, interior design and luxury interiors, delivering projects and products across the region and beyond.".split(" ");
  
  const allWords = [...titleWords, ...descriptionWords];
  const totalWords = allWords.length;
  const titleWordCount = titleWords.length;

  // If reduced motion is preferred, show static text
  if (prefersReducedMotion) {
    return (
      <div className="flex items-center justify-center px-4 md:px-8 py-[80px] md:py-[200px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-fraunces not-italic md:text-[48px] text-[24px] md:leading-[60px] leading-[32px] [-letter-spacing:--0.02em] text-center max-w-[900px] mx-auto text-[#523E0F]">
            <span className="font-semibold">Verunia Group</span>{" "}
            <span className="font-extralight">
              brings together dedicated brands in office furniture, interior design and luxury interiors,
              delivering projects and products across the region and beyond.
            </span>
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="flex items-center justify-center px-4 md:px-8 py-[80px] md:py-[200px]"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-fraunces not-italic md:text-[48px] text-[24px] md:leading-[60px] leading-[32px] [-letter-spacing:--0.02em] text-center max-w-[900px] mx-auto text-[#523E0F] flex flex-wrap justify-center">
          {allWords.map((word, i) => {
            const start = i / totalWords;
            const end = start + 1 / totalWords;
            const isTitleWord = i < titleWordCount;
            
            return (
              <ScrollWord 
                key={`word_${i}`} 
                progress={scrollYProgress} 
                range={[start, end]}
                className={isTitleWord ? "font-semibold" : "font-extralight"}
              >
                {word}
              </ScrollWord>
            );
          })}
        </h2>
      </div>
    </div>
  );
};

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
  const [isLoaded, setIsLoaded] = useState(false);
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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  // Carousel transition duration (keep in sync across all panels)
  const transitionDuration = 0.6;
  const transitionEase = [0.4, 0, 0.2, 1] as const;

  // Center panel slide variants - full slide in/out
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween" as const, duration: transitionDuration, ease: transitionEase },
        opacity: { duration: transitionDuration * 0.5, ease: transitionEase },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0.5,
      transition: {
        x: { type: "tween" as const, duration: transitionDuration, ease: transitionEase },
        opacity: { duration: transitionDuration * 0.5, ease: transitionEase },
      },
    }),
  };

  // Side panels slide in the same direction - creates connected carousel feel
  const sideSlideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "60%" : "-60%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween" as const, duration: transitionDuration, ease: transitionEase },
        opacity: { duration: transitionDuration * 0.6, ease: transitionEase },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-60%" : "60%",
      opacity: 0,
      transition: {
        x: { type: "tween" as const, duration: transitionDuration, ease: transitionEase },
        opacity: { duration: transitionDuration * 0.4, ease: transitionEase },
      },
    }),
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
      <div className="relative md:min-h-[60vh] md:h-screen w-full ">
        {/* Mobile: centered image with left/right peeks (like screenshot) */}
        <div
          className="md:hidden relative w-full overflow-hidden mt-[100px]"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-center gap-[5.32%] ">
            <motion.button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="w-[22.7%] h-[132.62203979492188px] overflow-hidden relative"
              initial={prefersReducedMotion ? false : { scale: 1.05, opacity: 0, x: -20 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 0.8, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.1 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, opacity: 1 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.div
                  key={prevIndex}
                  custom={direction}
                  variants={prefersReducedMotion ? undefined : sideSlideVariants}
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

            {/* Main center slider */}
            <motion.div
              className="w-[77.2%] h-[176px] overflow-hidden relative"
              initial={prefersReducedMotion ? false : { scale: 1.1, opacity: 0 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            >
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={prefersReducedMotion ? undefined : slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                  style={{ zIndex: 1 }}
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
              className="w-[22.7%] h-[132.62203979492188px] overflow-hidden relative"
              initial={prefersReducedMotion ? false : { scale: 1.05, opacity: 0, x: 20 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 0.8, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.1 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, opacity: 1 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.div
                  key={nextIndex}
                  custom={direction}
                  variants={prefersReducedMotion ? undefined : sideSlideVariants}
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

        {/* Desktop: 3-panel layout with overlay controls */}
        <div
          className="hidden md:flex relative h-full items-center justify-center gap-2 md:gap-[4.44vw] mx-auto px-2 md:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Panel */}
          <motion.div
            className="w-[17.8%] h-[48.21vh] overflow-hidden relative cursor-pointer"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
            animate={prefersReducedMotion || !isLoaded ? {} : { opacity: 0.8, x: 0 }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02, opacity: 1 }}
            onClick={goPrev}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 }}
          >
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={prevIndex}
                custom={direction}
                variants={prefersReducedMotion ? undefined : sideSlideVariants}
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

          {/* Center Panel */}
          <motion.div
            className="w-[64.31%] h-[64vh] bg-gray-600 overflow-hidden relative"
            initial={prefersReducedMotion ? false : { scale: 1.1, opacity: 0 }}
            animate={prefersReducedMotion || !isLoaded ? {} : { scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
          >
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={prefersReducedMotion ? undefined : slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
                style={{ zIndex: 1 }}
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

          {/* Right Panel */}
          <motion.div
            className="w-[17.8%] h-[48.21vh] overflow-hidden relative cursor-pointer"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
            animate={prefersReducedMotion || !isLoaded ? {} : { opacity: 0.8, x: 0 }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02, opacity: 1 }}
            onClick={goNext}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 }}
          >
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={nextIndex}
                custom={direction}
                variants={prefersReducedMotion ? undefined : sideSlideVariants}
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

        <motion.div
          className=" z-20  md:absolute bottom-0 left-0 right-0  text-center md:mt-0 mt-[30px]"
          initial={prefersReducedMotion ? false : "initial"}
          animate={prefersReducedMotion || !isLoaded ? {} : "animate"}
          variants={prefersReducedMotion ? {} : logoVariants}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.4 }}
        >
          <motion.div
            className="flex items-center justify-center gap-2  "
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <Image
              src="/logo/verunia-svg.svg"
              alt="Verunia"
              width={100}
              height={184}
              unoptimized
              className="w-auto h-[53.36272430419922px] md:h-[184px] object-contain"
            />
          </motion.div>
          <motion.div
            className="flex items-center justify-center  gap-2 md:gap-6 mt-4 md:mt-8 w-full px-4 md:px-8"
            initial={prefersReducedMotion ? false : "initial"}
            animate={prefersReducedMotion || !isLoaded ? {} : "animate"}
            variants={prefersReducedMotion ? {} : textVariants}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.6 }}
          >
            <motion.div
              className="h-[8px]   border-b border-t border-[#a9a29d] flex-1 opacity-60 hidden sm:block"
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.8 }}
            />
            <p className="text-[#a9a29d] font-instrument font-medium not-italic text-[14px] leading-[20px] tracking-[0] text-center md:text-[24px] md:leading-[100%] md:font-normal capitalize whitespace-nowrap">
              Furniture And Interiors For Modern Work And Living
            </p>
            <motion.div
              className="h-[8px]   border-b border-t border-[#a9a29d] flex-1 opacity-60 hidden sm:block"
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              animate={prefersReducedMotion || !isLoaded ? {} : { scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </div>
      <ScrollRevealText prefersReducedMotion={prefersReducedMotion} />
    </section>
  );
}