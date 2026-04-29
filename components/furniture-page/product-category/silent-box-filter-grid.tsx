"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCategoryGrid from "./product-catogery-grid";

function getModelLabel(product: Product) {
  const label = product.cardLabel?.trim();
  if (label) return label;
  return product.name;
}

export default function SilentBoxFilterGrid({
  products,
  initialModel,
}: {
  products: Product[];
  initialModel?: string;
}) {
  const modelLabels = useMemo(() => {
    const unique = Array.from(new Set(products.map((product) => getModelLabel(product))));
    return unique.sort((a, b) => a.localeCompare(b));
  }, [products]);

  const [activeModel, setActiveModel] = useState<string>(() =>
    initialModel && modelLabels.includes(initialModel) ? initialModel : "All"
  );

  useEffect(() => {
    if (initialModel && modelLabels.includes(initialModel)) {
      setActiveModel(initialModel);
    } else {
      setActiveModel("All");
    }
  }, [initialModel, modelLabels]);

  const filteredProducts = useMemo(() => {
    if (!activeModel || activeModel === "All") return products;
    return products.filter((product) => getModelLabel(product) === activeModel);
  }, [products, activeModel]);

  if (modelLabels.length === 0) {
    return (
      <section
        id="silent-box-products"
        className="scroll-mt-[calc(5rem+1px)] bg-white py-12 md:py-16"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-16">
          <ProductCategoryGrid products={products} />
        </div>
      </section>
    );
  }

  return (
    <section
      id="silent-box-products"
      className="scroll-mt-[calc(5rem+1px)] bg-white py-10 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-16">
        <h2 className="sr-only">Silent Box products</h2>
        <div className="-mx-4 mb-8 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] md:mx-0 md:flex md:flex-wrap md:gap-3 md:overflow-visible md:px-0 md:pb-0">
          <div className="flex w-max min-w-full gap-2 md:w-auto md:min-w-0 md:flex-wrap md:gap-3">
            <button
              type="button"
              onClick={() => setActiveModel("All")}
              className={[
                "shrink-0 rounded-full border px-4 py-2.5 text-sm font-instrument transition-colors min-h-[44px]",
                activeModel === "All"
                  ? "border-[#1C1917] bg-[#1C1917] text-white"
                  : "border-[#D8D2C4] bg-white text-[#1C1917] hover:bg-[#F4EFE4]",
              ].join(" ")}
            >
              All
            </button>
            {modelLabels.map((model) => (
              <button
                key={model}
                type="button"
                onClick={() => setActiveModel(model)}
                className={[
                  "shrink-0 rounded-full border px-4 py-2.5 text-sm font-instrument transition-colors min-h-[44px] max-w-[min(100vw-4rem,280px)] truncate md:max-w-none",
                  activeModel === model
                    ? "border-[#1C1917] bg-[#1C1917] text-white"
                    : "border-[#D8D2C4] bg-white text-[#1C1917] hover:bg-[#F4EFE4]",
                ].join(" ")}
              >
                {model}
              </button>
            ))}
          </div>
        </div>

        <ProductCategoryGrid products={filteredProducts} />
      </div>
    </section>
  );
}
