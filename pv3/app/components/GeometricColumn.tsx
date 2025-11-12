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
    <div ref={columnRef} className="flex flex-col items-center py-12 gap-16">
      {/* Diamond Pattern */}
      <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-80 hover:opacity-100 transition-opacity">
        <g transform="translate(60, 60)" style={{ transformOrigin: 'center' }}>
          <polygon
            points="0,-50 50,0 0,50 -50,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              transform: `rotate(${scrollProgress * 3.6}deg)`,
              transition: 'transform 0.1s linear'
            }}
          />
          <polygon
            points="0,-35 35,0 0,35 -35,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.6"
            style={{
              transform: `rotate(${-scrollProgress * 2.4}deg)`,
              transition: 'transform 0.1s linear'
            }}
          />
          <circle cx="0" cy="0" r="5" fill="currentColor" />
        </g>
      </svg>

      {/* Vertical Line with Nodes */}
      <div className="relative h-32 w-px bg-off opacity-30">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-off" />
        <div 
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 border-off"
          style={{
            opacity: Math.min(1, scrollProgress / 30),
            transition: 'opacity 0.3s'
          }}
        />
        <div 
          className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-off"
          style={{
            opacity: Math.min(1, scrollProgress / 50),
            transition: 'opacity 0.3s'
          }}
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-off" />
      </div>

      {/* Hexagon */}
      <svg width="100" height="115" viewBox="0 0 100 115" className="opacity-80 hover:opacity-100 transition-opacity">
        <polygon
          points="50,5 93,30 93,80 50,105 7,80 7,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: 400 - (scrollProgress * 4),
            transition: 'stroke-dashoffset 0.1s linear'
          }}
        />
        <polygon
          points="50,20 80,37.5 80,72.5 50,90 20,72.5 20,37.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>

      {/* Connecting Line */}
      <div className="relative h-24 w-px bg-off opacity-20" />

      {/* Star Variation - Rotated */}
      <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-80 hover:opacity-100 transition-opacity">
        <g transform="translate(50, 50)">
          <path
            d="M 0,-40 L 10,-10 L 40,-10 L 15,10 L 25,40 L 0,20 L -25,40 L -15,10 L -40,-10 L -10,-10 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              transform: `rotate(${scrollProgress}deg) scale(${0.8 + (scrollProgress / 500)})`,
              transformOrigin: 'center',
              transition: 'transform 0.1s linear'
            }}
          />
          <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Connecting Line */}
      <div className="relative h-24 w-px bg-off opacity-20" />

      {/* Triangle Composition */}
      <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-80 hover:opacity-100 transition-opacity">
        <g transform="translate(60, 60)">
          <polygon
            points="0,-50 43,25 -43,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polygon
            points="0,-30 26,15 -26,15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
            style={{
              transform: `rotate(180deg)`,
              transformOrigin: 'center'
            }}
          />
          <line x1="0" y1="-50" x2="0" y2="-30" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <line x1="43" y1="25" x2="26" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <line x1="-43" y1="25" x2="-26" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        </g>
      </svg>

      {/* Vertical Line with Nodes */}
      <div className="relative h-32 w-px bg-off opacity-30">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-off" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-off" />
      </div>

      {/* Circle Composition */}
      <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-80 hover:opacity-100 transition-opacity">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle 
          cx="50" 
          cy="50" 
          r="25" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          opacity="0.6"
          style={{
            strokeDasharray: '160',
            strokeDashoffset: 160 - (scrollProgress * 1.6),
            transition: 'stroke-dashoffset 0.1s linear'
          }}
        />
        <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="50" y1="10" x2="50" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="50" y1="75" x2="50" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="10" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="75" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    </div>
  );
};

export default GeometricColumn;

