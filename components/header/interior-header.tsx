"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export default function InteriorHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const mobileLinks = [
    { href: "/", label: "Home" },
    { href: "/interior", label: "V Interior" },
    { href: "/furniture", label: "V-Furnitures" },
    { href: "/ai-fotivo", label: "Al Fotivo" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Awwwards-like easing used in Olivier LaRose's nav-menu demo
  const awTransition = prefersReducedMotion
    ? ({ duration: 0 } as const)
    : ({ duration: 1, ease: [0.76, 0, 0.24, 1] as const } as const);

  const backdrop = {
    initial: { opacity: 0 },
    open: { opacity: 1, transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.35 } },
    closed: { opacity: 0, transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.35 } },
  } as const;

  const menuPanel = {
    initial: { height: 0 },
    open: { height: "100vh", transition: awTransition },
    closed: { height: 0, transition: awTransition },
  } as const;

  const itemTranslate = {
    initial: { y: "100%", opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 1, ease: [0.76, 0, 0.24, 1] as const, delay: 0.12 + i * 0.06 },
    }),
    closed: (i: number) => ({
      y: "100%",
      opacity: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : {
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1] as const,
          delay: (mobileLinks.length - 1 - i) * 0.03,
        },
    }),
  } as const;

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center max-w-[1440px] mx-auto justify-between px-6 py-4  relative">
        {/* Hamburger menu (same as initial layout; visible on desktop too) */}
        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 relative w-8 h-8  order-1 md:order-0"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-interior-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            className="w-8 h-0.5 bg-white absolute"
            animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.span
            className="w-8 h-0.5 bg-white absolute"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.span
            className="w-4 h-0.5 bg-white absolute"
            animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </button>

        {/* Centered Logo */}
        <div className="md:absolute md:left-1/2 md:top-1/2  md:-translate-x-1/2 md:-translate-y-1/2">
          <Link href="/">
            <Image
              src="/logo/main_logo.png"
              alt="Verunia"
              width={100}
              height={100}
              sizes="40px"
              className="w-10 h-[48px] object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right spacer (keeps layout balanced) */}
        <div className="w-10 h-10" aria-hidden="true" />
      </div>

      {/* Mobile Menu Overlay (Awwwards-style height reveal + link text reveal) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-60"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            initial={prefersReducedMotion ? false : "initial"}
            animate="open"
            exit="closed"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40"
              variants={backdrop}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-down panel (height reveal) */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#171412] overflow-hidden flex flex-col"
              variants={menuPanel}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-6">
                <motion.button
                  type="button"
                  className="text-white text-3xl leading-none w-10 h-10 flex items-center justify-center"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                >
                  &times;
                </motion.button>
              </div>

              <nav
                id="mobile-interior-menu"
                className="flex flex-col items-center justify-center flex-1 gap-6 pb-10"
              >
                {mobileLinks.map((item, i) => (
                  <div key={item.href} className="overflow-hidden">
                    <motion.div custom={i} variants={itemTranslate}>

                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-white font-fraunces  font-medium font-fra text-[48px] leading-[60px] [-letter-spacing:-0.02em]  font-fraunces transition-colors hover:text-gray-300 block"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}