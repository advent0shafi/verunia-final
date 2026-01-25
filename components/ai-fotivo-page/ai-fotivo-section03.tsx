import Image from "next/image";

import { TextReveal } from "@/components/home/animated-section";

export default function AiFotivoSection03() {
    return (
        <section
            className="relative w-full min-h-[560px] bg-[#171412] flex items-center justify-center"
            style={{
                // fallback for clients not supporting Image as background
                backgroundImage: "url('/ui/background.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Visually hidden but loads the image preemptively for optimization */}
            <Image
                src="/ui/background.svg"
                alt=""
                fill
                style={{ objectFit: "cover", zIndex: 0 }}
                className="pointer-events-none select-none opacity-0 absolute"
                priority
            />
            <div className="relative z-10 py-16">
                <h1 className="font-fraunces font-light max-w-[600px]  mx-auto text-[60px] leading-[64px] text-center text-[#F5C547] [-letter-spacing:-0.02em] drop-shadow-lg">

                    <span className="italic"><TextReveal>Detail that holds up</TextReveal> </span> <TextReveal>to close inspection.</TextReveal>
                </h1>

            </div>
        </section>
    );
}