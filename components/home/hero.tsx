

"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

export default function Hero() {
  const slides = useMemo(
    () => [
      { src: "/hero-image/image-01.png", alt: "Outdoor Patio" },
      { src: "/hero-image/image-02.png", alt: "Main Living Room" },
      { src: "/hero-image/image-03.png", alt: "Secondary Lounge" },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const count = slides.length;
  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  const goTo = (idx: number) => {
    if (idx === activeIndex) return;
    setIsFading(true);
    window.setTimeout(() => {
      setActiveIndex(idx);
      setIsFading(false);
    }, 200);
  };

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

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFDFA]">
      {/* Big Title */}
      <div className="relative min-h-[60vh] md:h-screen w-full mt-[30px] py-6 md:py-10">
        {/* Mobile: centered image with left/right peeks (like screenshot) */}
        <div
          className="md:hidden relative w-full overflow-hidden"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-center gap-3 md:px-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="w-[32%] h-[190px] overflow-hidden relative opacity-80"
            >
              <Image
                key={slides[prevIndex].src}
                src={slides[prevIndex].src}
                alt={slides[prevIndex].alt}
                width={400}
                height={600}
                className={[
                  "w-full h-full object-cover transition-opacity duration-200",
                  isFading ? "opacity-70" : "opacity-100",
                ].join(" ")}
              />
            </button>

            <div className="w-[84%] h-[230px] overflow-hidden relative">
              <Image
                key={slides[activeIndex].src}
                src={slides[activeIndex].src}
                alt={slides[activeIndex].alt}
                width={900}
                height={900}
                className={[
                  "w-full h-full object-cover transition-opacity duration-200",
                  isFading ? "opacity-80" : "opacity-100",
                ].join(" ")}
              />
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="w-[32%] h-[190px] overflow-hidden relative opacity-80"
            >
              <Image
                key={slides[nextIndex].src}
                src={slides[nextIndex].src}
                alt={slides[nextIndex].alt}
                width={400}
                height={600}
                className={[
                  "w-full h-full object-cover transition-opacity duration-200",
                  isFading ? "opacity-70" : "opacity-100",
                ].join(" ")}
              />
            </button>
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
          <div className="w-[22%] h-[85%] overflow-hidden relative">
            <Image
              key={slides[prevIndex].src}
              src={slides[prevIndex].src}
              alt={slides[prevIndex].alt}
              width={400}
              height={600}
              className={[
                "w-full h-full object-cover transition-opacity duration-200",
                isFading ? "opacity-70" : "opacity-100",
              ].join(" ")}
            />
          </div>

          {/* Center Panel */}
          <div className="w-[56%] h-full overflow-hidden relative">
            <Image
              key={slides[activeIndex].src}
              src={slides[activeIndex].src}
              alt={slides[activeIndex].alt}
              width={800}
              height={800}
              className={[
                "w-full h-full object-cover transition-opacity duration-200",
                isFading ? "opacity-80" : "opacity-100",
              ].join(" ")}
            />

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
          </div>

          {/* Right Panel */}
          <div className="w-[22%] h-[85%] overflow-hidden relative">
            <Image
              key={slides[nextIndex].src}
              src={slides[nextIndex].src}
              alt={slides[nextIndex].alt}
              width={400}
              height={600}
              className={[
                "w-full h-full object-cover transition-opacity duration-200",
                isFading ? "opacity-70" : "opacity-100",
              ].join(" ")}
            />
          </div>
        </div>

        <div className="relative z-20 mt-6 md:-mt-24 text-center ">
          <div className="font-serif text-[14vw] flex items-center justify-center gap-2 ng-none tracking-widest text-[#e2b84b] md:text-[10rem]">
            <Image src="/logo/verunia-svg.svg" alt="Verunia" width={100} height={184} className="w-auto h-[100px] md:h-[184px] object-contain" />
          </div>
          {/* <p className="mt-4 text-sm tracking-wide text-[#7a7a7a]">
          Furniture And Interiors For Modern Work And Living
        </p> */}
          <div className="flex items-center justify-center  gap-3 md:gap-6 mt-4 md:mt-8 w-full px-4 md:px-8">
            <div className="h-px bg-[#a9a29d] flex-1 opacity-60 hidden sm:block"></div>
            <p className="text-[#a9a29d] text-xs md:text-sm font-light tracking-widest md:tracking-[0.15em] uppercase whitespace-nowrap">
              Furniture And Interiors For Modern Work And Living
            </p>
            <div className="h-px bg-[#a9a29d] flex-1 opacity-60 hidden sm:block"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 md:px-8 py-[40px] md:py-[200px]">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-[#523e0f] font-fraunces text-[28px] md:text-[48px] leading-[36px] md:leading-[60px] text-center max-w-[900px] mx-auto"
            style={{
              letterSpacing: "-0.02em",
            }}
          >
            <span className="font-bold">Verunia Group</span>{" "}
            <span className="font-light">
              brings together dedicated brands in office furniture, interior design and luxury interiors,
              delivering projects and products across the region and beyond.</span>
          </h2>
        </div>
      </div>
    </section>
  )
}