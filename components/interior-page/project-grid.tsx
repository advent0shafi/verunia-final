import { InteriorProject } from "@/data/interior-projects";
import ProjectCard from "./project-card";

interface ProjectGridProps {
    projects: InteriorProject[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12">
            {projects.map((project, index) => (
                <div key={project.id} className="w-full">
                    <ProjectCard project={project} priority={index < 3} />
                </div>
            ))}
        </div>
    );
}
