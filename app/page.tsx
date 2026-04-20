import Header from "@/components/header/header";
import Hero from "@/components/home/hero";
import AnimatedSection from "@/components/home/animated-section";
import Sections from "@/components/home/sections";
import Sections02 from "@/components/home/sections02";
import Sections03 from "@/components/home/sections03";
import { GlobeDemo } from "@/components/home/sections04";
import Sections05 from "@/components/home/sections05";
import VeruniaFooter from "@/components/footer/footer";
import { getInteriors } from "@/lib/interiors";
import { mapInteriorsToUI, type InteriorProjectUI } from "@/lib/mapInteriors";

function pickRandomProjects(projects: InteriorProjectUI[], count: number): InteriorProjectUI[] {
  const shuffled = [...projects];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default async function Home() {
  const apiData = await getInteriors();
  const projects = mapInteriorsToUI(apiData);
  const randomInteriorProjects = pickRandomProjects(projects, 4);

  return (
    <main>
      <Header />
      <Hero />
      <Sections />

      <AnimatedSection variant="fade">
        <Sections02 />
      </AnimatedSection>

      <AnimatedSection variant="slide-up">
        <Sections03 projects={randomInteriorProjects} />
      </AnimatedSection>

     

      <AnimatedSection variant="scale">
        <GlobeDemo />
      </AnimatedSection>
      
      <AnimatedSection variant="fade">
        <Sections05 />
      </AnimatedSection>
      <VeruniaFooter />
    </main>
  );
}
