'use client';

import Link from 'next/link';
import ProductCard from '../product-category/product-card';


interface Product {
  id: string;
  category: string;
  name: string;
  image: string;
  colors: string[];
}

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    
    <section className="py-12 md:py-16 lg:py-20 ">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-instrument font-medium text-[28px] md:text-[36px] leading-[36px] md:leading-[48px] [-letter-spacing:-0.02em] text-[#1C1917]">
            You might also like
          </h2>
          <Link 
            href="/furniture/chairs" 
            className="text-[#1C1917] font-medium text-[16px] md:text-[20px] hover:text-[#8B4513] transition-colors"
          >
            View All Chairs
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}