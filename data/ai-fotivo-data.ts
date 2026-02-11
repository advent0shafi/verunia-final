import imageAiFotiva06 from "@/public/ai-fotivo-page/product/product(1).png";
import imageAiFotiva07 from "@/public/ai-fotivo-page/product/product(2).png";
import imageAiFotiva08 from "@/public/ai-fotivo-page/product/product(3).png";
import imageAiFotiva09 from "@/public/ai-fotivo-page/product/product(4).png";
import { StaticImageData } from "next/image";

export interface AiFotivoCategory {
    title: string;
    slug: string;
    image: StaticImageData;
    description: string;
}

export interface AiFotivoProject {
    id: string;
    slug: string;
    title: string;
    categorySlug: string;
    location: string;
    year: string;
    description: string;
    mainImage: string | StaticImageData;
    galleryImages: (string | StaticImageData)[];
}

export const aiFotivoCategories: AiFotivoCategory[] = [
    {
        title: "Dining Collection",
        slug: "dining-collection",
        image: imageAiFotiva06,
        description: "Elegant dining spaces designed for gathering and gastronomy.",
    },
    {
        title: "Living Collection",
        slug: "living-collection",
        image: imageAiFotiva07,
        description: "Comfortable and stylish living areas for relaxation and entertainment.",
    },
    {
        title: "Luxury Collection",
        slug: "luxury-collection",
        image: imageAiFotiva08,
        description: "Opulent designs featuring premium materials and exquisite details.",
    },
    {
        title: "Outdoor Collection",
        slug: "outdoor-collection",
        image: imageAiFotiva09,
        description: "Seamless indoor-outdoor living spaces that embrace nature.",
    },
];

export const aiFotivoProjects: AiFotivoProject[] = [
    {
        id: "01",
        slug: "evening-living-room",
        title: "Evening Living Room",
        categorySlug: "living-collection",
        location: "Doha, Qatar",
        year: "2024",
        description: "A sophisticated living room designed for evening relaxation, featuring warm lighting and rich textures.",
        mainImage: imageAiFotiva06,
        galleryImages: ["/ai-fotivo-page/ai-fotiva (10).png", "/ai-fotivo-page/ai-fotiva (5).png"],
    },
    {
        id: "02",
        slug: "penthouse-dining",
        title: "Penthouse Dining",
        categorySlug: "dining-collection",
        location: "Dubai, UAE",
        year: "2024",
        description: "A breathtaking dining area in a Dubai penthouse, offering panoramic views and modern luxury.",
        mainImage: imageAiFotiva07,
        galleryImages: ["/ai-fotivo-page/ai-fotiva (5).png", "/ai-fotivo-page/ai-fotiva (10).png"],
    },
    {
        id: "03",
        slug: "master-suite-corner",
        title: "Master Suite Corner",
        categorySlug: "luxury-collection",
        location: "Riyadh, Saudi Arabia",
        year: "2023",
        description: "An intimate corner in a master suite, designed for reading and quiet contemplation.",
        mainImage: imageAiFotiva08,
        galleryImages: ["/ai-fotivo-page/riyadh-master.png", "/ai-fotivo-page/ai-fotiva (5).png"],
    },
    {
        id: "04",
        slug: "modern-outdoor-lounge",
        title: "Modern Outdoor Lounge",
        categorySlug: "outdoor-collection",
        location: "Muscat, Oman",
        year: "2024",
        description: "A stylish outdoor lounge area perfect for entertaining guests in the cooler months.",
        mainImage: imageAiFotiva09, // Using imported image for variety
        galleryImages: [imageAiFotiva09, "/ai-fotivo-page/ai-fotiva (10).png"],
    },
];

export const getCategoryBySlug = (slug: string) =>
    aiFotivoCategories.find(c => c.slug === slug);

export const getProjectBySlug = (slug: string) =>
    aiFotivoProjects.find(p => p.slug === slug);

export const getProjectsByCategory = (categorySlug: string) =>
    aiFotivoProjects.filter(p => p.categorySlug === categorySlug);
