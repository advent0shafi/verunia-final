import Image from "next/image";

type CategoryCardProps = {
  title: string;
  imageSrc: string;
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
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Dark overlay + subtle bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 p-4 md:p-6">
        <h3
          className="
            font-fraunces font-light text-[#FFFDFA]
            text-[36px] leading-[44px]
            tracking-[-0.02em] text-center
            drop-shadow
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
      imageSrc: "/ai-fotivo-page/ai-fotiva04.png",
      className: "lg:col-span-3 md:min-h-[260px]",
    },
    {
      title: "Lighting",
      imageSrc: "/ai-fotivo-page/ai-fotiva02.png",
      className: "lg:col-span-3 md:min-h-[260px]",
    },
    {
      title: "Crystals",
      imageSrc: "/ai-fotivo-page/ai-fotiva01.jpg",
      className: "lg:col-span-2",
    },
    {
      title: "Textiles",
      imageSrc: "/ai-fotivo-page/ai-fotiva03.jpg",
      className: "lg:col-span-2",
    },
    {
      title: "Accessories",
      imageSrc: "/interior-page/interior-04.png",
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