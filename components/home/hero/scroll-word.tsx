"use client";

import { MotionValue } from "motion/react";
import { ScrollChar } from "./scroll-char";

interface ScrollWordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}

export const ScrollWord = ({ children, progress, range, className }: ScrollWordProps) => {
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
