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
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className=" group"
    >
      <div className="border border-[#E5E1D6] rounded-[6px] p-[16px] overflow-hidden transition-all duration-300 hover:border-[#E5E1D6] ">
        {/* Product Image */}
        <div className="bg-[#F5F5F4] flex items-center justify-center rounded-[4px] min-w-[262px] w-full h-[262px]">
          <Image
            src={product.image}
            alt={product.name}
            width={262}
            height={262}
            className="min-w-[262px] h-[262px] object-contain transition-transform duration-300 w-full  rounded-[4px]"
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