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

const SectionTwo = () => {
  const [curProject, setProject] = useState(projects[0]);

  const handleChange = (p: Project) => {
    setProject(p);
  };

  return (
    <section className="py-8 flex justify-center">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:w-7xl md:w-100 lg:min-w-4xl sm:w-fit w-70">
        <div className="col-span-1">
          <AboutSection />

          <div className="grid grid-cols-3 my-15">
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
          <ContactSection />
          <HobbySection />
        </div>
        <div className="col-span-1">
          <ExperienceSection />
          <ProjectSelector setProject={handleChange} />
          <ProjectViewer project={curProject} />
          <MusicShowcase />
        </div>
        <div className="col-span-1">
          <TechStack />
          <div className="flex justify-center my-15">
            <img src="assets/big_star.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
