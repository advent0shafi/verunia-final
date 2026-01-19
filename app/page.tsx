import Header from "@/components/header/header";
import Hero from "@/components/home/hero";
import AnimatedSection from "@/components/home/animated-section";
import Sections from "@/components/home/sections";
import Sections02 from "@/components/home/sections02";
import Sections03 from "@/components/home/sections03";
import { GlobeDemo } from "@/components/home/sections04";
import VeruniaFooter from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <AnimatedSection>
        <Sections />
      </AnimatedSection>

      <AnimatedSection>
        <Sections02 />
      </AnimatedSection>

      <AnimatedSection>
        <Sections03 />
      </AnimatedSection>

      <AnimatedSection>
        <GlobeDemo />
      </AnimatedSection>

      <AnimatedSection>
        <VeruniaFooter />
      </AnimatedSection>
    </main>
  );
}
