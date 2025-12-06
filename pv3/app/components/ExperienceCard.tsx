"use client";
import React from "react";

interface Experience {
  title: string;
  location: string;
  company: string;
  start: string;
  end: string;
  details?: string[];
}

interface ExperienceProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
}

const ExperienceCard = ({ experience, isExpanded, onToggle }: ExperienceProps) => {
  return (
    <div className="my-5 w-inherit px-5 font-bold experience-card">
      <div className="flex flex-row justify-between items-start">
        <div className="flex-1">
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
        
        {experience.details && experience.details.length > 0 && (
          <button
            onClick={onToggle}
            className="text-2xl font-bold hover:text-highlight-red transition-all duration-300 ml-3"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? "−" : "+"}
          </button>
        )}
      </div>

      {isExpanded && experience.details && (
        <div className="mt-4 pt-4 border-t border-off">
          <ul className="list-none space-y-2">
            {experience.details.map((detail, index) => (
              <li key={index} className="text-sm flex font-normal">
                <span className="mr-2">•</span>
                <span>{detail.toUpperCase()}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
