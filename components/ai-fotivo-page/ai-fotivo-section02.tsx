import Image from "next/image";
import { ImageReveal } from "@/components/home/animated-section";
import Link from "next/link";
import { fetchAiFotivoCategories } from "@/lib/aiFotivo";
import { resolveStrapiUploadUrl } from "@/lib/furniture";

type CategoryCardProps = {
  title: string;
  imageSrc: string;
  slug: string;
  className?: string;
};

function CategoryCard({ title, imageSrc, slug, className }: CategoryCardProps) {
  const href = `/bespoke/category/${slug}`;

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[6px]",
        "bg-[#171412] ring-1 ring-white/10",
        "min-h-[350px] md:min-h-[400px]",
        className ?? "",
      ].join(" ")}
    >
      {/* Background: no pointer events so the card Link receives clicks */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <ImageReveal className="h-full w-full">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </ImageReveal>
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      <Link
        href={href}
        className="absolute inset-0 z-10 flex flex-col justify-end p-4 md:p-6 outline-none ring-inset ring-[#F5C547]/0 transition-[color,ring-color] hover:ring-[#F5C547]/30 focus-visible:ring-2 focus-visible:ring-[#F5C547]/70"
      >
        <h3
          className="
            font-helvetica font-light text-[30px] leading-[38px]
            text-[#FFFDFA] drop-shadow
            md:text-[36px] md:leading-[44px]
          "
        >
          {title}
        </h3>
      </Link>
    </div>
  );
}

/** Strapi collection `al-fotivo-categories` (subset used on the card grid). */
type AlFotivoCategoryCard = {
  id: number;
  name: string;
  slug: string;
  headerImage?: {
    url?: string | null;
    formats?: {
      large?: { url?: string };
      medium?: { url?: string };
    };
  } | null;
};

const FALLBACK_CARD_IMAGE =
  "/ai-fotivo-page/catogery/image-ai-fotiva-01.png";

/*
const STATIC_CATEGORIES: Array<{ id: string; name: string; slug: string; imageSrc: string }> = [
  {
    id: "furniture",
    name: "Furniture",
    slug: "furniture",
    imageSrc: "/ai-fotivo-page/catogery/image-ai-fotiva-01.png",
  },
  {
    id: "lighting",
    name: "Lighting",
    slug: "lighting",
    imageSrc: "/ai-fotivo-page/catogery/image-ai-fotiva-02.png",
  },
  {
    id: "crystals",
    name: "Crystals",
    slug: "crystals",
    imageSrc: "/ai-fotivo-page/catogery/image-ai-fotiva-03.png",
  },
  {
    id: "textiles",
    name: "Textiles",
    slug: "textiles",
    imageSrc: "/ai-fotivo-page/catogery/image-ai-fotiva-04.png",
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    imageSrc: "/ai-fotivo-page/catogery/image-ai-fotiva-05.png",
  },
];
*/

function heroImageUrlForCategory(cat: AlFotivoCategoryCard): string {
  const path =
    cat.headerImage?.formats?.large?.url ??
    cat.headerImage?.formats?.medium?.url ??
    cat.headerImage?.url ??
    null;
  return resolveStrapiUploadUrl(path) ?? FALLBACK_CARD_IMAGE;
}

export default async function AiFotivoSection02() {
  const res = await fetchAiFotivoCategories();
  const categories: AlFotivoCategoryCard[] = res?.data ?? [];

  return (
    <section className="bg-[#171412] flex flex-col justify-center px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-[1440px] py-10 md:py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              imageSrc={heroImageUrlForCategory(category)}
              slug={category.slug}
              className={
                index < 2
                  ? "lg:col-span-3 md:min-h-[260px]"
                  : "lg:col-span-2"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
