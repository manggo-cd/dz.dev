"use client";

interface AnimatedEyesProps {
  mousePos: { x: number; y: number };
}

export function AnimatedEyes({ mousePos }: AnimatedEyesProps) {
  return (
    <div className="absolute top-0 left-0 right-0 flex items-center justify-center gap-12 opacity-30 pointer-events-none">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="relative w-20 h-20 animate-pulse"
          style={{ animationDelay: `${i * 0.3}s`, animationDuration: "3s" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse
              cx="100"
              cy="100"
              rx="80"
              ry="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-zinc-700"
            />
            <circle
              cx={100 + (mousePos.x - 50) * 0.15}
              cy={100 + (mousePos.y - 50) * 0.1}
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-zinc-600 transition-all duration-100"
            />
            <circle
              cx={100 + (mousePos.x - 50) * 0.15}
              cy={100 + (mousePos.y - 50) * 0.1}
              r="12"
              fill="currentColor"
              className="text-zinc-400 transition-all duration-100"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}




