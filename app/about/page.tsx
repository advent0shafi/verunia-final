import Header from "@/components/header/header";
import { FooterSkeleton } from "@/components/home/home-skeletons";
import Footer from "@/components/footer/footer";
import AboutHeroPage from "@/components/about/about-hero-page";
import AboutSections01 from "@/components/about/about-sections-01";
import AboutSections02 from "@/components/about/about-sections-02";
import AnimatedSection from "@/components/home/animated-section";
import { GlobeDemo } from "@/components/home/sections04";
import AboutSections03 from "@/components/about/about-sections-03";
export default function AboutPage() {
    return (
        <main>
            <Header />
            <AboutHeroPage />
            <AboutSections01/>
            <AboutSections02/>
            <AboutSections03/>
            <AnimatedSection variant="scale">

        <GlobeDemo />
      </AnimatedSection>
            <Footer />
        </main>
    )
}