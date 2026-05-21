"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import type { FurnitureNavCategory } from "@/lib/furniture";

const STICKY_OFFSET = "top-[72px] md:top-[88px]";
const NON_CATEGORY_SEGMENTS = new Set(["product"]);

function pillClass(active: boolean): string {
  return [
    "whitespace-nowrap rounded-full border px-3 py-1.5 font-instrument text-[12px] md:text-[13px] transition-colors",
    active
      ? "border-[#1C1917] bg-[#1C1917] text-white"
      : "border-[#D8D2C4] bg-white text-[#3B3429] hover:bg-[#F4EFE4]",
  ].join(" ");
}

interface NavProps {
  categories: FurnitureNavCategory[];
}

function FurnitureCatalogNavInner({ categories }: NavProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategorySlug = useMemo(() => {
    const match = pathname.match(/^\/furniture\/([^/]+)$/);
    const segment = match?.[1];
    if (!segment || NON_CATEGORY_SEGMENTS.has(segment)) return null;
    return segment;
  }, [pathname]);

  const activeCategory = useMemo(
    () => categories.find((cat) => cat.slug === activeCategorySlug) ?? null,
    [categories, activeCategorySlug]
  );

  const activeSub = searchParams.get("sub");

  return (
    <nav
      className={`sticky ${STICKY_OFFSET} z-50 w-full border-b border-[#E8E3D8] bg-white`}
    >
      {/* Top row — main categories */}
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-1 overflow-x-auto px-4 py-3 md:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => {
          const isActive = cat.slug === activeCategorySlug;
          return (
            <Link
              key={cat.id}
              href={`/furniture/${cat.slug}`}
              className={[
                "whitespace-nowrap border-b-2 px-3 py-1.5 font-instrument text-[13px] md:text-[14px] transition-colors",
                isActive
                  ? "border-[#1C1917] text-[#1C1917]"
                  : "border-transparent text-[#57534E] hover:text-[#1C1917]",
              ].join(" ")}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>

      {/* Submenu — sub-categories of the active category */}
      {activeCategory && activeCategory.sub_categories.length > 0 && (
        <div className="border-t border-[#EEE8DD]/80 bg-[#FCFAF5]">
          <div className="mx-auto flex w-full max-w-[1440px] items-center gap-2 overflow-x-auto px-4 py-2.5 md:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <Link
              href={`/furniture/${activeCategory.slug}`}
              className={pillClass(!activeSub)}
            >
              All
            </Link>
            {activeCategory.sub_categories.map((sub) => (
              <Link
                key={sub.id}
                href={`/furniture/${activeCategory.slug}?sub=${sub.slug}`}
                className={pillClass(activeSub === sub.slug)}
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function FurnitureCatalogNavFallback() {
  return (
    <nav
      className={`sticky ${STICKY_OFFSET} z-50 w-full border-b border-[#E8E3D8] bg-white`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-3 px-4 py-3 md:px-6 lg:px-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-5 w-20 animate-pulse rounded bg-[#EFEADD]"
          />
        ))}
      </div>
    </nav>
  );
}

export default function FurnitureCatalogNav({ categories }: NavProps) {
  return (
    <Suspense fallback={<FurnitureCatalogNavFallback />}>
      <FurnitureCatalogNavInner categories={categories} />
    </Suspense>
  );
}
