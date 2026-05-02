import { backendAPI } from "./getData";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export type InteriorProjectUI = {
  slug: string;
  title: string;
  mainImage: string;
  galleryImages?: string[];
  year?: string;
  place?: string;
  isFeatured: boolean;
};

export function mapInteriorsToUI(
  response: InteriorsApiResponse
): InteriorProjectUI[] {
  return response.data.map((item) => {
    const interior = item;

    const galleryImages =
      interior.gallery_images
        ?.map((img) =>
          img?.url?.startsWith("http")
            ? img.url
            : img?.url
              ? `${backendAPI}${img.url}`
              : null
        )
        .filter((u): u is string => Boolean(u)) ?? [];

    return {
      slug: interior.slug,
      title: interior.project_title,
      mainImage: interior.project_thumbnail_image
        ? `${backendAPI}${interior.project_thumbnail_image.url}`
        : "https://api.veruniagroup.com/uploads/Gemini_Generated_Image_qean01qean01qean_1_1_1_a5d6bdc05d.png",
      galleryImages: galleryImages.length ? galleryImages : undefined,
      year: interior.completion_date,
      place: interior.location,
      isFeatured: interior.isFeatured ?? false,
    };
  });
}
