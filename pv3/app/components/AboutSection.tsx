import React from "react";
import SubjectHeader from "./SubjectHeader";

const AboutSection = () => {
  return (
    <div>
      {" "}
      <SubjectHeader title="ABOUT ME" />
      <div className="textbox-container">
        <div>
          HI, I’M DANIEL, A 3RD YEAR CS STUDENT AT THE UNIVERSITY OF BRITISH
          COLUMBIA. I’M CURRENTLY SELF STUDYING NEURAL NETWORKS; MIGHT SCORE BROWNIE POINTS WITH SENTIENT ROBOTS...
        </div>
        <div className="mt-15">UPDATED 11.07.2025</div>
      </div>
    </div>
  );
};

export default AboutSection;