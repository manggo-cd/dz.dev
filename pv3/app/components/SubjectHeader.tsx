import React from "react";

interface SubjectHeaderProps {
  title: string;
}

const SubjectHeader = ({ title }: SubjectHeaderProps) => {
  return <div className="subheading-container mb-5">{title}</div>;
};

export default SubjectHeader;
