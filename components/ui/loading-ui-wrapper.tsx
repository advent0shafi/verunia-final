"use client"
import { createContext, useEffect, useState } from "react";
import LoadingThumbnail from "./loading-thumbnail";
import { motion, AnimatePresence } from "motion/react";

export const LoadingContext = createContext({ isLoading: true });

export default function LoadingUIWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let mounted = true;
        const startedAt = performance.now();
        const minVisibleMs = 900;
        const maxVisibleMs = 2600;

        const finishLoading = () => {
            if (!mounted) return;
            const elapsed = performance.now() - startedAt;
            const remaining = Math.max(0, minVisibleMs - elapsed);
            window.setTimeout(() => {
                if (mounted) setIsLoading(false);
            }, remaining);
        };

        const maxTimer = window.setTimeout(() => {
            if (mounted) setIsLoading(false);
        }, maxVisibleMs);

        if (document.readyState === "complete") {
            finishLoading();
        } else {
            window.addEventListener("load", finishLoading, { once: true });
        }

        return () => {
            mounted = false;
            window.removeEventListener("load", finishLoading);
            window.clearTimeout(maxTimer);
        };
    }, [])

    return (
        <LoadingContext.Provider value={{ isLoading }}>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="loading-wrapper"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, filter: "blur(4px)" }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[9999]"
                    >
                        <LoadingThumbnail />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </LoadingContext.Provider>
    )
}