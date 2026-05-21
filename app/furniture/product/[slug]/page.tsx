import { notFound } from 'next/navigation';
import Footer from '@/components/footer/footer';
import ProductDetail from '@/components/furniture-page/product-inner-page/product-detail';
import RelatedProducts from '@/components/furniture-page/product-inner-page/related-products';
import Header from '@/components/header/header';
import FurnitureCatalogNav from '@/components/furniture-page/furniture-catalog-nav';
import { getProductBySlug, getProductsByCategory, getFurnitureNavCategories } from '@/lib/furniture';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const [related, navCategories] = await Promise.all([
    getProductsByCategory(product.category.slug),
    getFurnitureNavCategories(),
  ]);

  return (
    <main className="bg-white">
      <Header />
      <div className="h-[72px] md:h-[88px]" aria-hidden />
      <FurnitureCatalogNav categories={navCategories} />
      <ProductDetail product={product} />
      <RelatedProducts products={related} />
      <Footer />
    </main>
  );
}
