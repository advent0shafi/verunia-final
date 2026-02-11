import { notFound } from "next/navigation";
import { getProjectBySlug, interiorProjects } from "@/data/interior-projects";
import ProjectDetail from "@/components/interior-page/project-detail";
import InteriorHeader from "@/components/header/interior-header";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return interiorProjects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} - Verunia Interiors`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            <ProjectDetail project={project} />
            <Footer />
        </main>
    );
}
