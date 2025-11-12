"use client";
import React, { useEffect, useRef, useState } from "react";

const GeometricColumn = () => {
  const columnRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (columnRef.current) {
        const rect = columnRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;
        
        // Calculate how much of the element is visible
        const visibleTop = Math.max(0, Math.min(windowHeight, windowHeight - rect.top));
        const visibleBottom = Math.max(0, Math.min(windowHeight, rect.bottom));
        const visibleHeight = visibleBottom - visibleTop;
        
        const progress = Math.min(100, Math.max(0, (visibleHeight / elementHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={columnRef} className="flex flex-col items-center py-8 gap-14">
      {/* Simple Circle */}
      <svg width="80" height="80" viewBox="0 0 100 100" className="opacity-70 hover:opacity-100 transition-all duration-500">
        <circle 
          cx="50" 
          cy="50" 
          r="35" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="20" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1"
          opacity="0.4"
          style={{
            opacity: 0.4 + (scrollProgress / 250),
            transition: 'opacity 0.3s ease'
          }}
        />
      </svg>

      {/* Simple Diamond */}
      <svg width="75" height="75" viewBox="0 0 100 100" className="opacity-70 hover:opacity-100 transition-all duration-500">
        <polygon
          points="50,10 85,50 50,90 15,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      {/* Simple Star */}
      <svg width="75" height="75" viewBox="0 0 100 100" className="opacity-70 hover:opacity-100 transition-all duration-500">
        <path
          d="M 50,15 L 58,42 L 85,42 L 63,58 L 71,85 L 50,69 L 29,85 L 37,58 L 15,42 L 42,42 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      {/* Simple Hexagon */}
      <svg width="80" height="85" viewBox="0 0 100 100" className="opacity-70 hover:opacity-100 transition-all duration-500">
        <polygon
          points="50,10 85,30 85,70 50,90 15,70 15,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{
            strokeDasharray: '280',
            strokeDashoffset: Math.max(0, 280 - (scrollProgress * 2.8)),
            transition: 'stroke-dashoffset 0.2s ease'
          }}
        />
      </svg>
    </div>
  );
};

export default GeometricColumn;

