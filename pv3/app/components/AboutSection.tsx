import React from "react";
import SubjectHeader from "./SubjectHeader";

const AboutSection = () => {
  return (
    <div>
      {" "}
      <SubjectHeader title="ABOUT ME" />
      <div className="textbox-container">
        <div>
          HI, I’M BERNARD, A 3RD YEAR CS STUDENT AT THE UNIVERSITY OF BRITISH
          COLUMBIA. I’M CURRENTLY SELF STUDYING SOME AI STUFF, CAN’T LET THESE
          GPUS TAKE OVER MY JOB.
        </div>
        <div className="mt-15">UPDATED 09.04.2025</div>
      </div>
    </div>
  );
};

export default AboutSection;
