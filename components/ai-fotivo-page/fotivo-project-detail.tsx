'use client';

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AiFotivoProject, aiFotivoProjects, getCategoryBySlug } from "@/data/ai-fotivo-data";
import { ImageReveal } from "@/components/home/animated-section";
import Link from "next/link";
import FotivoProjectCard from "./fotivo-project-card";

interface FotivoProjectDetailProps {
    project: AiFotivoProject;
}

export default function FotivoProjectDetail({ project }: FotivoProjectDetailProps) {
    const [currentImage, setCurrentImage] = useState<string | StaticImageData>(project.mainImage);
    const category = getCategoryBySlug(project.categorySlug);

    // Get related projects (same category, excluding current)
    const relatedProjects = aiFotivoProjects
        .filter(p => p.categorySlug === project.categorySlug && p.id !== project.id)
        .slice(0, 3);

    // If not enough related projects, fill with others
    if (relatedProjects.length < 3) {
        const otherProjects = aiFotivoProjects
            .filter(p => p.categorySlug !== project.categorySlug && p.id !== project.id)
            .slice(0, 3 - relatedProjects.length);
        relatedProjects.push(...otherProjects);
    }

    // Combine main image and gallery images for thumbnails
    const allImages = [project.mainImage, ...project.galleryImages];

    return (
        <div className="bg-[#171412] text-[#FDFDFC] min-h-screen font-instrument">
            {/* Main Content Section */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column - Gallery */}
                    <div className="flex flex-col gap-4">
                        {/* Main Image */}
                        <div className="relative w-full aspect-square bg-[#FFFFFF] flex items-center justify-center p-8 md:p-12">
                            <Image
                                src={currentImage}
                                alt={project.title}
                                width={600}
                                height={600}
                                className="object-contain w-full h-full"
                                priority
                            />
                        </div>
                        {/* Thumbnails */}
                        <div className="grid grid-cols-3 gap-4">
                            {allImages.slice(0, 3).map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(img)}
                                    className={`relative aspect-square bg-[#FFFFFF] flex items-center justify-center p-4 transition-all duration-300 ${currentImage === img ? 'ring-2 ring-[#F5C547]' : 'hover:opacity-80'}`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${project.title} view ${index + 1}`}
                                        width={150}
                                        height={150}
                                        className="object-contain w-full h-full"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="flex flex-col pt-4">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-sm text-white/50 mb-8 font-instrument">
                            <span>Furniture</span>
                            <span>›</span>
                            <span>{category?.title || 'Collection'}</span>
                        </div>

                        {/* Title */}
                        <h1 className="font-fraunces font-light text-4xl md:text-5xl lg:text-6xl text-white mb-8">
                            {project.title}
                        </h1>

                        {/* Description */}
                        <div className="space-y-6 text-white/80 font-instrument text-lg font-light leading-relaxed max-w-xl">
                            <p>{project.description}</p>
                            <p>
                                Crafted from premium generative leather for a luxurious, durable finish, this chair blends style and function. The anti-fingerprint aluminum frame keeps a sleek, clean look with minimal maintenance. Features dynamic lumbar support adapts to both upright and forward-leaning postures, ensuring comfort during long hours of work. Adjustable headrest and armrests complete the ergonomic design, promoting proper posture throughout the day.
                            </p>
                        </div>

                        {/* Action Button */}
                        <div className="mt-12">
                            <button className="bg-[#FDFDFC] text-[#171412] px-8 py-4 rounded-[4px] font-medium hover:bg-white/90 transition-colors">
                                Request Product Info
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* "You may also like" Section */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-20 md:pb-32">
                <h2 className="font-fraunces font-light text-3xl md:text-4xl text-white mb-10">
                    You may also like
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedProjects.map((relatedProject) => (
                        <div key={relatedProject.id} className="h-[500px]">
                            <FotivoProjectCard
                                image={relatedProject.mainImage as StaticImageData}
                                alt={relatedProject.title}
                                projectTitle={relatedProject.title}
                                category={getCategoryBySlug(relatedProject.categorySlug)?.title || ""}
                                slug={relatedProject.slug}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
