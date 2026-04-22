import Footer from "@/components/footer/footer";
import InteriorHeader from "@/components/header/interior-header";
import InteriorHeroPage from "@/components/interior-page/interior-hero-page";

import { Metadata } from "next";
import { frontendPoint } from "@/lib/getData";
import dynamic from "next/dynamic";
export const metadata: Metadata = {
  title: 'Interior',
  description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
  keywords: ['Furniture', 'Verunia Furniture Trading LLC'],
  openGraph: {
    title: 'Interior - Verunia',
    description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
    images: [{ url: `${frontendPoint}/opengraph-image.png` }],
  },
}

import AnimatedSection from "@/components/home/animated-section";
import { getInteriors } from "@/lib/interiors";
import { mapInteriorsToUI } from "@/lib/mapInteriors";
import LazyLoadSection from "@/components/ui/lazy-load-section";

const InteriorHeroDescriptions = dynamic(
  () => import("@/components/interior-page/interior-hero-descriptions"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[220px]" />,
  }
);

const InteriorSection01 = dynamic(
  () => import("@/components/interior-page/interior-section-01"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[700px]" />,
  }
);

const InteriorSection02 = dynamic(
  () => import("@/components/interior-page/interior-section-02"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[620px]" />,
  }
);

const InteriorSection03 = dynamic(
  () => import("@/components/interior-page/interior-section-03"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[820px]" />,
  }
);

const InteriorClients = dynamic(
  () => import("@/components/interior-page/interior-clients"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[420px]" />,
  }
);

const AiFotivoAward = dynamic(
  () => import("@/components/ai-fotivo-page/ai-fotivo-award"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[360px]" />,
  }
);

function PageSectionFallback({ minHeightClass }: { minHeightClass: string }) {
  return (
    <div
      aria-hidden
      className={`w-full animate-pulse rounded-md bg-[#1F1A16] ${minHeightClass}`}
    />
  );
}
  
export default async function InteriorPage() {
  const apiData = await getInteriors();
  const projects = mapInteriorsToUI(apiData);
  const featuredProjects = projects.filter(p => p.isFeatured);

  return (
    <main className="bg-[#171412]">
      <InteriorHeader />
      <InteriorHeroPage />
      <LazyLoadSection minHeightClass="min-h-[220px]">
        <AnimatedSection variant="slide-up">
          <InteriorHeroDescriptions />
        </AnimatedSection>
      </LazyLoadSection>
      <LazyLoadSection minHeightClass="min-h-[700px]">
        <AnimatedSection variant="fade">
          <InteriorSection01 projects={featuredProjects.slice(0, 3)} />
        </AnimatedSection>
      </LazyLoadSection>

      <LazyLoadSection minHeightClass="min-h-[620px]">
        <AnimatedSection variant="slide-up">
          <InteriorSection02 />
        </AnimatedSection>
      </LazyLoadSection>

      <LazyLoadSection minHeightClass="min-h-[820px]">
        <AnimatedSection variant="scale">
          <InteriorSection03 projects={featuredProjects.slice(3, 9)} />
        </AnimatedSection>
      </LazyLoadSection>

      <LazyLoadSection minHeightClass="min-h-[420px]">
        <AnimatedSection variant="fade">
          <InteriorClients />
        </AnimatedSection>
      </LazyLoadSection>

      {/* <LazyLoadSection minHeightClass="min-h-[360px]">
        <AnimatedSection variant="fade">
          <AiFotivoAward />
        </AnimatedSection>
      </LazyLoadSection> */}

      <Footer />
    </main>
  );
}