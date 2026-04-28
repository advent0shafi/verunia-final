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
    return unique;
  }, [products]);

  const [activeModel, setActiveModel] = useState<string>(initialModel || modelLabels[0] || "All");

  useEffect(() => {
    setActiveModel(initialModel || modelLabels[0] || "All");
  }, [initialModel, modelLabels]);

  const filteredProducts = useMemo(() => {
    if (!activeModel || activeModel === "All") return products;
    return products.filter((product) => getModelLabel(product) === activeModel);
  }, [products, activeModel]);

  if (modelLabels.length === 0) {
    return (
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-16">
          <ProductCategoryGrid products={products} />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-8 flex flex-wrap gap-3 md:mb-10">
          {modelLabels.map((model) => (
            <button
              key={model}
              type="button"
              onClick={() => setActiveModel(model)}
              className={[
                "rounded-full border px-4 py-2 text-sm font-instrument transition-colors",
                activeModel === model
                  ? "border-[#1C1917] bg-[#1C1917] text-white"
                  : "border-[#D8D2C4] bg-white text-[#1C1917] hover:bg-[#F4EFE4]",
              ].join(" ")}
            >
              {model}
            </button>
          ))}
        </div>

        <ProductCategoryGrid products={filteredProducts} />
      </div>
    </section>
  );
}
