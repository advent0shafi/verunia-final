'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Armchair, Box, LayoutGrid, Package, Search, Sofa, Sparkles, Table, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CategoryNavHeader() {
    const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { label: "Chairs", slug: "chairs", Icon: Armchair },
    { label: "Desks", slug: "desks", Icon: Table },
    { label: "Sofas", slug: "sofas", Icon: Sofa },
    { label: "Storage", slug: "storage", Icon: Package },
    { label: "Silent Boxes", slug: "silent-boxes", Icon: Box },
    { label: "Accessories", slug: "accessories", Icon: Sparkles },
  ] as const;

    return (
         <div className=" ">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="flex items-center gap-3 overflow-hidden min-h-[44px] ">
              {!isExpanded ? (
                <Button
                  onClick={() => setIsExpanded(true)}
                  variant="outline"
                  className="bg-white text-[#1C1917] border-[#E5E1D6] hover:bg-white/70 gap-2"
                >
                  <LayoutGrid className="size-4" />
                  <span className="font-instrument font-normal text-[16px]">Browse Categories</span>
                </Button>
              ) : (
                <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsExpanded(false)}
                    className="shrink-0 rounded-full hover:bg-gray-100"
                  >
                    <X className="size-4 text-[#1C1917]" />
                    <span className="sr-only">Close categories</span>
                  </Button>
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
                </div>
              )}
            </div>

            <div className="relative w-full md:max-w-[320px] bg">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#78716C]"
                aria-hidden="true"
              />
              <input
                placeholder="Search Catalog"
                type="text"
                className="h-10 w-full rounded-md border border-[#E5E1D6] bg-white pl-9 pr-4 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1C1917]"
              />
            </div>
          </div>
        </div>
    )
}