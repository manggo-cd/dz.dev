import React from "react";

const SectionOne = () => {
  return (
    <section className="h-screen flex items-center justify-center mb-10">
      <div className="px-8 text-center">
        <div className="star-container h-inherit">
          {/* Background text - 3 columns */}
          <div className="background-text grid grid-cols-3 gap-8 -mb-24 font-extrabold text-sm">
            <div className="col-span-1 text-left">FULLSTACK DEVELOPER</div>
            <div className="col-span-1">VANCOUVER, BC</div>
            <div className="col-span-1 text-right">
              CS - UNIVERSITY OF BRITISH COLUMBIA
            </div>
          </div>

          {/* Main text - BERNARD */}
          <div className="star-text">
            <h1 className="title">BERNARD</h1>
          </div>
        </div>
      </div>
      <img src="./assets/main_star.svg" className="star-svg rotating-star" />
    </section>
  );
};

export default SectionOne;
