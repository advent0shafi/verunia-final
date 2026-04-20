'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProductThumbnails from './product-thumbnails';
import CategoryNavHeader from '@/components/ui/category-nav-header';

const API_BASE_URL = 'https://api.veruniagroup.com';

export default function ProductDetail({ product }: { product: Product }) {
  const initialImage = product.main_image?.url
    ? `${API_BASE_URL}${product.main_image.url}`
    : '/fallback-product.png';

  const [selectedImage, setSelectedImage] = useState(initialImage);

  useEffect(() => {
    setSelectedImage(initialImage);
  }, [product.id, initialImage]);

  const allImages = [
    product.main_image,
    ...(product.images || []).filter(img => img.documentId !== product.main_image?.documentId)
  ].filter(Boolean) as ProductMedia[];

  const thumbnails = allImages.map(img => `${API_BASE_URL}${img.url}`);

  return (
    <section className="py-12 md:py-16 lg:py-[90px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">
        <div className="mb-[40px]">
          <CategoryNavHeader />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product Gallery */}
          <div className="w-full space-y-4">
            <div className="relative aspect-square bg-[#F5F5F4] rounded-[8px] border border-[#E5E1D6] overflow-hidden flex items-center justify-center p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            {thumbnails.length > 1 && (
              <ProductThumbnails
                thumbnails={thumbnails}
                onSelect={setSelectedImage}
                selected={selectedImage}
              />
            )}
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex flex-col pt-4 lg:pt-0"
          >
            <div className="mb-4">
              <p className="font-instrument font-normal text-[14px] md:text-[16px] text-[#57534E] uppercase tracking-wider">
                {product.category?.name} &rarr; <span className="text-[#1C1917]">{product.cardLabel}</span>
              </p>
            </div>

            <h1 className="font-helvetica text-[32px] md:text-[44px] leading-[1.1] text-[#1C1917] mb-6 font-normal">
              {product.name}
            </h1>

            {/* Colors */}
            {product.product_variant && product.product_variant.length > 0 && (
              <div className="mb-8">
                <p className="font-instrument font-medium text-[#57534E] text-[14px] mb-3 uppercase tracking-wide">
                  Available Finishes:
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.product_variant.map((variant, idx) => (
                    <button
                      key={idx}
                      title={variant.name}
                      className="group relative p-0.5 rounded-full border border-transparent hover:border-[#8B4513] transition-all"
                    >
                      <span
                        className="block w-8 h-8 rounded-full border border-black/5"
                        style={{ backgroundColor: variant.color_code }}
                      />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#1C1917] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                        {variant.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="prose prose-stone max-w-none mb-10">
              <p className="font-instrument text-[16px] md:text-[18px] leading-[1.6] text-[#44403C] whitespace-pre-wrap">
                {product.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="flex-1 bg-[#44403C] text-white px-8 py-4 rounded-[4px] font-instrument text-[16px] font-medium hover:bg-[#1C1917] transition-all duration-300 shadow-sm">
                Request Product Info
              </button>
              <button className="flex-1 border border-[#E5E1D6] text-[#44403C] px-8 py-4 rounded-[4px] font-instrument text-[16px] font-medium hover:bg-[#F5F5F4] transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

