import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import InteriorHeader from "@/components/header/interior-header";
import InteriorHeroPage from "@/components/interior-page/interior-hero-page";
import InteriorSection01 from "@/components/interior-page/interior-section-01";
import InteriorSection02 from "@/components/interior-page/interior-section-02";
import InteriorSection03 from "@/components/interior-page/interior-section-03";

import { Metadata } from "next";
import { frontendPoint } from "@/lib/getData";
import AiFotivoAward from "@/components/ai-fotivo-page/ai-fotivo-award";
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

export default async function InteriorPage() {
  const apiData = await getInteriors();
  const projects = mapInteriorsToUI(apiData);
  const featuredProjects = projects.filter(p => p.isFeatured);

  return (
    <main className="bg-[#171412]">
      <InteriorHeader />
      <InteriorHeroPage />

      <AnimatedSection variant="fade">
        <InteriorSection01 projects={featuredProjects.slice(0, 3)} />
      </AnimatedSection>

      <AnimatedSection variant="slide-up">
        <InteriorSection02 />
      </AnimatedSection>

      <AnimatedSection variant="scale">
        <InteriorSection03 projects={featuredProjects.slice(3, 9)} />
      </AnimatedSection>

      <AnimatedSection variant="fade">
        <AiFotivoAward />
      </AnimatedSection>

      <Footer />
    </main>
  );
}