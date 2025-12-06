import React from "react";
import SubjectHeader from "./SubjectHeader";

const QuickStats = () => {
  const stats = [
    { label: "YEARS CODING", value: "3+" },
    { label: "PROJECTS SHIPPED", value: "12+" },
    { label: "COFFEE CONSUMED", value: "∞" },
    { label: "BUGS SQUASHED", value: "404" },
  ];

  return (
    <div>
      <SubjectHeader title="QUICK STATS" />
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="textbox-container text-center py-4"
          >
            <div className="text-2xl font-bold text-highlight-red mb-1">
              {stat.value}
            </div>
            <div className="text-xs font-bold opacity-70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;

