"use client";
import React, { useState, useEffect } from "react";
import Terminal from "./Terminal";

const TerminalTrigger = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open terminal with ` (backtick) or ~
      if ((e.key === "`" || e.key === "~") && !isTerminalOpen) {
        e.preventDefault();
        setIsTerminalOpen(true);
      }
      // Close terminal with ESC
      if (e.key === "Escape" && isTerminalOpen) {
        setIsTerminalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTerminalOpen]);

  return (
    <>
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      
      {/* Hint indicator */}
      {!isTerminalOpen && (
        <div className="fixed bottom-4 right-4 z-50 text-xs opacity-30 hover:opacity-100 transition-opacity">
          Press <kbd className="px-2 py-1 border border-off rounded">~</kbd> for terminal
        </div>
      )}
    </>
  );
};

export default TerminalTrigger;

