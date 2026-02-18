import ProjectCard from "./project-card";
import { InteriorProjectUI } from "@/lib/mapInteriors";

interface ProjectGridProps {
  projects: InteriorProjectUI[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project, index) => {
        const isFullWidth = (index + 1) % 3 === 0;
        return (
          <div
            key={project.slug}
            className={isFullWidth ? "md:col-span-2" : "md:col-span-1"}
          >
            <ProjectCard
              project={project}
              number={(index + 1).toString().padStart(2, "0")}
              src={project.mainImage}
              alt={project.title}
            />
          </div>
        );
      })}
    </div>
  );
}
