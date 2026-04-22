import Header from "@/components/header/header";
import Hero from "@/components/home/hero";
import AnimatedSection from "@/components/home/animated-section";
import VeruniaFooter from "@/components/footer/footer";
import { getInteriors } from "@/lib/interiors";
import { mapInteriorsToUI, type InteriorProjectUI } from "@/lib/mapInteriors";
import dynamic from "next/dynamic";
import LazyLoadSection from "@/components/ui/lazy-load-section";
import { Suspense } from "react";

const Sections = dynamic(() => import("@/components/home/sections"), {
  loading: () => <SectionFallback minHeightClass="min-h-[900px]" />,
});

const Sections02 = dynamic(() => import("@/components/home/sections02"), {
  loading: () => <SectionFallback minHeightClass="min-h-[700px]" />,
});

const Sections03 = dynamic(() => import("@/components/home/sections03"), {
  loading: () => <SectionFallback minHeightClass="min-h-[900px]" />,
});

const GlobeDemo = dynamic(
  () => import("@/components/home/sections04").then((mod) => mod.GlobeDemo),
  {
    loading: () => <SectionFallback minHeightClass="min-h-[520px]" />,
  }
);

const Sections05 = dynamic(() => import("@/components/home/sections05"), {
  loading: () => <SectionFallback minHeightClass="min-h-[620px]" />,
});

function pickRandomProjects(projects: InteriorProjectUI[], count: number): InteriorProjectUI[] {
  const shuffled = [...projects];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

function SectionFallback({ minHeightClass }: { minHeightClass: string }) {
  return (
    <div
      aria-hidden
      className={`w-full animate-pulse rounded-md bg-[#F7EFE2] ${minHeightClass}`}
    />
  );
}

async function HomeInteriorProjects() {
  const apiData = await getInteriors();
  const projects = mapInteriorsToUI(apiData);
  const randomInteriorProjects = pickRandomProjects(projects, 4);

  return <Sections03 projects={randomInteriorProjects} />;
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sections />

      <LazyLoadSection minHeightClass="min-h-[700px]">
        <AnimatedSection variant="fade">
          <Sections02 />
        </AnimatedSection>
      </LazyLoadSection>

      <LazyLoadSection minHeightClass="min-h-[900px]">
        <AnimatedSection variant="slide-up">
          <Suspense fallback={<SectionFallback minHeightClass="min-h-[900px]" />}>
            <HomeInteriorProjects />
          </Suspense>
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
      <VeruniaFooter />
    </main>
  );
}
