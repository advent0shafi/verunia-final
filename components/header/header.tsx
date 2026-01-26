"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

import mainLogo from "@/public/logo/main_logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
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
    const handleScroll = () => {
      setScrolled(typeof window !== 'undefined' && window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Set initial, in case mounted mid-scroll
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
    >
      <header className="flex  items-center justify-between max-w-[1440px]  mx-auto py-4 px-4 md:px-6">
        <Link href="/">
          <Image
            src={mainLogo}
            alt="Verunia"
            width={100}
            height={100}
            sizes="40px"
            priority
            className="w-10 h-10 object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/interior"
              className="hover:text-gray-500 font-instrument text-[16px] font-medium"
            >
              V Interior
            </Link>
            <Link
              href="/furniture"
              className="hover:text-gray-500 font-instrument text-[16px] font-medium"
            >
              V-Furnitures
            </Link>
            <Link
              href="/ai-fotivo"
              className="hover:text-gray-500 font-instrument text-[16px] font-medium"
            >
              Al Fotivo
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-500 font-instrument text-[16px] font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-500 font-instrument text-[16px] font-medium"
            >
              Contact
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2 relative w-8 h-8 justify-center items-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-header-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              className="w-6 h-0.5 bg-black absolute"
              animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.span
              className="w-6 h-0.5 bg-black absolute"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.span
              className="w-6 h-0.5 bg-black absolute"
              animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0  md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            initial={prefersReducedMotion ? false : "initial"}
            animate="open"
            exit="closed"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute z-90 inset-0 "
              variants={backdrop}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-down panel (height reveal) */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#171412] z-90 overflow-hidden flex flex-col"
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
                id="mobile-header-menu"
                className="flex flex-col items-center justify-center flex-1 gap-6 pb-10"
              >
                {mobileLinks.map((item, i) => (
                  <div key={item.href} className="overflow-hidden">
                    <motion.div custom={i} variants={itemTranslate}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-white font-fraunces  font-medium  text-[48px] leading-[60px] [-letter-spacing:-0.02em]  transition-colors hover:text-gray-300 block"
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
    </div>
  );
}