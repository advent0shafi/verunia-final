'use client'
import Image from "next/image";
import Link from "next/link";

// Product type definition
interface Product {
  id: string;
  category: string;
  name: string;
  image: string;
  colors: string[];
}

// Sample product data - you can replace with your actual data
const products: Product[] = [
  {
    id: "1",
    category: "Office Chair",
    name: "High Back Chair CK-858A",
    image: "/furniture-page/products/chair-1.png",
    colors: ["#ffffff", "#6b7280", "#78716c", "#f59e0b"],
  },
  {
    id: "2",
    category: "Black Office Chair",
    name: "High Back Chair CK-858A",
    image: "/furniture-page/products/black-chair.png",
    colors: ["#ffffff", "#6b7280", "#22c55e"],
  },
  {
    id: "3",
    category: "Modern Office Chair",
    name: "TY-B0124",
    image: "/furniture-page/products/chair-1.png",
    colors: ["#ffffff", "#6b7280"],
  },
  {
    id: "4",
    category: "Special Office Chair",
    name: "H-5252",
    image: "/furniture-page/products/black-chair.png",
    colors: ["#ffffff", "#6b7280", "#78716c", "#f59e0b"],
  },
  {
    id: "5",
    category: "Office Chair",
    name: "High Back Chair CK-900",
    image: "/furniture-page/products/chair-1.png",
    colors: ["#1f2937", "#22c55e", "#78716c", "#f59e0b"],
  },
];

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/furniture/product/${product.id}`}
      className=" group"
    >
      <div className="border border-[#E5E1D6] rounded-[6px] p-[16px] overflow-hidden transition-all duration-300 hover:border-[#E5E1D6] ">
        {/* Product Image */}
        <div className="bg-[#F5F5F4] flex items-center justify-center rounded-[4px] w-[262px] h-[262px]">
          <Image
            src={product.image}
            alt={product.name}
            width={262}
            height={262}
            className="w-[262px] h-[262px] object-contain transition-transform duration-300  rounded-[4px]"
          />
        </div>

        {/* Product Info */}
        <div className="mt-4">
          {/* Category */}
          <p className="text-[#6b7280] font-normal not-italic text-[14px] leading-[20px] align-middle  font-instrument">{product.category}</p>

          {/* Product Name */}
          <h3 className="text-[#171412] font-normal not-italic text-base leading-6 align-middle font-instrument  tracking-normal">{product.name}</h3>

          {/* Color Swatches */}
          <div className="flex items-center gap-1.5 mt-4">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="w-3 h-3 "
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function FurnitureBestProduct() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2
            className="font-instrument font-medium text-[44px] leading-[56px] [-letter-spacing:-0.02em] text-[#1C1917]"
          >
            Office Furniture
          </h2>
          <Link
            href="/furniture/bestsellers"
            className="font-instrument font-medium text-[#1C1917] text-[20px] leading-[30px] tracking-normal hover:text-white transition-colors"
          >
            View More
          </Link>
        </div>

        {/* Products Scroll Container */}
        <div className="overflow-x-auto scrollbar-hide -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16">
          <div className="flex gap-4 md:gap-6 pb-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Custom scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
