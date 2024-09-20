import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/Section-Divider";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
    
  );
}
