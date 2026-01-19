import Footer from "@/components/footer/footer";
import FurniturePageHero from "@/components/furniture-page/furniture-page-hero";
import FurnitureProductPage from "@/components/furniture-page/furniture-product-page";
import Header from "@/components/header/header";
import FurnitureDesignedSection from "@/components/furniture-page/furniture-designed-section";
import FurnitureDesignedSection02 from "@/components/furniture-page/furtinure-designed-section-02";
import FurnitureBestProduct from "@/components/furniture-page/furniture-best-product";
import FurnitureAwardsSection from "@/components/furniture-page/furniture-awards-section";
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