import Image from "next/image";
import { StaticImageData } from "next/image";
import { ImageReveal, TextReveal } from "@/components/home/animated-section";
import imageAiFotiva06 from "@/public/ai-fotivo-page/image-ai-fotiva-06.png";
import imageAiFotiva07 from "@/public/ai-fotivo-page/image-ai-fotiva-07.png";
import imageAiFotiva08 from "@/public/ai-fotivo-page/image-ai-fotiva-08.png";
import imageAiFotiva09 from "@/public/ai-fotivo-page/image-ai-fotiva-09.png";   
type CollectionCardProps = {
    title: string;
    imageSrc: StaticImageData;
};

function CollectionCard({ title, imageSrc }: CollectionCardProps) {
    return (
        <div
            className={[
                "group relative overflow-hidden rounded-[6px] border border-white/10",
                "bg-[#171412] ring-1 ring-white/10",
                "shrink-0 snap-start",
                "h-[350px]  min-w-[280px]",
                "sm:h-[300px] sm:min-w-[360px]",
                "md:h-[400px] md:min-w-[400px]",
                "lg:h-[400px] lg:min-w-[400px]",
            ].join(" ")}
        >
            <ImageReveal className="w-full h-full">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    placeholder="blur"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 480px"
                />
            </ImageReveal>

            {/* Dark overlay + subtle bottom gradient for text legibility */}
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3
                    className="
                        font-helvetica 
                        font-light 
                        text-[#FFFDFA]
                        text-[30px] 
                        leading-[38px] 
                        tracking-[0%]
                        text-center
                    "
                >
                    {title}
                </h3>
            </div>
        </div>
    );
}

export default function AiFotivoSection04() {
    const collections = [
        {
            title: "Dining Collection",
            imageSrc: imageAiFotiva06,
        },
        {
            title: "Living Collection",
            imageSrc: imageAiFotiva07,
        },
        {
            title: "Luxury Collection",
            imageSrc: imageAiFotiva08,
        },
        {
            title: "Outdoor Collection",
            imageSrc: imageAiFotiva09,
        },

    ] as const;

    return (
        <section className="items-center bg-[#171412] flex flex-col justify-center px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-[1440px] h-full mx-auto">
                <div
                    className={[
                        "flex gap-4 md:gap-4",
                        "overflow-x-auto overscroll-x-contain scroll-smooth",
                        "snap-x snap-mandatory",
                        "pb-4 pr-2",
                        "touch-pan-x",
                        "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                    ].join(" ")}
                >
                    {collections.map((item) => (
                        <CollectionCard
                            key={item.title}
                            title={item.title}
                            imageSrc={item.imageSrc}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full max-w-[1440px] h-full mx-auto">
                <h2
                    className="font-helvetica font-light text-[#F5C547] text-[48px] leading-[60px] text-center tracking-[-0.02em] mt-[112px] mb-[42px]"
                >
                    <TextReveal>Featured works</TextReveal>
                </h2>
            </div>
        </section>
    );
}