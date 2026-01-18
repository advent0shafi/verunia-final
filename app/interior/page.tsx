import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import InteriorHeader from "@/components/header/interior-header";
import InteriorHeroPage from "@/components/interior-page/interior-hero-page";
import InteriorSection01 from "@/components/interior-page/interior-section-01";
import InteriorSection02 from "@/components/interior-page/interior-section-02";
import InteriorSection03 from "@/components/interior-page/interior-section-03";
export default function InteriorPage() {
  return (
    <main>
      <InteriorHeader />
      <InteriorHeroPage />
      <InteriorSection01 />
      <InteriorSection02 />
      <InteriorSection03 />
      <Footer />
    </main>
  );
}