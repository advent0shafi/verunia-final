import { backendAPI } from "./getData";

export async function getInteriors(): Promise<InteriorsApiResponse> {
  const res = await fetch(
    `https://api.veruniagroup.com/api/interiors?populate[Interior][fields][0]=project_title&populate[Interior][fields][1]=client_name&populate[Interior][fields][2]=project_type&populate[Interior][fields][3]=location&populate[Interior][fields][4]=completion_date&populate[Interior][populate][project_thumbnail_image][fields][0]=url&populate[Interior][populate][gallery_images][fields][0]=url`,
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
