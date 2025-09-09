import React from "react";

const SectionOne = () => {
  return (
    <section className="h-screen flex items-center justify-center mb-10">
      <div className="px-8 text-center sm:mt-0 -mt-10">
        <div className="star-container h-inherit">
          {/* Background text - 3 columns */}
          <div className="background-text grid grid-cols-3 gap-8 lg:-mb-24 -mb-4 font-extrabold md:text-sm text-[0.875rem]">
            <div className="col-span-1 text-left flex flex-col justify-end">
              FULLSTACK DEVELOPER
            </div>
            <div className="col-span-1 flex flex-col justify-end">
              VANCOUVER BC
            </div>
            <div className="col-span-1 text-right flex flex-col justify-end">
              UBC COMPUTER SCIENCE
            </div>
          </div>

          {/* Main text - BERNARD */}
          <div className="star-text">
            <h1 className="title xl:text-[16rem] lg:text-[12rem] md:text-[8rem] sm:text-[6rem] text-[4rem]">
              BERNARD
            </h1>
          </div>
        </div>
      </div>
      <img src="./assets/main_star.svg" className="star-svg rotating-star" />
    </section>
  );
};

export default SectionOne;
