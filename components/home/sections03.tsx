import Image from "next/image";
import SectionContainer from "../ui/section-container";

export default function Sections03() {
  return (
    <SectionContainer>
      <div className="w-full">
        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-8">

          {/* Left Column */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Project 1 - Sapphire House */}

          


            <div className="group">
              <div className="overflow-hidden">
                <img
                  src="/hero-image/image-01.png"
                  alt="Sapphire House, Belgium interior"
                  className="w-full h-[250px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="w-auto pr-3">
                  <div className="w-2 h-2 rounded-full bg-[#271E07]"></div>
                </div>
                <div className="w-full">
                  <div className="flex-1 flex items-center justify-between border-b border-[#271E07]/30 pb-2">
                    <h3 className="font-instrument font-bold text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-normal align-middle text-[#271E07]">
                      Sheraton Canada
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-px h-4 bg-[#271E07]/50"></div>
                      <span className="text-[#271E07] text-base md:text-lg font-light">04</span>
                    </div>
                  </div>
                  <p className="font-instrument font-normal not-italic text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-normal align-middle text-[#271E07]/70 pt-2 inline-block">
                    2024 | Verunia Interiors
                  </p>

                </div>
              </div>
            </div>

            {/* Project 3 - Sheraton Canada */}
            <div className="group">
              <div className="overflow-hidden">
                <img
                  src="/hero-image/image-03.png"
                  alt="Sheraton Canada hotel room"
                  className="w-full h-[250px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="w-auto pr-3">
                  <div className="w-2 h-2 rounded-full bg-[#271E07]"></div>
                </div>
                <div className="w-full">
                  <div className="flex-1 flex items-center justify-between border-b border-[#271E07]/30 pb-2">
                    <h3 className="font-instrument font-bold text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-normal align-middle text-[#271E07]">
                      JW Marriot Nairobi
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-px h-4 bg-[#271E07]/50"></div>
                      <span className="text-[#271E07] text-base md:text-lg font-light">03</span>
                    </div>
                  </div>
                  <p className="font-instrument font-normal not-italic text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-normal align-middle text-[#271E07]/70 pt-2 inline-block">
                    2024 | Verunia Furniture
                  </p>

                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Offset */}
          <div className="flex flex-col gap-6 md:gap-8 mt-0 md:mt-32">
            {/* Project 2 - MaisonArt */}
            <div className="group">
              <div className="overflow-hidden">
                <img
                  src="/hero-image/image-02.png"
                  alt="MaisonArt office space"
                  className="w-full h-[200px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="w-auto pr-3">
                  <div className="w-2 h-2 rounded-full bg-[#271E07]"></div>
                </div>
                <div className="w-full">
                  <div className="flex-1 flex items-center justify-between border-b border-[#271E07]/30 pb-2">
                    <h3 className="font-instrument font-bold text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-normal align-middle text-[#271E07]">
                      Sapphire House, Belgium
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-px h-4 bg-[#271E07]/50"></div>
                      <span className="text-[#271E07] text-base md:text-lg font-light">02</span>
                    </div>
                  </div>
                  <p className="font-instrument font-normal not-italic text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-normal align-middle text-[#271E07]/70 pt-2 inline-block">
                    2024 | Al Fotivo
                  </p>

                </div>
              </div>
            </div>

            {/* Project 4 - JW Marriott Nairobi */}
            <div className="group">
              <div className="overflow-hidden">
                <img
                  src="/hero-image/image-02.png"
                  alt="JW Marriott Nairobi restaurant"
                  className="w-full h-[200px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="w-auto pr-3">
                  <div className="w-2 h-2 rounded-full bg-[#271E07]"></div>
                </div>
                <div className="w-full">
                  <div className="flex-1 flex items-center justify-between border-b border-[#271E07]/30 pb-2">
                    <h3 className="font-instrument font-bold text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-normal align-middle text-[#271E07]">
                      MaisonArt
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-px h-4 bg-[#271E07]/50"></div>
                      <span className="text-[#271E07] text-base md:text-lg font-light">01</span>
                    </div>
                  </div>
                  <p className="font-instrument font-normal not-italic text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-normal align-middle text-[#271E07]/70 pt-2 inline-block">
                    2024 | Verunia Interiors
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src="/ui/divider-sections.svg" alt="Verunia Group" width={1000} height={1000} className="w-full h-full object-cover py-[60px] md:py-[112px]" />

    </SectionContainer>
  )
}