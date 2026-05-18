import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Courses from "@/components/Courses";

export default function Home() {
  return (
    <main className="bg-red-500">
      <Navbar />
      <Hero />
      <About />
        <Contact />
         
      <Experience />
      <Education />
     
      <Projects />
      <Skills />
      <Courses />
    
      
    </main>
  );
}