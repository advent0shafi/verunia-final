import { notFound } from "next/navigation";
import { Metadata } from "next";

import InteriorHeader from "@/components/header/interior-header";
import ProjectDetail from "@/components/interior-page/project-detail";
import Footer from "@/components/footer/footer";

import { getAllInteriorSlugs, getInteriorBySlug, getInteriors } from "@/lib/interiors";
import { mapInteriorsToUI } from "@/lib/mapInteriors";
// --------------------
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// --------------------
// Static Params (SSG)
// --------------------
export async function generateStaticParams() {
  const slugs = await getAllInteriorSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

// --------------------
// Metadata (SEO)
// --------------------
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  const project = await getInteriorBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.project_title} - Verunia Interiors`,
    description: `${project.project_type} project in ${project.location}`,
    openGraph: {
      title: `${project.project_title} - Verunia Interiors`,
      description: `${project.project_type} project in ${project.location}`,
      type: "article",
    },
  };
}

// --------------------
// Page
// --------------------
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = await getInteriorBySlug(slug);

  if (!project) {
    notFound();
  }

  const apiData = await getInteriors();
  const allProjects = mapInteriorsToUI(apiData);
  const otherProjects = allProjects.filter((p) => p.slug !== slug);
  const randomizedProjects = otherProjects.sort(() => 0.5 - Math.random());
  const similarProjects = randomizedProjects.slice(0, 2);

  return (
    <main>
      <InteriorHeader />
      <ProjectDetail project={project} similarProjects={similarProjects} />
      <Footer />
    </main>
  );
}
