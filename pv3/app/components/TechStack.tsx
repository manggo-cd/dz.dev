import React from "react";
import SubjectHeader from "./SubjectHeader";

const TechStack = () => {
  return (
    <div>
      <SubjectHeader title="TECH STACK" />
      <p className="text-center my-5">
        <b>LANGUAGES</b> <br></br>JAVA JS TYPESCRIPT PYTHON C/C++ SQL GO R<br></br>{" "}
        <b>FRAMEWORKS & LIBRARIES</b> <br></br>
        REACT SPRINGBOOT EXPRESSJS NEXTJS NODEJS gRPC SELENIUM ANGULAR JUNIT<br></br> <b>DATABASES</b>
        <br></br> POSTGRESQL MONGODB ORACLEDB <br></br>
        <b>DEVELOPER TOOLS</b> <br></br>AWS LINUX VERCEL POSTMAN FIGMA<br></br>
        <b>CLOUD & DEVOPS</b>
        <br></br> AWS AZURE DEVOPS DOCKER <br></br>
      </p>
    </div>
  );
};

export default TechStack;
