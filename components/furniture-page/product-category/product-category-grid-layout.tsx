'use client';

import { useState, useMemo } from 'react';
import ProductCategoryGrid from "./product-catogery-grid";
import SidebarFilter from "./sidebar-filter";

export default function ProductCategoryGridLayout({ products, categoryName }: { products: Product[], categoryName?: string }) {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  // Extract unique labels with their counts
  const labelCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach(p => {
      const label = p.cardLabel || 'Standard';
      counts[label] = (counts[label] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [products]);

  const handleToggleLabel = (label: string) => {
    setSelectedLabels(prev =>
      prev.includes(label)
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  const filteredProducts = useMemo(() => {
    if (selectedLabels.length === 0) return products;
    return products.filter(p => {
      const label = p.cardLabel || 'Standard';
      return selectedLabels.includes(label);
    });
  }, [products, selectedLabels]);

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          <aside className="w-full lg:w-[260px]">
            <SidebarFilter
              categoryName={categoryName || 'Filters'}
              labels={labelCounts}
              selectedLabels={selectedLabels}
              onToggleLabel={handleToggleLabel}
            />
          </aside>

          <section className="flex-1">
            <ProductCategoryGrid products={filteredProducts} />
          </section>

        </div>
      </div>
    </section>
  );
}
