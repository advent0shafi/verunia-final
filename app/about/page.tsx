import Header from "@/components/header/header";
import { FooterSkeleton } from "@/components/home/home-skeletons";
import Footer from "@/components/footer/footer";
import AboutHeroPage from "@/components/about/about-hero-page";
import AboutSections01 from "@/components/about/about-sections-01";
import AboutSections02 from "@/components/about/about-sections-02";
import AnimatedSection from "@/components/home/animated-section";
import { GlobeDemo } from "@/components/home/sections04";
import AboutSections03 from "@/components/about/about-sections-03";
import { Metadata } from "next";
import { frontendPoint } from "@/lib/getData";
export const metadata: Metadata = {
    title: 'About Us',
    description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
    keywords: ['Verunia About Us', 'interior design Dubai', 'architecture firm', 'Dubai design company', 'turnkey projects', 'innovative design solutions', 'Verunia Furniture Trading LLC'],
    openGraph: {
      title: 'About Verunia - Our Vision and Expertise',
      description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
      images: [{ url: `${frontendPoint}/opengraph-image.png` }],
    },
  } 
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