"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import SectionContainer from "../ui/section-container";
import Image from "next/image";
import { TextReveal, ImageReveal } from "../home/animated-section";
import AnimatedSection from "../home/animated-section";

export default function ContactPage() {
    const searchParams = useSearchParams();
    const source = searchParams.get("source");
    const productName = searchParams.get("product");
    const defaultMessage = useMemo(
        () =>
            source === "inspired"
                ? "Hi Verunia team, I was inspired by your designs and would like to discuss a project."
                : source === "product-info" && productName
                ? `Hi Verunia team, I would like product information for "${productName}".`
                : "",
        [source, productName]
    );
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: defaultMessage,
    });

    useEffect(() => {
        setFormData((prev) => ({ ...prev, message: defaultMessage }));
    }, [defaultMessage]);

    return (
        <SectionContainer className="bg-[#FBF9F6]">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 w-full py-10 md:py-[80px]">
                    {/* Left Column - Text Content */}
                    <div className="w-full lg:w-[53%] flex flex-col gap-4 md:gap-6 lg:gap-8">
                        {/* Main Heading */}
                        <h1 className="font-helvetica text-[#271E07] font-normal not-italic text-[32px] md:text-[48px] lg:text-[72px] leading-[40px] md:leading-[60px] lg:leading-[82px] tracking-[-0.02em]">
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

                        <AnimatedSection variant="fade">
                            <div className="mt-3 rounded-[6px] border border-[#E6DCC9] bg-white p-4 md:p-6">
                                <h3 className="font-helvetica text-[24px] md:text-[30px] leading-[1.1] tracking-[-0.02em] text-[#271E07]">
                                    Inspired by our designs?
                                </h3>
                                <p className="mt-2 font-instrument text-[15px] md:text-[16px] leading-[24px] text-[#57534E]">
                                    Share your idea and we will help shape it into a practical, elegant space.
                                </p>

                                <form className="mt-4 md:mt-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                                        <div>
                                            <label
                                                htmlFor="inspired-name"
                                                className="mb-1.5 block font-instrument text-[14px] md:text-[15px] text-[#57534E]"
                                            >
                                                Name
                                            </label>
                                            <input
                                                id="inspired-name"
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                                                }
                                                placeholder="Your full name"
                                                className="h-11 w-full rounded-[6px] border border-[#D8C9AD] bg-[#FFFEFC] px-3 font-instrument text-[15px] text-[#271E07] outline-none transition focus:border-[#523E0F]"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="inspired-phone"
                                                className="mb-1.5 block font-instrument text-[14px] md:text-[15px] text-[#57534E]"
                                            >
                                                Phone
                                            </label>
                                            <input
                                                id="inspired-phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                                                }
                                                placeholder="+971 ..."
                                                className="h-11 w-full rounded-[6px] border border-[#D8C9AD] bg-[#FFFEFC] px-3 font-instrument text-[15px] text-[#271E07] outline-none transition focus:border-[#523E0F]"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-3 md:mt-4">
                                        <label
                                            htmlFor="inspired-email"
                                            className="mb-1.5 block font-instrument text-[14px] md:text-[15px] text-[#57534E]"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="inspired-email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData((prev) => ({ ...prev, email: e.target.value }))
                                            }
                                            placeholder="name@company.com"
                                            className="h-11 w-full rounded-[6px] border border-[#D8C9AD] bg-[#FFFEFC] px-3 font-instrument text-[15px] text-[#271E07] outline-none transition focus:border-[#523E0F]"
                                        />
                                    </div>

                                    <div className="mt-3 md:mt-4">
                                        <label
                                            htmlFor="inspired-message"
                                            className="mb-1.5 block font-instrument text-[14px] md:text-[15px] text-[#57534E]"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="inspired-message"
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData((prev) => ({ ...prev, message: e.target.value }))
                                            }
                                            placeholder="Tell us what you are planning..."
                                            className="min-h-[150px] w-full rounded-[6px] border border-[#D8C9AD] bg-[#FFFEFC] px-3 py-3 font-instrument text-[15px] leading-[24px] text-[#271E07] outline-none transition focus:border-[#523E0F]"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="mt-4 inline-flex items-center border border-[#523E0F] bg-[#523E0F] px-5 py-2.5 font-instrument text-[14px] md:text-[15px] text-white transition hover:bg-[#3d2f0b]"
                                    >
                                        Send message
                                    </button>
                                </form>
                            </div>
                        </AnimatedSection>
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