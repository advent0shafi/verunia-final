import Image from "next/image";
import { Armchair, Box, Package, Search, Sofa, Sparkles, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import deskHero from "@/public/furniture-page/desk-hero.png";
import Link from "next/link";

export default function ProductCategorySections({
    imageSrc = "/furniture-page/furtinure.png",
    imageAlt = "Furniture collage",
}: {
    imageSrc?: string;
    imageAlt?: string;
}) {

    const categories = [
        { label: "Chairs", slug: "chairs", Icon: Armchair },
        { label: "Desks", slug: "desks", Icon: Table },
        { label: "Sofas", slug: "sofas", Icon: Sofa },
        { label: "Storage", slug: "storage", Icon: Package },
        { label: "Silent Boxes", slug: "silent-boxes", Icon: Box },
        { label: "Accessories", slug: "accessories", Icon: Sparkles },
    ] as const;
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="px-4 md:px-0 lg:px-0">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
                        <nav
                            aria-label="Furniture catalog categories"
                            className="flex items-center gap-3 overflow-x-auto py-1 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {categories.map(({ label, slug, Icon }) => (
                                <Button
                                    key={slug}
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="shrink-0 bg-white text-[#1C1917] rounded-[4px] py-2 px-4 border-[#E5E1D6] hover:bg-white/70"
                                >
                                    <Link href={`/furniture?category=${slug}`} className="gap-2">
                                        <Icon className="size-4 text-[#1C1917]" aria-hidden="true" />
                                        <span className="font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-normal">{label}</span>
                                    </Link>
                                </Button>
                            ))}
                        </nav>

                        <div className="relative w-full md:max-w-[320px] bg">
                            <Search
                                className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#78716C]"
                                aria-hidden="true"
                            />
                            <input
                                placeholder="Search Catalog"
                                type="text"
                                className="h-10  pl-9  text-[#1C1917] placeholder:text-[#A8A29E]"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center  min-h-[584px]">
                    {/* Left heading */}
                    <div className="flex flex-col justify-center h-full">
                        <h2 className="font-instrument font-medium text-[36px] leading-[48px] [-letter-spacing:-0.02em] text-[#1C1917] md:text-[60px] md:leading-[72px]">
                            Office Chairs

                        </h2>
                        <p className="font-instrument font-medium text-[#1C1917]/80 text-[20px] leading-[30px] tracking-normal">
                            A full range of chairs that suit every purpose & setting.
                        </p>
                    </div>

                    {/* Right image */}
                    <div className="h-full bg-green-300">
                        <div className="w-full bg-white rounded-sm overflow-hidden">
                            <div className="relative w-full h-full min-h-[584px]">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-contain min-h-[413.929443359375px]"
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}