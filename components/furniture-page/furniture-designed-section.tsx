import Image from "next/image";

type Feature = {
  title: string;
  description: string;
};

function DiscoverLink({ href = "#" }: { href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 font-instrument font-medium text-[#1C1917] text-[20px] leading-[30px] tracking-normal hover:opacity-70 transition-opacity"
    >
      <span>Discover</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

const features: Feature[] = [
  {
    title: "Project-driven furniture",
    description:
      "End-to-end support for offices, fit-outs and refurbishments, with furniture packages tailored to your layout, headcount and budget.",
  },
  {
    title: "Space planning and consultancy",
    description:
      "Work with our team to plan workstations, meeting rooms and collaboration areas that balance density, comfort and circulation.",
  },
  {
    title: "Curated colours and finishes",
    description:
      "Coordinated laminates, fabrics and metals that align with your brand and are practical for high-use environments.",
  },
];

export default function FurnitureDesignedSection({
  imageSrc = "/furniture-page/furtinure.png",
  imageAlt = "Furniture collage",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="w-full bg-[#ffffff]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 space-y-10 md:space-y-12 lg:space-y-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left heading */}
          <div className="flex flex-col justify-end h-full">
            <h2 className="font-instrument font-medium text-[36px] leading-[48px] [-letter-spacing:-0.02em] text-[#1C1917] md:text-[60px] md:leading-[72px]">
              Designed to work.
              <br />
              Built to last.
            </h2>
          </div>

          {/* Right image */}
          <div className="">
            <div className="w-full bg-white rounded-sm overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain min-[413.929443359375px]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

 

        {/* Feature cards */}
        <div className="mt-12 md:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-[#E7E5E4] rounded-[8px] bg-transparent px-6 py-7 md:px-7 md:py-8"
            >
              <p className="font-instrument font-medium text-[#1C1917] text-[18px] leading-[26px] tracking-normal">
                {f.title}
              </p>
              <div className="h-px bg-[#E7E5E4] my-5" />
              <p className="font-instrument font-normal text-[#1C1917] text-[16px] leading-[24px] align-middle tracking-normal">
                {f.description}
              </p>
            </div>
          ))}
        </div>


        <div className="w-full  bg-[#FAFAFA] overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0 items-center py-[200px] ">
            
              <div className=" pl-[20px]">
                <h2 className="font-instrument font-medium text-[41.29px] leading-[51.61px] [-letter-spacing:-0.02em] text-[#1C1917] md:text-[48px] md:leading-[60px]">
                  Premium Silent Boxes
                </h2>
                <p className="mt-3 font-instrument font-medium text-[#1C1917]/80 text-[20px] leading-[30px] tracking-normal">
                  ISO Certified by International Acoustic Standards.
                </p>
                <div className="mt-8 font-instrument font-medium text-[20px] leading-[30px] tracking-normal">
                  <DiscoverLink href="#" />
                </div>
            
            </div>

            <div className="">
              <div className="relative w-full h-[280px] md:h-[360px] lg:h-full min-h-[320px]">
                <Image
                  src="/furniture-page/frame.png"
                  alt="Premium silent boxes"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  bg-white overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full  0">
          
              <div className="w-full  min-h-[522px]   ">
                <Image
                  src="/furniture-page/table-shot.png"
                  alt="TY Models desk"
                  
                  width={500}
                  height={500}
                  className="object-cover min-h-[522px] w-full"


                  priority={false}
                />
             
            </div>

            <div className="h-full flex items-center ">
              <div className="pl-8 py-10 md:pl-14 md:py-12 ">
                <h2 className="font-instrument font-medium text-[48px] leading-[60px] [-letter-spacing:-0.02em] text-[#1C1917]">
                  TY Models
                </h2>
                <p className="mt-2 font-instrument font-medium text-[#1C1917]/80 text-[20px] max-w-[365px] leading-[30px] tracking-normal">
                  Elegance Meets Efficiency - Redefining Your Modern Workspace
                </p>
                <div className="mt-8">
                  <DiscoverLink href="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

