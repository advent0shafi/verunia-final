"use client"
import { createContext, useEffect, useState } from "react";
import LoadingThumbnail from "./loading-thumbnail";
import { motion, AnimatePresence } from "motion/react";

export const LoadingContext = createContext({ isLoading: true });

export default function LoadingUIWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <LoadingContext.Provider value={{ isLoading }}>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="loading-wrapper"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
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