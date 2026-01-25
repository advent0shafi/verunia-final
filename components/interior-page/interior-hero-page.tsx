import Image from "next/image";

import interiorHero from "@/public/interior-page/image-interior-01.png";

import { ImageReveal } from "@/components/home/animated-section";

export default function InteriorHeroPage() {
    return (
        <main className="bg-white w-full h-screen relative">
            <ImageReveal className="w-full h-full">
                <Image
                    src={interiorHero}
                    alt="Interior Hero Image"
                    fill
                    sizes="100vw"
                    priority
                    placeholder="blur"
                    quality={82}
                    className="object-cover"
                />
            </ImageReveal>
        </main>
    )
}