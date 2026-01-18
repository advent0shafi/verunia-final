import Image from "next/image";

export default function AiFotivoHero() {
    return (
        <section className="bg-white w-full h-screen relative">
            <Image 
                src="/ai-fotivo-page/ai-fotiva02.png" 
                alt="Interior Hero Image" 
                width={1000} 
                height={1000} 
                className="w-full h-full object-cover" 
            />
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