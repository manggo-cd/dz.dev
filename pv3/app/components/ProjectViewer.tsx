import React from "react";

export interface Project {
  name: string;
  description: string;
  year: string;
  link: string;
}

interface ProjectProps {
  project: Project;
}

const ProjectViewer = ({ project }: ProjectProps) => {
  return (
    <div className="flex flex-col gap-y-5 lg:mb-5 mb-25">
      <div className="border border-off p-5 lg:h-70 h-fit">
        <p className="subheadings">PROJECT: {project.name.toUpperCase()}</p>
        <hr className="my-5 border-off" />
        <p>{project.description.toUpperCase()}</p>
      </div>

      <div className="h-20">
        {project.link === "na" ? (
          <p className="subheadings text-center">REPO NOT AVAILABLE :(</p>
        ) : (
          <a href={project.link} target="_blank" className="hover:opacity-70">
            <div className="flex flex-row justify-between h-fit">
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
      </div>
    </div>
  );
};

export default ProjectViewer;
