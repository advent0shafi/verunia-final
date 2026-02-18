import Footer from "@/components/footer/footer";
import InteriorHeader from "@/components/header/interior-header";
import ProjectGrid from "@/components/interior-page/project-grid";
import { getInteriors } from "@/lib/interiors";
import { mapInteriorsToUI } from "@/lib/mapInteriors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects - Interior",
  description:
    "Explore our portfolio of bespoke office, hospitality, and residential interior projects.",
};

export default async function AllProjectsPage() {
  const apiData = await getInteriors();
  const projects = mapInteriorsToUI(apiData);

  return (
    <main className="bg-[#171412] min-h-screen flex flex-col">
      <InteriorHeader />

      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 grow">
        <div className="max-w-[1440px] mx-auto">
          <div className="px-5">
            <p className="font-instrument text-[#A1A1AA] text-[16px]">
              All Projects
            </p>

            <h1 className="font-instrument max-w-[719px] text-[48px] leading-[60px] text-[#FDFDFC] py-[24px]">
              Spaces that work beautifully, long after the first day.
            </h1>
          </div>

          {/* 🔥 REAL API DATA */}
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
