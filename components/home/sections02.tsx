"use client";

import Link from "next/link";
import SectionContainer from "../ui/section-container";
import Image from "next/image";
import { TextReveal, ImageReveal } from "./animated-section";
import AnimatedSection from "./animated-section";

import img01 from "@/public/hero-image/image-01.png";
import img02 from "@/public/hero-image/image-02.png";
import img03 from "@/public/hero-image/image-03.png";

export default function Sections02() {
  return (
    <SectionContainer >
      <div className="">
        <h2
          className="text-black font-fraunces font-normal not-italic text-[32px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[56px] lg:leading-[64px] [-letter-spacing:--0.02em] align-middle"
        >
          <TextReveal>Three expert brands.</TextReveal>
          <br />
          <TextReveal>One Verunia vision.</TextReveal>
        </h2>
        <div className="pt-10 md:pt-20 w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="w-full ">
              <p className="font-instrument font-normal not-italic text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-normal align-middle text-[#57534E] max-w-md">
                <TextReveal>Verunia Group brings together specialist brands in office furniture, interior design and luxury interiors. From corporate workspaces to private residences and flagship destinations, we design, supply and deliver spaces with a consistent standard of quality.</TextReveal>
              </p>
              <Link href="/interior" className="mt-4 md:mt-6 border-t w-full border-b text-start py-3 border-[#523E0F] text-[#523E0F] block hover:bg-[#523E0F]/5 transition-colors">
                <TextReveal>Enter Verunia Interiors →</TextReveal>
              </Link>
            </div>
            <div className="w-full ">
              <div className="flex flex-col gap-[16px]">
                <AnimatedSection variant="parallax">
                  <div className="min-h-[180px] md:min-h-[231px] overflow-hidden">
                    <ImageReveal>
                      <Image
                        src={img01}
                        alt="Luxury leather furniture detail"
                        width={900}
                        height={650}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw"
                        placeholder="blur"
                        quality={82}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-h-[180px] md:min-h-[231px]"
                      />
                    </ImageReveal>
                  </div>
                </AnimatedSection>
                <AnimatedSection variant="parallax">
                  <div className="min-h-[180px] md:min-h-[231px] overflow-hidden">
                    <ImageReveal>
                      <Image
                        src={img02}
                        alt="Tufted leather chair"
                        width={900}
                        height={650}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw"
                        placeholder="blur"
                        quality={82}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-h-[180px] md:min-h-[231px]"
                      />
                    </ImageReveal>
                  </div>
                </AnimatedSection>
                <AnimatedSection variant="parallax">
                  <div className="min-h-[180px] md:min-h-[231px] overflow-hidden">
                    <ImageReveal>
                      <Image
                        src={img03}
                        alt="Leather material samples"
                        width={900}
                        height={650}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw"
                        placeholder="blur"
                        quality={82}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-h-[180px] md:min-h-[231px]"
                      />
                    </ImageReveal>
                  </div>
                </AnimatedSection>
              </div>
            </div>
            <div className="w-full pt-0 md:pt-0 lg:pt-[140px] flex flex-col gap-[16px] justify-end md:gap-[20px] 0">
              <div className="rounded-md border border-[#D4A853] p-3 md:p-4 min-h-[130px] md:min-h-[150px]">
                <div className="flex items-center gap-0 px-3 md:px-6 border-b border-[#D4A853] py-2.5 md:py-3.5">
                  <span className="text-[#57534E] font-instrument font-bold text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal align-middle pr-3 md:pr-5">01</span>
                  <div className="w-px h-5 bg-[#D4A853] mr-3 md:mr-5"></div>
                  <h3 className="text-[#1a1a1a] font-instrument font-medium text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal align-middle">
                    <TextReveal>Integrated offering</TextReveal>
                  </h3>
                </div>
                <p className="font-instrument font-normal not-italic text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-normal text-center align-middle text-[#57534E] px-3 md:px-6 py-2">
                  <TextReveal>Furniture, interiors and luxury</TextReveal>
                  <br />
                  <TextReveal>solutions within one group.</TextReveal>
                </p>
              </div>
              <div className="rounded-md border border-[#D4A853] p-3 md:p-4 min-h-[130px] md:min-h-[150px]">
                <div className="flex items-center gap-0 px-3 md:px-6 border-b border-[#D4A853] py-2.5 md:py-3.5">
                  <span className="text-[#57534E] font-instrument font-bold text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal align-middle pr-3 md:pr-5">02</span>
                  <div className="w-px h-5 bg-[#D4A853] mr-3 md:mr-5"></div>
                  <h3 className="text-[#1a1a1a] font-instrument font-medium text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal align-middle">
                    <TextReveal>Consistent quality</TextReveal>
                  </h3>
                </div>
                <p className="font-instrument font-normal not-italic text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-normal text-center align-middle text-[#57534E] px-3 md:px-6 py-2">
                  <TextReveal>Shared standards in design, materials and installation.</TextReveal>
                </p>
              </div>
              <div className="rounded-md border border-[#D4A853] p-3 md:p-4 min-h-[130px] md:min-h-[150px]">
                <div className="flex items-center gap-0 px-3 md:px-6 border-b border-[#D4A853] py-2.5 md:py-3.5">
                  <span className="text-[#57534E] font-instrument font-bold text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal align-middle pr-3 md:pr-5">03</span>
                  <div className="w-px h-5 bg-[#D4A853] mr-3 md:mr-5"></div>
                  <h3 className="text-[#1a1a1a] font-instrument font-medium text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal align-middle">
                    <TextReveal>Built around you</TextReveal>
                  </h3>
                </div>
                <p className="font-instrument font-normal not-italic text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-normal text-center align-middle text-[#57534E] px-3 md:px-6 py-2">
                  <TextReveal>Solutions tailored to your space, budget and programme.</TextReveal>
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
   

      {/* Bottom Logo */}
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