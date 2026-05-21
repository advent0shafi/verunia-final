"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionContainer from "../ui/section-container";
import { TextReveal } from "./animated-section";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  type ClientLogo,
  clientLogos,
  inferLogoFormat,
} from "@/data/client-logos";
import { cn } from "@/lib/utils";

function ClientLogoImage({ entry, className }: { entry: ClientLogo; className?: string }) {
  const fmt = entry.format ?? inferLogoFormat(entry.logoSrc);
  return (
    <Image
      src={entry.logoSrc}
      alt={entry.name}
      width={220}
      height={88}
      sizes="(min-width: 1024px) 200px, (min-width: 768px) 160px, 45vw"
      unoptimized={fmt === "svg"}
      className={cn(
        "h-10 w-auto max-h-14 max-w-[200px] object-contain object-center md:h-12",
        className,
      )}
    />
  );
}

export default function Sections05() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const autoPlay = window.setInterval(() => {
      api.scrollNext();
    }, 2200);

    return () => window.clearInterval(autoPlay);
  }, [api]);

  return (
    <SectionContainer>
      <div className="w-full">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2
            className="text-black font-helvetica font-normal not-italic align-middle
              text-[32px] leading-[40px] tracking-[-0.02em]
              md:text-[48px] md:leading-[60px]"
          >
            <TextReveal>Our clients.</TextReveal>
          </h2>
          <p className="mt-4 md:mt-6 font-instrument font-normal not-italic text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-normal text-[#57534E] max-w-xl">
            <TextReveal>
              From hospitality and corporate programmes to private homes, we partner with teams who expect clarity, craft and delivery at scale.
            </TextReveal>
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              duration: 35,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {clientLogos.map((entry) => (
                <CarouselItem
                  key={entry.id}
                  className="pl-3 md:pl-4 basis-[min(100%,280px)] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="flex h-[104px] md:h-[120px] items-center justify-center px-5 py-6">
                    <ClientLogoImage entry={entry} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <Image
        src="/ui/divider-sections.svg"
        alt="Verunia Group"
        width={1000}
        height={1000}
        sizes="100vw"
        unoptimized
        className="w-full h-full object-cover py-[60px] md:py-[112px] md:block hidden"
      />
      <Image
        src="/ui/gold-divider-mobile.svg"
        alt="Verunia Group"
        width={1000}
        height={1000}
        sizes="100vw"
        unoptimized
        className="w-full h-full object-cover pt-[64px] md:py-[112px] md:hidden block"
      />
    </SectionContainer>
  );
}
