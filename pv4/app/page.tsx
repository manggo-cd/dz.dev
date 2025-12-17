"use client";

import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const experiences = [
    { role: "Incoming SDE Intern", company: "Global Relay", period: "Jan 2026" },
    { role: "Backend Engineer Intern", company: "Suogogo Technologies", period: "Sept - Dec 2025" },
    { role: "Research Assistant", company: "UBC Visual Cognition Lab", period: "Sept 2025 - Present" },
    { role: "Software Developer Intern", company: "Second Savour", period: "Jan - Apr 2025" },
  ];

  const projects = [
    {
      title: "UBC Scheduler",
      tags: ["Java", "SpringBoot", "PostgreSQL", "React"],
      link: "https://github.com/manggo-cd/UBC-Exam-Scheduler",
    },
    {
      title: "NexStep",
      tags: ["Python", "TensorFlow", "Neo4j"],
      link: "https://github.com",
    },
    {
      title: "VitaSync",
      tags: ["TypeScript", "Next.js", "WebSocket"],
      link: "https://github.com",
    },
    {
      title: "Ransomware Sim",
      tags: ["Python", "Cryptography"],
      link: "https://github.com",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-xs tracking-[0.3em] font-bold">DKN</div>
          <div className="flex gap-6 text-xs tracking-wider">
            <a href="https://github.com/manggo-cd" className="hover:text-zinc-400 transition-colors">github</a>
            <a href="https://www.linkedin.com/in/dzhou05/" className="hover:text-zinc-400 transition-colors">linkedin</a>
            <a href="mailto:dzhou05@student.ubc.ca" className="hover:text-zinc-400 transition-colors">contact</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 pt-20">
        {/* Hero Section with Eyes */}
        <section ref={heroRef} className="py-16 relative">
          {/* Animated Eyes */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-center gap-12 opacity-30 pointer-events-none">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative w-20 h-20 animate-pulse" style={{ animationDelay: `${i * 0.3}s`, animationDuration: "3s" }}>
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <ellipse cx="100" cy="100" rx="80" ry="50" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-700" />
                  <circle
                    cx={100 + (mousePos.x - 50) * 0.15}
                    cy={100 + (mousePos.y - 50) * 0.1}
                    r="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-600 transition-all duration-100"
                  />
                  <circle
                    cx={100 + (mousePos.x - 50) * 0.15}
                    cy={100 + (mousePos.y - 50) * 0.1}
                    r="12"
                    fill="currentColor"
                    className="text-zinc-400 transition-all duration-100"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* Hero Text */}
          <div className="relative z-10 mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              daniel zhou
            </h1>
            <p className="text-sm text-zinc-400 tracking-wide mb-2">
              software developer
            </p>
            <p className="text-sm text-zinc-600">
              3rd year cs @ ubc
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16">
          {/* Left Column - Work & Projects */}
          <div className="lg:col-span-7 space-y-12">
            {/* Work Section */}
            <section>
              <h2 className="text-xs tracking-[0.3em] text-zinc-500 mb-6">WORK</h2>
              <div className="space-y-1">
                {experiences.map((exp, i) => (
                  <div key={i} className="group border-l-2 border-zinc-800 hover:border-zinc-600 transition-all">
                    <div className="pl-6 py-4 hover:pl-7 transition-all">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-base mb-1 group-hover:text-zinc-300 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-zinc-500">{exp.company}</p>
                        </div>
                        <div className="text-xs text-zinc-600 whitespace-nowrap">
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-xs tracking-[0.3em] text-zinc-500 mb-6">PROJECTS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project, i) => (
                  <a
                    key={i}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-zinc-800 hover:border-zinc-600 transition-all p-5 bg-black"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-medium group-hover:text-zinc-300 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-xs px-2 py-0.5 border border-zinc-800 text-zinc-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - About & Contact */}
          <div className="lg:col-span-5 space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-xs tracking-[0.3em] text-zinc-500 mb-6">ABOUT</h2>
              <div className="border-l-2 border-zinc-800 pl-6 space-y-6">
                <p className="text-base text-zinc-300 leading-relaxed">
                  Hi, I&apos;m Daniel, a 3rd year CS student at the University of British Columbia. 
                  I&apos;m currently reading about system architecture; turns out milliseconds matter 
                  when you&apos;re not the one waiting.
                </p>

                <div>
                  <h3 className="text-xs text-zinc-600 mb-3">INTERESTS</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Basketball", "Cyberpunk", "Poker", "Snowboarding"].map(interest => (
                      <span key={interest} className="px-3 py-1 border border-zinc-800 text-xs text-zinc-500">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs text-zinc-600 mb-3">STACK</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Java · TypeScript · Python · C/C++ · Go · React · SpringBoot · Next.js · PostgreSQL · AWS · Docker
                  </p>
                </div>

                <div>
                  <h3 className="text-xs text-zinc-600 mb-3">CURRENT ROTATION</h3>
                  <div className="text-xs text-zinc-600 space-y-1">
                    <div>Pink Toes - Childish Gambino</div>
                    <div>Relax and Run - Blood Orange</div>
                    <div>Gravity - John Mayer</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-xs tracking-[0.3em] text-zinc-500 mb-6">CONTACT</h2>
              <div className="space-y-4">
                <p className="text-sm text-zinc-400">
                  dzhou05 (at) student.ubc (dot) ca
                </p>
                <div className="flex gap-6 text-sm">
                  <a 
                    href="https://github.com/manggo-cd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-xs">github</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/dzhou05/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-xs">linkedin</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 border-t border-zinc-900">
          <p className="text-xs text-zinc-600 text-center">
            © 2025 Daniel Zhou · Vancouver, BC
          </p>
        </footer>
      </div>
    </div>
  );
}
