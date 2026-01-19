import {
  FooterSkeleton,
  GlobeSkeleton,
  HomeHeaderSkeleton,
  HomeHeroSkeleton,
  HomeSectionSkeleton,
} from "@/components/home/home-skeletons";

export default function Loading() {
  return (
    <main className="animate-pulse">
      <HomeHeaderSkeleton />
      <HomeHeroSkeleton />
      <HomeSectionSkeleton rows={2} />
      <HomeSectionSkeleton rows={3} />
      <HomeSectionSkeleton rows={2} />
      <GlobeSkeleton />
      <FooterSkeleton />
    </main>
  );
}

