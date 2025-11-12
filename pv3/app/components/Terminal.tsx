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
  const [usedJokes, setUsedJokes] = useState<number[]>([]);
  const [usedFortunes, setUsedFortunes] = useState<number[]>([]);
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
    "What's a programmer's favorite hangout place?\nThe Foo Bar! 🍺",
    "Why do Python programmers have low self-esteem?\nThey're constantly comparing themselves to C.",
    "What do you call a developer who doesn't comment their code?\nA job creator! 📝",
    "Why did the developer go broke?\nBecause they used up all their cache! 💸",
    "What's the object-oriented way to become wealthy?\nInheritance. 💰",
    "Why do programmers always mix up Halloween and Christmas?\nBecause Oct 31 == Dec 25! 🎃🎄",
    "What did the router say to the doctor?\nIt hurts when IP! 🏥",
  ];

  const fortunes = [
    "The best code is no code at all.",
    "Premature optimization is the root of all evil. - Donald Knuth",
    "Code never lies, comments sometimes do.",
    "First, solve the problem. Then, write the code.",
    "Make it work, make it right, make it fast.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
    "Programs must be written for people to read, and only incidentally for machines to execute. - Abelson & Sussman",
    "Truth can only be found in one place: the code. - Robert C. Martin",
    "Simplicity is prerequisite for reliability. - Edsger Dijkstra",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in. - Edsger Dijkstra",
    "Code is like humor. When you have to explain it, it's bad. - Cory House",
    "Walking on water and developing software from a specification are easy if both are frozen. - Edward Berard",
  ];

  // Get random item without repeats until all are used
  const getRandomUnique = (array: any[], usedIndices: number[], setUsedIndices: (indices: number[]) => void) => {
    // Reset if all have been used
    if (usedIndices.length >= array.length) {
      setUsedIndices([]);
      usedIndices = [];
    }
    
    // Get available indices
    const availableIndices = array
      .map((_, index) => index)
      .filter(index => !usedIndices.includes(index));
    
    // Pick random from available
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    
    // Mark as used
    setUsedIndices([...usedIndices, randomIndex]);
    
    return array[randomIndex];
  };

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
        "DANIEL ZHOU",
        "==================",
        "3rd Year Computer Science Student",
        "University of British Columbia",
        "",
        "Passionate about scalable systems, clean code, and reliable APIs",
        "",
        "Currently: Backend Engineer Intern @ Suogogo Technologies",
        "Interests: Distributed systems, Quant finance, Basketball, Gym",
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
        "LinkedIn: linkedin.com/in/dzhou05",
        "GitHub:   github.com/manggo-cd",
        "",
        "Location: Vancouver, BC, Canada",
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
        "",
        "LANGUAGES:",
        "  JavaScript, Java, TypeScript, Python, C/C++,",
        "  SQL, HTML/CSS, R",
        "",
        "FRAMEWORKS & LIBRARIES:",
        "  React (Native), Spring Boot, Express.js, Next.js,",
        "  Node.js, Angular, JUnit",
        "",
        "DATABASES:",
        "  PostgreSQL, MongoDB, OracleDB",
        "",
        "DEVELOPER TOOLS:",
        "  AWS, Linux, Cursor, Docker, Vercel, Postman, Figma",
        "",
        "CLOUD & DEVOPS:",
        "  AWS, Azure, DevOps, Docker",
        "",
      ]);
    },
    resume: () => {
      setHistory([
        ...history,
        `> ${input}`,
        "",
        "📄 Resume download",
        "Coming soon! 🚧",
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
      const randomJoke = getRandomUnique(jokes, usedJokes, setUsedJokes);
      setHistory([...history, `> ${input}`, "", randomJoke, ""]);
    },
    fortune: () => {
      const randomFortune = getRandomUnique(fortunes, usedFortunes, setUsedFortunes);
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

