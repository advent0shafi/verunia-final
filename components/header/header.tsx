"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <header className="flex  items-center justify-between max-w-[1440px]  mx-auto py-4 px-4 md:px-6">
        <Link href="/">
          <Image
            src="/logo/main_logo.png"
            alt="Verunia"
            width={100}
            height={100}
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
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-header-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/60 flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex justify-end p-6">
            <button
              type="button"
              className="text-white text-3xl leading-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
          </div>

          <nav
            id="mobile-header-menu"
            className="flex flex-col items-center justify-center flex-1 gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/interior"
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-semibold transition-colors hover:text-gray-300"
            >
              V Interior
            </Link>
            <Link
              href="/furniture"
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-semibold transition-colors hover:text-gray-300"
            >
              V-Furnitures
            </Link>
            <Link
              href="/ai-fotivo"
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-semibold transition-colors hover:text-gray-300"
            >
              Al Fotivo
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-semibold transition-colors hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-semibold transition-colors hover:text-gray-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}