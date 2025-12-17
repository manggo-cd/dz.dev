import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Portfolio() {

  const experiences = [
    { role: "Incoming SDE Intern", company: "Global Relay", period: "Jan 2026" },
    { role: "Backend Engineer Intern", company: "Suogogo Technologies", period: "Sept - Dec 2025" },
    { role: "Research Assistant", company: "UBC Visual Cognition Lab", period: "Sept 2025 - Present" },
    { role: "Software Developer", company: "Second Savour", period: "Jan - Apr 2025" },
  ];

  const projects = [
    {
      title: "UBC Scheduler",
      description: "Full-stack exam scheduler with Spring Boot REST API, PostgreSQL, and React. Automated exam data import and one-click calendar export. Scaled to 22,000+ users and 500,000+ page views.",
      tags: ["Java", "SpringBoot", "PostgreSQL", "React", "Tailwind"],
      link: "https://github.com/manggo-cd/UBC-Exam-Scheduler",
    },
    {
      title: "Poker Vision",
      description: "Computer vision pipeline with OpenCV and PyTorch for real-time playing card recognition. CNN-based classification with Monte Carlo simulation for optimal play evaluation.",
      tags: ["Python", "OpenCV", "PyTorch", "FastAPI", "CNN"],
      link: "https://github.com",
    },
    {
      title: "NES Emulator",
      description: "Nintendo Entertainment System emulator built in C++, compatible with Raspberry Pi. Emulates the 6502 microprocessor instruction set by replicating system architecture in software.",
      tags: ["C++", "Unreal Engine", "Systems"],
      link: "https://github.com",
    },
    {
      title: "Ransomware Sim",
      description: "Educational ransomware simulation for cybersecurity training and awareness.",
      tags: ["Python", "Cryptography"],
      link: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)", opacity: 0.95 }}>
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <ThemeToggle />
          <div className="flex items-center gap-6 text-xs tracking-wider" style={{ color: "var(--text-primary)" }}>
            <Link href="/projects" className="hover:opacity-60 transition-opacity">projects</Link>
            <Link href="/blog" className="hover:opacity-60 transition-opacity">blog</Link>
            <a href="https://github.com/manggo-cd" className="hover:opacity-60 transition-opacity">github</a>
            <a href="https://www.linkedin.com/in/dzhou05/" className="hover:opacity-60 transition-opacity">linkedin</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 pt-20">
        {/* Hero Section */}
        <section className="py-16 relative">
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
                {projects.slice(0, 4).map((project, i) => (
                  <a
                    key={i}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative border border-zinc-800 hover:border-zinc-600 transition-all p-5 bg-black overflow-hidden"
                  >
                    {/* Default content */}
                    <div className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-base font-medium group-hover:text-zinc-300 transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-all" />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 border border-zinc-800 text-zinc-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-base font-medium text-zinc-300">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 border border-zinc-700 text-zinc-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 mt-6 text-xs text-zinc-500 hover:text-zinc-300 transition-colors group"
              >
                <span>view all projects</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
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
                    {["Basketball", "Cyberpunk", "Poker", "Snowboarding", "Gym", "Hiking", "Guitar"].map(interest => (
                      <span key={interest} className="px-3 py-1 border border-zinc-800 text-xs text-zinc-500">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs text-zinc-600 mb-3">STACK</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Java · TypeScript · Python · C · C++ · Go · SQL · React · SpringBoot · Next.js · Node.js · PostgreSQL · MongoDB · AWS · Docker · Linux · Git
                  </p>
                </div>

                <div>
                  <h3 className="text-xs text-zinc-600 mb-3">CURRENT ROTATION</h3>
                  <div className="text-xs text-zinc-600 space-y-1">
                    <div>Pink Toes - Childish Gambino</div>
                    <div>Relax and Run - Blood Orange</div>
                    <div>Gravity - John Mayer</div>
                    <div>Race My Mind - Drake</div>
                    <div>Nineteen - PinkPantheress</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-xs tracking-[0.3em] text-zinc-500 mb-6">CONTACT</h2>
              <div className="space-y-4">
                <a 
                  href="mailto:danielzhou.nc@gmail.com"
                  className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  danielzhou.nc (at) gmail (dot) com
                </a>
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
                <Link 
                  href="/blog" 
                  className="block mt-6 text-xs text-zinc-700 hover:text-zinc-400 transition-colors italic"
                >
                  sometimes i write things too →
                </Link>
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
