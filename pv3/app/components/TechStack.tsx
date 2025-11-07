import React from "react";
import SubjectHeader from "./SubjectHeader";

const TechStack = () => {
  return (
    <div>
      <SubjectHeader title="TECH STACK" />
      <p className="text-center my-5">
        <b>LANGUAGES</b> <br></br>JAVASCRIPT JAVA TYPESCRIPT PYTHON C/C++ SQL HTML/CSS R<br></br>{" "}
        <b>FRAMEWORKS & LIBRARIES</b> <br></br>
        REACT (NATIVE) SPRINGBOOT EXPRESSJS NEXTJS NODEJS ANGULAR JUNIT<br></br> <b>DATABASES</b>
        <br></br> POSTGRESQL MONGODB ORACLEDB <br></br>
        <b>DEVELOPER TOOLS</b> <br></br>AWS LINUX CURSOR DOCKER VERCEL POSTMAN FIGMA<br></br>
        <b>CLOUD & DEVOPS</b>
        <br></br> AWS AZURE DEVOPS DOCKER <br></br>
      </p>
    </div>
  );
};

export default TechStack;
