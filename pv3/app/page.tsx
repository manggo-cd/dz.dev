"use client";
import ProjectViewer from "./components/ProjectViewer";
import SubjectHeader from "./components/SubjectHeader";
import ExperienceCard from "./components/ExperienceCard";
import { projects } from "./data/Projects";
import { experiences } from "./data/Experiences";
import { useState } from "react";
import MusicShowcase from "./components/MusicShowcase";

export default function Home() {
  // Generate 9-pointed star points with golden ratio (38.2%)

  const [curProject, setProject] = useState(projects[0]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(index);
    setProject(projects[index]);
  };

  const generateStarPoints = () => {
    const centerX = 100;
    const centerY = 100;
    const outerRadius = 80;
    const innerRadius = outerRadius * 0.382; // Golden ratio
    const points = [];

    for (let i = 0; i < 18; i++) {
      const angle = (i * Math.PI) / 9; // 9 points = 18 vertices
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = centerX + radius * Math.cos(angle - Math.PI / 2);
      const y = centerY + radius * Math.sin(angle - Math.PI / 2);
      points.push(`${x},${y}`);
    }

    return points.join(" ");
  };

  return (
    <div className="min-h-screen">
      {/* First section - takes up visible page with centered content */}
      <section className="h-screen flex items-center justify-center">
        <div className="px-8 text-center">
          <div className="star-container">
            {/* Background text - 3 columns */}
            <div className="background-text grid grid-cols-3 gap-8 -mb-24 font-extrabold text-sm">
              <div className="col-span-1 text-left">FULLSTACK DEVELOPER</div>
              <div className="col-span-1">VANCOUVER, BC</div>
              <div className="col-span-1 text-right">
                CS - UNIVERSITY OF BRITISH COLUMBIA
              </div>
            </div>

            {/* Main text - BERNARD */}
            <div className="star-text">
              <h1 className="title">BERNARD</h1>
            </div>

            {/* Star behind everything */}
            <svg
              className="star-svg rotating-star"
              width="110vh"
              height="110vh"
              viewBox="0 0 200 200"
            >
              <polygon points={generateStarPoints()} fill="#F8F8F8" />
            </svg>
          </div>
        </div>
      </section>

      {/* Second section - 3 columns, 1 row */}
      <section className="py-8">
        <div className="flex justify-center ">
          <div className="grid grid-cols-3 gap-8 w-7xl min-w-4xl">
            <div className="col-span-1">
              <SubjectHeader title="EXPERIENCE" />
              <div id="experience-list">
                {experiences.map((e, index) => (
                  <ExperienceCard key={index} experience={e} />
                ))}
              </div>
              <SubjectHeader title="PROJECTS" />
              <div id="project-selector" className="text-center px-5">
                {projects.map((project, index) => (
                  <span key={index}>
                    <span
                      onClick={() => handleProjectClick(index)}
                      className="cursor-pointer hover:opacity-70 transition-opacity font-bold"
                      style={{
                        color:
                          selectedProjectIndex === index
                            ? "#00BBFF"
                            : "inherit",
                      }}
                    >
                      {project.name.toUpperCase()}
                    </span>
                    {index < projects.length - 1 && " | "}
                  </span>
                ))}
              </div>
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
              <div className="flex flex-row justify-center my-10">
                <img src="assets/contact.svg" />
                <div className="flex flex-col justify-end">
                  <a
                    href="https://www.linkedin.com/in/bernardliu217/"
                    target="_blank"
                    className="social-link"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href="https://github.com/bliu217"
                    target="_blank"
                    className="social-link"
                  >
                    GITHUB
                  </a>
                  <a href="/" target="_blank" className="social-link">
                    RESUME
                  </a>
                </div>
              </div>

              <div className="heading-1 text-center">HOBBIES</div>
              <p className="font-bold text-center">
                GRAPHICDESIGN MUSICPRODUCTION OVERWATCH POKER EATINGCHIPS
                KAROAKE BASKETBALL DOOMSCROLLING GYM
              </p>
            </div>
            <div className="col-span-1">
              {/* Column 2 content */}
              <ProjectViewer project={curProject} />
              <SubjectHeader title="ABOUT ME" />
              <div className="textbox-container">
                <div>
                  HI, I’M BERNARD, A 3RD YEAR CS STUDENT AT THE UNIVERSITY OF
                  BRITISH COLUMBIA. I’M CURRENTLY SELF STUDYING SOME AI STUFF,
                  CAN’T LET THESE GPUS TAKE OVER MY JOB.
                </div>
                <div className="mt-15">UPDATED 09.04.2025</div>
              </div>
              <MusicShowcase />
            </div>
            <div className="col-span-1">
              {/* Column 3 content */}
              <SubjectHeader title="TECH STACK" />
              <p className="text-center my-5">
                <b>FRONTEND</b> <br></br>HTML CSS REACT NEXTJS TAILWIND<br></br>{" "}
                <b>BACKEND</b> <br></br>
                SPRINGBOOT EXPRESSJS<br></br> <b>DATABASES</b>
                <br></br> MYSQL MONGODB SQLITE <br></br>
                <b>DEVOPS</b> <br></br>AND CLOUD DOCKER AWS<br></br>{" "}
                <b>AI/ML</b>
                <br></br> PYTORCH TENSORFLOW <br></br>
                <b>TOOLS</b>
                <br></br> VSCODE VISUALSTUDIO INTELLIJ CURSOR POSTMAN<br></br>{" "}
                <b>GENERAL LANGUAGE KNOWLEDGE</b>
                <br></br>
                JAVA C# C++ C PYTHON R JAVASCRIPT TYPESCRIPT
              </p>
              <div className="flex justify-center my-15">
                <img src="assets/big_star.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
