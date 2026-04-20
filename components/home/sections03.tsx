"use client";

import Image from "next/image";
import SectionContainer from "../ui/section-container";
import { ImageReveal } from "./animated-section";
import AnimatedSection from "./animated-section";
import Link from "next/link";
import { type InteriorProjectUI } from "@/lib/mapInteriors";

type Sections03Props = {
  projects?: InteriorProjectUI[];
};

type DisplayProject = {
  slug?: string;
  title: string;
  mainImage: string;
  year: string;
  place: string;
};

const fallbackProjects: DisplayProject[] = [
  {
    title: "Sheraton Canada",
    mainImage: "/hero-image/image-08.png",
    year: "2024",
    place: "Verunia Interiors",
  },
  {
    title: "JW Marriot Nairobi",
    mainImage: "/hero-image/image-10.png",
    year: "2024",
    place: "Verunia Furniture",
  },
  {
    title: "Sapphire House, Belgium",
    mainImage: "/hero-image/image-12.png",
    year: "2024",
    place: "Al Fotivo",
  },
  {
    title: "MaisonArt",
    mainImage: "/hero-image/image-13.png",
    year: "2024",
    place: "Verunia Interiors",
  },
];

export default function Sections03({ projects = [] }: Sections03Props) {
  const displayProjects: DisplayProject[] = fallbackProjects.map((fallback, index) => {
    const project = projects[index];

    return {
      slug: project?.slug,
      title: project?.title || fallback.title,
      mainImage: project?.mainImage || fallback.mainImage,
      year: project?.year || fallback.year,
      place: project?.place || fallback.place,
    };
  });

  const leftTop = displayProjects[0];
  const leftBottom = displayProjects[1];
  const rightTop = displayProjects[2];
  const rightBottom = displayProjects[3];

  const renderCard = ({
    project,
    number,
    imageHeightClass,
    imageWidth = 1200,
    imageHeight = 800,
  }: {
    project: DisplayProject;
    number: string;
    imageHeightClass: string;
    imageWidth?: number;
    imageHeight?: number;
  }) => {
    const content = (
      <div className="group">
        <AnimatedSection variant="parallax">
          <div className="overflow-hidden">
            <ImageReveal>
              <Image
                src={project.mainImage}
                alt={project.title}
                width={imageWidth}
                height={imageHeight}
                sizes="(min-width: 768px) 50vw, 100vw"
                quality={82}
                className={`${imageHeightClass} md:rounded-0 rounded-[6px] object-cover transition-transform duration-500 group-hover:scale-105`}
              />
            </ImageReveal>
          </div>
        </AnimatedSection>
        <div className="flex items-center justify-between mt-3">
          <div className="w-auto pr-3">
            <div className="w-2 h-2 rounded-full bg-[#271E07]"></div>
          </div>
          <div className="w-full">
            <div className="flex-1 flex items-center justify-between border-b border-[#271E07]/30 pb-2">
              <h3 className="font-instrument font-bold text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-normal align-middle text-[#271E07]">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-px h-4 bg-[#271E07]/50"></div>
                <span className="text-[#271E07] text-base md:text-lg font-light">{number}</span>
              </div>
            </div>
            <p className="font-instrument font-normal not-italic text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-normal align-middle text-[#271E07]/70 pt-2 inline-block">
              {project.year} | {project.place}
            </p>
          </div>
        </div>
      </div>
    );

    if (!project.slug) {
      return content;
    }

    return (
      <Link href={`/interior/project/${project.slug}`} aria-label={project.title}>
        {content}
      </Link>
    );
  };

  return (
    <SectionContainer>
      <div className="w-full">
        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-8">

          {/* Left Column */}
          <div className="flex flex-col gap-6 md:gap-8">
            {renderCard({
              project: leftTop,
              number: "04",
              imageHeightClass: "w-full h-[250px] md:h-[380px]",
            })}
            {renderCard({
              project: leftBottom,
              number: "03",
              imageHeightClass: "w-full h-[250px] md:h-[380px]",
            })}
          </div>

          {/* Right Column - Offset */}
          <div className="flex flex-col gap-6 md:gap-8 mt-0 md:mt-32">
            {renderCard({
              project: rightTop,
              number: "02",
              imageHeightClass: "w-full h-[200px] md:h-[280px]",
            })}
            {renderCard({
              project: rightBottom,
              number: "01",
              imageHeightClass: "w-full h-[200px] md:h-[283.3299865722656px] md:w-[453.3399963378906px]",
              imageWidth: 453,
              imageHeight: 283,
            })}
          </div>
        </div>
      </div>
      <Image
        src="/ui/divider-sections.svg"
        alt="Verunia Group"
        width={1000}
        height={1000}
        sizes="100vw"
        unoptimized
        className="w-full h-full object-cover py-[60px] md:py-[112px] md:block hidden"
      />
      <Image src="/ui/gold-divider-mobile.svg" alt="Verunia Group" width={1000} height={1000} sizes="100vw" unoptimized className="w-full h-full object-cover pt-[64px] md:py-[112px] md:hidden block" />
    </SectionContainer>
  )
}