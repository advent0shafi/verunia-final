"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type LazyLoadSectionProps = {
  children: React.ReactNode;
  className?: string;
  minHeightClass?: string;
  rootMargin?: string;
  fallbackClassName?: string;
};

export default function LazyLoadSection({
  children,
  className,
  minHeightClass = "min-h-[420px]",
  rootMargin = "420px 0px",
  fallbackClassName = "bg-[#F7EFE2] section-shimmer",
}: LazyLoadSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 600px" }}
    >
      {isVisible ? (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
          }
        >
          {children}
        </motion.div>
      ) : (
        <div
          aria-hidden
          className={`w-full rounded-md ${fallbackClassName} ${minHeightClass}`}
        />
      )}
    </div>
  );
}
