import React from "react";
import SubjectHeader from "./SubjectHeader";

const TechStack = () => {
  return (
    <div>
      <SubjectHeader title="TECH STACK" />
      <p className="text-center my-5">
        <b>FRONTEND</b> <br></br>HTML CSS REACT NEXTJS TAILWIND<br></br>{" "}
        <b>BACKEND</b> <br></br>
        SPRINGBOOT EXPRESSJS<br></br> <b>DATABASES</b>
        <br></br> MYSQL MONGODB SQLITE <br></br>
        <b>DEVOPS</b> <br></br>AND CLOUD DOCKER AWS<br></br> <b>AI/ML</b>
        <br></br> PYTORCH TENSORFLOW <br></br>
        <b>TOOLS</b>
        <br></br> VSCODE VISUALSTUDIO INTELLIJ CURSOR POSTMAN<br></br>{" "}
        <b>GENERAL LANGUAGE KNOWLEDGE</b>
        <br></br>
        JAVA C# C++ C PYTHON R JAVASCRIPT TYPESCRIPT
      </p>
    </div>
  );
};

export default TechStack;
