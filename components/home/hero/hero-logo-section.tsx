"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

interface HeroLogoSectionProps {
  prefersReducedMotion: boolean | null;
  isLoaded: boolean;
}

export const HeroLogoSection = ({ prefersReducedMotion, isLoaded }: HeroLogoSectionProps) => {
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

  return (
    <motion.div
      className=" z-70  md:absolute bottom-0 left-0 right-0  text-center md:mt-0 mt-[30px]"
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
  );
};
