import React, { useEffect, useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Navbar } from "./components/Navbar";
import { AnimatedCursor } from "./components/AnimatedCursor";
import { AnimatedBackground } from "./components/AnimatedBackground";
export function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for animation purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-slate-900 text-white">
        <div className="text-4xl font-bold relative">
          <span className="animate-pulse">Loading...</span>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-400 animate-[width_2s_ease-in-out_infinite]"></span>
        </div>
      </div>
    );
  }
  return (
    <div className="relative bg-slate-900 text-white min-h-screen overflow-hidden">
      <AnimatedBackground />
      <AnimatedCursor />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="relative z-10">
        <HeroSection setActiveSection={setActiveSection} />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
