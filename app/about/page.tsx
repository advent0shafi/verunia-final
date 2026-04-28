import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import AboutHeroPage from "@/components/about/about-hero-page";
import AnimatedSection from "@/components/home/animated-section";
import { Metadata } from "next";
import { frontendPoint } from "@/lib/getData";
import dynamic from "next/dynamic";
import LazyLoadSection from "@/components/ui/lazy-load-section";
import Sections05 from "@/components/home/sections05";

const AboutSections01 = dynamic(() => import("@/components/about/about-sections-01"), {
  loading: () => <PageSectionFallback minHeightClass="min-h-[520px]" />,
});

const AboutSections02 = dynamic(() => import("@/components/about/about-sections-02"), {
  loading: () => <PageSectionFallback minHeightClass="min-h-[520px]" />,
});

const AboutSections03 = dynamic(() => import("@/components/about/about-sections-03"), {
  loading: () => <PageSectionFallback minHeightClass="min-h-[700px]" />,
});

const GlobeDemo = dynamic(
  () => import("@/components/home/sections04").then((mod) => mod.GlobeDemo),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[520px]" />,
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
  title: "About Us",
  description:
    "Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.",
  keywords: [
    "Verunia About Us",
    "interior design Dubai",
    "architecture firm",
    "Dubai design company",
    "turnkey projects",
    "innovative design solutions",
    "Verunia Furniture Trading LLC",
  ],
  openGraph: {
    title: "About Verunia - Our Vision and Expertise",
    description:
      "Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.",
    images: [{ url: `${frontendPoint}/opengraph-image.png` }],
  },
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHeroPage />

      <LazyLoadSection minHeightClass="min-h-[520px]">
        <AnimatedSection variant="fade">
          <AboutSections01 />
        </AnimatedSection>
      </LazyLoadSection>

      <LazyLoadSection minHeightClass="min-h-[520px]">
        <AnimatedSection variant="fade">
          <AboutSections02 />
        </AnimatedSection>
      </LazyLoadSection>

      <LazyLoadSection minHeightClass="min-h-[700px]">
        <AnimatedSection variant="fade">
          <AboutSections03 />
        </AnimatedSection>
      </LazyLoadSection>

      <LazyLoadSection minHeightClass="min-h-[520px]">
        <AnimatedSection variant="scale">
          <GlobeDemo />
        </AnimatedSection>
      </LazyLoadSection>

      <LazyLoadSection minHeightClass="min-h-[620px]">
        <AnimatedSection variant="fade">
          <Sections05 />
        </AnimatedSection>
      </LazyLoadSection>

      <Footer />
    </main>
  );
}