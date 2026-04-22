import AiFotivoHero from "@/components/ai-fotivo-page/ai-fotivo-hero";
import AiFotivaHeader from "@/components/header/ai-fotiva-header";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";
import { frontendPoint } from "@/lib/getData";
import dynamic from "next/dynamic";
export const metadata: Metadata = {
    title: 'Bespoke',
    description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
    keywords: ['Bespoke', 'AI-generated images', 'Verunia Furniture Trading LLC'],
    openGraph: {
        title: 'Bespoke - Verunia',
        description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
        images: [{ url: `${frontendPoint}/opengraph-image.png` }],
    },
}
import AnimatedSection from "@/components/home/animated-section";
import LazyLoadSection from "@/components/ui/lazy-load-section";

const AiFotivoSection01 = dynamic(
  () => import("@/components/ai-fotivo-page/ai-fotivo-section01"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[620px]" />,
  }
);

const AiFotivoSection02 = dynamic(
  () => import("@/components/ai-fotivo-page/ai-fotivo-section02"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[620px]" />,
  }
);

const AiFotivoSection03 = dynamic(
  () => import("@/components/ai-fotivo-page/ai-fotivo-section03"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[620px]" />,
  }
);

const AiFotivoSection04 = dynamic(
  () => import("@/components/ai-fotivo-page/ai-fotivo-section04"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[620px]" />,
  }
);

const AiFotivoSection05 = dynamic(
  () => import("@/components/ai-fotivo-page/ai-fotivo-section05"),
  {
    loading: () => <PageSectionFallback minHeightClass="min-h-[620px]" />,
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
      className={`w-full animate-pulse rounded-md bg-[#F7EFE2] ${minHeightClass}`}
    />
  );
}

export default function BespokePage() {
    return (
        <main>
            <AiFotivaHeader />
            <AiFotivoHero />

            <LazyLoadSection minHeightClass="min-h-[620px]">
                <AnimatedSection variant="slide-up">
                    <AiFotivoSection01 />
                </AnimatedSection>
            </LazyLoadSection>

            <LazyLoadSection minHeightClass="min-h-[620px]">
                <AnimatedSection variant="slide-up">
                    <AiFotivoSection02 />
                </AnimatedSection>
            </LazyLoadSection>

            <LazyLoadSection minHeightClass="min-h-[620px]">
                <AnimatedSection variant="scale">
                    <AiFotivoSection03 />
                </AnimatedSection>
            </LazyLoadSection>

            <LazyLoadSection minHeightClass="min-h-[620px]">
                <AnimatedSection variant="slide-up">
                    <AiFotivoSection04 />
                </AnimatedSection>
            </LazyLoadSection>

            <LazyLoadSection minHeightClass="min-h-[620px]">
                <AnimatedSection variant="fade">
                    <AiFotivoSection05 />
                </AnimatedSection>
            </LazyLoadSection>

            <LazyLoadSection minHeightClass="min-h-[360px]">
                <AnimatedSection variant="fade">
                    <AiFotivoAward />
                </AnimatedSection>
            </LazyLoadSection>

            <Footer />
        </main>
    )
}