"use client";
import ProjectViewer, { Project } from "./ProjectViewer";
import { projects } from "../data/Projects";
import { useState } from "react";
import MusicShowcase from "./MusicShowcase";
import React from "react";
import ExperienceSection from "./ExperienceSection";
import ProjectSelector from "./ProjectSelector";
import ContactSection from "./ContactSection";
import HobbySection from "./HobbySection";
import AboutSection from "./AboutSection";
import TechStack from "./TechStack";
import GeometricColumn from "./GeometricColumn";

const SectionTwo = () => {
  const [curProject, setProject] = useState(projects[0]);

  const handleChange = (p: Project) => {
    setProject(p);
  };

  return (
    <section className="py-8 flex justify-center">
      <div className="grid lg:grid-cols-[1fr_1.3fr_1fr] grid-cols-1 gap-10 lg:w-7xl md:w-100 lg:min-w-4xl sm:w-fit w-70">
        {/* Desktop: Left column (About, Contact, Hobbies) | Mobile: Order 2 */}
        <div className="col-span-1 lg:order-1 order-2">
          <div id="about">
            <AboutSection />
          </div>

          <div className="grid grid-cols-3 lg:my-15 my-10">
            <div className="flex justify-center">
              <img src="/assets/small_star.svg" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/small_star.svg" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/small_star.svg" />
            </div>
          </div>
          <div id="contact">
            <ContactSection />
          </div>
          <HobbySection />
          <div className="lg:hidden">
            <MusicShowcase />
          </div>
        </div>
        
        {/* Desktop: Middle column (Experience, Projects) | Mobile: Order 1 (FIRST!) */}
        <div className="col-span-1 lg:order-2 order-1">
          <div id="experience">
            <ExperienceSection />
          </div>
          <div id="projects">
            <ProjectSelector setProject={handleChange} />
            <ProjectViewer project={curProject} />
          </div>
          <div className="hidden lg:block">
            <MusicShowcase />
          </div>
        </div>
        
        {/* Desktop: Right column (Tech Stack) | Mobile: Order 3 */}
        <div className="col-span-1 lg:order-3 order-3" id="tech-stack">
          <TechStack />
          <GeometricColumn />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
