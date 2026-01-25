import Footer from "@/components/footer/footer";
import FurniturePageHero from "@/components/furniture-page/furniture-page-hero";
import FurnitureProductPage from "@/components/furniture-page/furniture-product-page";
import Header from "@/components/header/header";
import FurnitureDesignedSection from "@/components/furniture-page/furniture-designed-section";
import FurnitureDesignedSection02 from "@/components/furniture-page/furtinure-designed-section-02";
import FurnitureBestProduct from "@/components/furniture-page/furniture-best-product";
import FurnitureAwardsSection from "@/components/furniture-page/furniture-awards-section";
import { Metadata } from "next";
import { frontendPoint } from "@/lib/getData";
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
      <FurnitureProductPage />
      <FurnitureDesignedSection />
      <FurnitureBestProduct />
      <FurnitureDesignedSection02 />
      <FurnitureAwardsSection />
      <Footer />
    </main>
  );
}