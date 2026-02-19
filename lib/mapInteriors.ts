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
  year?: string;
  place?: string;
};

export function mapInteriorsToUI(
  response: InteriorsApiResponse
): InteriorProjectUI[] {
  return response.data.map((item) => {
    const interior = item;

    return {
      slug: interior.slug,
      title: interior.project_title,
      mainImage: interior.project_thumbnail_image
        ? `${backendAPI}${interior.project_thumbnail_image.url}`
        : "https://api.veruniagroup.com/uploads/Gemini_Generated_Image_qean01qean01qean_1_1_1_a5d6bdc05d.png",
      year: interior.completion_date,
      place: interior.location,
    };
  });
}
