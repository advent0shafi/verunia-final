import Header from "@/components/header/header"
import VeruniaFooter from "@/components/footer/footer"
import FurnitureCatalogNav from "@/components/furniture-page/furniture-catalog-nav"
import ProductCategorySections from "@/components/furniture-page/product-category/product-catogery-sections"
import ProductCategoryGridLayout from "@/components/furniture-page/product-category/product-category-grid-layout"

import { getCategoryBySlug, getProductsByCategory, getFurnitureNavCategories } from "@/lib/furniture"

interface PageProps {
  params: Promise<{
    category: string
  }>
  searchParams: Promise<{
    sub?: string
  }>
}

export default async function ProductCategoryPage({ params, searchParams }: PageProps) {
  const { category } = await params
  const { sub } = await searchParams

  const [categoryData, products, navCategories] = await Promise.all([
    getCategoryBySlug(category),
    getProductsByCategory(category),
    getFurnitureNavCategories(),
  ])

  if (!categoryData) {
    return <div>Category not found</div>
  }

  const subSlug = sub?.trim()
  const filteredProducts = subSlug
    ? products.filter((product) => product.sub_category?.slug === subSlug)
    : products

  return (
    <main>
      <Header />
      <div className="h-[72px] md:h-[88px]" aria-hidden />
      <FurnitureCatalogNav categories={navCategories} />

      <ProductCategorySections
        title={categoryData.name}
        description={categoryData.headerDescription}
        imageSrc={
          categoryData.headerImage
            ? categoryData.headerImage.url
            : undefined
        }
      />

      <ProductCategoryGridLayout products={filteredProducts} categoryName={categoryData.name} />

      <VeruniaFooter />
    </main>
  )
}
