"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll detection to highlight active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "skills", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-1 flex flex-col relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      {/* Navbar Component */}
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />

      {/* Main Sections */}
      <main className="flex-1 mt-12 sm:mt-24 space-y-28 sm:space-y-44 pb-20">
        <Hero scrollTo={scrollTo} />
        
        <Experience />
        
        <Projects />
        
        <Skills />

        <section id="education" className="grid grid-cols-1 lg:grid-cols-5 gap-16 scroll-mt-24">
          <div className="lg:col-span-2">
            <Education />
          </div>
          <div className="lg:col-span-3">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
