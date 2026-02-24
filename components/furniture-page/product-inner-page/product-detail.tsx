'use client'; // For interactivity (e.g., thumbnail clicks)

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // For subtle animations
import { useState } from 'react';
import ProductThumbnails from './product-thumbnails';
import { Armchair, Box, Package, Search, Sofa, Sparkles, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryNavHeader from '@/components/ui/category-nav-header';

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
 


  return (
    <section className="py-12 md:py-16 lg:py-[90px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]   ">
        <div className="mb-[40px]">
          {/* Secondary header (catalog nav) */}
          <div className=" ">
            <CategoryNavHeader />
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