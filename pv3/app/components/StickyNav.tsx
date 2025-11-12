"use client";
import React from "react";

const StickyNav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky-nav">
      <a onClick={() => scrollToSection("about")}>ABOUT</a>
      <a onClick={() => scrollToSection("experience")}>EXPERIENCE</a>
      <a onClick={() => scrollToSection("projects")}>PROJECTS</a>
      <a onClick={() => scrollToSection("contact")}>CONTACT</a>
    </nav>
  );
};

export default StickyNav;

