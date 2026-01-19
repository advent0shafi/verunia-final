import Image from "next/image";
import SectionContainer from "../ui/section-container";

export default function Sections() {
    return (
        <SectionContainer>
            <div className="w-full h-full flex flex-col md:flex-row">
                <div className="w-full md:w-[35%] h-full order-2 md:order-1">
                    <div className="px-4 md:px-[48px] py-8 md:py-0">
                        <div>
                            <h1 className="mb-4 md:mb-6 font-normal text-[#523E0F] not-italic text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] [-letter-spacing:--0.02em] font-fraunces">
                                Verunia <br />Interiors
                            </h1>
                        </div>
                        <div className="pt-4 md:pt-[277px]">
                            <p className="font-instrument font-normal not-italic text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal text-[#57534E] max-w-md">
                                Interior design and fit-out for offices, hospitality and residential spaces.
                            </p>
                            <button className="mt-4 md:mt-6 border-t w-full border-b text-start py-3 border-[#523E0F] text-[#523E0F]">Enter Verunia Interiors →</button>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[65%] h-full order-1 md:order-2">
                    <Image
                        src="/hero-image/image-03.png"
                        alt="Al Fotivo"
                        width={926}
                        height={600}
                        sizes="(min-width: 768px) 65vw, 100vw"
                        quality={82}
                        className="w-full h-full object-cover min-h-[300px] md:min-h-[600px]"
                      />
                </div>

            </div>

            <div className="w-full h-full flex flex-col md:flex-row py-[60px] md:py-[112px]">
            <div className="w-full md:w-[65%] h-full">
                    <Image
                        src="/hero-image/image-03.png"
                        alt="Al Fotivo"
                        width={926}
                        height={600}
                        sizes="(min-width: 768px) 65vw, 100vw"
                        quality={82}
                        className="w-full h-full object-cover min-h-[300px] md:min-h-[600px]"
                      />
                </div>
                <div className="w-full md:w-[35%] h-full">
                    <div className="px-4 md:px-[48px] py-8 md:py-0">
                        <div>
                            <h1 className="mb-4 md:mb-6 font-normal text-[#523E0F] not-italic text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] [-letter-spacing:--0.02em] font-fraunces">
                                Verunia <br />Furnitures
                            </h1>
                        </div>
                        <div className="pt-4 md:pt-[277px]">
                            <p className="font-instrument font-normal not-italic text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal text-[#57534E] max-w-md">
                                Interior design and fit-out for offices, hospitality and residential spaces.
                            </p>
                            <button className="mt-4 md:mt-6 border-t w-full border-b text-start py-3 border-[#523E0F] text-[#523E0F]">Enter Verunia Interiors →</button>

                        </div>
                    </div>
                </div>
              

            </div>
            <div className="w-full h-full flex flex-col md:flex-row">
                <div className="w-full md:w-[35%] h-full order-2 md:order-1">
                    <div className="px-4 md:px-[48px] py-8 md:py-0">
                        <div>
                            <h1 className="mb-4 md:mb-6 font-normal text-[#523E0F] not-italic text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] [-letter-spacing:--0.02em] font-fraunces">
                                Verunia <br />Interiors
                            </h1>
                        </div>
                        <div className="pt-4 md:pt-[277px]">
                            <p className="font-instrument font-normal not-italic text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal text-[#57534E] max-w-md">
                                Interior design and fit-out for offices, hospitality and residential spaces.
                            </p>
                            <button className="mt-4 md:mt-6 border-t w-full border-b text-start py-3 border-[#523E0F] text-[#523E0F]">Enter Verunia Interiors →</button>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[65%] h-full order-1 md:order-2">
                    <Image
                        src="/hero-image/image-03.png"
                        alt="Al Fotivo"
                        width={926}
                        height={600}
                        sizes="(min-width: 768px) 65vw, 100vw"
                        quality={82}
                        className="w-full h-full object-cover min-h-[300px] md:min-h-[600px]"
                      />
                </div>

            </div>
            <Image
              src="/ui/divider-sections.svg"
              alt="Verunia Group"
              width={1000}
              height={1000}
              sizes="100vw"
              unoptimized
              className="w-full h-full object-cover py-[60px] md:py-[112px]"
            />

          
        </SectionContainer>
    )
}