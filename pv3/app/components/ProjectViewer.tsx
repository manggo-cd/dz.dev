import React from "react";

export interface Project {
  name: string;
  description: string;
  year: string;
  link: string;
  demoLink: string;
  tech: string[];
}

interface ProjectProps {
  project: Project;
}

const ProjectViewer = ({ project }: ProjectProps) => {
  return (
    <div className="flex flex-col gap-y-5 lg:mb-5 mb-25">
      <div className="border border-off p-5 lg:h-fit h-fit project-card">
        <p className="subheadings">PROJECT: {project.name.toUpperCase()}</p>
        <hr className="my-5 border-off" />
        <p>{project.description.toUpperCase()}</p>
        
        {project.tech.length > 0 && (
          <>
            <hr className="my-5 border-off" />
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="border border-off px-3 py-1 text-xs font-bold hover:bg-off hover:text-[#070707] transition-all duration-300"
                >
                  {tech.toUpperCase()}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {project.link === "na" ? (
          <p className="subheadings text-center">REPO NOT AVAILABLE :(</p>
        ) : (
          <a href={project.link} target="_blank" className="hover:opacity-70">
            <div className="flex flex-row justify-between h-20">
              <div className="flex-5 h-inherit">
                <img
                  src="./assets/barcode.svg"
                  alt="barcode"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="subheadings flex-1 text-right">
                OPEN <br></br> REPO
              </div>
            </div>
          </a>
        )}
        
        {project.demoLink && project.demoLink !== "" && (
          <a href={project.demoLink} target="_blank" className="hover:opacity-70">
            <div className="flex flex-row justify-between h-20 border border-off p-3 items-center">
              <div className="subheadings flex-1">
                VIEW <br></br> LIVE
              </div>
              <div className="flex-5 text-right text-xs">
                →
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectViewer;
