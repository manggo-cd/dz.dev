"use client";

import { useEffect, useRef, useState } from "react";

type View = "home" | "experience" | "projects" | "blog";

const NAV: { id: View; label: string }[] = [
  { id: "home", label: "home" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "blog", label: "blog" },
];

const LINKS = {
  github: "https://github.com/manggo-cd",
  linkedin: "https://www.linkedin.com/in/dzhou05/",
  email: "mailto:danielzhou.nc@gmail.com",
};

const EXPERIENCE = [
  {
    company: "Snowflake",
    href: "https://www.snowflake.com",
    year: "2026",
    role: "software engineer intern · may 2026 – present · toronto",
    tags: "java · python · go · distributed systems",
  },
  {
    company: "Global Relay",
    href: "https://www.globalrelay.com",
    year: "2026",
    role: "software engineer intern · jan – apr 2026 · vancouver",
    tags: "java · selenium · jenkins · testrail · spark",
  },
  {
    company: "University of British Columbia",
    href: "https://www.viscoglab.psych.ubc.ca/",
    year: "2025",
    role: "software developer · visual cognition lab · sep 2025 – apr 2026",
    tags: "typescript · react · node.js · d3.js · mongodb · langchain",
  },
  {
    company: "SuoGoGo Technologies",
    href: "https://www.suogogo.com/",
    year: "2025",
    role: "backend engineer intern · jun – sep 2025 · vancouver",
    tags: "java · postgresql · prisma orm · aws s3",
  },
];

const PROJECTS = [
  {
    title: "Trading Engine",
    href: "https://github.com/manggo-cd/TradingEngine",
    date: "2026",
    desc: "high-performance trading engine with price-time priority matching over a central limit order book. apis in go, next.js frontend.",
    tech: "c++ · go · next.js",
    wm: "◆",
    screen: (
      <>
        <b>BUY</b> TSLA 100 @ $100
        <br />
        <b>SELL</b> TSLA 50 @ $99
        <br />
        ▸ trade @ $100 · qty 50
        <br />
        book · bid <b>50</b> · ask 0
      </>
    ),
  },
  {
    title: "UBC Scheduler",
    href: "https://github.com/manggo-cd/UBC-Exam-Scheduler",
    date: "2026",
    desc: "exam-scheduling app serving 22,000+ ubc students with automated calendar export.",
    tech: "java · springboot · postgresql · react · tailwind",
    wm: "△",
    screen: (
      <>
        <b>$</b> ./schedule --export
        <br />
        parsing 22,041 enrollments…
        <br />
        conflicts: 0
        <br />
        <b>ok</b> → daniel.ics written
      </>
    ),
  },
  {
    title: "Poker Vision",
    href: "https://github.com/manggo-cd/PokerVision",
    date: "2025",
    desc: "computer-vision pipeline with opencv + pytorch for real-time card recognition, with monte carlo simulation for optimal play evaluation.",
    tech: "python · opencv · pytorch · fastapi · cnn",
    wm: "○",
    screen: (
      <>
        <b>detect</b> ♠A ♥K ♦Q
        <br />
        conf 0.98 · 0.97 · 0.95
        <br />
        equity: <b>72.4%</b>
        <br />
        action → raise
      </>
    ),
  },
  {
    title: "NES Emulator",
    href: "https://github.com/manggo-cd/NES-Emulator",
    date: "2024",
    desc: "nintendo entertainment system emulator in c++, compatible with raspberry pi — emulates the 6502 instruction set in software.",
    tech: "c++ · systems · raspberry pi",
    wm: "✕",
    screen: (
      <>
        <b>6502</b> @ 1.79MHz
        <br />
        PC $C000 A:$00 X:$00
        <br />
        ppu frame 0x1f
        <br />
        <b>run</b> ▸ super mario bros
      </>
    ),
  },
  {
    title: "Ransomware Sim",
    href: "https://github.com/manggo-cd/RansomwareSim",
    date: "2024",
    desc: "educational ransomware simulation for cybersecurity training and awareness.",
    tech: "python · cryptography",
    wm: "□",
    screen: (
      <>
        <b>[sim]</b> aes-256 keygen…
        <br />
        files staged: 128
        <br />
        <b>demo</b> encrypt ▸ decrypt
        <br />
        education only
      </>
    ),
  },
];

const POSTS = [
  { date: "2026.07", title: "geese", href: "/blog/geese" },
  { date: "2025.12", title: "a list of good tools", href: "/blog/list-of-good-tools" },
  { date: "2025.12", title: "about & contact", href: "/blog/about-and-contact" },
];

const SECRET = ["△", "△", "○", "○", "✕", "□"];
const PS_SYMBOLS = ["△", "○", "✕", "□"];

function ExtIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M14 4h6v6" />
      <path d="M20 4l-9 9" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.9c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

export default function Portfolio() {
  const [view, setView] = useState<View>("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const seq = useRef<string[]>([]);
  const eggBusy = useRef(false);

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem("theme") as "dark" | "light" | null)
        : null;
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.dataset.view = view;
    window.scrollTo(0, 0);
  }, [view]);

  const go = (id: View) => setView(id);
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const press = (sym: string, btn: HTMLButtonElement) => {
    btn.classList.remove("hit");
    void btn.offsetWidth;
    btn.classList.add("hit");
    seq.current.push(sym);
    if (seq.current.length > SECRET.length) seq.current.shift();
    if (
      seq.current.length === SECRET.length &&
      seq.current.join("") === SECRET.join("")
    ) {
      seq.current = [];
      unlockEgg();
    }
  };

  const unlockEgg = () => {
    if (eggBusy.current) return;
    eggBusy.current = true;

    const toast = document.createElement("div");
    toast.className = "egg-toast";
    toast.innerHTML = "△ ○ ✕ □ &nbsp;·&nbsp; cheat unlocked";
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));

    for (let i = 0; i < 30; i++) {
      const p = document.createElement("span");
      p.className = "egg-piece";
      p.textContent = PS_SYMBOLS[i % 4];
      p.style.left = Math.random() * 100 + "vw";
      p.style.bottom = "-40px";
      p.style.fontSize = 12 + Math.random() * 28 + "px";
      p.style.animation =
        "eggrise " +
        (2.6 + Math.random() * 1.9).toFixed(2) +
        "s var(--ease) " +
        (Math.random() * 0.7).toFixed(2) +
        "s forwards";
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 5600);
    }

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toast.remove();
        eggBusy.current = false;
      }, 500);
    }, 3400);
  };

  return (
    <>
      {/* background */}
      <div className="bg">
        <div className="glow" />
        <div className="grid" />
        <div className="glyphs">
          <span className="g1">△</span>
          <span className="g2">○</span>
          <span className="g3">✕</span>
        </div>
      </div>
      <div className="scan" />
      <div className="grain" />

      {/* cyber-girl: pinned to the viewport right edge, shown on home only */}
      <div className="hero-girl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="g-dark" src="/hero/cyber6-duo.png" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="g-light" src="/hero/cyber6-tight.png" alt="" />
      </div>

      <div className="stage">
        <nav>
          <div className="mark" onClick={() => go("home")}>
            周
          </div>
          <div className="navright">
            <div className="links">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  className={view === n.id ? "active" : undefined}
                  onClick={() => go(n.id)}
                >
                  {n.label}
                </a>
              ))}
            </div>
            <button className="toggle" onClick={toggleTheme} aria-label="toggle theme">
              {theme === "dark" ? "☾" : "☀"}
            </button>
          </div>
        </nav>

        <main>
          {/* HOME */}
          <section className={`view${view === "home" ? " on" : ""}`} id="home">
            <div className="home-in">
              <h1>daniel zhou</h1>
              <p className="blurb">
                Hi! I&apos;m a <b>computer science</b> student @ the university of british
                columbia. Currently a software engineer intern at <b>Snowflake</b>. I&apos;m a big
                fan of: digital design, the smashing pumpkins, poker, and spontaneous adventures.
              </p>
              <div className="ps" role="group" aria-label="cheat code">
                {PS_SYMBOLS.map((s) => (
                  <button
                    key={s}
                    className="ps-btn"
                    type="button"
                    aria-label={s}
                    onClick={(e) => press(s, e.currentTarget)}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="socials">
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="linkedin">
                  <LinkedinIcon />
                </a>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="github">
                  <GithubIcon />
                </a>
                <a href={LINKS.email} aria-label="email">
                  <MailIcon />
                </a>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className={`view inner${view === "experience" ? " on" : ""}`} id="experience">
            <div className="phead">experience</div>
            {EXPERIENCE.map((x) => (
              <a
                key={x.company}
                className="xp"
                href={x.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="xp-year">{x.year}</span>
                <div className="xp-body">
                  <h3>
                    {x.company} <ExtIcon />
                  </h3>
                  <div className="xp-role">{x.role}</div>
                  <div className="xp-tags">{x.tags}</div>
                </div>
              </a>
            ))}
          </section>

          {/* PROJECTS */}
          <section className={`view inner${view === "projects" ? " on" : ""}`} id="projects">
            <div className="phead">projects</div>
            {PROJECTS.map((p) => (
              <div className="proj" key={p.title}>
                <div className="thumb">
                  <div className="bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="scr">{p.screen}</div>
                  <div className="wm">{p.wm}</div>
                </div>
                <div className="pinfo">
                  <div className="pt">
                    <h3>{p.title}</h3>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label="github">
                      <GithubIcon />
                    </a>
                  </div>
                  <div className="date">{p.date}</div>
                  <p>{p.desc}</p>
                  <div className="tech">{p.tech}</div>
                </div>
              </div>
            ))}
          </section>

          {/* BLOG */}
          <section className={`view inner${view === "blog" ? " on" : ""}`} id="blog">
            <div className="phead">blog</div>
            {POSTS.map((post) => (
              <a className="post" href={post.href} key={post.title}>
                <span className="date">{post.date}</span>
                <h3>{post.title}</h3>
              </a>
            ))}
          </section>
        </main>

        <footer>© 2026 daniel zhou</footer>
      </div>
    </>
  );
}
