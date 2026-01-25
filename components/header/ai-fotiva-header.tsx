'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AiFotivaHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="flex items-center max-w-[1440px] mx-auto justify-between px-6 py-4 relative">
                {/* Hamburger menu on the left */}
                <button
                    className="flex flex-col justify-center  w-10 h-10 order-1 md:order-0"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(true)}
                >
                    <span className="block w-8 h-0.5 bg-white mb-1.5 rounded" />
          <span className="block w-8 h-0.5 bg-white mb-1.5 rounded" />
          <span className="block w-4 h-0.5 bg-white rounded" />
                </button>

                {/* Centered Logo */}
                <div className="md:absolute md:left-1/2 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2">
                    <Link href="/">
                        <Image
                            src="/logo/ai-fotiva-logo.svg"
                            alt="Verunia"
                            width={100}
                            height={100}
                            className="w-10 h-[48px] object-contain"
                        />
                    </Link>
                </div>
            </div>

            {/* Hamburger menu opening overlay */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex flex-col">
                    <div className="flex justify-end p-6">
                        <button
                            className="text-white text-2xl"
                            aria-label="Close menu"
                            onClick={() => setMenuOpen(false)}
                        >
                            &times;
                        </button>
                    </div>

                    <nav className="flex flex-col items-center justify-center flex-1 gap-6">
                        <Link href="/" onClick={() => setMenuOpen(false)} className="text-white font-fraunces  font-medium font-fra text-[48px] leading-[60px] [-letter-spacing:-0.02em]  font-fraunces transition-colors hover:text-gray-300 block">
                            Home
                        </Link>
                        <Link href="/interior" onClick={() => setMenuOpen(false)} className="text-white font-fraunces  font-medium font-fra text-[48px] leading-[60px] [-letter-spacing:-0.02em]  font-fraunces transition-colors hover:text-gray-300 block">
                            V Interior
                        </Link>
                        <Link href="/furniture" onClick={() => setMenuOpen(false)} className="text-white font-fraunces  font-medium font-fra text-[48px] leading-[60px] [-letter-spacing:-0.02em]  font-fraunces transition-colors hover:text-gray-300 block">
                            V-Furnitures
                        </Link>
                        <Link href="/ai-fotivo" onClick={() => setMenuOpen(false)} className="text-white font-fraunces  font-medium font-fra text-[48px] leading-[60px] [-letter-spacing:-0.02em]  font-fraunces transition-colors hover:text-gray-300 block">
                            Al Fotivo
                        </Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)} className="text-white font-fraunces  font-medium font-fra text-[48px] leading-[60px] [-letter-spacing:-0.02em]  font-fraunces transition-colors hover:text-gray-300 block">
                            About
                        </Link>
                        <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-white font-fraunces  font-medium font-fra text-[48px] leading-[60px] [-letter-spacing:-0.02em]  font-fraunces transition-colors hover:text-gray-300 block">
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}