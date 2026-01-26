"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";

interface MaskTextRevealProps {
    children: string | string[];
    className?: string;
    phraseClassName?: string;
}

export function MaskTextReveal({ children, className, phraseClassName }: MaskTextRevealProps) {
    const body = useRef(null);
    const isInView = useInView(body, { once: true, margin: "-10%" });

    const animation: Variants = {
        initial: { y: "100%" },
        enter: (i: number) => ({
            y: "0",
            transition: {
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.075 * i,
            },
        }),
    };

    const phrases = Array.isArray(children) ? children : [children];

    return (
        <div ref={body} className={className}>
            {phrases.map((phrase, index) => {
                return (
                    <div key={index} className="overflow-hidden">
                        <motion.div
                            custom={index}
                            variants={animation}
                            initial="initial"
                            animate={isInView ? "enter" : ""}
                            className={phraseClassName}
                        >
                            {phrase}
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}
