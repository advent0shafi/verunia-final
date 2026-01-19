import Image from "next/image";
import { AwardLeafLeft } from "../ui/icons-svg-imports";
import { AwardLeafRight } from "../ui/icons-svg-imports";

export default function FurnitureAwardsSection() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="flex  items-center justify-center gap-10">

                    <p className="font-instrument font-medium text-[28px] leading-[120%] tracking-normal text-[#1C1917] text-center">Recognised for the spaces we deliver</p>
                    <div className="flex items-center justify-between gap-8">
                        <AwardLeafLeft />
                        <Image src="/ui/award-icons.png" alt="Award Leaf Left" width={250} height={60} />
                        <AwardLeafRight />
                    </div>
                </div>
            </div>
        </section>
    );
}