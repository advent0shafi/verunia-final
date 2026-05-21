'use client';
import Image from "next/image"
import { ImageReveal } from "@/components/home/animated-section";
import interior00 from "@/public/interior-page/image-interior-00.png";
import interior05 from "@/public/interior-page/image-interior-05.png";
import interior06 from "@/public/interior-page/image-interior-06.png";
import interior07 from "@/public/interior-page/image-interior-07.png";
import interior08 from "@/public/interior-page/image-interior-08.png";
import interior09 from "@/public/interior-page/image-interior-09.png";
import { StaticImageData } from "next/image";

type InteriorImageCardProps = {
    src: StaticImageData | string;
    alt: string;
    number: string;
    year?: string;
    place?: string;
    height?: number;
    width?: number;
    minHeight?: string;
    maxHeight?: string;
    galleryImages?: string[];
    onClickUrl?: string;
};

import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

function InteriorImageCard({
    src,
    alt,
    number,
    year = "2024",
    place = "HolidayInn",
    height = 1000,
    width = 1000,
    minHeight = "min-h-[300px] md:min-h-[671px]",
    maxHeight = "",
    galleryImages,
    onClickUrl,
}: InteriorImageCardProps) {
    const router = useRouter();

    const [displaySrc, setDisplaySrc] = useState<StaticImageData | string>(src);
    const hoverIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        setDisplaySrc(src);
        if (hoverIntervalRef.current != null) {
            clearInterval(hoverIntervalRef.current);
            hoverIntervalRef.current = null;
        }
    }, [src]);

    useEffect(() => {
        return () => {
            if (hoverIntervalRef.current != null) {
                clearInterval(hoverIntervalRef.current);
                hoverIntervalRef.current = null;
            }
        };
    }, []);

    const handleClick = useCallback(() => {
        if (onClickUrl) {
            router.push(onClickUrl);
        }
    }, [onClickUrl, router]);

    const handleMouseLeave = useCallback(() => {
        if (hoverIntervalRef.current != null) {
            clearInterval(hoverIntervalRef.current);
            hoverIntervalRef.current = null;
        }
        setDisplaySrc(src);
    }, [src]);

    const handleMouseEnter = useCallback(() => {
        const list = galleryImages?.filter(Boolean) ?? [];
        if (!list.length) return;

        if (hoverIntervalRef.current != null) {
            clearInterval(hoverIntervalRef.current);
            hoverIntervalRef.current = null;
        }

        let idx = list.length > 1 ? 1 : 0;
        setDisplaySrc(list[idx] || src);
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
            className={`cursor-pointer w-full h-full object-cover ${minHeight} ${maxHeight} relative outline-none`}
            aria-label={alt}
        >
            <ImageReveal className={`w-full h-full ${minHeight} ${maxHeight}`}>
                <div className="absolute inset-0 bg-[#171412] w-full h-full overflow-hidden">
                    <AnimatePresence>
                        <motion.div
                            key={typeof currentSrc === 'string' ? currentSrc : currentSrc.src}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={currentSrc}
                                alt={alt}
                                width={width}
                                height={height}
                                className={`w-full md:h-full h-[500px] object-cover`}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </ImageReveal>
            <div
                className={`
                    absolute 
                    top-[6px] md:top-[14px] 
                    right-1/2 translate-x-1/2 md:right-[14px] md:translate-x-0
                    bg-white rounded-[4px] opacity-100 flex gap-3 py-4 px-6
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
                                {place || "Sapphire House, Belgium"}
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

import { InteriorProjectUI } from "@/lib/mapInteriors";

export default function InteriorSection03({ projects = [] }: { projects?: InteriorProjectUI[] }) {
    const proj1 = projects[0];
    const proj2 = projects[1];
    const proj3 = projects[2];
    const proj4 = projects[3];
    const proj5 = projects[4];
    const proj6 = projects[5];

    return (
        <section className="items-center bg-[#171412] flex flex-col justify-center px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-[1440px] h-full max-md:max-w-full py-8 md:py-10 relative overflow-hidden">
                <div className="w-full md:w-full  p-2 md:px-4 pb-4 pl-0 ">
                    <InteriorImageCard
                        src={proj1?.mainImage || interior00}
                        alt={proj1?.title || "Interior Section 03 Card 3"}
                        number="03"
                        height={671}
                        maxHeight="max-h-[500px] md:max-h-[671px]"
                        galleryImages={proj1?.galleryImages}
                        onClickUrl={proj1 ? `/interior/project/${proj1.slug}` : undefined}
                        year={proj1?.year || undefined}
                        place={proj1?.title || undefined}
                    />
                </div>
                <div className="w-full h-full flex flex-col md:flex-row ">
                    <div className="w-full md:w-[45%]  p-2 md:p-4 pl-0 ">
                        <InteriorImageCard
                            src={proj2?.mainImage || interior05}
                            alt={proj2?.title || "Interior Section 03 Card 1"}
                            number="01"
                            galleryImages={proj2?.galleryImages}
                            onClickUrl={proj2 ? `/interior/project/${proj2.slug}` : undefined}
                            year={proj2?.year || undefined}
                            place={proj2?.title || undefined}
                        />
                    </div>
                    <div className="w-full md:w-[55%]  p-2 md:p-4 pl-0 ">
                        <InteriorImageCard
                            src={proj3?.mainImage || interior06}
                            alt={proj3?.title || "Interior Section 03 Card 2"}
                            number="02"
                            galleryImages={proj3?.galleryImages}
                            onClickUrl={proj3 ? `/interior/project/${proj3.slug}` : undefined}
                            year={proj3?.year || undefined}
                            place={proj3?.title || undefined}
                        />
                    </div>
                </div>
                <div className="w-full md:w-full  p-2 md:px-4 pb-4 pl-0 ">
                    <InteriorImageCard
                        src={proj4?.mainImage || interior07}
                        alt={proj4?.title || "Interior Section 03 Card 3"}
                        number="03"
                        height={671}
                        maxHeight="max-h-[500px] md:max-h-[671px]"
                        galleryImages={proj4?.galleryImages}
                        onClickUrl={proj4 ? `/interior/project/${proj4.slug}` : undefined}
                        year={proj4?.year || undefined}
                        place={proj4?.title || undefined}
                    />
                </div>
               
            </div>
        </section>
    );
}