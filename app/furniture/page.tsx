import Footer from "@/components/footer/footer";
import FurniturePageHero from "@/components/furniture-page/furniture-page-hero";
import FurnitureProductPage from "@/components/furniture-page/furniture-product-page";
import Header from "@/components/header/header";
import FurnitureDesignedSection from "@/components/furniture-page/furniture-designed-section";
import FurnitureDesignedSection02 from "@/components/furniture-page/furtinure-designed-section-02";
export default function FurniturePage() {
  return (
    <main>
      <Header />
      <FurniturePageHero />
      <FurnitureProductPage />
      <FurnitureDesignedSection />
      <FurnitureProductPage />
      <FurnitureDesignedSection02 />
      <Footer />
    </main>
  );
}