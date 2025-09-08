import React from "react";

interface Experience {
  title: string;
  location: string;
  company: string;
  start: string;
  end: string;
}

interface ExperienceProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceProps) => {
  return (
    <div className="my-5 w-inherit px-5 font-bold">
      <div className="flex flex-row justify-between">
        <p>{experience.title.toUpperCase()}</p>
        <p className="text-right">{experience.location.toUpperCase()}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p className="text-highlight-red">{experience.company.toUpperCase()}</p>
        <p className="text-right">
          {experience.start.toUpperCase()} - {experience.end.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
