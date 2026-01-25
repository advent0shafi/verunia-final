import Image from "next/image";

import aiFotivoHero from "@/public/ai-fotivo-page/ai-fotiva02.png";

import { ImageReveal } from "@/components/home/animated-section";

export default function AiFotivoHero() {
    return (
        <section className="bg-white w-full h-screen relative">
            <ImageReveal className="w-full h-full">
                <Image
                    src={aiFotivoHero}
                    alt="Interior Hero Image"
                    fill
                    sizes="100vw"
                    priority
                    placeholder="blur"
                    quality={82}
                    className="object-cover"
                />
            </ImageReveal>
            {/* Top linear gradient overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
                    zIndex: 1
                }}
            />
        </section>
    )
}