import Image from "next/image";
import SectionContainer from "../ui/section-container";

export default function AboutSections03() {
    return (
        <div>
            <SectionContainer>
                <div className="w-full py-[60px] md:py-[112px]">
                    {/* Main Heading */}
                    <h2 className="text-[#271E07] font-fraunces font-normal not-italic text-center
                        text-[28px] leading-[36px] tracking-[-0.02em]
                        md:text-[48px] md:leading-[60px] mb-8 md:mb-20">
                        Three expert brands.
                        <br />
                        One Verunia vision.
                    </h2>

                    {/* Three Brand Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                        {/* Card 1: Verunia Interiors */}
                        <div className="group flex flex-col overflow-hidden transition-shadow duration-300">
                            <div className="relative w-full h-[200px] sm:h-[220px] md:h-[280px] overflow-hidden">
                                <Image
                                    src="/about-page/image-01.png"
                                    alt="Verunia Interiors - Interior design and fit-out"
                                    width={421}
                                    height={280}
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="w-full h-full object-cover rounded-[6px] transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="pt-4 md:pt-6 flex flex-col items-center text-center">
                                <h3 className="font-fraunces font-normal not-italic text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-normal text-center text-[#523E0F]">
                                    Verunia Interiors
                                </h3>
                                <p className="font-instrument pt-2 max-w-[275px] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[0em] text-center text-[#57534E]">
                                    Interior design and fit-out for offices, hospitality and residential spaces.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Verunia Furniture */}
                        <div className="group flex flex-col overflow-hidden transition-shadow duration-300">
                            <div className="relative w-full h-[200px] sm:h-[220px] md:h-[280px] overflow-hidden">
                                <Image
                                    src="/about-page/image-02.png"
                                    alt="Verunia Furniture - Office furniture systems"
                                    width={421}
                                    height={280}
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="w-full h-full object-cover rounded-[6px] transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="pt-4 md:pt-6 flex flex-col items-center text-center">
                                <h3 className="font-fraunces font-normal not-italic text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-normal text-center text-[#523E0F]">
                                    Verunia Furniture
                                </h3>
                                <p className="font-instrument pt-2 max-w-[275px] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[0em] text-center text-[#57534E]">
                                    Office furniture systems and seating for modern workplaces.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Al Fotivo */}
                        <div className="group flex flex-col overflow-hidden transition-shadow duration-300 sm:col-span-2 md:col-span-1">
                            <div className="relative w-full h-[200px] sm:h-[220px] md:h-[280px] overflow-hidden sm:max-w-[50%] md:max-w-full sm:mx-auto">
                                <Image
                                    src="/about-page/image-04.png"
                                    alt="Al Fotivo - Luxury interiors and furniture"
                                    width={421}
                                    height={280}
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="w-full h-full object-cover rounded-[6px] transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="pt-4 md:pt-6 flex flex-col items-center text-center">
                                <h3 className="font-fraunces font-normal not-italic text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-normal text-center text-[#523E0F]">
                                    Al Fotivo
                                </h3>
                                <p className="font-instrument pt-2 max-w-[275px] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[0em] text-center text-[#57534E]">
                                    Luxury interiors and furniture.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <Image
                    src="/ui/divider-sections.svg"
                    alt="Verunia Group"
                    width={1000}
                    height={1000}
                    sizes="100vw"
                    unoptimized
                    className="w-full h-full object-cover py-[60px] md:py-[112px] md:block hidden"
                />
                <Image
                    src="/ui/gold-divider-mobile.svg"
                    alt="Verunia Group"
                    width={1000}
                    height={1000}
                    sizes="100vw"
                    unoptimized
                    className="w-full h-full object-cover pt-[64px] md:py-[112px] md:hidden block"
                />
            </SectionContainer>
        </div>
    )
}