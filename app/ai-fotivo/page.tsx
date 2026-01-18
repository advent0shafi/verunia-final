import AiFotivoHero from "@/components/ai-fotivo-page/ai-fotivo-hero";
import AiFotivaHeader from "@/components/header/ai-fotiva-header";
import Footer from "@/components/footer/footer";
import AiFotivoSection01 from "@/components/ai-fotivo-page/ai-fotivo-section01";
import AiFotivoSection02 from "@/components/ai-fotivo-page/ai-fotivo-section02";
import AiFotivoSection03 from "@/components/ai-fotivo-page/ai-fotivo-section03";
import AiFotivoSection04 from "@/components/ai-fotivo-page/ai-fotivo-section04";
import AiFotivoSection05 from "@/components/ai-fotivo-page/ai-fotivo-section05";
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
            <Footer />
        </main>
    )
}