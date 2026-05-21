import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FurnitureCatalogNav from "@/components/furniture-page/furniture-catalog-nav";
import ProductCategoryGrid from "@/components/furniture-page/product-category/product-catogery-grid";
import { FURNITURE_MENU_SLUGS, getProductsByCategorySlugs, getFurnitureNavCategories } from "@/lib/furniture";

export default async function DesksPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const [products, navCategories] = await Promise.all([
    getProductsByCategorySlugs(FURNITURE_MENU_SLUGS.desks),
    getFurnitureNavCategories(),
  ]);
  const { cat } = await searchParams;

  const normalizedCategoryFilter = cat?.trim();
  const filteredProducts =
    normalizedCategoryFilter && (FURNITURE_MENU_SLUGS.desks as readonly string[]).includes(normalizedCategoryFilter)
      ? products.filter((product) => product.category?.slug === normalizedCategoryFilter)
      : products;

  return (
    <main className="bg-[#FFFDFA]">
      <Header />
      <div className="h-[72px] md:h-[88px]" aria-hidden />
      <FurnitureCatalogNav categories={navCategories} />

      <section className="border-b border-[#EEE8DD] bg-[#FFFDFA]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 md:px-6 md:py-14 lg:px-8">
          <p className="font-instrument text-[14px] tracking-[0.08em] uppercase text-[#6B6458]">
            Furniture Catalogue
          </p>
          <h1 className="mt-3 font-helvetica text-[36px] leading-[44px] tracking-[-0.02em] text-[#1C1917] md:text-[56px] md:leading-[64px]">
            Desks
          </h1>
          <p className="mt-4 max-w-2xl font-instrument text-[16px] leading-[24px] text-[#57534E] md:text-[18px] md:leading-[28px]">
            All desk product lines in one place, including TY Models, YD &amp; YF Models,
            XC Models, and UL Models.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-16">
          <ProductCategoryGrid products={filteredProducts} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
