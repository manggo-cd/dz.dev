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
  
  // Snake game state
  const [gameMode, setGameMode] = useState<"terminal" | "snake">("terminal");
  const [snake, setSnake] = useState<Array<{ x: number; y: number }>>([]);
  const [food, setFood] = useState<{ x: number; y: number }>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<{ x: number; y: number }>({ x: 1, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const GRID_SIZE = 15;

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

  // Snake game functions
  const initSnakeGame = () => {
    setSnake([
      { x: 7, y: 7 },
      { x: 6, y: 7 },
      { x: 5, y: 7 },
    ]);
    setDirection({ x: 1, y: 0 });
    setScore(0);
    setGameOver(false);
    spawnFood([{ x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }]);
  };

  const spawnFood = (currentSnake: Array<{ x: number; y: number }>) => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y));
    setFood(newFood);
  };

  const moveSnake = () => {
    if (gameOver) return;

    setSnake((prevSnake) => {
      const head = { ...prevSnake[0] };
      head.x += direction.x;
      head.y += direction.y;

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        return prevSnake;
      }

      // Check self collision
      if (prevSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [head, ...prevSnake];

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 10);
        spawnFood(newSnake);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  };

  // Game loop effect
  useEffect(() => {
    if (gameMode === "snake" && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, 150);
      return () => {
        if (gameLoopRef.current) clearInterval(gameLoopRef.current);
      };
    }
  }, [gameMode, direction, gameOver, food]);

  // Handle keyboard for snake game
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameMode !== "snake") return;

      if (e.key === "Escape") {
        setGameMode("terminal");
        if (gameLoopRef.current) clearInterval(gameLoopRef.current);
        setHistory([
          ...history,
          "",
          "🐍 Snake game ended",
          `Final score: ${score}`,
          "",
        ]);
        return;
      }

      if (gameOver) return;

      const key = e.key.toLowerCase();
      
      setDirection((prevDir) => {
        // Prevent opposite direction
        if ((key === "w" || key === "arrowup") && prevDir.y === 0) {
          return { x: 0, y: -1 };
        } else if ((key === "s" || key === "arrowdown") && prevDir.y === 0) {
          return { x: 0, y: 1 };
        } else if ((key === "a" || key === "arrowleft") && prevDir.x === 0) {
          return { x: -1, y: 0 };
        } else if ((key === "d" || key === "arrowright") && prevDir.x === 0) {
          return { x: 1, y: 0 };
        }
        return prevDir;
      });
      
      // Prevent scrolling
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameMode, gameOver, score, history]);

  const renderSnakeGame = () => {
    const grid: string[][] = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      grid[y] = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        grid[y][x] = "·";
      }
    }

    // Draw snake
    snake.forEach((segment, index) => {
      if (segment.x >= 0 && segment.x < GRID_SIZE && segment.y >= 0 && segment.y < GRID_SIZE) {
        grid[segment.y][segment.x] = index === 0 ? "●" : "○";
      }
    });

    // Draw food
    if (food.x >= 0 && food.x < GRID_SIZE && food.y >= 0 && food.y < GRID_SIZE) {
      grid[food.y][food.x] = "◉";
    }

    return grid.map((row) => row.join(" ")).join("\n");
  };

  const restartSnakeGame = () => {
    initSnakeGame();
  };

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
        "🐍 Starting Snake Game...",
        "Use WASD or Arrow Keys to move",
        "Press ESC to quit",
        "",
      ]);
      initSnakeGame();
      setGameMode("snake");
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
          {gameMode === "snake" ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-4 text-center">
                <div className="text-xl font-bold mb-2">🐍 SNAKE GAME 🐍</div>
                <div className="text-lg">SCORE: {score}</div>
                <div className="text-xs opacity-70 mt-1">
                  {gameOver ? "GAME OVER!" : "WASD or Arrow Keys | ESC to quit"}
                </div>
              </div>
              <pre className="font-mono text-xs leading-tight">
                {renderSnakeGame()}
              </pre>
              {gameOver && (
                <div className="mt-4 flex flex-col items-center gap-3">
                  <div className="text-highlight-red font-bold animate-pulse">
                    💀 GAME OVER 💀
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={restartSnakeGame}
                      className="px-4 py-2 bg-highlight-red text-black font-bold hover:bg-white transition-colors"
                    >
                      🔄 RESTART
                    </button>
                    <button
                      onClick={() => {
                        setGameMode("terminal");
                        if (gameLoopRef.current) clearInterval(gameLoopRef.current);
                        setHistory([
                          ...history,
                          "",
                          "🐍 Snake game ended",
                          `Final score: ${score}`,
                          "",
                        ]);
                      }}
                      className="px-4 py-2 border border-off hover:bg-off hover:bg-opacity-20 transition-colors font-bold"
                    >
                      ✕ EXIT
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
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
            </>
          )}
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

