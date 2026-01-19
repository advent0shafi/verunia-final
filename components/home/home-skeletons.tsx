import React from "react";

/**
 * Modern skeleton block with shimmer effect
 */
function SkeletonBlock({ className }: { className: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-gradient-to-r from-black/5 via-black/10 to-black/5 ${className}`}
      style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s ease-in-out infinite",
      }}
    />
  );
}

function DarkSkeletonBlock({ className }: { className: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-gradient-to-r from-white/5 via-white/10 to-white/5 ${className}`}
      style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s ease-in-out infinite",
      }}
    />
  );
}

export function HomeHeaderSkeleton() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <SkeletonBlock className="h-10 w-10 rounded-full" />
          <div className="hidden md:flex items-center gap-6">
            <SkeletonBlock className="h-4 w-16" />
            <SkeletonBlock className="h-4 w-20" />
            <SkeletonBlock className="h-4 w-16" />
            <SkeletonBlock className="h-4 w-14" />
            <SkeletonBlock className="h-4 w-16" />
          </div>
          <div className="md:hidden">
            <SkeletonBlock className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeHeroSkeleton() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFDFA]">
      <div className="relative min-h-[60vh] md:h-screen w-full mt-[30px] py-6 md:py-10">
        <div className="mx-auto max-w-[1440px] px-4 md:px-6">
          {/* Desktop carousel skeleton */}
          <div className="hidden md:flex h-[70vh] items-center justify-center gap-4">
            <SkeletonBlock className="h-[60vh] w-[22%] rounded-lg" />
            <SkeletonBlock className="h-[70vh] w-[56%] rounded-lg" />
            <SkeletonBlock className="h-[60vh] w-[22%] rounded-lg" />
          </div>
          {/* Mobile carousel skeleton */}
          <div className="md:hidden flex items-center justify-center gap-3">
            <SkeletonBlock className="h-[190px] w-[32%] rounded-lg" />
            <SkeletonBlock className="h-[230px] w-[50%] rounded-lg" />
            <SkeletonBlock className="h-[190px] w-[32%] rounded-lg" />
          </div>

          {/* Logo & tagline skeleton */}
          <div className="mt-8 md:mt-10 flex flex-col items-center justify-center gap-4">
            <SkeletonBlock className="h-[80px] w-[200px] md:h-[140px] md:w-[300px]" />
            <div className="flex items-center gap-4 w-full max-w-[600px]">
              <SkeletonBlock className="h-px flex-1 hidden sm:block" />
              <SkeletonBlock className="h-3 w-[280px]" />
              <SkeletonBlock className="h-px flex-1 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero text skeleton */}
      <div className="px-4 md:px-8 py-[40px] md:py-[120px]">
        <div className="max-w-[900px] mx-auto space-y-4">
          <SkeletonBlock className="h-8 md:h-12 w-full" />
          <SkeletonBlock className="h-8 md:h-12 w-11/12 mx-auto" />
          <SkeletonBlock className="h-8 md:h-12 w-10/12 mx-auto" />
        </div>
      </div>
    </section>
  );
}

export function HomeSectionSkeleton({ rows = 2 }: { rows?: number }) {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-[60px] md:py-[112px]">
      <SkeletonBlock className="h-10 md:h-14 w-1/2 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {Array.from({ length: rows }).map((_, idx) => (
          <div key={idx} className="space-y-4">
            <SkeletonBlock className="h-[260px] md:h-[400px] w-full rounded-lg" />
            <SkeletonBlock className="h-4 w-3/4" />
            <SkeletonBlock className="h-3 w-1/2" />
          </div>
        ))}
      </div>
      <SkeletonBlock className="mt-16 h-10 w-full" />
    </div>
  );
}

export function GlobeSkeleton() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-[60px] md:py-[112px]">
      <div className="text-center mb-8 md:mb-16">
        <SkeletonBlock className="h-8 md:h-12 w-3/4 mx-auto mb-2" />
        <SkeletonBlock className="h-8 md:h-12 w-1/2 mx-auto" />
      </div>
      <div className="relative mx-auto">
        <SkeletonBlock className="h-[330px] md:h-[600px] w-full rounded-full max-w-[600px] mx-auto" />
      </div>
    </div>
  );
}

export function FooterSkeleton() {
  return (
    <footer className="bg-[#171412] w-full">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-12 md:py-16">
        <DarkSkeletonBlock className="h-12 w-64 mb-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <DarkSkeletonBlock className="h-8 w-48" />
            <DarkSkeletonBlock className="h-8 w-56" />
            <DarkSkeletonBlock className="h-8 w-40" />
            <DarkSkeletonBlock className="h-8 w-32" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <DarkSkeletonBlock className="h-4 w-20" />
              <DarkSkeletonBlock className="h-4 w-20" />
              <DarkSkeletonBlock className="h-4 w-24" />
            </div>
            <div className="space-y-3">
              <DarkSkeletonBlock className="h-4 w-28" />
              <DarkSkeletonBlock className="h-4 w-40" />
              <DarkSkeletonBlock className="h-4 w-48" />
            </div>
          </div>
        </div>
        <DarkSkeletonBlock className="mt-16 h-12 w-full" />
        <div className="mt-8 flex items-center justify-between">
          <DarkSkeletonBlock className="h-4 w-48" />
          <DarkSkeletonBlock className="h-4 w-24" />
          <DarkSkeletonBlock className="h-4 w-16" />
        </div>
      </div>
    </footer>
  );
}

