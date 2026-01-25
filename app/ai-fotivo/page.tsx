import AiFotivoHero from "@/components/ai-fotivo-page/ai-fotivo-hero";
import AiFotivaHeader from "@/components/header/ai-fotiva-header";
import Footer from "@/components/footer/footer";
import AiFotivoSection01 from "@/components/ai-fotivo-page/ai-fotivo-section01";
import AiFotivoSection02 from "@/components/ai-fotivo-page/ai-fotivo-section02";
import AiFotivoSection03 from "@/components/ai-fotivo-page/ai-fotivo-section03";
import AiFotivoSection04 from "@/components/ai-fotivo-page/ai-fotivo-section04";
import AiFotivoSection05 from "@/components/ai-fotivo-page/ai-fotivo-section05"
import { Metadata } from "next";
import { frontendPoint } from "@/lib/getData"   ;
import AiFotivoAward from "@/components/ai-fotivo-page/ai-fotivo-award";
export const metadata: Metadata = {
    title: 'Al Fotivo',
    description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
    keywords: ['Al Fotivo', 'AI-generated images', 'Verunia Furniture Trading LLC'],
    openGraph: {
        title: 'Al Fotivo - Verunia',
        description: 'Ambitious furniture professional at Verunia Furniture Trading LLC — crafting bespoke office, hospitality and villa interiors in Dubai with a focus on design, precision engineering and installation.',
        images: [{ url: `${frontendPoint}/opengraph-image.png` }],
    },
}
export default function AiFotivoPage() {
    return (
        <main>
            <AiFotivaHeader />
            <AiFotivoHero />
            <AiFotivoSection01 />
            <AiFotivoSection02 />
            <AiFotivoSection03 />
            <AiFotivoSection04 />
            <AiFotivoSection05 />
            <AiFotivoAward />
            <Footer />
        </main>
    )
}