"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatedEyes } from "@/app/components/ui";

export function HeroSection() {
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

  return (
    <section ref={heroRef} className="py-16 relative">
      <AnimatedEyes mousePos={mousePos} />

      <div className="relative z-10 mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          daniel zhou
        </h1>
        <p className="text-sm text-zinc-400 tracking-wide mb-2">
          software developer / systems architect
        </p>
        <p className="text-sm text-zinc-600">3rd year cs @ ubc</p>
      </div>
    </section>
  );
}

