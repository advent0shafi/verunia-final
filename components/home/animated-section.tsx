"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"],
  });

  // Transform values based on scroll progress - improved timing and ranges
  // Animation starts when element is 80% down viewport, completes at 20%
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [40, 0, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.94, 1, 1, 1]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Performance + accessibility: no animation if the user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  // Get animation styles based on variant
  const getAnimationStyle = () => {
    switch (variant) {
      case "fade":
        return { opacity };
      case "slide-up":
        return { opacity, y };
      case "scale":
        return { opacity, scale };
      case "parallax":
        return { y: parallaxY };
      default:
        return { opacity, y };
    }
  };

  return (
    <motion.div
      ref={ref}
      style={getAnimationStyle()}
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
  
  // Convert children to string, handling ReactNode
  const textContent = typeof children === 'string' 
    ? children 
    : typeof children === 'number' 
    ? String(children)
    : React.Children.toArray(children)
        .map((child) => {
          if (typeof child === 'string' || typeof child === 'number') {
            return String(child);
          }
          // For JSX elements, try to extract text content
          if (React.isValidElement(child)) {
            const childProps = child.props as { children?: React.ReactNode } | null;
            if (childProps && 'children' in childProps && childProps.children) {
              return React.Children.toArray(childProps.children)
                .filter((c) => typeof c === 'string' || typeof c === 'number')
                .join('');
            }
          }
          return '';
        })
        .join(' ')
        .trim();
  
  const words = textContent.split(/\s+/).filter(word => word.length > 0);

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
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
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
