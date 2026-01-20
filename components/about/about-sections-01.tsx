import Image from "next/image";
import SectionContainer from "../ui/section-container";

export default function AboutSections01() {

    return (
        <div>
            <SectionContainer>
                <div className="flex flex-col md:flex-row gap-6 md:gap-0 w-full">
                    <div className="w-full">
                        <h1 className="font-fraunces text-[#271E07] max-w-full md:max-w-[452px] font-medium text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] tracking-[-0.02em]">
                            A group with a global foundation
                        </h1>
                    </div>
                    <div className="w-full">
                        <p className="font-instrument text-[#271E07] font-normal not-italic text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal align-middle">
                            Verunia's international operations are supported by Rong He Tai Furniture Co. Ltd. in China—our core manufacturing partner with 30+ years of expertise. This integration allows us to move seamlessly from concept to production, combining international design standards with world-class manufacturing capability.
                        </p>
                        <p className="font-instrument mt-3 md:mt-1.5 text-[#271E07] font-normal not-italic text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-normal align-middle">
                            With controlled production, skilled teams, and strict quality assurance, we're able to deliver custom solutions at scale—efficiently and consistently.
                        </p>
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
