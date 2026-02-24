import Image from "next/image";
import Link from "next/link";

// Product type definition

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/furniture/product/${product.slug}`}
      scroll={true}
      className=" group"
    >

      <div className="border border-[#E5E1D6] rounded-[6px] p-[16px]  overflow-hidden transition-all duration-300 hover:border-[#E5E1D6] ">
        {/* Product Image */}
        <div className="bg-[#F5F5F4] flex items-center justify-center rounded-[4px] min-w-[262px] w-full h-[262px] md:max-h-[262px]">
          {product.main_image?.url ? (
            <Image
              src={`https://api.veruniagroup.com${product.main_image.url}`}
              alt={product.name}
              width={262}
              height={262}
              className="min-w-[262px] max-w-[262px] h-[262px] object-contain transition-transform duration-300 w-full  rounded-[4px]"
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
          <h3 className="text-[#171412] font-normal md:text-[16px] text-[14px] not-italic text-base leading-6 align-middle font-instrument  tracking-normal">{product.name}</h3>

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