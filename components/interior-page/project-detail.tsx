'use client';

import Image from "next/image";
import { InteriorProject } from "@/data/interior-projects";
import { ImageReveal, TextReveal } from "@/components/home/animated-section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectDetailProps {
    project: InteriorProject;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <div className="bg-[#171412] text-[#FDFDFC] min-h-screen">
            {/* Navigation */}
            <div className="fixed top-24 left-6 z-50 mix-blend-difference text-white md:top-32 md:left-12">
                <Link href="/interior/all-projects" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                    <ArrowLeft className="w-6 h-6" />
                    <span className="hidden md:inline font-instrument text-lg">Back to Projects</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen">
                <ImageReveal className="w-full h-full">
                    <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                </ImageReveal>
                <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-6 md:p-12 lg:p-20">
                    <h1 className="font-instrument font-medium text-[40px] md:text-[60px] lg:text-[80px] leading-[1.1] mb-4">
                        <TextReveal>{project.title}</TextReveal>
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 font-instrument text-lg md:text-xl text-white/80">
                        <p>{project.location}</p>
                        <p>{project.year}</p>
                        <p>{project.category}</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-4">
                        <h2 className="font-instrument font-medium text-2xl md:text-3xl mb-6 text-white/90">Project Story</h2>
                        <div className="h-px w-full bg-white/20 mb-8"></div>
                        <div className="font-instrument text-lg text-white/60 space-y-4">
                            <p>Services:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Interior Design</li>
                                <li>Space Planning</li>
                                <li>Furniture Selection</li>
                                <li>Project Management</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <p className="font-instrument text-xl md:text-2xl leading-relaxed text-white/80">
                            {project.description}
                        </p>
                        <div className="mt-12">
                            <p className="font-instrument text-white/60 text-lg leading-relaxed">
                                Every detail was carefully considered to ensure a harmonious blend of functionality and aesthetics. The result is a space that not only meets the client&apos;s needs but also inspires and uplifts all who enter.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-20 md:pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {project.galleryImages.map((image, index) => (
                        <div key={index} className={`relative w-full h-[400px] md:h-[600px] ${index % 3 === 0 ? 'md:col-span-2 md:h-[700px]' : ''}`}>
                            <ImageReveal className="w-full h-full">
                                <Image
                                    src={image}
                                    alt={`${project.title} gallery image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </ImageReveal>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
