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
      <div id="project-selector" className="text-center px-5">
        {projects.map((project, index) => (
          <span key={index}>
            <span
              onClick={() => handleProjectClick(index)}
              className="cursor-pointer hover:opacity-70 transition-opacity font-bold"
              style={{
                color: selectedProjectIndex === index ? "#00BBFF" : "inherit",
              }}
            >
              {project.name.toUpperCase()}
            </span>
            {index < projects.length - 1 && " | "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectSelector;
