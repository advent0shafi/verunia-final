 "use client";

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react";
import veruniaThumbnailLogo from "@/public/logo/verunia-thumbnail-logo.svg"
export default function LoadingThumbnail() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="w-full h-full bg-[#FFFDFA] flex justify-center items-center fixed top-0 left-0 z-[9999]">
            <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
                animate={
                    prefersReducedMotion
                        ? {}
                        : {
                            opacity: 1,
                            scale: [0.98, 1.02, 1],
                        }
                }
                transition={
                    prefersReducedMotion
                        ? { duration: 0 }
                        : {
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                            times: [0, 0.6, 1],
                        }
                }
                className="h-screen w-screen flex justify-center items-center"
            >
                <Image
                    src={veruniaThumbnailLogo}
                    alt="Loading Thumbnail"
                    width={300}
                    height={300}
                    className="md:max-w-[300px] md:max-h-[300px] max-w-[100px] max-h-[100px] object-contain"
                    priority
                    quality={100}
                />
            </motion.div>
        </div>
    )
}