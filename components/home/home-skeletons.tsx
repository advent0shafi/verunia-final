import React from "react";

function SkeletonBlock({ className }: { className: string }) {
  return <div className={`rounded-md bg-black/10 ${className}`} />;
}

export function HomeHeaderSkeleton() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <SkeletonBlock className="h-10 w-10" />
          <div className="hidden md:flex items-center gap-4">
            <SkeletonBlock className="h-4 w-20" />
            <SkeletonBlock className="h-4 w-20" />
            <SkeletonBlock className="h-4 w-20" />
            <SkeletonBlock className="h-4 w-20" />
            <SkeletonBlock className="h-4 w-20" />
          </div>
          <div className="md:hidden">
            <SkeletonBlock className="h-10 w-10" />
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
          <div className="hidden md:flex h-[70vh] items-center justify-center gap-4">
            <SkeletonBlock className="h-[60vh] w-[22%]" />
            <SkeletonBlock className="h-[70vh] w-[56%]" />
            <SkeletonBlock className="h-[60vh] w-[22%]" />
          </div>
          <div className="md:hidden flex items-center justify-center gap-3">
            <SkeletonBlock className="h-[190px] w-[32%]" />
            <SkeletonBlock className="h-[230px] w-[84%]" />
            <SkeletonBlock className="h-[190px] w-[32%]" />
          </div>

          <div className="mt-8 md:mt-10 flex flex-col items-center justify-center gap-4">
            <SkeletonBlock className="h-[80px] w-[260px] md:h-[120px] md:w-[420px]" />
            <SkeletonBlock className="h-3 w-[280px] md:w-[520px]" />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 py-[40px] md:py-[200px]">
        <div className="max-w-[1200px] mx-auto">
          <SkeletonBlock className="h-8 md:h-12 w-full" />
          <SkeletonBlock className="mt-3 h-8 md:h-12 w-11/12 mx-auto" />
        </div>
      </div>
    </section>
  );
}

export function HomeSectionSkeleton({ rows = 2 }: { rows?: number }) {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-[60px] md:py-[112px]">
      <div className="animate-pulse">
        <SkeletonBlock className="h-10 md:h-14 w-2/3" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: rows }).map((_, idx) => (
            <SkeletonBlock key={idx} className="h-[260px] md:h-[420px] w-full" />
          ))}
        </div>
        <SkeletonBlock className="mt-10 h-10 w-full" />
      </div>
    </div>
  );
}

export function GlobeSkeleton() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-[60px] md:py-[112px]">
      <div className="animate-pulse">
        <SkeletonBlock className="h-10 md:h-14 w-2/3 mx-auto" />
        <SkeletonBlock className="mt-8 h-[330px] md:h-[689px] w-full rounded-xl" />
      </div>
    </div>
  );
}

export function FooterSkeleton() {
  return (
    <footer className="bg-[#171412] w-full">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-12 md:py-16 animate-pulse">
        <SkeletonBlock className="h-12 w-64 bg-white/10" />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <SkeletonBlock className="h-6 w-40 bg-white/10" />
            <SkeletonBlock className="mt-4 h-6 w-56 bg-white/10" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <SkeletonBlock className="h-4 w-24 bg-white/10" />
              <SkeletonBlock className="h-4 w-24 bg-white/10" />
              <SkeletonBlock className="h-4 w-24 bg-white/10" />
            </div>
            <div className="space-y-3">
              <SkeletonBlock className="h-4 w-32 bg-white/10" />
              <SkeletonBlock className="h-4 w-48 bg-white/10" />
              <SkeletonBlock className="h-4 w-56 bg-white/10" />
            </div>
          </div>
        </div>
        <SkeletonBlock className="mt-12 h-10 w-full bg-white/10" />
      </div>
    </footer>
  );
}

