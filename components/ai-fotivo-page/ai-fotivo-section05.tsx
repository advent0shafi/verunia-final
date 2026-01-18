import Image from "next/image";

type FeaturedWorkCardProps = {
    title: string;
    location: string;
    imageSrc: string;
};

function FeaturedWorkCard({ title, location, imageSrc }: FeaturedWorkCardProps) {
    return (
        <div
            className={[
                "group relative overflow-hidden rounded-[8px]",
                "bg-[#171412] ring-1 ring-white/10",
                "min-h-[260px] sm:min-h-[320px] md:min-h-[420px]",
            ].join(" ")}
        >
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 480px"
            />

            {/* Dark overlay + subtle bottom gradient for text legibility */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3
                    className="
            font-fraunces font-light
            text-[#FFFDFA]
            text-[30px] leading-[38px]
            tracking-[0%]
          "
                >
                    {title}
                </h3>
                <p className="font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-normal text-[#FFFDFA]/80 mt-2">
                    {location}
                </p>
            </div>
        </div>
    );
}

type LuxuryCollectionBannerProps = {
    imageSrc: string;
};


function LuxuryCollectionBanner({ imageSrc }: LuxuryCollectionBannerProps) {
    return (
        <div
            className={[
                "group relative overflow-hidden rounded-[6px] border border-white/10",
                "bg-[#171412] ring-1 ring-white/10",
                "min-h-[320px] md:min-h-[687px]",
            ].join(" ")}
        >
            <Image
                src={imageSrc}
                alt="Luxury Collection"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 1440px"
                priority={false}
            />

            {/* Dark overlay + subtle bottom gradient for text legibility */}
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-end px-6 text-center pb-[48px]">
                <p className="font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-normal text-[#FFFDFA]/80">
                    Discover Brands
                </p>
                <h3
                    className="font-fraunces font-light text-[#FFFDFA] text-[48px] leading-[60px] tracking-[-0.02em] text-center py-3 drop-shadow"
                >
                    Luxury Collection
                </h3>

                <button
                    type="button"
                    className="pb-2 font-instrument font-normal text-[#FFFDFA] not-italic text-[16px] leading-[24px] tracking-normal border-b border-[#FFFDFA]/70 hover:border-[#FFFDFA] transition-colors"
                >
                    About Al Fotivo <span aria-hidden>→</span>
                </button>
            </div>
        </div>
    );
}

export default function AiFotivoSection05() {
    const items = [
        {
            title: "Evening living room",
            location: "Doha, Qatar",
            imageSrc: "/ai-fotivo-page/ai-fotiva (10).png",
        },
        {
            title: "Penthouse dining",
            location: "Dubai, UAE",
            imageSrc: "/ai-fotivo-page/ai-fotiva (5).png",
        },
        {
            title: "Master suite corner",
            location: "Riyadh, Saudi Arabia",
            imageSrc: "/ai-fotivo-page/ai-fotiva (4).png",
        },
    ] as const;

    return (
        <section className="items-center bg-[#171412] flex flex-col justify-center px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-[1440px] h-full max-md:max-w-full py-10 md:py-12 relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {items.map((item) => (
                        <FeaturedWorkCard
                            key={item.title}
                            title={item.title}
                            location={item.location}
                            imageSrc={item.imageSrc}
                        />
                    ))}
                </div>

                <div className="py-[16px]">
                    <LuxuryCollectionBanner imageSrc="/ai-fotivo-page/ai-fotiva (7).png" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {items.map((item) => (
                        <FeaturedWorkCard
                            key={item.title}
                            title={item.title}
                            location={item.location}
                            imageSrc={item.imageSrc}
                        />
                    ))}
                </div>
                <div className="py-[16px]">
                    <LuxuryCollectionBanner imageSrc="/ai-fotivo-page/ai-fotiva04.png" />
                </div>
            </div>
        </section>
    );
}