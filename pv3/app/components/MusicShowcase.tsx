import React from "react";

const MusicShowcase = () => {
  return (
    <div className="flex flex-row mt-8">
      <div className="flex-1 flex justify-center items-center h-inherit w-inherit">
        <img
          src="./assets/mdi_disc.svg"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-right flex-2 ">
        <span className="subheadings">CURRENT ROTATION</span> <br></br>
        SWAP IT OUT - JUSTIN BEIBER <br></br>
        OPEN HEARTS - THE WEEKND <br></br>
        SPARKS VISION - LUCKI, F1LTHY <br></br>
        FOLDED - KEHLANI
      </div>
    </div>
  );
};

export default MusicShowcase;
