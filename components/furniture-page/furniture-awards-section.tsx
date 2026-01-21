import Image from "next/image";
import { AwardLeafLeft } from "../ui/icons-svg-imports";
import { AwardLeafRight } from "../ui/icons-svg-imports";

export default function FurnitureAwardsSection() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 ">
                <div className="md:flex   items-center justify-center  gap-10 w-full">

                    <div className="font-instrument font-medium text-[20px] leading-[30px] tracking-normal text-[#1C1917] text-center  py-4 md:py-0  md:text-[28px] md:leading-[120%]">
                      <h2 className="max-w-[235px] mx-auto md:max-w-[478px]"> Recognised for the spaces we deliver</h2>
                    </div>
                    <div className="flex items-center justify-between gap-8 ">
                        <AwardLeafLeft />
                        <Image src="/ui/award-icons.png" alt="Award Leaf Left" width={250} height={60} />
                        <AwardLeafRight />
                    </div>
                </div>
            </div>
        </section>
    );
}