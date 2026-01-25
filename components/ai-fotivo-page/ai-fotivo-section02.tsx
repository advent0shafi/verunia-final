import Image, { StaticImageData } from "next/image";

import { ImageReveal } from "@/components/home/animated-section";
import imageAiFotiva01 from "@/public/ai-fotivo-page/image-ai-fotiva-01.png";
import imageAiFotiva02 from "@/public/ai-fotivo-page/image-ai-fotiva-02.png";
import imageAiFotiva03 from "@/public/ai-fotivo-page/image-ai-fotiva-03.png";
import imageAiFotiva04 from "@/public/ai-fotivo-page/image-ai-fotiva-04.png";
import imageAiFotiva05 from "@/public/ai-fotivo-page/image-ai-fotiva-05.png";
type CategoryCardProps = {
  title: string;
      imageSrc: StaticImageData;
  className?: string;
};

function CategoryCard({ title, imageSrc, className }: CategoryCardProps) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[6px]",
        "bg-[#171412] ring-1 ring-white/10",
        "min-h-[180px] md:min-h-[400px]",
        className ?? "",
      ].join(" ")}
    >
      <ImageReveal className="w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          placeholder="blur"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageReveal>

      {/* Dark overlay + subtle bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 p-4 md:p-6">
        <h3
          className="
            font-fraunces font-light text-[30px] leading-[38px] tracking-normal
            text-center drop-shadow text-[#FFFDFA]
            md:text-[36px] md:leading-[44px] md:tracking-[-0.02em]
          "
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function AiFotivoSection02() {
  const items = [
    {
      title: "Furniture",
      imageSrc: imageAiFotiva01,
      className: "lg:col-span-3 md:min-h-[260px]",
    },
    {
      title: "Lighting",
      imageSrc: imageAiFotiva02,
      className: "lg:col-span-3 md:min-h-[260px]",
    },
    {
      title: "Crystals",
      imageSrc: imageAiFotiva03,
      className: "lg:col-span-2",
    },
    {
      title: "Textiles",
      imageSrc: imageAiFotiva04,
      className: "lg:col-span-2",
    },
    {
      title: "Accessories",
      imageSrc: imageAiFotiva05,
      className: "lg:col-span-2",
    },
  ] as const;

  return (
    <section className="items-center bg-[#171412] flex flex-col justify-center px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-[1440px] h-full max-md:max-w-full py-10 md:py-12 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          {items.map((item) => (
            <CategoryCard
              key={item.title}
              title={item.title}
              imageSrc={item.imageSrc}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}