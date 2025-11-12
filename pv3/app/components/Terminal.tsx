"use client";
import React, { useState, useEffect, useRef } from "react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Terminal = ({ isOpen, onClose }: TerminalProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to DANIEL.DEV terminal",
    "Type 'help' for available commands",
    "",
  ]);
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  const commands: { [key: string]: () => void } = {
    help: () => {
      setHistory([
        ...history,
        `> ${input}`,
        "",
        "AVAILABLE COMMANDS:",
        "  about       - Navigate to About section",
        "  experience  - Navigate to Experience section",
        "  projects    - Navigate to Projects section",
        "  contact     - Navigate to Contact section",
        "  skills      - Navigate to Tech Stack section",
        "  clear       - Clear terminal",
        "  exit        - Close terminal",
        "",
      ]);
    },
    about: () => {
      setHistory([...history, `> ${input}`, "Navigating to About..."]);
      setTimeout(() => scrollToSection("about"), 300);
    },
    experience: () => {
      setHistory([...history, `> ${input}`, "Navigating to Experience..."]);
      setTimeout(() => scrollToSection("experience"), 300);
    },
    projects: () => {
      setHistory([...history, `> ${input}`, "Navigating to Projects..."]);
      setTimeout(() => scrollToSection("projects"), 300);
    },
    contact: () => {
      setHistory([...history, `> ${input}`, "Navigating to Contact..."]);
      setTimeout(() => scrollToSection("contact"), 300);
    },
    skills: () => {
      setHistory([...history, `> ${input}`, "Navigating to Tech Stack..."]);
      setTimeout(() => scrollToSection("tech-stack"), 300);
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
          <span className="text-sm font-bold">TERMINAL</span>
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
            <span className="mr-2">&gt;</span>
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
        <div className="border-t border-off px-4 py-2 text-xs">
          Press ESC to close | Type 'help' for commands
        </div>
      </div>
    </div>
  );
};

export default Terminal;

