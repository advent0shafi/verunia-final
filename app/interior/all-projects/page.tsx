import Footer from "@/components/footer/footer";
import InteriorHeader from "@/components/header/interior-header";
import ProjectGrid from "@/components/interior-page/project-grid";
import { interiorProjects } from "@/data/interior-projects";
import AnimatedSection from "@/components/home/animated-section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'All Projects - Interior',
    description: 'Explore our portfolio of bespoke office, hospitality, and residential interior projects.',
};

export default function AllProjectsPage() {
    return (
        <main className="bg-[#171412] min-h-screen flex flex-col">
            <InteriorHeader />

            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 grow">
                <div className="max-w-[1440px] mx-auto">
                    <AnimatedSection variant="fade">
                        <h1 className="font-instrument font-medium text-[40px] md:text-[56px] text-[#FDFDFC] mb-4">
                            Selected Projects
                        </h1>
                        <p className="font-instrument text-[#A1A1AA] text-lg max-w-2xl mb-16">
                            A curated collection of our finest interior design work, showcasing our commitment to quality, functionality, and aesthetic excellence.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection variant="slide-up">
                        <ProjectGrid projects={interiorProjects} />
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
