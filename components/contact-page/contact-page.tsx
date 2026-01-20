"use client";

import SectionContainer from "../ui/section-container";
import Image from "next/image";
import { TextReveal, ImageReveal } from "../home/animated-section";
import AnimatedSection from "../home/animated-section";

export default function ContactPage() {
    return (
        <SectionContainer className="bg-[#FBF9F6]">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 w-full py-10 md:py-[80px]">
                    {/* Left Column - Text Content */}
                    <div className="w-full lg:w-[53%] flex flex-col gap-4 md:gap-6 lg:gap-8">
                        {/* Main Heading */}
                        <h1 className="font-fraunces text-[#271E07] font-normal not-italic text-[32px] md:text-[48px] lg:text-[72px] leading-[40px] md:leading-[60px] lg:leading-[82px] tracking-[-0.02em]">
                            <TextReveal>Talk to the</TextReveal>
                            <br />
                            <TextReveal>Verunia team.</TextReveal>
                        </h1>

                        {/* Descriptive Paragraph */}
                        <p className="font-instrument max-w-full md:max-w-[390.61669921875px] font-normal not-italic text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-[0em] align-middle text-[#271E07]">
                            <TextReveal>
                                Tell us what you're planning—office furniture, interiors, or luxury pieces—and we'll connect you with the right Verunia team.
                            </TextReveal>
                        </p>

                        {/* Contact Information Section */}
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-12 mt-2 md:mt-4">
                            <div className="sm:w-[230px] shrink-0">
                                <h2 className="font-instrument text-[#57534E] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-normal">
                                    <TextReveal>Visit us or reach out directly</TextReveal>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full">
                                {/* Phone */}
                                <AnimatedSection variant="fade">
                                    <div className="flex flex-row justify-start items-start gap-3 md:gap-5">
                                        <span className="font-instrument text-[#57534E] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] md:leading-[24px] min-w-[50px] sm:min-w-[56px]">
                                            Phone
                                        </span>
                                        <a 
                                            href="tel:+14388375531" 
                                            className="font-instrument text-[#271E07] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] md:leading-[24px] hover:underline break-all sm:break-normal"
                                        >
                                            438 837-5531
                                        </a>
                                    </div>
                                </AnimatedSection>
                                {/* Email */}
                                <AnimatedSection variant="fade">
                                    <div className="flex flex-row justify-start items-start gap-3 md:gap-5">
                                        <span className="font-instrument text-[#57534E] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] md:leading-[24px] min-w-[50px] sm:min-w-[56px]">
                                            Email
                                        </span>
                                        <a 
                                            href="mailto:info@veruniagroup.com" 
                                            className="font-instrument text-[#271E07] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] md:leading-[24px] hover:underline break-all sm:break-normal"
                                        >
                                            info@veruniagroup.com
                                        </a>
                                    </div>
                                </AnimatedSection>
                                {/* HQ Address */}
                                <AnimatedSection variant="fade">
                                    <div className="flex flex-row justify-start items-start gap-3 md:gap-5">
                                        <span className="font-instrument text-[#57534E] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] md:leading-[24px] min-w-[50px] sm:min-w-[56px]">
                                            HQ
                                        </span>
                                        <address className="font-instrument text-[#271E07] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] md:leading-[24px] not-italic">
                                            Block 3, Shop 18, 19, 20<br />
                                            Nad Al Sheba 3, Dubai, U.A.E.
                                        </address>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="w-full lg:w-[47%]">
                        <AnimatedSection variant="parallax">
                            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[544px] flex justify-end overflow-hidden">
                                <ImageReveal>
                                    <Image
                                        src="/hero-image/image-01.png"
                                        alt="Modern luxury living room interior"
                                        width={515}
                                        height={544}
                                        sizes="(min-width: 1024px) 55vw, 100vw"
                                        className="object-cover rounded-[6px] w-[515px] h-[544px]"
                                        priority
                                    />
                                </ImageReveal>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </SectionContainer>
    );
}