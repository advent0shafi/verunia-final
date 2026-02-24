export async function getCategoriesClient(): Promise<CategoryNavItem[]> {
  const res = await fetch(
       `https://api.veruniagroup.com/api/categories?populate=*`,

  )

  const json = await res.json()

  return json.data.map((cat: any) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
  }))
}



export async function getProductsByCategory(
  categorySlug: string
): Promise<Product[]> {
  const res = await fetch(
    `https://api.veruniagroup.com/api/products?populate=*&filters[category][slug][$eq]=${categorySlug}`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  const json: ProductApiResponse = await res.json()
  return json.data
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  const res = await fetch(
    `https://api.veruniagroup.com/api/categories?populate=*&filters[slug][$eq]=${slug}`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch category")
  }

  const json = await res.json()

  return json.data.length ? json.data[0] : null
}


export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  const res = await fetch(
    `https://api.veruniagroup.com/api/products?populate=*&filters[slug][$eq]=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const json: ProductApiResponse = await res.json();
  return json.data.length ? json.data[0] : null;
}