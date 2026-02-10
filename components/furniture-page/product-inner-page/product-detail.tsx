'use client'; // For interactivity (e.g., thumbnail clicks)

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // For subtle animations
import { useState } from 'react';
import ProductThumbnails from './product-thumbnails';
import { Armchair, Box, Package, Search, Sofa, Sparkles, Table } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  category: string;
  image: string;
  thumbnails: string[];
  colors: string[];
  description: string;
}

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const categories = [
    { label: "Chairs", slug: "chairs", Icon: Armchair },
    { label: "Desks", slug: "desks", Icon: Table },
    { label: "Sofas", slug: "sofas", Icon: Sofa },
    { label: "Storage", slug: "storage", Icon: Package },
    { label: "Silent Boxes", slug: "silent-boxes", Icon: Box },
    { label: "Accessories", slug: "accessories", Icon: Sparkles },
  ] as const;


  return (
    <section className="py-12 md:py-16 lg:py-[90px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]   ">
      <div className="mb-[40px]">
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
                  <Link href={`/furniture?category=${slug}`} className="gap-2">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start "
        >
          {/* Product Image */}
          <div className="relative bg-[#F5F5F4] rounded-[4px] max-w-[640px] py-[40px] border border-[#E5E1D6]  max-h-[640px]">
            <Image
              src={selectedImage}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-contain max-w-[600px]  max-h-[600px]"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="   w-full">
            <div>
              <p className="font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-[0%] align-middle mb-[12px]">
                Chairs &rarr;<span className="align-middle">Office Chair</span>
              </p>
            </div>
            <h1
              className="
                font-normal 
                not-italic 
                mb-[32px]
                 font-fraunces 
                text-[36px] 
                leading-[44px] 
                [-letter-spacing:-0.02em] 
                align-middle 
                text-[#1C1917]
              "
            >
              {product.name}
            </h1>

            {/* Colors */}
            <p className="font-instrument font-normal text-[#57534E] mb-2 not-italic text-[14px] leading-[24px] tracking-[0%] align-middle">Available Finishes:</p>
            <div className="flex items-center gap-2">
             
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  className="w-6 h-6 rounded-[2px] "
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Description */}
            <p className="font-instrument font-normal py-[32px] text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#57534E]">
              {product.description}
            </p>

            {/* Request Button */}
            <button className="bg-[#44403C] text-white px-[16px] py-[10px] rounded-[4px] font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-[0%] align-middle hover:bg-[#A0522D] transition-colors">
              Request Product Info
            </button>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <ProductThumbnails
          thumbnails={product.thumbnails}
          onSelect={setSelectedImage}
          selected={selectedImage}
        />
      </div>
    </section>
  );
}