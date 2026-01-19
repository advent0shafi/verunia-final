"use client";

import { motion, useReducedMotion } from "motion/react";
import React from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Lightweight scroll-triggered animation wrapper.
 * - Content is ALWAYS visible (no opacity:0 initial state)
 * - Adds a subtle rise effect when scrolling into view
 * - Respects prefers-reduced-motion
 * - No delays to avoid blank page experience
 */
export default function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  // Performance + accessibility: no animation if the user prefers reduced motion.
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0.92, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
