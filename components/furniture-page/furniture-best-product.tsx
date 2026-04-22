import Link from "next/link";
import ProductCard from "@/components/furniture-page/product-category/product-card";
import { getBestSellerProducts } from "@/lib/furniture";
import AnimatedSection from "@/components/home/animated-section";

export default async function FurnitureBestProduct() {
  const products = await getBestSellerProducts();

  if (!products || products.length === 0) {
    return null; // hide the section if no best sellers found
  }

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <AnimatedSection variant="slide-up">
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <h2
              className="font-instrument font-medium text-[44px] leading-[56px] [-letter-spacing:-0.02em] text-[#1C1917]"
            >
              Best Sellers
            </h2>
            <Link
            href={`/furniture/${products[0].category.slug}`}
              className="font-instrument font-medium text-[#1C1917] text-[20px] leading-[30px] tracking-normal hover:text-[#0E7490] transition-colors"
            >
              View More
            </Link>
          </div>
        </AnimatedSection>

        {/* Products Scroll Container */}
        <AnimatedSection variant="fade">
          <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16">
            <div className="flex gap-4 md:gap-6 pb-4">
              {products.map((product) => (
                <div key={product.id} className="min-w-[262px]">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
