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
                <div className="max-w-[1440px] mx-auto ">
                    <div className="px-5">
                    <AnimatedSection variant="fade">
                         <p className="font-instrument font-medium not-italic text-[16px] leading-[24px] tracking-normal align-middle text-[#A1A1AA] max-w-2xl ">
                             All Projects
                         </p>
                        <h1 className="font-instrument font-medium not-italic max-w-[719px] text-[48px] leading-[60px] [-letter-spacing:-0.02em] text-[#FDFDFC] py-[24px]">
                        Spaces that work beautifully, long after the first day.
                        </h1>
                       
                    </AnimatedSection>
                    </div>
                    

                    <AnimatedSection variant="slide-up">
                        <ProjectGrid projects={interiorProjects} />
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
