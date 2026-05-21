import Image from "next/image";
import Link from "next/link";

import fallbackHero from "@/public/furniture-page/gaming-chair.png";

type SilentBoxPageHeroProps = {
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  imageAlt?: string;
};

export default function SilentBoxPageHero({
  title,
  description,
  imageUrl,
  imageAlt = "Silent Box",
}: SilentBoxPageHeroProps) {
  const useRemote = Boolean(imageUrl?.startsWith("https://"));

  return (
    <section className="relative w-full overflow-x-hidden bg-[#FAFAFA] pt-20">
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-[0.08] md:h-[800px] md:w-[800px]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M200 50 L350 200 L200 350"
            stroke="#9ca3af"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M180 100 L280 200 L180 300"
            stroke="#9ca3af"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M160 140 L220 200 L160 260"
            stroke="#9ca3af"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#FAFAFA] px-4 md:px-6 lg:px-8">
        <div className="relative h-full w-full max-w-[1440px] overflow-hidden py-8 md:py-10 max-md:max-w-full">
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
            <div className="flex min-h-[500px] flex-col items-center py-12 md:min-h-[600px] md:py-16 lg:min-h-[650px] lg:flex-row lg:items-center lg:py-0">
              <div className="mb-8 w-full text-left lg:mb-0 lg:w-[45%] lg:pr-8">
                <p className="mb-4 text-sm font-semibold tracking-wide text-[#1a1a1a] md:mb-6 md:text-base">
                  Office Furniture
                </p>

                <h1 className="mb-6 text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] md:mb-8 md:text-[56px] lg:text-[64px] xl:text-[72px]">
                  {title}
                </h1>

                {description?.trim() ? (
                  <p className="mb-6 max-w-xl font-instrument font-medium text-[#1C1917]/80 text-[18px] leading-[28px] tracking-normal md:mb-8 md:text-[20px] md:leading-[30px]">
                    {description.trim()}
                  </p>
                ) : null}

                <Link
                  href="#silent-box-products"
                  className="group inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-[#1a1a1a] transition-opacity hover:opacity-70 md:text-lg"
                >
                  <span>Discover</span>
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </Link>
              </div>

              <div className="flex w-full justify-center lg:w-[55%] lg:justify-end">
                <div className="relative w-full max-w-[700px] lg:max-w-none">
                  {useRemote ? (
                    <Image
                      src={imageUrl!}
                      alt={imageAlt}
                      width={800}
                      height={500}
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      quality={82}
                      className="h-auto w-full object-contain"
                      priority
                    />
                  ) : (
                    <Image
                      src={fallbackHero}
                      alt={imageAlt}
                      width={800}
                      height={500}
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      placeholder="blur"
                      quality={82}
                      className="h-auto w-full object-contain"
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
