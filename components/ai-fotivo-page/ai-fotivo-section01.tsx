import Image from "next/image";

export default function AiFotivoSection01() {
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
                <h1 className="font-fraunces font-light max-w-[486.5px] mx-auto text-[60px] leading-[64px] text-center text-[#F5C547] [-letter-spacing:-0.02em] drop-shadow-lg">
                    When “standard” is <span className="italic">not an option.</span>
                </h1>
                <p className="font-instrument text-[#FFFDFA] font-normal text-[16px] leading-[24px] tracking-normal text-center max-w-[588.431640625px] mx-auto py-[32px]">
                    For projects that demand something truly unique, Al Fotivo offers bespoke design for furniture, finishes and crystal pieces. From custom dimensions and fabrics to entirely new designs, our studio works closely with clients, designers and architects to create one-of-a-kind pieces that live only in their spaces.
                </p>
                <div className="w-full h-full flex justify-center ">

                    <button className="border-t border-b border-[#FDFDFC] text-[#FDFDFC] text-start  py-3">
                        <span className="font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-[0] text-[#FDFDFC]">About Al Fotivo</span> →
                    </button>
                </div>
            </div>
        </section>
    );
}