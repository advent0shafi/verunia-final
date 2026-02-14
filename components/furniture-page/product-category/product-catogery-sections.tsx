import Image from "next/image";
import CategoryNavHeader from "@/components/ui/category-nav-header";

export default function ProductCategorySections({
    imageSrc = "/furniture-page/furtinure.png",
    imageAlt = "Furniture collage",
}: {
    imageSrc?: string;
    imageAlt?: string;
}) {

  
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
               <CategoryNavHeader />

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