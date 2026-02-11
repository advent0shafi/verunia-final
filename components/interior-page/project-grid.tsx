import { InteriorProject } from "@/data/interior-projects";
import ProjectCard from "./project-card";
import interior01 from "@/public/interior-page/image-interior-02.png";
import interior02 from "@/public/interior-page/image-interior-03.png";
import interior04 from "@/public/interior-page/image-interior-040.png";

interface ProjectGridProps {
  projects: InteriorProject[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const items: React.ReactNode[] = [];
  let number = 1;

  for (let i = 0; i < projects.length; i += 3) {
    const group = projects.slice(i, i + 3);
    const isLastGroup = i + group.length === projects.length;

    // Special case: last project when total % 3 === 1 → make it full-width
    if (group.length === 1 && isLastGroup) {
      const cardNumber = number;
      items.push(
        <div
          key={`full-last-${i}`}
          className="w-full p-2 md:px-4 pb-4 pl-0"
        >
          <ProjectCard
            project={group[0]}
            priority={cardNumber <= 3}
            number={cardNumber.toString().padStart(2, "0")}
            height={671}
            maxHeight="max-h-[500px] md:max-h-[671px]"
               src={projects[i].mainImage}
                            alt="Interior"

          />
        </div>
      );
      number += 1;
      continue;
    }

    // Normal pair row (45% + 55%)
    items.push(
      <div
        key={`pair-${i}`}
        className="w-full h-full flex flex-col md:flex-row"
      >
        {/* 45% card */}
        <div className="w-full md:w-[45%] p-2 md:p-4 pl-0">
          <ProjectCard
            project={group[0]}
            priority={number <= 3}
            number={number.toString().padStart(2, "0")}
             src={projects[i].mainImage}
                            alt="Interior"

          />
        </div>

        {/* 55% card (if exists) */}
        {group.length >= 2 && (
          <div className="w-full md:w-[55%] p-2 md:p-4 pl-0">
            <ProjectCard
              project={group[1]}
              priority={number + 1 <= 3}
              number={(number + 1).toString().padStart(2, "0")}
                 src={projects[i].mainImage}
                            alt="Interior"

            />
          </div>
        )}
      </div>
    );

    number += group.length >= 2 ? 2 : 1;

    // Full-width card (every 3rd project)
    if (group.length === 3) {
      const cardNumber = number;
      items.push(
        <div
          key={`full-${i + 2}`}
          className="w-full p-2 md:px-4 pb-4 pl-0"
        >
          <ProjectCard
            project={group[2]}
            priority={cardNumber <= 3}
            number={cardNumber.toString().padStart(2, "0")}
            height={671}
            maxHeight="max-h-[500px] md:max-h-[671px]"
                 src={projects[i].mainImage}
                            alt="Interior"

          />
        </div>
      );
      number += 1;
    }
  }

  return (
    <div className="w-full max-w-[1440px] h-full max-md:max-w-full py-8 md:py-10 relative overflow-hidden">
      {items}
    </div>
  );
}