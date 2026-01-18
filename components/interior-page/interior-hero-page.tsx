import Image from "next/image";

export default function InteriorHeroPage() {
    return (
        <main className="bg-white w-full h-screen">
            <Image src="/hero-image/image-01.png" alt="Interior Hero Image" width={1000} height={1000} className="w-full h-full object-cover" />
        </main>
    )
}