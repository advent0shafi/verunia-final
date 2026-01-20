import Image from "next/image";
import SectionContainer from "../ui/section-container";

export default function AboutSections02() {
    return (
        <div className="">
            <SectionContainer>
                <div className="flex flex-col w-full py-[60px] md:py-[112px]">
                    {/* Our Vision Section */}
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="w-full md:w-[218px] mb-4 md:mb-0">
                            <h2 className="text-[#523E0F] font-instrument font-medium text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal text-left md:text-center">Our Vision</h2>
                        </div>
                        <div className="w-full md:max-w-[60%]">
                            <p className="text-[#523E0F] font-fraunces font-normal not-italic text-[28px] md:text-[40px] lg:text-[60px] leading-[36px] md:leading-[48px] lg:leading-[64px] tracking-[-0.02em] align-middle">
                                To become the definitive name in modern and luxury interiors—where bold design meets precise execution.
                            </p>
                        </div>
                    </div>

                    {/* Our Mission Section */}
                    <div className="pt-[60px] md:pt-[200px] flex flex-col md:flex-row">
                        <div className="hidden md:block w-[40%]">
                        </div>
                        <div className="flex flex-col md:flex-row w-full md:w-[60%]">
                            <div className="w-full md:w-[218px] mb-4 md:mb-0">
                                <h2 className="text-[#523E0F] font-instrument font-medium text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal text-left md:text-center">Our Mission</h2>
                            </div>
                            <div className="w-full">
                                <h3 className="text-[#523E0F] font-fraunces font-normal not-italic text-[28px] md:text-[40px] lg:text-[60px] leading-[36px] md:leading-[48px] lg:leading-[64px] tracking-[-0.02em] align-middle">
                                    We design beyond aesthetics.
                                </h3>
                                <p className="text-[#523E0F] pt-[24px] md:pt-[40px] max-w-full md:max-w-[469px] font-instrument font-normal not-italic text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-normal align-middle">
                                    Our mission is to deliver immersive, future-ready spaces through innovative fit-out and custom furniture—spaces that are not only seen, but felt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

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