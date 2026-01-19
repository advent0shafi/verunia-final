import Image from "next/image";

import interiorHero from "@/public/interior-page/hero-01.png";

export default function InteriorHeroPage() {
    return (
        <main className="bg-white w-full h-screen relative">
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
        </main>
    )
}