import React from "react";

const MusicShowcase = () => {
  return (
    <div className="flex flex-row mt-10 gap-2 lg:mb-0 mb-25">
      <div className="flex-1 flex justify-center items-center h-inherit w-inherit">
        <img src="./assets/mdi_disc.svg" className="w-full object-cover" />
      </div>
      <div className="text-right flex-2 ">
        <span className="subheadings">CURRENT ROTATION</span> <br></br>
        I. Pink Toes - Childish Gambino <br></br>
        Relax and Run - Blood Orange <br></br>
        Gravity - John Mayer <br></br>
        East Liberty - PARTYNEXTDOOR
      </div>
    </div>
  );
};

export default MusicShowcase;
