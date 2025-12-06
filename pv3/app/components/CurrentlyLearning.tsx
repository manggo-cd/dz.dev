import React from "react";
import SubjectHeader from "./SubjectHeader";

const CurrentlyLearning = () => {
  const learningItems = [
    { topic: "GRPC", icon: "⚡" },
    { topic: "SYSTEM ARCHITECTURE", icon: "🏗️" },
    { topic: "LOW-LATENCY DESIGN", icon: "🚀" },
    { topic: "DISTRIBUTED SYSTEMS", icon: "🌐" },
  ];

  return (
    <div>
      <SubjectHeader title="CURRENTLY LEARNING" />
      <div className="textbox-container space-y-3">
        {learningItems.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 py-2 border-b border-off border-opacity-20 last:border-0"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="font-bold text-sm">{item.topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentlyLearning;

