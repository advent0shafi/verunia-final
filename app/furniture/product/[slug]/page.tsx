import { notFound } from 'next/navigation';
import Footer from '@/components/footer/footer';
import ProductDetail from '@/components/furniture-page/product-inner-page/product-detail';
import RelatedProducts from '@/components/furniture-page/product-inner-page/related-products';
import Header from '@/components/header/header';
import { getProductBySlug, getProductsByCategory } from '@/lib/furniture';

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

  // Fetch related products from the same category
  const related = await getProductsByCategory(product.category.slug);

  return (
    <main className="bg-white">
      <Header />
      <ProductDetail product={product} />
      <RelatedProducts products={related} />
      <Footer />
    </main>
  );
}
