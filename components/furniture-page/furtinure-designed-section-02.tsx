import Image from "next/image";

export default function FurnitureDesignedSection02() {
  return (
    <section className="w-full bg-[#ffffff]">
      <div className="max-w-[1440px]  mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 space-y-10 md:space-y-12 lg:space-y-14">
      <div className="w-full   overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full  0">
          <div className="w-full  h-[192.99478149414062px] md:hidden block  ">
                <Image
                  src="/furniture-page/section-03.png"
                  alt="TY Models desk"
                  
                  width={500}
                  height={192.99478149414062}
                  className="object-cover h-[192.99478149414062px] w-full"


                  priority={false}
                />
             
            </div>
            <div className="h-full flex items-center ">
              <div className="">
                <h2 className="font-instrument font-medium text-[32px] leading-[44px] [-letter-spacing:-0.02em] text-[#1C1917] md:text-[48px] md:leading-[60px]">
                  Innovative and Exclusive Materials and Finishes
                </h2>
                <p className="font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-normal text-[#1C1917]/80 max-w-[365px] mt-2 md:text-[20px] md:leading-[30px] md:font-medium">
                  Workspace creates a modern workplace with award-winning ST19 boards and innovative office furniture combining trendy materials and sleek design.
                </p>
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center gap-2 font-instrument font-medium text-[#1C1917] text-[20px] leading-[30px] tracking-normal hover:opacity-70 transition-opacity">
                    Discover
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full  min-h-[437px] md:block hidden  ">
                <Image
                  src="/furniture-page/section-03.png"
                  alt="TY Models desk"
                  
                  width={500}
                  height={500}
                  className="object-cover min-h-[437px] w-full"


                  priority={false}
                />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}