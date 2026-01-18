'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function InteriorHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="flex items-center max-w-[1440px] mx-auto justify-between px-6 py-4 relative">
                {/* Hamburger menu on the left */}
                <button
                    className="flex flex-col justify-center items-center w-10 h-10"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(true)}
                >
                    <span className="block w-6 h-0.5 bg-white mb-1.5 rounded"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1.5 rounded"></span>
                    <span className="block w-6 h-0.5 bg-white rounded"></span>
                </button>

                {/* Centered Logo */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Link href="/">
                        <Image
                            src="/logo/main_logo.png"
                            alt="Verunia"
                            width={100}
                            height={100}
                            className="w-10 h-10 object-contain"
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
                        <Link href="/" onClick={() => setMenuOpen(false)} className="text-white text-xl font-semibold transition-colors hover:text-gray-300">
                            Home
                        </Link>
                        <Link href="/interior" onClick={() => setMenuOpen(false)} className="text-white text-xl font-semibold transition-colors hover:text-gray-300">
                            V Interior
                        </Link>
                        <Link href="/furniture" onClick={() => setMenuOpen(false)} className="text-white text-xl font-semibold transition-colors hover:text-gray-300">
                            V-Furnitures
                        </Link>
                        <Link href="/ai-fotivo" onClick={() => setMenuOpen(false)} className="text-white text-xl font-semibold transition-colors hover:text-gray-300">
                            Al Fotivo
                        </Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)} className="text-white text-xl font-semibold transition-colors hover:text-gray-300">
                            About
                        </Link>
                        <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-white text-xl font-semibold transition-colors hover:text-gray-300">
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}