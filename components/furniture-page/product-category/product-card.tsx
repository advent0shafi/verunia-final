import Image from "next/image";
import Link from "next/link";

// Product type definition

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/furniture/product/${product.slug}`}
      scroll={true}
      className="group block"
    >

      <div className="border border-[#E5E1D6] rounded-[6px] p-[16px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-24px_rgba(28,25,23,0.6)]">
        {/* Product Image */}
        <div className="flex h-[220px] w-full min-w-0 max-w-full items-center justify-center rounded-[4px] bg-[#F5F5F4] sm:h-[240px] md:h-[262px] md:max-h-[262px]">
          {product.main_image?.url ? (
            <Image
              src={`https://api.veruniagroup.com${product.main_image.url}`}
              alt={product.name}
              width={262}
              height={262}
              className="h-full w-full max-h-[262px] max-w-[262px] object-contain transition-transform duration-500 ease-out rounded-[4px] group-hover:scale-[1.045]"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-[4px]">
              No Image
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="mt-4">
          {/* Category */}
          <p className="text-[#6b7280] font-normal not-italic text-[14px] leading-[20px] align-middle  font-instrument">
            {typeof product.category === 'object' ? product.category?.name : product.category}
          </p>

          {/* Product Name */}
          <h3 className="text-[#171412] font-normal md:text-[16px] text-[14px] not-italic text-base leading-6 align-middle font-instrument tracking-normal transition-colors duration-300 group-hover:text-[#0E7490]">
            {product.name}
          </h3>

          {/* Color Swatches */}
          <div className="flex items-center gap-1.5 mt-4">
            {product.product_variant?.map((color, index) => (
              <span
                key={index}
                className="w-3 h-3 "
                style={{ backgroundColor: color.color_code }}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}