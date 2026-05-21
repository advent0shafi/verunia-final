import Footer from "@/components/footer/footer";
import FurniturePageHero from "@/components/furniture-page/furniture-page-hero";
import FurnitureCatalogNav from "@/components/furniture-page/furniture-catalog-nav";
import Header from "@/components/header/header";
import { Metadata } from "next";
import { frontendPoint } from "@/lib/getData";
import dynamic from "next/dynamic";
import LazyLoadSection from "@/components/ui/lazy-load-section";

const FurnitureBestProduct = dynamic(
  () => import("@/components/furniture-page/furniture-best-product"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[700px]" />,
  }
);

const FurniturePlanningIdeasSection = dynamic(
  () => import("@/components/furniture-page/furniture-planning-ideas-section"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[420px]" />,
  }
);

const FurnitureDesignedSection = dynamic(
  () => import("@/components/furniture-page/furniture-designed-section"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[520px]" />,
  }
);

const FurnitureProductPage = dynamic(
  () => import("@/components/furniture-page/furniture-product-page"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[740px]" />,
  }
);

const FurnitureDesignedSection02 = dynamic(
  () => import("@/components/furniture-page/furtinure-designed-section-02"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[520px]" />,
  }
);

const FurnitureAwardsSection = dynamic(
  () => import("@/components/furniture-page/furniture-awards-section"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[340px]" />,
  }
);

function PageSectionFallback({ minHeightClass }: { minHeightClass: string }) {
  return (
    <div
      aria-hidden
      className={`w-full animate-pulse rounded-md bg-[#F7EFE2] ${minHeightClass}`}
    />
  );
}

export const metadata: Metadata = {
    title: 'Furniture',
    description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
    keywords: ['Furniture', 'Verunia Furniture Trading LLC'],
    openGraph: {
        title: 'Furniture - Verunia',
        description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
        images: [{ url: `${frontendPoint}/opengraph-image.png` }],
    },
} 
export default function FurniturePage() {
  return (
    <main>
      <Header />
      <FurniturePageHero />
      <FurnitureCatalogNav />

      <LazyLoadSection minHeightClass="min-h-[700px]">
        <FurnitureBestProduct />
      </LazyLoadSection>
      <LazyLoadSection minHeightClass="min-h-[520px]">
        <FurnitureDesignedSection />
      </LazyLoadSection>
      <LazyLoadSection minHeightClass="min-h-[740px]">
        <FurnitureProductPage />
      </LazyLoadSection>
      <LazyLoadSection minHeightClass="min-h-[520px]">
        <FurnitureDesignedSection02 />
      </LazyLoadSection>
      <LazyLoadSection minHeightClass="min-h-[420px]">
        <FurniturePlanningIdeasSection />
      </LazyLoadSection>
      {/* <LazyLoadSection minHeightClass="min-h-[340px]">
        <FurnitureAwardsSection />
      </LazyLoadSection> */}
      <Footer />
    </main>
  );
}