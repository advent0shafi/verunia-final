import Image from "next/image";
import { ImageReveal } from "@/components/home/animated-section";
import { fetchAiFotivoCategories } from "@/lib/aiFotivo";
import Link from "next/link";

type Category = {
  id: number;
  name: string;
  slug: string;
  headerImage?: {
    url: string;
  };
};

type CategoryCardProps = {
  title: string;
  imageSrc: string;
  slug: string;
  className?: string;
};

function CategoryCard({ title, imageSrc, slug, className }: CategoryCardProps) {

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[6px]",
        "bg-[#171412] ring-1 ring-white/10",
        "min-h-[350px] md:min-h-[400px]",
        className ?? "",
      ].join(" ")}
    >
          <Link href={`/ai-fotivo/category/${slug}`} className="hover:cursor-pointer" >

      <ImageReveal className="w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageReveal>

      {/* overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 p-4 md:p-6">
        <h3
          className="
            font-helvetica font-light text-[30px] leading-[38px]
            text-[#FFFDFA] drop-shadow
            md:text-[36px] md:leading-[44px]
          "
        >
          {title}
        </h3>
      </div>
      </Link>
    </div>
    
    
  );
}

export default async function AiFotivoSection02() {
  const response = await fetchAiFotivoCategories();
  const categories: AIFotivoCategory[] = response.data;

  return (
    <section className="bg-[#171412] flex flex-col justify-center px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-[1440px] py-10 md:py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((category, index) => {
            const imageUrl = category.headerImage?.url
              ? `https://api.veruniagroup.com${category.headerImage.url}`
              : "/placeholder.jpg"; // safety fallback

            return (
              <CategoryCard
                key={category.id}
                title={category.name}
                imageSrc={imageUrl}
                slug = {category.slug}
                className={
                  index < 2
                    ? "lg:col-span-3 md:min-h-[260px]"
                    : "lg:col-span-2"
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}