"use client";
import React from "react";
import { useState } from "react";
import SubjectHeader from "./SubjectHeader";
import { projects } from "../data/Projects";
import { Project } from "./ProjectViewer";

interface ProjectCallback {
  setProject: (data: Project) => void;
}

const ProjectSelector = ({ setProject }: ProjectCallback) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(index);
    setProject(projects[index]);
  };

  return (
    <div>
      <SubjectHeader title="PROJECTS" />
      <div id="project-selector" className="text-center px-5 mb-10 font-bold">
        {/* First Row */}
        <div className="whitespace-nowrap mb-2">
          {projects.slice(0, 3).map((project, index) => (
            <span key={index}>
              <span
                onClick={() => handleProjectClick(index)}
                className="cursor-pointer hover:opacity-70"
                style={{
                  color: selectedProjectIndex === index ? "#00BBFF" : "inherit",
                }}
              >
                {project.name.toUpperCase()}
              </span>
              {index < 2 && " | "}
            </span>
          ))}
        </div>
        
        {/* Second Row */}
        <div className="whitespace-nowrap">
          {projects.slice(3).map((project, index) => (
            <span key={index + 3}>
              <span
                onClick={() => handleProjectClick(index + 3)}
                className="cursor-pointer hover:opacity-70"
                style={{
                  color: selectedProjectIndex === index + 3 ? "#00BBFF" : "inherit",
                }}
              >
                {project.name.toUpperCase()}
              </span>
              {index < projects.slice(3).length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSelector;
