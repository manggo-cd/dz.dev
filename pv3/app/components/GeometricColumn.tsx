"use client";
import React from "react";

const GeometricColumn = () => {
  return (
    <div className="flex flex-col items-center py-8 gap-14">
      {/* Git Commit Node */}
      <svg width="80" height="80" viewBox="0 0 100 100" className="opacity-70 hover:opacity-100 transition-all duration-500">
        <circle 
          cx="50" 
          cy="50" 
          r="12" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="5" 
          fill="currentColor"
        />
        <line x1="50" y1="10" x2="50" y2="38" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="62" x2="50" y2="90" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Git Branch */}
      <svg width="80" height="90" viewBox="0 0 100 100" className="opacity-70 hover:opacity-100 transition-all duration-500">
        <line x1="30" y1="20" x2="30" y2="45" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="50" r="3" fill="currentColor" />
        
        <path d="M 30 58 Q 35 65, 50 65 L 70 65" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="70" cy="65" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="70" cy="65" r="3" fill="currentColor" />
        
        <line x1="30" y1="58" x2="30" y2="80" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Git Merge */}
      <svg width="90" height="90" viewBox="0 0 100 100" className="opacity-70 hover:opacity-100 transition-all duration-500">
        <line x1="35" y1="20" x2="35" y2="35" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="35" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="35" cy="40" r="3" fill="currentColor" />
        
        <line x1="65" y1="20" x2="65" y2="35" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="65" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="65" cy="40" r="3" fill="currentColor" />
        
        <path d="M 35 48 Q 40 55, 50 60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 65 48 Q 60 55, 50 60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        
        <circle cx="50" cy="65" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="65" r="3" fill="currentColor" />
        <line x1="50" y1="73" x2="50" y2="85" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Git Network/Tree */}
      <svg width="85" height="85" viewBox="0 0 100 100" className="opacity-70 hover:opacity-100 transition-all duration-500">
        <circle cx="50" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="25" r="3" fill="currentColor" />
        
        <line x1="50" y1="33" x2="35" y2="52" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="33" x2="65" y2="52" stroke="currentColor" strokeWidth="1.5" />
        
        <circle cx="35" cy="60" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="35" cy="60" r="3" fill="currentColor" />
        
        <circle cx="65" cy="60" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="65" cy="60" r="3" fill="currentColor" />
        
        <line x1="35" y1="67" x2="50" y2="78" stroke="currentColor" strokeWidth="1.5" />
        <line x1="65" y1="67" x2="50" y2="78" stroke="currentColor" strokeWidth="1.5" />
        
        <circle cx="50" cy="85" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="85" r="3" fill="currentColor" />
      </svg>
    </div>
  );
};

export default GeometricColumn;

