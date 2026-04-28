import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FurnitureCatalogNav from "@/components/furniture-page/furniture-catalog-nav";
import SilentBoxFilterGrid from "@/components/furniture-page/product-category/silent-box-filter-grid";
import { FURNITURE_MENU_SLUGS, getProductsByCategorySlugs } from "@/lib/furniture";

export default async function SilentBoxPage({
  searchParams,
}: {
  searchParams: Promise<{ model?: string }>;
}) {
  const products = await getProductsByCategorySlugs(FURNITURE_MENU_SLUGS.silentBox);
  const { model } = await searchParams;

  return (
    <main className="bg-[#FFFDFA]">
      <Header />
      <div className="pt-20">
        <FurnitureCatalogNav />
      </div>

      <section className="border-b border-[#EEE8DD] bg-[#FFFDFA]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 md:px-6 md:py-14 lg:px-8">
          <p className="font-instrument text-[14px] tracking-[0.08em] uppercase text-[#6B6458]">
            Furniture Catalogue
          </p>
          <h1 className="mt-3 font-helvetica text-[36px] leading-[44px] tracking-[-0.02em] text-[#1C1917] md:text-[56px] md:leading-[64px]">
            Silent Box
          </h1>
          <p className="mt-4 max-w-2xl font-instrument text-[16px] leading-[24px] text-[#57534E] md:text-[18px] md:leading-[28px]">
            Browse all Silent Box products and refine by model from the submenu filters.
          </p>
        </div>
      </section>

      <SilentBoxFilterGrid products={products} initialModel={model} />
      <Footer />
    </main>
  );
}
