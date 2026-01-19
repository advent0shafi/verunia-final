"use client";

import { useState } from "react";
import Image from "next/image";
import SectionContainer from "../ui/section-container";
import { TextReveal, ImageReveal } from "./animated-section";
import AnimatedSection from "./animated-section";
import Link from "next/link";

// Hover Image Component
function HoverImage({ 
    defaultSrc, 
    hoverSrc, 
    alt, 
    width, 
    height, 
    sizes, 
    className 
}: { 
    defaultSrc: string; 
    hoverSrc: string; 
    alt: string; 
    width: number; 
    height: number; 
    sizes: string; 
    className: string;
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative w-full h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full h-full">
                <Image
                    src={defaultSrc}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes={sizes}
                    quality={82}
                    className={`${className} transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                />
                <Image
                    src={hoverSrc}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes={sizes}
                    quality={82}
                    className={`${className} absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
        </div>
    );
}

export default function Sections() {
    return (
        <SectionContainer>
            <div className="w-full h-full flex flex-col md:flex-row">
                <div className="w-full md:w-[35%] h-full order-2 md:order-1">
                    <div className="px-4 md:px-[48px] py-8 md:py-0">
                        <div>
                            <h1 className="mb-4 md:mb-6 font-normal text-[#523E0F] not-italic text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] [-letter-spacing:--0.02em] font-fraunces">
                                <TextReveal>Verunia</TextReveal> <br />
                                <TextReveal>Interiors</TextReveal>
                            </h1>
                        </div>
                        <div className="pt-4 md:pt-[277px]">
                            <p className="font-instrument font-normal not-italic text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal text-[#57534E] max-w-md">
                                <TextReveal>Interior design and fit-out for offices, hospitality and residential spaces.</TextReveal>
                            </p>
                            <Link href="/interior" className="mt-4 md:mt-6 border-t w-full border-b text-start py-3 border-[#523E0F] text-[#523E0F] block hover:bg-[#523E0F]/5 transition-colors">
                                <TextReveal>Enter Verunia Interiors →</TextReveal>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[65%] h-full order-1 md:order-2 group">
                    <AnimatedSection variant="parallax">
                        <ImageReveal>
                            <HoverImage
                                defaultSrc="/hero-image/image-03.png"
                                hoverSrc="/hero-image/image-01.png"
                                alt="Verunia Interiors"
                                width={926}
                                height={600}
                                sizes="(min-width: 768px) 65vw, 100vw"
                                className="w-full h-full object-cover min-h-[300px] md:min-h-[600px]"
                            />
                        </ImageReveal>
                    </AnimatedSection>
                </div>

            </div>

            <div className="w-full h-full flex flex-col md:flex-row py-[60px] md:py-[112px]">
            <div className="w-full md:w-[65%] h-full group">
                    <AnimatedSection variant="parallax">
                        <ImageReveal>
                            <HoverImage
                                defaultSrc="/hero-image/image-01.png"
                                hoverSrc="/hero-image/image-02.png"
                                alt="Verunia Furnitures"
                                width={926}
                                height={600}
                                sizes="(min-width: 768px) 65vw, 100vw"
                                className="w-full h-full object-cover min-h-[300px] md:min-h-[600px]"
                            />
                        </ImageReveal>
                    </AnimatedSection>
                </div>
                <div className="w-full md:w-[35%] h-full">
                    <div className="px-4 md:px-[48px] py-8 md:py-0">
                        <div>
                            <h1 className="mb-4 md:mb-6 font-normal text-[#523E0F] not-italic text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] [-letter-spacing:--0.02em] font-fraunces">
                                <TextReveal>Verunia</TextReveal>
                                <br />
                                <TextReveal>Furnitures</TextReveal>
                            </h1>
                        </div>
                        <div className="pt-4 md:pt-[277px]">
                            <p className="font-instrument font-normal not-italic text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal text-[#57534E] max-w-md">
                                <TextReveal>Office furniture systems and seating for modern workplaces.</TextReveal>
                            </p>
                            <Link href="/furniture" className="mt-4 md:mt-6 border-t w-full border-b text-start py-3 border-[#523E0F] text-[#523E0F] block hover:bg-[#523E0F]/5 transition-colors">
                                <TextReveal>Enter Verunia Furnitures →</TextReveal>
                            </Link>

                        </div>
                    </div>
                </div>
              

            </div>
            <div className="w-full h-full flex flex-col md:flex-row">
                <div className="w-full md:w-[35%] h-full order-2 md:order-1">
                    <div className="px-4 md:px-[48px] py-8 md:py-0">
                        <div>
                            <h1 className="mb-4 md:mb-6 font-normal text-[#523E0F] not-italic text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] [-letter-spacing:--0.02em] font-fraunces">
                                <TextReveal>Al Fotivo</TextReveal>
                            
                            </h1>
                            <p className="font-instrument font-normal not-italic text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal text-[#57534E] max-w-md">

                                <TextReveal>Luxury interiors and furniture</TextReveal>
                            </p>
                        </div>
                        <div className="pt-4 md:pt-[277px]">
                            <p className="font-instrument font-normal not-italic text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal text-[#57534E] max-w-md">
                                <TextReveal>Interior design and fit-out for offices, hospitality and residential spaces.</TextReveal>
                            </p>
                            <Link href="/interior" className="mt-4 md:mt-6 border-t w-full border-b text-start py-3 border-[#523E0F] text-[#523E0F] block hover:bg-[#523E0F]/5 transition-colors">
                                <TextReveal>Enter Verunia Interiors →</TextReveal>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[65%] h-full order-1 md:order-2 group">
                    <AnimatedSection variant="parallax">
                        <ImageReveal>
                            <HoverImage
                                defaultSrc="/hero-image/image-04.png"
                                hoverSrc="/hero-image/image-03.png"
                                alt="Verunia Interiors"
                                width={926}
                                height={600}
                                sizes="(min-width: 768px) 65vw, 100vw"
                                className="w-full h-full object-cover min-h-[300px] md:min-h-[600px]"
                            />
                        </ImageReveal>
                    </AnimatedSection>
                </div>

            </div>
            <Image
              src="/ui/divider-sections.svg"
              alt="Verunia Group"
              width={1000}
              height={1000}
              sizes="100vw"
              unoptimized
              className="w-full h-full object-cover py-[60px] md:py-[112px]"
            />

          
        </SectionContainer>
    )
}