import Image from "next/image";
import Link from "next/link";
import { Armchair, Box, Package, Search, Sofa, Sparkles, Table } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import deskHero from "@/public/furniture-page/desk-hero.png";

export default function FurniturePageHero() {
  const categories = [
    { label: "Chairs", slug: "chairs", Icon: Armchair },
    { label: "Desks", slug: "desks", Icon: Table },
    { label: "Sofas", slug: "sofas", Icon: Sofa },
    { label: "Storage", slug: "storage", Icon: Package },
    { label: "Silent Boxes", slug: "silent-boxes", Icon: Box },
    { label: "Accessories", slug: "accessories", Icon: Sparkles },
  ] as const;

  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-[1440px] mx-auto mt-20 w-full">
        {/* Secondary header (catalog nav) */}
        <div className="px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
            <nav
              aria-label="Furniture catalog categories"
              className="flex items-center gap-3 overflow-x-auto py-1 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map(({ label, slug, Icon }) => (
                <Button
                  key={slug}
                  asChild
                  variant="outline"
                  size="sm"
                  className="shrink-0 bg-white text-[#1C1917] rounded-[4px] py-2 px-4 border-[#E5E1D6] hover:bg-white/70"
                >
                  <Link href={`/furniture/${slug}`} className="gap-2">
                    <Icon className="size-4 text-[#1C1917]" aria-hidden="true" />
                    <span className="font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-normal">{label}</span>
                  </Link>
                </Button>
              ))}
            </nav>

            <div className="relative w-full md:max-w-[320px] bg">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#78716C]"
                aria-hidden="true"
              />
              <input
                placeholder="Search Catalog"
                type="text"
                className="h-10  pl-9  text-[#1C1917] placeholder:text-[#A8A29E]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Background Chevron Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.08]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Large outer chevron */}
          <path
            d="M200 50 L350 200 L200 350"
            stroke="#9ca3af"
            strokeWidth="2"
            fill="none"
          />
          {/* Medium chevron */}
          <path
            d="M180 100 L280 200 L180 300"
            stroke="#9ca3af"
            strokeWidth="2"
            fill="none"
          />
          {/* Small inner chevron */}
          <path
            d="M160 140 L220 200 L160 260"
            stroke="#9ca3af"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="items-center bg-[#FAFAFA] flex flex-col justify-center px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-[1440px] h-full max-md:max-w-full py-8 md:py-10 relative overflow-hidden">
        
      <div className="relative  z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-center min-h-[500px] md:min-h-[600px] lg:min-h-[650px] py-12 md:py-16 lg:py-0">
          {/* Left Content */}
          <div className="w-full lg:w-[45%] text-left mb-8 lg:mb-0 lg:pr-8">
            {/* Label */}
            <p className="text-sm md:text-base font-semibold tracking-wide text-[#1a1a1a] mb-4 md:mb-6">
              YD & YF Models
            </p>

            {/* Main Heading */}
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-medium leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-6 md:mb-8">
              Designed to stand alone.
            </h1>

            {/* CTA Link */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-base md:text-lg font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity group"
            >
              <span>Discover</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[700px] lg:max-w-none">
              <Image
                src={deskHero}
                alt="YD & YF Models Executive Desk"
                width={800}
                height={500}
                sizes="(min-width: 1024px) 55vw, 100vw"
                placeholder="blur"
                quality={82}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>  
    </section>
  );
}
