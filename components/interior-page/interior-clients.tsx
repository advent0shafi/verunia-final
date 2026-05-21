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
      sizes="(min-width: 1024px) 220px, (min-width: 768px) 180px, 44vw"
      unoptimized={fmt === "svg"}
      className={cn(
        "h-10 w-auto max-h-14 max-w-[210px] object-contain object-center opacity-90 transition duration-300 group-hover:opacity-100 md:h-12",
        className
      )}
    />
  );
}

export default function InteriorClients() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const autoPlay = window.setInterval(() => {
      api.scrollNext();
    }, 2400);

    return () => window.clearInterval(autoPlay);
  }, [api]);

  return (
    <section className="bg-[#171412] px-4 py-[72px] md:px-6 md:py-[112px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-10 max-w-3xl md:mb-14">
          <h2 className="font-helvetica text-[32px] font-normal leading-[40px] tracking-[-0.02em] text-[#FDFDFC] md:text-[48px] md:leading-[60px]">
            <TextReveal>Our interior clients.</TextReveal>
          </h2>
          <p className="mt-4 max-w-2xl font-instrument text-[16px] leading-[24px] text-[#D8D2C7] md:mt-6 md:text-[18px] md:leading-[28px]">
            <TextReveal>
              Hospitality groups, developers and private clients trust Verunia Interiors to deliver spaces with clarity, craft and dependable execution.
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
                  <div className="group flex h-[104px] md:h-[120px] items-center justify-center px-5 py-6">
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
