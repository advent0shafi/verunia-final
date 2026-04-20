"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageReveal } from "@/components/home/animated-section";
import Link from "next/link";
import FotivoProjectCard from "./fotivo-project-card";

interface FotivoProjectDetailProps {
  product: any;
  relatedProducts: any[];
}

export default function FotivoProjectDetail({
  product,
  relatedProducts,
}: FotivoProjectDetailProps) {
  const mainImage = product.main_image?.url
    ? `https://api.veruniagroup.com${product.main_image.url}`
    : "/placeholder.png";

  const galleryImages =
    product.images?.map(
      (img: any) => `https://api.veruniagroup.com${img.url}`
    ) || [];

  const allImages = [mainImage, ...galleryImages];

  const [currentImage, setCurrentImage] = useState<string>(allImages[0]);

  return (
    <div className="bg-[#171412] text-[#FDFDFC] min-h-screen font-instrument">
      {/* Main Content Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column - Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-square bg-[#FFFFFF] flex items-center justify-center p-8 md:p-12">
              <Image
                src={currentImage}
                alt={product.name}
                width={600}
                height={600}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {allImages.slice(0, 3).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(img)}
                  className={`relative aspect-square bg-[#FFFFFF] flex items-center justify-center p-4 transition-all duration-300 ${
                    currentImage === img
                      ? "ring-2 ring-[#F5C547]"
                      : "hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    width={150}
                    height={150}
                    className="object-contain w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="flex flex-col pt-4">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-white/50 mb-8 font-instrument">
              <span>Furniture</span>
              <span>›</span>
              <span>{product.al_fotivo_category?.name}</span>
            </div>

            {/* Title */}
            <h1 className="font-helvetica font-light text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              {product.name}
            </h1>

            {/* Description */}
            <div className="space-y-6 text-white/80 font-instrument text-lg font-light leading-relaxed max-w-xl whitespace-pre-line">
              {product.description}
            </div>

            {/* Action Button */}
            <div className="mt-12">
              <button className="bg-[#FDFDFC] text-[#171412] px-8 py-4 rounded-[4px] font-medium hover:bg-white/90 transition-colors">
                Request Product Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* You may also like */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-20 md:pb-32">
        <h2 className="font-helvetica font-light text-3xl md:text-4xl text-white mb-10">
          You may also like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((rp) => (
            <div key={rp.id} className="h-[500px]">
              <FotivoProjectCard
                imageUrl={`https://api.veruniagroup.com${rp.main_image.url}`}
                title={rp.name}
                category={rp.al_fotivo_category.name}
                slug={rp.slug}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}