import Image from "next/image";

import { TextReveal } from "@/components/home/animated-section";

export default function AiFotivoSection03() {
    return (
        <section
            className="relative w-full md:min-h-[560px] min-h-[220px] bg-[#171412] flex items-center justify-center"
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
            <div className="relative z-10 md:py-16 py-3">
                <h1
                    className="
                        font-fraunces 
                        font-light 
                        italic 
                        max-w-[600px] 
                        mx-auto 
                        text-[39.03px] 
                        md:text-[60px] 
                        leading-[41.64px] 
                        md:leading-[64px]
                        text-center 
                        text-[#F5C547] 
                        [-letter-spacing:-0.02em] 
                        drop-shadow-lg
                    "
                >
                    <TextReveal>
                        Detail that holds up to close inspection.
                    </TextReveal>
                </h1>

            </div>
        </section>
    );
}