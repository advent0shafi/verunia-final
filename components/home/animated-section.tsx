"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useMemo, useRef } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Animation variant: 'fade' | 'slide-up' | 'scale' | 'parallax' */
  variant?: "fade" | "slide-up" | "scale" | "parallax";
};

/**
 * Modern scroll-triggered animation wrapper using Framer Motion.
 * - Content is always visible (no hidden initial state)
 * - Smooth scroll-linked animations
 * - Respects prefers-reduced-motion
 * - Zero performance impact on LCP
 */
export default function AnimatedSection({
  children,
  className,
  variant = "slide-up",
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Performance + accessibility: no animation if the user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  // For parallax variant, use scroll-based animation only
  if (variant === "parallax") {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });
    const parallaxY = useTransform(scrollYProgress, [0, 1], [36, -36]);
    const smoothParallaxY = useSpring(parallaxY, {
      stiffness: 90,
      damping: 22,
      mass: 0.45,
    });

    return (
      <motion.div
        ref={ref}
        style={{ y: smoothParallaxY, willChange: "transform" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Smooth but lightweight viewport animation tuned for "Framer-like" feel.
  const viewport = { once: true, amount: 0.15, margin: "0px 0px -8% 0px" } as const;

  const getVariants = () => {
    switch (variant) {
      case "fade":
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
        };
      case "slide-up":
        return {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: {
            type: "spring" as const,
            stiffness: 115,
            damping: 20,
            mass: 0.75,
          },
        };
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.965 },
          whileInView: { opacity: 1, scale: 1 },
          transition: {
            type: "spring" as const,
            stiffness: 120,
            damping: 22,
            mass: 0.72,
          },
        };
      default:
        return {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: {
            type: "spring" as const,
            stiffness: 115,
            damping: 20,
            mass: 0.75,
          },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      whileInView={variants.whileInView}
      viewport={viewport}
      transition={variants.transition}
      style={{ willChange: "opacity, transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered children animation wrapper
 */
export function StaggerContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual stagger child item
 */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0.6, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Text reveal animation (word by word)
 */
export function TextReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  const words = useMemo(() => {
    const textContent =
      typeof children === "string"
        ? children
        : typeof children === "number"
        ? String(children)
        : React.Children.toArray(children)
            .map((child) => {
              if (typeof child === "string" || typeof child === "number") {
                return String(child);
              }
              if (React.isValidElement(child)) {
                const childProps = child.props as { children?: React.ReactNode } | null;
                if (childProps && "children" in childProps && childProps.children) {
                  return React.Children.toArray(childProps.children)
                    .filter((c) => typeof c === "string" || typeof c === "number")
                    .join("");
                }
              }
              return "";
            })
            .join(" ")
            .trim();

    return textContent.split(/\s+/).filter((word) => word.length > 0);
  }, [children]);

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.03,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0.3, y: 8, filter: "blur(2px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              },
            },
          }}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * Image reveal with scale effect
 */
export function ImageReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`overflow-hidden ${className || ""}`}
      initial={{ scale: 1.1, opacity: 0.8 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
