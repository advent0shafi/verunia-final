'use client';

import { motion } from 'framer-motion';

export default function ProductSkeleton() {
    return (
        <section className="py-12 md:py-16 lg:py-[90px]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">
                {/* Category Nav Skeleton */}
                <div className="mb-[40px] h-8 w-64 bg-stone-100 rounded animate-pulse" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Gallery Skeleton */}
                    <div className="w-full space-y-4">
                        <div className="relative aspect-square bg-stone-100 rounded-[8px] border border-stone-200 animate-pulse" />
                        <div className="flex gap-4 overflow-hidden">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="shrink-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-stone-100 rounded-[6px] border border-stone-200 animate-pulse" />
                            ))}
                        </div>
                    </div>

                    {/* Info Skeleton */}
                    <div className="w-full flex flex-col pt-4 lg:pt-0">
                        <div className="mb-4 h-4 w-48 bg-stone-100 rounded animate-pulse" />
                        <div className="h-12 w-full max-w-md bg-stone-100 rounded mb-6 animate-pulse" />

                        <div className="mb-8">
                            <div className="h-4 w-32 bg-stone-100 rounded mb-3 animate-pulse" />
                            <div className="flex gap-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-stone-100 animate-pulse" />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 mb-10">
                            <div className="h-4 w-full bg-stone-100 rounded animate-pulse" />
                            <div className="h-4 w-full bg-stone-100 rounded animate-pulse" />
                            <div className="h-4 w-3/4 bg-stone-100 rounded animate-pulse" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <div className="flex-1 h-14 bg-stone-100 rounded animate-pulse" />
                            <div className="flex-1 h-14 bg-stone-100 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
