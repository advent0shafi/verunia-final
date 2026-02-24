import Header from "@/components/header/header"
import VeruniaFooter from "@/components/footer/footer"
import ProductCategorySections from "@/components/furniture-page/product-category/product-catogery-sections"
import ProductCategoryGridLayout from "@/components/furniture-page/product-category/product-category-grid-layout"

import { getCategoryBySlug } from "@/lib/furniture"
import { getProductsByCategory } from "@/lib/furniture"

interface PageProps {
  params: Promise<{
    category: string
  }>
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { category } = await params

  const [categoryData, products] = await Promise.all([
    getCategoryBySlug(category),
    getProductsByCategory(category),
  ])

  if (!categoryData) {
    return <div>Category not found</div>
  }

  return (
    <main>
      <Header />

      <ProductCategorySections
        title={categoryData.name}
        description={categoryData.headerDescription}
        imageSrc={
          categoryData.headerImage
            ? categoryData.headerImage.url
            : undefined
        }
      />

      <ProductCategoryGridLayout  products={products} />

      <VeruniaFooter />
    </main>
  )
}