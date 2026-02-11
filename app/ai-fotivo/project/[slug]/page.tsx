import { notFound } from "next/navigation";
import { getProjectBySlug, aiFotivoProjects } from "@/data/ai-fotivo-data";
import FotivoProjectDetail from "@/components/ai-fotivo-page/fotivo-project-detail";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";
import AiFotivaHeader from "@/components/header/ai-fotiva-header";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return aiFotivoProjects.map((project) => ({
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
        title: `${project.title} - Al Fotivo`,
        description: project.description,
    };
}

export default async function FotivoProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            <AiFotivaHeader/>
            <FotivoProjectDetail project={project} />
            <Footer />
        </main>
    );
}
