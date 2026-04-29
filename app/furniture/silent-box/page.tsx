import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SilentBoxFilterGrid from "@/components/furniture-page/product-category/silent-box-filter-grid";
import SilentBoxPageHero from "@/components/furniture-page/silent-box-page-hero";
import {
  FURNITURE_MENU_SLUGS,
  getFirstCategoryBySlugs,
  getProductsByCategorySlugs,
  resolveStrapiUploadUrl,
} from "@/lib/furniture";

export default async function SilentBoxPage({
  searchParams,
}: {
  searchParams: Promise<{ model?: string }>;
}) {
  const [products, category] = await Promise.all([
    getProductsByCategorySlugs(FURNITURE_MENU_SLUGS.silentBox),
    getFirstCategoryBySlugs(FURNITURE_MENU_SLUGS.silentBox),
  ]);
  const { model } = await searchParams;

  const heroImageFromCategory = resolveStrapiUploadUrl(category?.headerImage?.url);
  const heroProduct = products.find((p) => p.main_image?.url);
  const heroImageFromProduct = resolveStrapiUploadUrl(heroProduct?.main_image?.url);
  const heroImageUrl = heroImageFromCategory ?? heroImageFromProduct;

  const heroTitle = category?.name?.trim() || "Silent Box";
  const heroDescription = category?.headerDescription?.trim() ?? "";
  const heroAlt = category?.name?.trim() || heroProduct?.name || "Silent Box";

  return (
    <main className="bg-[#FFFDFA]">
      <Header />

      <SilentBoxPageHero
        title={heroTitle}
        description={heroDescription}
        imageUrl={heroImageUrl}
        imageAlt={heroAlt}
      />

      <SilentBoxFilterGrid products={products} initialModel={model} />
      <Footer />
    </main>
  );
}
