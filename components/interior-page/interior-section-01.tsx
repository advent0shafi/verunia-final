'use client'

import { ImageReveal } from "@/components/home/animated-section";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { InteriorProjectUI } from "@/lib/mapInteriors";
import interior01 from "@/public/interior-page/image-interior-02.png";
import interior02 from "@/public/interior-page/image-interior-03.png";
import interior04 from "@/public/interior-page/image-interior-040.png";
import { useRouter } from "next/navigation";
import React from "react";
import { motion, AnimatePresence } from "motion/react";

/** One full loop through hover gallery repeats every 3s while pointer is over the card. */
const HOVER_GALLERY_CYCLE_MS = 3000;

type InteriorImageCardProps = {
    src: StaticImageData | string;
    alt: string;
    number: string;
    title: string;
    year?: string;
    place?: string;
    minHeight?: string;
    maxHeight?: string;
    galleryImages?: string[];
    onClickUrl?: string;
};

export function InteriorImageCard({
    src,
    alt,
    number,
    title,
    year = "2024",
    place = "HolidayInn",
    minHeight = "min-h-[300px] md:min-h-[671px]",
    maxHeight = "",
    galleryImages,
    onClickUrl = "/interior/project/holiday-inn"
}: InteriorImageCardProps) {
    const router = useRouter();

    const [displaySrc, setDisplaySrc] = React.useState<StaticImageData | string>(src);
    const hoverIntervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

    React.useEffect(() => {
        setDisplaySrc(src);
        if (hoverIntervalRef.current != null) {
            clearInterval(hoverIntervalRef.current);
            hoverIntervalRef.current = null;
        }
    }, [src]);

    React.useEffect(() => {
        return () => {
            if (hoverIntervalRef.current != null) {
                clearInterval(hoverIntervalRef.current);
                hoverIntervalRef.current = null;
            }
        };
    }, []);

    const handleClick = React.useCallback(() => {
        if (onClickUrl) {
            router.push(onClickUrl);
        }
    }, [onClickUrl, router]);

    const handleMouseLeave = React.useCallback(() => {
        if (hoverIntervalRef.current != null) {
            clearInterval(hoverIntervalRef.current);
            hoverIntervalRef.current = null;
        }
        setDisplaySrc(src);
    }, [src]);

    const handleMouseEnter = React.useCallback(() => {
        const list = galleryImages?.filter(Boolean) ?? [];
        if (!list.length) return;

        if (hoverIntervalRef.current != null) {
            clearInterval(hoverIntervalRef.current);
            hoverIntervalRef.current = null;
        }

        let idx = list.length > 1 ? 1 : 0;
        setDisplaySrc(list[idx] || src);
        // Slower interval for premium feel
        const stepMs = 2500;

        hoverIntervalRef.current = setInterval(() => {
            idx = (idx + 1) % list.length;
            setDisplaySrc(list[idx] || src);
        }, stepMs);
    }, [galleryImages, src]);

    const currentSrc = displaySrc || src;

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") handleClick();
            }}
            className={`cursor-pointer w-full overflow-hidden outline-none relative ${minHeight} ${maxHeight}`}
            aria-label={alt}
        >
            <ImageReveal
                className={[
                    "relative block w-full overflow-hidden shrink-0",
                    "h-[500px] md:h-[671px]",
                    maxHeight,
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                <div className="absolute inset-0 bg-[#171412]">
                    <AnimatePresence>
                        <motion.div
                            key={typeof currentSrc === 'string' ? currentSrc : currentSrc.src}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={currentSrc}
                                alt={alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 55vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </ImageReveal>
            <div
                className={`
                    absolute z-10
                    top-[6px] md:top-[14px] 
                    right-1/2 translate-x-1/2 md:right-[14px] md:translate-x-0
                    bg-white rounded-[4px] opacity-100 flex gap-3 py-4 px-6 pointer-events-none
                `}
                style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.05)" }}
            >
                <div>
                    <span className="inline-block w-[10px] h-[10px] bg-[#271E07] rounded-[30px] opacity-100" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2">
                            <span className="font-instrument md:min-w-80 min-w-[250px] font-bold text-[14px] leading-[20px] tracking-normal align-middle text-[#222]">
                                {title}
                            </span>
                        </div>
                        <span className="font-instrument font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#271E07] pl-4 border-l border-[#271E07]">
                            {number}
                        </span>
                    </div>
                    <div className="border-b border-[#271E07]" />
                    <div className="flex items-center gap-2 relative  z-10">
                        <span className="font-instrument font-normal font-italic text-[14px] leading-[20px] tracking-normal align-middle text-[#454545]">{year}</span>
                        <span className="font-instrument font-normal not-italic text-[14px] leading-[20px] tracking-normal align-middle text-[#454545]">{place}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function InteriorSection01({ projects = [] }: { projects?: InteriorProjectUI[] }) {
    // We fall back to hardcoded data if API data is not available, to avoid empty spaces
    const proj1 = projects[0];
    const proj2 = projects[1];
    const proj3 = projects[2];

    return (
        <section className="items-center bg-[#171412] flex flex-col justify-center px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-[1440px]  h-full max-md:max-w-full py-8 md:py-10 relative overflow-hidden">
                <div className="w-full h-full flex flex-col md:flex-row ">
                    <div className="w-full md:w-[45%]  p-2 md:p-4 pl-0 ">
                        <InteriorImageCard
                            src={proj1?.mainImage || interior01}
                            alt={proj1?.title || "Interior Section 01"}
                            title={proj1?.title || "HolidayInn"}
                            number="01"
                            galleryImages={proj1?.galleryImages}
                            onClickUrl={proj1 ? `/interior/project/${proj1.slug}` : "/"}
                            year={proj1?.year || "2024"}
                            place={proj1?.place || "HolidayInn"}
                        />
                    </div>
                    <div className="w-full md:w-[55%]  p-2 md:p-4 pl-0 ">
                        <InteriorImageCard
                            src={proj2?.mainImage || interior02}
                            alt={proj2?.title || "Interior"}
                            title={proj2?.title || "HolidayInn"}
                            number="02"
                            galleryImages={proj2?.galleryImages}
                            onClickUrl={proj2 ? `/interior/project/${proj2.slug}` : undefined}
                            year={proj2?.year || undefined}
                            place={proj2?.place || undefined}
                        />
                    </div>
                </div>
                <div className="w-full md:w-full  p-2 md:px-4 pb-4 pl-0 ">
                    <InteriorImageCard
                        src={proj3?.mainImage || interior04}
                        alt={proj3?.title || "Interior Section 01"}
                        title={proj3?.title || "HolidayInn"}
                        number="03"
                        maxHeight="max-h-[500px] md:max-h-[671px]"
                        galleryImages={proj3?.galleryImages}
                        onClickUrl={proj3 ? `/interior/project/${proj3.slug}` : undefined}
                        year={proj3?.year || undefined}
                        place={proj3?.place || undefined}
                    />
                </div>
            </div>
        </section>
    );
}
