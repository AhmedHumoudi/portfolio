"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Courses from "@/components/Courses";

const sections = [
  { id: "hero",       label: "Home" },
  { id: "contact",    label: "Contact" },
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education" },
  { id: "projects",   label: "Projects" },
  { id: "skills",     label: "Skills" },
  { id: "courses",    label: "Courses" },
];

function Divider() {
  return (
    <div className="flex items-center gap-4 px-16 py-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" />
      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" />
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState("hero");

useEffect(() => {
  const handleScroll = () => {
    const offset = 200;
    let current = sections[0].id;
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= offset) {
        current = id;
      }
    }
    setActive(current);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 200;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
};
  return (
    <main className="bg-blue-200 relative">
      {/* Side nav */}
  <nav className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-5 bg-white/20 backdrop-blur-md border border-white/30 py-8 px-5 rounded-l-2xl shadow-xl">
  {sections.map(({ id, label }) => (
    <button key={id} onClick={() => scrollTo(id)} className="group flex items-center gap-3">
      <span className={`text-4xl tracking-wide transition-all duration-200 text-black
        ${active === id ? "font-black" : "font-normal"}`}>
        {label}
      </span>
      <span className={`block rounded-full transition-all duration-200
        ${active === id ? "w-4 h-4 bg-black" : "w-3 h-3 bg-gray-400 group-hover:bg-gray-600"}`}
      />
    </button>
  ))}
</nav>

      <Navbar />
      <section id="hero"><Hero /></section>
      <Divider />
      <section id="about"><About /></section>
      <Divider />
      <section id="contact"><Contact /></section>
      <Divider />
      <section id="experience"><Experience /></section>
      <Divider />
      <section id="education"><Education /></section>
      <Divider />
      <section id="projects"><Projects /></section>
      <Divider />
      <section id="skills"><Skills /></section>
      <Divider />
      <section id="courses"><Courses /></section>
    </main>
  );
}