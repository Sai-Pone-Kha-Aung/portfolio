import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </main>

  );
}
