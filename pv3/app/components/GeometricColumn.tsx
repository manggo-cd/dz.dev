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
    <div ref={columnRef} className="flex flex-col items-center py-8 gap-10">
      {/* Diamond Pattern */}
      <svg width="90" height="90" viewBox="0 0 120 120" className="opacity-80 hover:opacity-100 transition-opacity">
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

      {/* Hexagon */}
      <svg width="85" height="98" viewBox="0 0 100 115" className="opacity-80 hover:opacity-100 transition-opacity">
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

      {/* Star Variation - Rotated */}
      <svg width="85" height="85" viewBox="0 0 100 100" className="opacity-80 hover:opacity-100 transition-opacity">
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

      {/* Triangle Composition */}
      <svg width="90" height="90" viewBox="0 0 120 120" className="opacity-80 hover:opacity-100 transition-opacity">
        <g transform="translate(60, 60)">
          <polygon
            points="0,-50 43,25 -43,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              transform: `rotate(${scrollProgress * 0.5}deg)`,
              transformOrigin: 'center',
              transition: 'transform 0.1s linear'
            }}
          />
          <polygon
            points="0,-30 26,15 -26,15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
            style={{
              transform: `rotate(${180 - scrollProgress * 0.5}deg)`,
              transformOrigin: 'center',
              transition: 'transform 0.1s linear'
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default GeometricColumn;

