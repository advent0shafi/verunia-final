const API_URL = "https://api.veruniagroup.com/api";

export async function fetchAiFotivoCategories() {
  const res = await fetch(
    `${API_URL}/al-fotivo-categories?populate=*`,
    {
      next: { revalidate: 60 }, // ISR (optional)
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}


export async function getAiFotivoProductsByCategorySlug(slug: string) {
  const res = await fetch(
    `https://api.veruniagroup.com/api/al-fotivo-products?populate=*&filters[al_fotivo_category][slug][$eq]=${slug}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}


export async function getAiFotivoProductBySlug(slug: string) {
  const res = await fetch(
    `https://api.veruniagroup.com/api/al-fotivo-products?populate=*&filters[slug][$eq]=${slug}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function getRelatedAiFotivoProducts(categorySlug: string, excludeId: number) {
  const res = await fetch(
    `https://api.veruniagroup.com/api/al-fotivo-products?populate=*&filters[al_fotivo_category][slug][$eq]=${categorySlug}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch related products");
  return res.json();
}