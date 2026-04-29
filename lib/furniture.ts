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
    { next: { revalidate: 120 } }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  const json: ProductApiResponse = await res.json()
  return json.data
}

export const FURNITURE_MENU_SLUGS = {
  chairs: ["office-chair"],
  desks: ["desk", "desks", "ty-models", "yd-yf-models", "xc-models", "ul-models"],
  silentBox: ["silent-box", "silent-boxes", "storage"],
} as const;

export async function getProductsByCategorySlugs(categorySlugs: string[]): Promise<Product[]> {
  const uniqueSlugs = Array.from(new Set(categorySlugs.filter(Boolean)));
  const results = await Promise.all(uniqueSlugs.map((slug) => getProductsByCategory(slug)));

  const deduped = new Map<number, Product>();
  for (const group of results) {
    for (const product of group) {
      deduped.set(product.id, product);
    }
  }

  return Array.from(deduped.values());
}

/** Build absolute URL for Strapi upload paths or pass through http(s) URLs. */
export function resolveStrapiUploadUrl(path?: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = "https://api.veruniagroup.com";
  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  const res = await fetch(
    `https://api.veruniagroup.com/api/categories?populate=*&filters[slug][$eq]=${slug}`,
    { next: { revalidate: 120 } }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch category")
  }

  const json = await res.json()

  return json.data.length ? json.data[0] : null
}

/** First matching category (CMS order) — used for grouped routes like Silent Box. */
export async function getFirstCategoryBySlugs(
  slugs: readonly string[]
): Promise<Category | null> {
  for (const slug of slugs) {
    const cat = await getCategoryBySlug(slug);
    if (cat) return cat;
  }
  return null;
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

export async function getBestSellerProducts(): Promise<Product[]> {
  const res = await fetch(
    `https://api.veruniagroup.com/api/products?populate=*&filters[isBestSeller][$eq]=true`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    console.warn("Failed to fetch best sellers")
    return [];
  }

  const json: ProductApiResponse = await res.json()
  return json.data
}