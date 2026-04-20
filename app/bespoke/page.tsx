import AiFotivoHero from "@/components/ai-fotivo-page/ai-fotivo-hero";
import AiFotivaHeader from "@/components/header/ai-fotiva-header";
import Footer from "@/components/footer/footer";
import AiFotivoSection01 from "@/components/ai-fotivo-page/ai-fotivo-section01";
import AiFotivoSection02 from "@/components/ai-fotivo-page/ai-fotivo-section02";
import AiFotivoSection03 from "@/components/ai-fotivo-page/ai-fotivo-section03";
import AiFotivoSection04 from "@/components/ai-fotivo-page/ai-fotivo-section04";
import AiFotivoSection05 from "@/components/ai-fotivo-page/ai-fotivo-section05"
import { Metadata } from "next";
import { frontendPoint } from "@/lib/getData";
import AiFotivoAward from "@/components/ai-fotivo-page/ai-fotivo-award";
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

export default function BespokePage() {
    return (
        <main>
            <AiFotivaHeader />
            <AiFotivoHero />

            <AnimatedSection variant="slide-up">
                <AiFotivoSection01 />
            </AnimatedSection>

            <AnimatedSection variant="slide-up">
                <AiFotivoSection02 />
            </AnimatedSection>

            <AnimatedSection variant="scale">
                <AiFotivoSection03 />
            </AnimatedSection>

            <AnimatedSection variant="slide-up">
                <AiFotivoSection04 />
            </AnimatedSection>

            <AnimatedSection variant="fade">
                <AiFotivoSection05 />
            </AnimatedSection>

            <AnimatedSection variant="fade">
                <AiFotivoAward />
            </AnimatedSection>

            <Footer />
        </main>
    )
}