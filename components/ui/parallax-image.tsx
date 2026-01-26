"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useRef, useState, useEffect } from "react";

interface ParallaxImageProps extends Omit<ImageProps, "className"> {
    containerClassName?: string;
    imageClassName?: string;
    parallaxAmount?: number; // How many pixels to move. Default 100
}

export function ParallaxImage({
    src,
    alt,
    containerClassName = "",
    imageClassName = "",
    parallaxAmount = 100,
    ...props
}: ParallaxImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Calculate movement range
    // Initially (at start of viewport), image is shifted UP (-amount)
    // At end of viewport, image is shifted DOWN (+amount)
    // This creates a "slower" scroll effect relative to the page.
    const y = useTransform(scrollYProgress, [0, 1], [-parallaxAmount, parallaxAmount]);

    // Optional: add spring physics for extra smoothness (inertia)
    const springY = useSpring(y, { stiffness: 400, damping: 90 });

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${containerClassName}`}
        >
            <motion.div
                style={{ y: springY }}
                className={`h-[120%] w-full relative -top-[10%] ${imageClassName}`}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    {...props}
                />
            </motion.div>
        </div>
    );
}
