'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  LayoutGrid,
  Search,
  X,
  LayoutGrid as FallbackIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { getCategoriesClient } from "@/lib/furniture"
import { categoryIconMap } from "@/lib/categoryIcons"

export default function CategoryNavHeader() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [categories, setCategories] = useState<CategoryNavItem[]>([])

  useEffect(() => {
    getCategoriesClient().then(setCategories)
  }, [])

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex items-center gap-3 overflow-hidden min-h-[44px]">
          {!isExpanded ? (
            <Button
              onClick={() => setIsExpanded(true)}
              variant="outline"
              className="bg-white text-[#1C1917] border-[#E5E1D6] gap-2"
            >
              <LayoutGrid className="size-4" />
              <span>Browse Categories</span>
            </Button>
          ) : (
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(false)}
                className="rounded-full"
              >
                <X className="size-4" />
              </Button>

              <nav className="flex items-center gap-3 overflow-x-auto">
                {categories.map((cat) => {
                  const Icon =
                    categoryIconMap[cat.slug] ?? FallbackIcon

                  return (
                    <Button
                      key={cat.id}
                      asChild
                      variant="outline"
                      size="sm"
                      className="shrink-0 bg-white rounded-[4px]"
                    >
                      <Link
                        href={`/furniture/${cat.slug}`}
                        className="flex gap-2 items-center"
                      >
                        <Icon className="size-4" />
                        <span>{cat.name}</span>
                      </Link>
                    </Button>
                  )
                })}
              </nav>
            </div>
          )}
        </div>

        {/* Search untouched */}
        <div className="relative w-full md:max-w-[320px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4" />
          <input
            placeholder="Search Catalog"
            className="h-10 w-full rounded-md border pl-9 pr-4"
          />
        </div>
      </div>
    </div>
  )
}