"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TextReveal } from "@/components/home/animated-section";
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
        "h-9 w-auto max-h-14 max-w-[200px] object-contain object-center md:h-11",
        className
      )}
    />
  );
}

export default function AiFotivoClients() {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api || isHovered) return;

    const autoPlay = window.setInterval(() => {
      api.scrollNext();
    }, 2200);

    return () => window.clearInterval(autoPlay);
  }, [api, isHovered]);

  return (
    <section className="bg-[#171412] px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-10 max-w-3xl md:mb-14">
          <h2
            className="text-[#FFFDFA] font-helvetica font-normal
            text-[32px] leading-[40px] tracking-[-0.02em]
            md:text-[48px] md:leading-[60px]"
          >
            <TextReveal>Our clients.</TextReveal>
          </h2>
          <p className="mt-4 md:mt-6 max-w-2xl font-instrument text-[#E7DFD2] text-[16px] md:text-[18px] leading-[24px] md:leading-[28px]">
            <TextReveal>
              We collaborate with hospitality, corporate, and private clients who value
              precision, material quality, and tailored execution.
            </TextReveal>
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
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
                  <div className="flex h-[104px] md:h-[120px] items-center justify-center rounded-md border border-[#FAE09E]/40 bg-[#201C17] px-5 py-6 transition-colors hover:bg-[#2A241D]">
                    <ClientLogoImage entry={entry} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
