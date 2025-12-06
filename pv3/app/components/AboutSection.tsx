import React from "react";
import SubjectHeader from "./SubjectHeader";

const AboutSection = () => {
  return (
    <div>
      {" "}
      <SubjectHeader title="ABOUT ME" />
      <div className="textbox-container">
        <div>
          HI, I'M DANIEL, A 3RD YEAR CS STUDENT AT THE UNIVERSITY OF BRITISH
          COLUMBIA. I'M CURRENTLY READING ABOUT SYSTEM ARCHITECTURE; TURNS OUT MILLISECONDS MATTER WHEN YOU'RE NOT THE ONE WAITING...
        </div>
        <div className="mt-15">UPDATED 12.05.2025</div>
      </div>
    </div>
  );
};

export default AboutSection;