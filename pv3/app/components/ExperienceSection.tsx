import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/Experiences";
import SubjectHeader from "./SubjectHeader";

const ExperienceSection = () => {
  return (
    <div>
      <SubjectHeader title="EXPERIENCE" />
      <div id="experience-list">
        {experiences.map((e, index) => (
          <ExperienceCard key={index} experience={e} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
