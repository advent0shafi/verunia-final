"use client";

import React, { useContext } from "react";
import { useReducedMotion } from "motion/react";
import { HeroCarousel } from "./hero/hero-carousel";
import { HeroLogoSection } from "./hero/hero-logo-section";
import { ScrollRevealText } from "./hero/scroll-reveal-text";
import { LoadingContext } from "@/components/ui/loading-ui-wrapper";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { isLoading } = useContext(LoadingContext);
  const isLoaded = !isLoading;

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
