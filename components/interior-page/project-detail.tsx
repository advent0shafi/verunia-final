'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ImageReveal } from "@/components/home/animated-section";
import { InteriorImageCard } from "./interior-section-01";


// fallback images for "Similar projects" section (kept as-is)
import interior01 from "@/public/interior-page/image-interior-02.png";
import interior02 from "@/public/interior-page/image-interior-03.png";

interface ProjectDetailProps {
  project: InteriorProject;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {

  // Verunia editorial rhythm (UNCHANGED)
  const getLayoutClass = (index: number) => {
    const patterns = [
      "md:col-span-2 h-[50vh] md:h-[80vh]",
      "md:col-span-1 md:row-span-2 h-[60vh] md:h-[110vh]",
      "md:col-span-1 h-[30vh] md:h-[53vh]",
      "md:col-span-1 h-[30vh] md:h-[53vh]",
      "md:col-span-2 h-[40vh] md:h-[70vh]",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="bg-[#121211] text-[#FDFDFC] min-h-screen font-instrument">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-[100px] border-b border-white/10 pb-8 md:pb-10">
        <div className="max-w-[1440px] mx-auto">

          {/* Breadcrumb */}
          <div className="pt-8 px-6 md:px-12 lg:px-20 flex items-center">
            <Link
              href="/interior/all-projects"
              className="text-xs text-[#C0BEB9] hover:underline flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Projects
            </Link>
          </div>

          {/* Title */}
          <div className="px-6 md:px-12 lg:px-20 mt-6 mb-2">
            <h1 className="font-fraunces text-white text-3xl md:text-5xl font-normal leading-tight">
              {project.project_title}
            </h1>
          </div>

          {/* Divider */}
          <div className="border-t border-[#22211D] w-full mx-auto" />

          {/* Detail Grid */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 px-6 md:px-12 lg:px-20 py-6">
            <div className="flex-1">
              <div className="text-xs text-[#C0BEB9] mb-1">Type of project</div>
              <div className="text-sm text-white">{project.project_type}</div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-[#C0BEB9] mb-1">Date</div>
              <div className="text-sm text-white">{project.completion_date}</div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-[#C0BEB9] mb-1">Location</div>
              <div className="text-sm text-white">{project.location}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          {project.gallery_images.map((image, index) => (
            <div
              key={image.id}
              className={`relative w-full overflow-hidden transition-all duration-700 ${getLayoutClass(index)}`}
            >
              <ImageReveal className="w-full h-full">
                <Image
                  src={`https://api.veruniagroup.com${image.formats.large?.url || image.url}`}
                  alt={`${project.project_title} image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                />
              </ImageReveal>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SIMILAR PROJECTS ================= */}
      <section className="flex flex-col justify-center px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-[1440px] px-6">
          <h1 className="font-instrument text-[#FDFDFC] font-medium text-[48px] leading-[60px]">
            Similar projects
          </h1>
        </div>
      </section>

      <section className="flex flex-col justify-center px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-[1440px] pb-8 md:pb-10">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-[45%] p-2 md:p-4 pl-0">
              <InteriorImageCard
                src={interior01}
                alt="Similar project"
                number="01"
              />
            </div>
            <div className="w-full md:w-[55%] p-2 md:p-4 pl-0">
              <InteriorImageCard
                src={interior02}
                alt="Similar project"
                number="02"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
