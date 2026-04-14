import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";

export default function ProjectsPage() {
  const projects = [
    {
      title: "UBC Scheduler",
      description: "Full-stack exam scheduler with Spring Boot REST API, PostgreSQL, and React. Automated exam data import and one-click calendar export. Scaled to 22,000+ users and 500,000+ page views. Note: Exam data from the registrar's office is no longer provided; no live data is currently being used.",
      tags: ["Java", "SpringBoot", "AWS", "Docker", "PostgreSQL", "React"],
      link: "https://github.com/manggo-cd/UBC-Exam-Scheduler",
      year: "2024",
    },
    {
      title: "Poker Vision",
      description: "Computer vision pipeline with OpenCV and PyTorch for real-time playing card recognition. Prototyped CNNs to improve classification accuracy. Monte Carlo simulation engine with probability-based decision logic for optimal play evaluation.",
      tags: ["Python", "OpenCV", "PyTorch", "TypeScript", "FastAPI", "CNN"],
      link: "https://git@github.com:manggo-cd/PokerVision.git.com",
      year: "2024",
    },
    {
      title: "NES Emulator",
      description: "Nintendo Entertainment System emulator built in C++, compatible with Raspberry Pi. Emulates the 6502 microprocessor instruction set by replicating system architecture in software.",
      tags: ["C++", "Unreal Engine", "Systems Programming"],
      link: "https://https://github.com/manggo-cd/NES-Emulator.com",
      year: "2024",
    },
    {
      title: "NextStep",
      description: "Next.js + Bun map app that answers natural-language route searches and highlights safer, healthier, and eco-friendly options like well-lit or scenic paths.",
      tags: ["Next.js", "Bun", "Google Maps API", "Google Gemini"],
      link: "https://github.com/manggo-cd/NextStep",
      year: "2024",
    },
    {
      title: "VitaSync",
      description: "Workout and nutrition app with CLI and Swing GUI, built in Java with JUnit tests.",
      tags: ["Java", "Swing", "JUnit"],
      link: "https://github.com/manggo-cd/Vitasync",
      year: "2024",
    },
    {
      title: "Ransomware Sim",
      description: "Educational ransomware simulation for cybersecurity training and awareness. Safe, sandboxed environment to understand how ransomware works.",
      tags: ["Python", "Cryptography"],
      link: "https://https://github.com/manggo-cd/RansomwareSim.com",
      year: "2023",
    },
    {
      title: "RPS",
      description: "Rock Paper Scissors against a bot built with MIPS Assembly.",
      tags: ["MIPS", "Assembly"],
      link: "https://github.com/manggo-cd/rpsAssemby",
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)", opacity: 0.95 }}>
        <div className="max-w-4xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors text-xs">
              <ArrowLeft className="w-4 h-4" />
              <span>back</span>
            </Link>
          </div>
          <div className="flex gap-6 text-xs tracking-wider">
            <a href="https://github.com/manggo-cd" className="hover:opacity-60 transition-opacity">github</a>
            <a href="https://www.linkedin.com/in/dzhou05/" className="hover:opacity-60 transition-opacity">linkedin</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-8 pt-28 pb-16">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">Projects</h1>
        <p className="text-sm text-zinc-500 mb-12">Things I&apos;ve built and worked on.</p>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-zinc-800 hover:border-zinc-600 transition-all p-6 bg-black"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h2 className="text-lg font-medium group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-xs text-zinc-700">{project.year}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-0.5 border border-zinc-800 text-zinc-600">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900">
        <p className="text-xs text-zinc-600 text-center">
          © 2025 Daniel Zhou · Vancouver, BC
        </p>
      </footer>
    </div>
  );
}

