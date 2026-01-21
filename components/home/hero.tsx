"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { HeroCarousel } from "./hero/hero-carousel";
import { HeroLogoSection } from "./hero/hero-logo-section";
import { ScrollRevealText } from "./hero/scroll-reveal-text";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFDFA]">
      {/* Big Title */}
      <div className="relative md:min-h-[60vh] md:h-screen w-full ">
        <HeroCarousel prefersReducedMotion={prefersReducedMotion} isLoaded={isLoaded} />
        <HeroLogoSection prefersReducedMotion={prefersReducedMotion} isLoaded={isLoaded} />
      </div>
      <ScrollRevealText prefersReducedMotion={prefersReducedMotion} />
    </section>
  );
}
