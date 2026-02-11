import { AiFotivoProject } from "@/data/ai-fotivo-data";
import FotivoProjectCard from "./fotivo-project-card";
import product01 from "@/public/ai-fotivo-page/product/product(1).png"
import product02 from "@/public/ai-fotivo-page/product/product(2).png"
import product03 from "@/public/ai-fotivo-page/product/product(3).png"
import product04 from "@/public/ai-fotivo-page/product/product(4).png"
import { StaticImageData } from "next/image";

interface FotivoCategoryGridProps {
    image: StaticImageData;
    alt: string;
    projectTitle: string;
    category: string;
    slug: string;
}

export const aiFotivoProjects: FotivoCategoryGridProps[] = [
    {
        image: product01,
        alt: "Luxe Sofa product",
        projectTitle: "Luxe Sofa",
        category: "Dining Collection",
        slug: "luxe-sofa"
    },
    {
        image: product02,
        alt: "Elegant Armchair product",
        projectTitle: "Elegant Armchair",
        category: "Living Collection",
        slug: "elegant-armchair"
    },
    {
        image: product03,
        alt: "Outdoor Lounge product",
        projectTitle: "Outdoor Lounge",
        category: "Outdoor Collection",
        slug: "outdoor-lounge"
    },
    {
        image: product04,
        alt: "Master Suite Bed product",
        projectTitle: "Master Suite Bed",
        category: "Luxury Collection",
        slug: "master-suite-bed"
    },
    {
        image: product02,
        alt: "Minimal Dining Table product",
        projectTitle: "Minimal Dining Table",
        category: "Dining Collection",
        slug: "minimal-dining-table"
    },
    {
        image: product03,
        alt: "Contemporary Sectional product",
        projectTitle: "Contemporary Sectional",
        category: "Living Collection",
        slug: "contemporary-sectional"
    }
];

export default function FotivoCategoryGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
            {aiFotivoProjects.map((project) => (
                <FotivoProjectCard
                    key={project.slug}
                    image={project.image}
                    alt={project.alt}
                    projectTitle={project.projectTitle}
                    category={project.category}
                    slug={project.slug}
                />
            ))}
        </div>
    );
}
