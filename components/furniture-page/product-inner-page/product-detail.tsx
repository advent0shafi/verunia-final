'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProductThumbnails from './product-thumbnails';
import CategoryNavHeader from '@/components/ui/category-nav-header';

const API_BASE_URL = 'https://api.veruniagroup.com';

export default function ProductDetail({ product }: { product: Product }) {
  type FutureDetailsFields = {
    detailed_description?: string;
    detailed_highlights?: string[];
    detailed_specs?: Array<{ label: string; value: string }>;
  };
  const productWithFutureFields = product as Product & FutureDetailsFields;

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
  const [activeTab, setActiveTab] = useState<'description' | 'details'>('description');

  const detailedDescription =
    productWithFutureFields.detailed_description ||
    'Supporting healthy posture through thoughtful ergonomics and precision-crafted mechanics. Built for demanding work environments, this product combines breathable materials, adaptive support and durable engineering for long-term daily comfort.';

  const detailHighlights =
    productWithFutureFields.detailed_highlights?.length
      ? productWithFutureFields.detailed_highlights
      : [
          'Adjustable seat height and depth',
          '4D adjustable armrest support',
          'Adjustable lumbar support',
          'Synchro tilt with tension control',
          'Tilt locking positions',
          'Adjustable headrest for neck comfort',
        ];

  const detailsRows =
    productWithFutureFields.detailed_specs?.length
      ? productWithFutureFields.detailed_specs
      : [
          { label: 'Warranty', value: '5 Year Limited Warranty' },
          { label: 'Delivery', value: 'Delivery Time: 1 - 2 Days' },
          { label: 'Chair Ergonomics', value: '4D Armrest, Adjustable Headrest, Lumbar Support, Synchro Tilt, Tilt Lock' },
          { label: 'Certifications', value: 'ANSI / BIFMA' },
          { label: 'Awards', value: 'IF Design Award Winner' },
        ];

  const featureCards = [
    {
      title: 'Breathable Material',
      description: 'Enhancing air circulation to help keep users cool and comfortable through extended work sessions.',
      image: thumbnails[0] || selectedImage,
    },
    {
      title: 'Ergonomic Support',
      description: 'Supports healthy posture and reduces pressure on the lower back with adjustable control points.',
      image: thumbnails[1] || selectedImage,
    },
    {
      title: 'Refined Performance',
      description: 'A durable mechanism engineered for smooth movement, reliable lock positions and long-term use.',
      image: thumbnails[2] || selectedImage,
    },
  ];

  const productInfoHref = `/contact?source=product-info&product=${encodeURIComponent(product.name)}`;

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
              <Link
                href={productInfoHref}
                className="flex-1 bg-[#44403C] text-white px-8 py-4 rounded-[4px] font-instrument text-[16px] font-medium hover:bg-[#1C1917] transition-all duration-300 shadow-sm text-center"
              >
                Request Product Info
              </Link>
              {product.product_info_url ? (
                <a
                  href={product.product_info_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-[#E5E1D6] text-[#44403C] px-8 py-4 rounded-[4px] font-instrument text-[16px] font-medium hover:bg-[#F5F5F4] transition-all duration-300 text-center"
                >
                  Download Brochure
                </a>
              ) : (
                <button
                  type="button"
                  className="flex-1 border border-[#E5E1D6] text-[#A8A29E] px-8 py-4 rounded-[4px] font-instrument text-[16px] font-medium bg-[#FAFAF9] cursor-not-allowed"
                  disabled
                >
                  Brochure Unavailable
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Extended Detail Section */}
        <div className="mt-14 md:mt-16 rounded-[8px] border border-[#E7E5E4] bg-[#FAFAFA]">
          <div className="flex items-center border-b border-[#E7E5E4]">
            <button
              type="button"
              onClick={() => setActiveTab('description')}
              className={`px-5 md:px-6 py-3 font-instrument text-[14px] md:text-[15px] transition ${
                activeTab === 'description'
                  ? 'text-[#1C1917] border-b-2 border-[#0E7490] font-medium'
                  : 'text-[#78716C] hover:text-[#44403C]'
              }`}
            >
              Description
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('details')}
              className={`px-5 md:px-6 py-3 font-instrument text-[14px] md:text-[15px] transition ${
                activeTab === 'details'
                  ? 'text-[#1C1917] border-b-2 border-[#0E7490] font-medium'
                  : 'text-[#78716C] hover:text-[#44403C]'
              }`}
            >
              Product Details
            </button>
          </div>

          <div className="p-5 md:p-7">
            {activeTab === 'description' ? (
              <div>
                <h3 className="font-helvetica text-[24px] md:text-[30px] leading-[1.2] text-[#1C1917]">
                  Ergonomic Design for Ultra Comfort
                </h3>
                <p className="mt-3 max-w-3xl font-instrument text-[15px] md:text-[16px] leading-[1.65] text-[#57534E]">
                  {detailedDescription}
                </p>

                <ul className="mt-4 space-y-1.5 font-instrument text-[15px] text-[#44403C]">
                  {detailHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 text-[#57534E]">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {featureCards.map((card) => (
                    <div key={card.title} className="rounded-[6px] bg-white border border-[#E7E5E4] overflow-hidden">
                      <div className="relative h-[200px] bg-[#F5F5F4]">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-contain p-4"
                          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 100vw"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-helvetica text-[20px] leading-[1.2] text-[#1C1917]">
                          {card.title}
                        </h4>
                        <p className="mt-2 font-instrument text-[14px] leading-[1.55] text-[#57534E]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse">
                  <tbody>
                    {detailsRows.map((row) => (
                      <tr key={row.label} className="border-b border-[#E7E5E4] last:border-b-0">
                        <th className="w-[35%] py-3 text-left align-top font-instrument text-[14px] md:text-[15px] font-medium text-[#44403C]">
                          {row.label}
                        </th>
                        <td className="py-3 font-instrument text-[14px] md:text-[15px] leading-[1.6] text-[#57534E]">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

