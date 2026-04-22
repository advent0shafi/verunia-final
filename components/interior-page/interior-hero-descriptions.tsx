import { TextReveal } from "@/components/home/animated-section";
import Link from "next/link";

export default function InteriorHeroDescriptions() {
    return (
        <section className="items-center bg-[#171412] flex flex-col justify-center px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-[1440px] h-full max-md:max-w-full py-8 md:py-[112px] relative overflow-hidden">
                <h1 className="font-instrument text-[#FDFDFC] font-medium text-[48px] leading-[60px] [-letter-spacing:-0.02em]">
                    <TextReveal>
                        Spaces that work beautifully,
                    </TextReveal>
                    <br />
                    <TextReveal>
                        long after the first day.
                    </TextReveal>
                </h1>
                <div className="w-full h-full flex  md:mt-[32px]  justify-end">
                    <div className="w-full max-w-[422px]">
                        <p className="font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-[0] text-[#FDFDFC]">
                            <TextReveal>
                                Verunia Interiors creates complete environments for work, hospitality and private living. We shape each project around flow, comfort and long-term performance, combining technical precision with a refined visual language. From early concepts to final installation, every detail is coordinated to feel seamless and purposeful.
                            </TextReveal>
                        </p>
                        <button className="border-t border-b border-[#FDFDFC] text-[#FDFDFC] text-start mt-[32px] py-3">
                        <Link href={"/interior/all-projects"}>

                            <span className="font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-[0] text-[#FDFDFC]">About Verunia Interiors</span> →
                            </Link>
                        </button>
                       
                    </div>

                </div>
            </div>
        </section>
    )
}