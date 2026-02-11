import Image from "next/image";
import Link from "next/link";
import { InteriorProject } from "@/data/interior-projects";
import { ImageReveal } from "@/components/home/animated-section";

interface ProjectCardProps {
    project: InteriorProject;
    priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
    return (
        <Link href={`/interior/project/${project.slug}`} className="block group w-full h-full">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                <ImageReveal className="w-full h-full">
                    <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={priority}
                    />
                </ImageReveal>

                <div
                    className={`
            absolute 
            top-[14px] 
            left-[14px]
            bg-white rounded-[4px] opacity-100 flex gap-3 py-3 px-5
            md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300
          `}
                    style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.05)" }}
                >
                    <div>
                        <span className="inline-block w-[8px] h-[8px] bg-[#271E07] rounded-[30px] opacity-100 mt-1.5" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-instrument font-bold text-[14px] leading-[20px] text-[#222]">
                            {project.title}
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="font-instrument italic text-[13px] text-[#454545]">{project.year}</span>
                            <span className="font-instrument text-[13px] text-[#454545]">{project.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile-only info below image if needed, or keep hover effect for all */}
            <div className="md:hidden mt-3 flex justify-between items-start">
                <div>
                    <h3 className="font-instrument font-medium text-[18px] text-[#FDFDFC]">{project.title}</h3>
                    <p className="font-instrument text-[14px] text-[#A1A1AA]">{project.location} — {project.year}</p>
                </div>
                <div className="w-[30px] h-[30px] rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-white text-[14px]">↗</span>
                </div>
            </div>
        </Link>
    );
}
