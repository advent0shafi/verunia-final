"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";
import { ScrollWord } from "./scroll-word";

interface ScrollRevealTextProps {
  prefersReducedMotion: boolean | null;
}

export const ScrollRevealText = ({ prefersReducedMotion }: ScrollRevealTextProps) => {
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
