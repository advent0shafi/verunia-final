import interior01 from "@/public/interior-page/image-interior-02.png";
import interior02 from "@/public/interior-page/image-interior-03.png";
import interior04 from "@/public/interior-page/image-interior-040.png";
import interior00 from "@/public/interior-page/image-interior-00.png";
import interior05 from "@/public/interior-page/image-interior-05.png";
import interior06 from "@/public/interior-page/image-interior-06.png";
import interior07 from "@/public/interior-page/image-interior-07.png";
import interior08 from "@/public/interior-page/image-interior-08.png";
import interior09 from "@/public/interior-page/image-interior-09.png";
import { StaticImageData } from "next/image";

export interface InteriorProject {
    id: string;
    slug: string;
    title: string;
    location: string;
    year: string;
    category: string;
    description: string;
    mainImage: StaticImageData;
    galleryImages: StaticImageData[];
}

export const interiorProjects: InteriorProject[] = [
    {
        id: "01",
        slug: "sapphire-house-belgium",
        title: "Sapphire House",
        location: "Belgium",
        year: "2024",
        category: "Hospitality",
        description: "A stunning renovation of a historic building into a luxury hotel, blending classic architecture with modern interior design. The project focuses on preserving the original character while introducing contemporary amenities and style.",
        mainImage: interior01,
        galleryImages: [interior01, interior02, interior00]
    },
    {
        id: "02",
        slug: "holiday-inn",
        title: "Holiday Inn",
        location: "Dubai",
        year: "2024",
        category: "Hospitality",
        description: "Modern and functional interior design for Holiday Inn, designed to provide comfort and efficiency for travelers. The space features a welcoming lobby, comfortable rooms, and functional common areas.",
        mainImage: interior02,
        galleryImages: [interior02, interior05, interior06]
    },
    {
        id: "03",
        slug: "private-residence-dubai",
        title: "Private Residence",
        location: "Dubai",
        year: "2023",
        category: "Residential",
        description: "A luxurious private residence in Dubai, featuring bespoke furniture and high-end finishes. The design emphasizes open spaces, natural light, and a seamless flow between indoor and outdoor living areas.",
        mainImage: interior04,
        galleryImages: [interior04, interior07, interior08, interior09]
    },
    {
        id: "04",
        slug: "executive-office",
        title: "Executive Office",
        location: "Abu Dhabi",
        year: "2023",
        category: "Commercial",
        description: "A sleek and professional executive office space designed to foster productivity and collaboration. The design uses a neutral color palette with bold accents and ergonomic furniture.",
        mainImage: interior05,
        galleryImages: [interior05, interior06, interior07]
    },
    {
        id: "05",
        slug: "luxury-villa",
        title: "Luxury Villa",
        location: "Palm Jumeirah",
        year: "2024",
        category: "Residential",
        description: "An opulent villa on Palm Jumeirah, designed for lavish living and entertaining. The interior features custom-made furniture, marble flooring, and intricate detailing throughout.",
        mainImage: interior06,
        galleryImages: [interior06, interior08, interior09]
    }
];

export const getProjectBySlug = (slug: string): InteriorProject | undefined => {
    return interiorProjects.find((project) => project.slug === slug);
};
