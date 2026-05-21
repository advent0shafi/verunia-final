"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "motion/react";

import img1 from "@/public/interior-page/image-interior-01.png";
import img2 from "@/public/interior-page/image-interior-02.png";
import img3 from "@/public/interior-page/image-interior-03.png";
import img0 from "@/public/interior-page/image-interior-00.png";

const IMAGES: StaticImageData[] = [img1, img2, img3, img0];

export default function InteriorHeroPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
        }, 5000); // 5 seconds per slide
        
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="bg-[#171412] w-full h-screen relative overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: 6.5, ease: "easeOut" }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={IMAGES[currentIndex]}
                        alt={`Interior Hero Slider Image ${currentIndex + 1}`}
                        fill
                        sizes="100vw"
                        priority={currentIndex === 0}
                        placeholder="blur"
                        quality={82}
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>
            
            {/* Subtle dark overlay to ensure premium feel and readability if text is added later */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />
        </main>
    );
}