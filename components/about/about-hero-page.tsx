import Image from "next/image";
import SectionContainer from "../ui/section-container";

export default function AboutHeroPage() {
    return (
        <section className="bg-[#FFFDFA] w-full relative">
            <SectionContainer>
                <div className="w-full flex flex-col md:flex-row relative pt-[60px] md:pt-[80px]">
                    <div className="w-full">
                        <h1 className="font-fraunces font-normal mx-auto text-[36px] md:text-[56px] lg:text-[72px] leading-[44px] md:leading-[64px] lg:leading-[82px] tracking-[-0.02em] text-[#523E0F]">
                            Where great <br className="hidden md:block" /> 
                            <span className="md:hidden"> </span>
                            spaces <span className="italic">begin.</span>
                        </h1>
                    </div>
                    <div className="w-full">
                        <div className="pt-[24px] md:pt-[160px]">
                            <h3
                                className="font-instrument max-w-full md:max-w-[337px] font-medium not-italic text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] tracking-normal align-middle text-[#271E07]"
                            >
                                Verunia is built at the intersection of design and delivery.
                            </h3>
                            <p className="font-instrument font-normal pt-[12px] md:pt-[16px] not-italic text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-normal align-middle text-[#271E07]">
                                We create furniture and interior environments that balance functionality, aesthetics, and durability—serving residential, commercial, and hospitality clients across the Middle East and beyond.
                            </p>
                            <p className="font-instrument font-normal not-italic text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-normal align-middle text-[#271E07]">
                                Verunia Group brings together specialised brands in office furniture, interior design, and luxury interiors. What connects them is a shared standard: work that looks refined, performs reliably, and holds its quality over time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 md:mt-10">
                    <Image
                        src={'/about-page/image-01.png'}
                        alt="Verunia"
                        width={1440}
                        height={535}
                        priority
                        className="w-full h-[250px] md:h-[400px] lg:h-[535px] object-cover rounded-[6px] md:rounded-none"
                    />
                </div>
            </SectionContainer>
        </section>
    )
}