import { ImageReveal } from "@/components/home/animated-section";
import Image from "next/image";
import interior01 from "@/public/interior-page/image-interior-02.png";
import interior02 from "@/public/interior-page/image-interior-03.png";
import interior04 from "@/public/interior-page/image-interior-040.png";
import { StaticImageData } from "next/image";
type InteriorImageCardProps = {
        src: StaticImageData;
    alt: string;
    number: string;
    year?: string;
    place?: string;
    height?: number;
    width?: number;
    minHeight?: string;
    maxHeight?: string;
};

function InteriorImageCard({
    src,
    alt,
    number,
    year = "2024",
    place = "HolidayInn",
    height = 1000,
    width = 1000,
    minHeight = "min-h-[300px] md:min-h-[671px]",
    maxHeight = "",
}: InteriorImageCardProps) {
    return (
        <div className={`w-full h-full object-cover ${minHeight} ${maxHeight} relative`}>
            <ImageReveal className={`w-full h-full ${minHeight} ${maxHeight}`}>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    placeholder="blur"
                    className={`w-full md:h-full h-[500px] object-cover`}
                />
            </ImageReveal>
            <div
                className={`
                    absolute 
                    top-[6px] md:top-[14px] 
                    right-1/2 translate-x-1/2 md:right-[14px] md:translate-x-0
                    bg-white rounded-[4px] opacity-100 flex gap-3 py-4 px-6
                `}
                style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.05)" }}
            >
                <div>
                    <span className="inline-block w-[10px] h-[10px] bg-[#271E07] rounded-[30px] opacity-100" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2">
                            <span className="font-instrument md:min-w-80 min-w-[250px] font-bold text-[14px] leading-[20px] tracking-normal align-middle text-[#222]">
                                Sapphire House, Belgium
                            </span>
                        </div>
                        <span className="font-instrument font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#271E07] pl-4 border-l border-[#271E07]">
                            {number}
                        </span>
                    </div>
                    <div className="border-b border-[#271E07]" />
                    <div className="flex items-center gap-2 relative  z-10">
                        <span className="font-instrument font-normal font-italic text-[14px] leading-[20px] tracking-normal align-middle text-[#454545]">{year}</span>
                        <span className="font-instrument font-normal not-italic text-[14px] leading-[20px] tracking-normal align-middle text-[#454545]">{place}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function InteriorSection01() {
    return (
        <section className="items-center bg-[#171412] flex flex-col justify-center px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-[1440px]  h-full max-md:max-w-full py-8 md:py-10 relative overflow-hidden">
                <div className="w-full h-full flex flex-col md:flex-row ">
                    <div className="w-full md:w-[45%]  p-2 md:p-4 pl-0 ">
                        <InteriorImageCard
                            src={interior01}
                            alt="Interior Section 01"
                            number="01"
                        />
                    </div>
                    <div className="w-full md:w-[55%]  p-2 md:p-4 pl-0 ">
                        <InteriorImageCard
                            src={interior02}
                            alt="Interior"
                            number="02"
                        />
                    </div>
                </div>
                <div className="w-full md:w-full  p-2 md:px-4 pb-4 pl-0 ">
                    <InteriorImageCard
                            src={interior04}
                        alt="Interior Section 01"
                        number="03"
                        height={671}
                        maxHeight="max-h-[500px] md:max-h-[671px]"
                    />
                </div>
            </div>
        </section>
    );
}
