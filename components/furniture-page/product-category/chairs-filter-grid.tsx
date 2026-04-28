"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCategoryGrid from "./product-catogery-grid";

const CHAIR_FILTERS = ["Mesh", "Leather", "Other"] as const;
type ChairFilter = (typeof CHAIR_FILTERS)[number];

function resolveChairType(product: Product): ChairFilter {
  const source = `${product.cardLabel || ""} ${product.name || ""}`.toLowerCase();
  if (source.includes("mesh")) return "Mesh";
  if (source.includes("leather")) return "Leather";
  return "Other";
}

function normalizeChairFilter(value?: string): ChairFilter {
  const normalized = value?.toLowerCase();
  if (normalized === "mesh") return "Mesh";
  if (normalized === "leather") return "Leather";
  return "Other";
}

export default function ChairsFilterGrid({
  products,
  initialFilter,
}: {
  products: Product[];
  initialFilter?: string;
}) {
  const [activeFilter, setActiveFilter] = useState<ChairFilter>(normalizeChairFilter(initialFilter));

  useEffect(() => {
    setActiveFilter(normalizeChairFilter(initialFilter));
  }, [initialFilter]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => resolveChairType(product) === activeFilter);
  }, [products, activeFilter]);

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-16">
        <ProductCategoryGrid products={filteredProducts} />
      </div>
    </section>
  );
}
