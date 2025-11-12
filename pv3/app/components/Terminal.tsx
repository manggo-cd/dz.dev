"use client";
import React, { useState, useEffect, useRef } from "react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Terminal = ({ isOpen, onClose }: TerminalProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to DANIEL.DEV terminal v1.0",
    "Type 'help' for available commands",
    "",
  ]);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const jokes = [
    "Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛",
    "How many programmers does it take to change a light bulb?\nNone, that's a hardware problem!",
    "A SQL query walks into a bar, walks up to two tables and asks...\n'Can I join you?'",
    "Why do Java developers wear glasses?\nBecause they can't C#!",
    "!false\n(It's funny because it's true)",
  ];

  const fortunes = [
    "The best code is no code at all.",
    "Premature optimization is the root of all evil. - Donald Knuth",
    "Code never lies, comments sometimes do.",
    "First, solve the problem. Then, write the code.",
    "Make it work, make it right, make it fast.",
  ];

  const commands: { [key: string]: () => void } = {
    help: () => {
      setHistory([
        ...history,
        `> ${input}`,
        "",
        "AVAILABLE COMMANDS:",
        "",
        "INFO:",
        "  about       - About Daniel",
        "  contact     - Contact information",
        "  skills      - Technical skills",
        "  resume      - Download resume",
        "",
        "FUN:",
        "  snake       - Play snake game",
        "  joke        - Random dev joke",
        "  fortune     - Tech wisdom",
        "  secret      - ???",
        "",
        "UTILS:",
        "  clear       - Clear terminal",
        "  exit        - Close terminal",
        "",
      ]);
    },
    about: () => {
      setHistory([
        ...history,
        `> ${input}`,
        "",
        "DANIEL ZHAO",
        "==================",
        "3rd Year Computer Science Student",
        "University of British Columbia",
        "",
        "Backend Engineer | Full-Stack Developer",
        "Passionate about system design, APIs, and clean code",
        "",
        "Currently: Backend Engineering Intern",
        "Interests: Distributed systems, DevOps, UI/UX",
        "",
      ]);
    },
    contact: () => {
      setHistory([
        ...history,
        `> ${input}`,
        "",
        "CONTACT INFO:",
        "==================",
        "Email: daniel.zhao@example.com",
        "LinkedIn: linkedin.com/in/danielzhao",
        "GitHub: github.com/manggo-cd",
        "",
        "Location: Vancouver, BC",
        "",
      ]);
    },
    skills: () => {
      setHistory([
        ...history,
        `> ${input}`,
        "",
        "TECH STACK:",
        "==================",
        "Languages:    TypeScript, Python, Java, C++",
        "Frontend:     React, Next.js, TailwindCSS",
        "Backend:      Node.js, Express, Spring Boot",
        "Database:     PostgreSQL, MongoDB",
        "DevOps:       Docker, AWS, Vercel",
        "Tools:        Git, Cursor, Figma",
        "",
      ]);
    },
    resume: () => {
      setHistory([
        ...history,
        `> ${input}`,
        "",
        "📄 Opening resume...",
        "(In a real implementation, this would download your PDF resume)",
        "",
      ]);
    },
    snake: () => {
      setHistory([
        ...history,
        `> ${input}`,
        "",
        "🐍 SNAKE GAME",
        "==================",
        "Coming soon! 🚧",
        "(Feature in development)",
        "",
        "For now, try: joke, fortune, or secret",
        "",
      ]);
    },
    joke: () => {
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      setHistory([...history, `> ${input}`, "", randomJoke, ""]);
    },
    fortune: () => {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      setHistory([...history, `> ${input}`, "", `💭 ${randomFortune}`, ""]);
    },
    secret: () => {
      if (secretUnlocked) {
        setHistory([
          ...history,
          `> ${input}`,
          "",
          "🎉 You already found the secret!",
          "Daniel's confession:",
          "",
          '"I once spent 3 hours debugging...',
          'it was a missing semicolon 😅"',
          "",
        ]);
      } else {
        setHistory([
          ...history,
          `> ${input}`,
          "",
          "🔒 Secret locked.",
          "Hint: Try using elevated permissions...",
          "",
        ]);
      }
    },
    sudo: () => {
      if (input.trim().toLowerCase() === "sudo secret") {
        setSecretUnlocked(true);
        setHistory([
          ...history,
          `> ${input}`,
          "",
          "🔓 Permission granted!",
          "",
          "Daniel's confession:",
          '"I once spent 3 hours debugging...',
          'it was a missing semicolon 😅"',
          "",
          "Achievement unlocked: Hacker 🏆",
          "",
        ]);
      } else {
        setHistory([
          ...history,
          `> ${input}`,
          "",
          "sudo: command requires an argument",
          "Try: sudo secret",
          "",
        ]);
      }
    },
    cowsay: () => {
      const message = input.replace(/^cowsay\s*/i, "").trim() || "Hello!";
      setHistory([
        ...history,
        `> ${input}`,
        "",
        " " + "_".repeat(message.length + 2),
        `< ${message} >`,
        " " + "-".repeat(message.length + 2),
        "        \\   ^__^",
        "         \\  (oo)\\_______",
        "            (__)\\       )\\/\\",
        "                ||----w |",
        "                ||     ||",
        "",
      ]);
    },
    clear: () => {
      setHistory(["Terminal cleared", ""]);
    },
    exit: () => {
      setHistory([...history, `> ${input}`, "Closing terminal..."]);
      setTimeout(onClose, 300);
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();

    if (trimmedInput === "") {
      setHistory([...history, ">"]);
      setInput("");
      return;
    }

    // Handle cowsay with arguments
    if (trimmedInput.startsWith("cowsay")) {
      commands["cowsay"]();
      setInput("");
      return;
    }

    // Handle sudo secret
    if (trimmedInput === "sudo secret") {
      commands["sudo"]();
      setInput("");
      return;
    }

    if (commands[trimmedInput]) {
      commands[trimmedInput]();
    } else {
      setHistory([
        ...history,
        `> ${input}`,
        `Command not found: ${input}`,
        "Type 'help' for available commands",
        "",
      ]);
    }

    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 p-4">
      <div className="w-full max-w-3xl border-2 border-off bg-[#070707] font-mono">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-off px-4 py-2">
          <span className="text-sm font-bold">DANIEL.DEV TERMINAL</span>
          <button
            onClick={onClose}
            className="text-lg font-bold hover:text-highlight-red"
          >
            ✕
          </button>
        </div>

        {/* Terminal Body */}
        <div
          ref={historyRef}
          className="h-96 overflow-y-auto p-4 text-sm"
          style={{ scrollbarWidth: "thin" }}
        >
          {history.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}

          {/* Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="mr-2 text-highlight-red">guest@daniel.dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>

        {/* Terminal Footer */}
        <div className="border-t border-off px-4 py-2 text-xs opacity-50">
          Press ESC to close | Type 'help' for commands
        </div>
      </div>
    </div>
  );
};

export default Terminal;

