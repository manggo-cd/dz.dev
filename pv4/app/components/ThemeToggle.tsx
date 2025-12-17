"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved ? saved === "dark" : prefersDark;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("light", !shouldBeDark);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newIsDark = !isDark;
    
    // Add transition class to root
    document.documentElement.style.setProperty("--theme-transition", "1");
    
    setTimeout(() => {
      setIsDark(newIsDark);
      document.documentElement.classList.toggle("light", !newIsDark);
      localStorage.setItem("theme", newIsDark ? "dark" : "light");
      
      setTimeout(() => {
        document.documentElement.style.setProperty("--theme-transition", "0");
        setIsAnimating(false);
      }, 500);
    }, 300);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-8 h-8 flex items-center justify-center group"
      aria-label="Toggle theme"
      disabled={isAnimating}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-zinc-500/0 group-hover:bg-zinc-500/10 transition-colors duration-300" />
      
      {/* Sun icon */}
      <Sun 
        className={`absolute w-4 h-4 transition-all duration-500 ease-out ${
          isDark 
            ? "opacity-0 rotate-90 scale-0" 
            : "opacity-100 rotate-0 scale-100 text-amber-500"
        }`}
      />
      
      {/* Moon icon */}
      <Moon 
        className={`absolute w-4 h-4 transition-all duration-500 ease-out ${
          isDark 
            ? "opacity-100 rotate-0 scale-100 text-zinc-400" 
            : "opacity-0 -rotate-90 scale-0"
        }`}
      />
      
      {/* Ripple effect when clicking */}
      {isAnimating && (
        <span className="absolute inset-0 rounded-full animate-ping bg-zinc-500/20" />
      )}
    </button>
  );
}



