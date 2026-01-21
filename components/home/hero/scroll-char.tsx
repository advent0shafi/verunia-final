"use client";

import { motion, useTransform, MotionValue } from "motion/react";

interface ScrollCharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

export const ScrollChar = ({ children, progress, range }: ScrollCharProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
