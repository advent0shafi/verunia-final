import { backendAPI } from "./getData";

export async function getInteriors(): Promise<InteriorsApiResponse> {
  const res = await fetch(
    `https://api.veruniagroup.com/api/interiors?populate=*`,
    {
      // App Router: cache control
      next: { revalidate: 60 }, // ISR: revalidate every 60s
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch interiors");
  }

  return res.json();
}


export async function getInteriorBySlug(slug: string): Promise<InteriorProject | null> {
  const res = await fetch(
    `${backendAPI}/api/interiors?filters[slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 60 } } // ISR
  );

  if (!res.ok) return null;

  const json: StrapiResponse<InteriorProject> = await res.json();
  return json.data[0] ?? null;
}

export async function getAllInteriorSlugs(): Promise<string[]> {
  const res = await fetch(`${backendAPI}/api/interiors?fields[0]=slug`);
  const json = await res.json();

  return json.data.map((item: any) => item.slug);
}


