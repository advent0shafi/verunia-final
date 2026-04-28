"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  getCategoriesClient,
} from "@/lib/furniture";

type NavCategory = { id: number; name: string; slug: string; href: string; group: "chair" | "table" | "silent" | "other" };

function resolveGroup(slug: string): NavCategory["group"] {
  const s = slug.toLowerCase();
  if (["chair", "office-chair"].includes(s)) return "chair";
  if (["table", "desk", "office-desk"].includes(s)) return "table";
  if (["silent-box", "silent-boxes", "storage"].includes(s)) return "silent";
  return "other";
}

function resolveHref(slug: string) {
  return `/furniture/${slug}`;
}

export default function FurnitureCatalogNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState<NavCategory[]>([]);

  useEffect(() => {
    let mounted = true;

    getCategoriesClient()
      .then((apiCategories) => {
        if (!mounted) return;

        const mapped = apiCategories.map((category) => ({
          ...category,
          href: resolveHref(category.slug),
          group: resolveGroup(category.slug),
        }));

        setCategories(mapped);
      })
      .catch(() => {
        if (!mounted) return;
        setCategories([]);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const activeGroup = useMemo<NavCategory["group"] | null>(() => {
    const categoryMatch = pathname.match(/^\/furniture\/([^/]+)$/);
    if (categoryMatch?.[1]) {
      return resolveGroup(categoryMatch[1]);
    }
    if (pathname.startsWith("/furniture/chairs")) return "chair";
    if (pathname.startsWith("/furniture/desks")) return "table";
    if (pathname.startsWith("/furniture/silent-box")) return "silent";
    return null;
  }, [pathname]);

  const activeCategorySlug = useMemo(() => {
    const categoryMatch = pathname.match(/^\/furniture\/([^/]+)$/);
    if (categoryMatch?.[1]) return categoryMatch[1];

    const groupFallbackMap: Record<"chair" | "table" | "silent", string[]> = {
      chair: ["office-chair", "chair"],
      table: ["table", "office-desk", "desk"],
      silent: ["silent-box", "silent-boxes", "storage"],
    };

    if (!activeGroup || activeGroup === "other") return "";
    const preferred = groupFallbackMap[activeGroup];
    return (
      preferred.find((slug) => categories.some((item) => item.slug === slug)) ||
      categories.find((item) => item.group === activeGroup)?.slug ||
      ""
    );
  }, [pathname, categories, activeGroup]);

  const activeSubmenu = useMemo(() => {
    if (activeGroup === "chair") {
      return [
        { label: "Mesh", href: "/furniture/chairs?type=mesh", active: searchParams.get("type") === "mesh" },
        { label: "Leather", href: "/furniture/chairs?type=leather", active: searchParams.get("type") === "leather" },
        { label: "Other Chair", href: "/furniture/chairs?type=other", active: searchParams.get("type") === "other" },
      ];
    }

    if (activeGroup === "table") {
      const current = searchParams.get("cat");
      return [
        { label: "TY Models", href: "/furniture/desks?cat=ty-models", active: current === "ty-models" },
        { label: "YD & YF Models", href: "/furniture/desks?cat=yd-yf-models", active: current === "yd-yf-models" },
        { label: "XC Models", href: "/furniture/desks?cat=xc-models", active: current === "xc-models" },
        { label: "UL Models", href: "/furniture/desks?cat=ul-models", active: current === "ul-models" },
      ];
    }

    return [];
  }, [activeGroup, searchParams]);

  return (
    <nav className="sticky top-[82px] md:top-[92px] z-40 w-full border-b border-[#E8E3D8] bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-3 px-4 py-3 md:px-6 lg:px-8">
        {categories.map((item) => {
          const isActive = activeCategorySlug === item.slug;
          return (
            <Link
              key={`${item.id}-${item.slug}`}
              href={item.href}
              className={[
                "px-2 py-1 font-instrument text-[13px] md:text-[14px] border-b transition-colors",
                isActive
                  ? "border-[#1C1917] text-[#1C1917]"
                  : "border-transparent text-[#57534E] hover:text-[#1C1917]",
              ].join(" ")}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      {activeSubmenu.length > 0 && (
        <div className="border-t border-[#EEE8DD]/80">
          <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-2 px-4 py-2.5 md:px-6 lg:px-8">
            {activeSubmenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full border px-3 py-1.5 text-[12px] md:text-[13px] font-instrument transition-colors",
                  item.active
                    ? "border-[#1C1917] bg-[#1C1917] text-white"
                    : "border-[#D8D2C4] bg-white text-[#3B3429] hover:bg-[#F4EFE4]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
