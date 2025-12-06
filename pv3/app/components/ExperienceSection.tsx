"use client";
import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/Experiences";
import SubjectHeader from "./SubjectHeader";

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <SubjectHeader title="EXPERIENCE" />
      <div id="experience-list">
        {experiences.map((e, index) => (
          <ExperienceCard
            key={index}
            experience={e}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
