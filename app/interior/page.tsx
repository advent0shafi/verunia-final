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

export default function InteriorPage() {
  return (
    <main>
      <InteriorHeader />
      <InteriorHeroPage />
      <InteriorSection01 />
      <InteriorSection02 />
      <InteriorSection03 />
      <AiFotivoAward/>
      <Footer />
    </main>
  );
}