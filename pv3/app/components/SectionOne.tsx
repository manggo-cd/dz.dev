"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Star3D to avoid SSR issues
const Star3D = dynamic(() => import("./Star3D"), { ssr: false });

const SectionOne = () => {
  const [use3D, setUse3D] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center mb-10 overflow-hidden">
      <div className="px-8 text-center sm:mt-0 -mt-10 z-10">
        <div className="star-container h-inherit">
          {/* Background text - 3 columns */}
          <div className="background-text grid grid-cols-3 gap-8 lg:-mb-24 -mb-4 font-extrabold md:text-sm text-[0.875rem]">
            <div className="col-span-1 text-left flex flex-col justify-end">
              SOFTWARE DEVELOPER
            </div>
            <div className="col-span-1 flex flex-col justify-end">
              VANCOUVER BC
            </div>
            <div className="col-span-1 text-right flex flex-col justify-end">
              UBC COMPUTER SCIENCE
            </div>
          </div>

          {/* Main text - DANIEL */}
          <div className="star-text">
            <h1 className="title xl:text-[16rem] lg:text-[12rem] md:text-[8rem] sm:text-[6rem] text-[3.5rem]">
              DANIEL
            </h1>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setUse3D(!use3D)}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-xs px-4 py-2 border border-off hover:bg-off hover:text-[#070707]"
      >
        {use3D ? "2D STAR" : "3D SPIKY"}
      </button>

      {/* Star - either 2D SVG or 3D Canvas */}
      {use3D ? (
        <Star3D />
      ) : (
        <img src="./assets/main_star.svg" className="star-svg rotating-star" />
      )}
    </section>
  );
};

export default SectionOne;
