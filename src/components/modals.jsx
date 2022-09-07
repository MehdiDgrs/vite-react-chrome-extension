import React, { useEffect, useState, useContext, useRef } from "react";
import Draggable from "react-draggable";
import SizeContext from "./SizeObserver.jsx";
let Modals = () => {
  let [hex, setHex] = useState(0);

  let picker = new EyeDropper();

  return (
    <Draggable>
      <div className=" bg-yellow-300 rounded-md  m-auto my-5 flex text-center  justify-around  w-1/2 h-full">
        <div id="hex" className="flex ">
          <span className="mx-4 bg-white">Hex : </span>
          <div className="mx-4 bg-white">{hex}</div>
        </div>
        <div id="Rgb" className="flex ">
          <span className="mx-4 bg-white">RGB :</span>
          <div className="mx-4 bg-white">#1c5f19 </div>
        </div>
        <div id="HSL" className="mx-4 bg-white">
          <span className="mx-4 bg-white">HSL :</span>
          <div className="mx-4 bg-white">#1c5f19 </div>
        </div>
        <button
          onClick={() =>
            picker.open().then(({ sRGBHex }) => {
              setHex(sRGBHex);
            })
          }
        >
          click me
        </button>
      </div>
    </Draggable>
  );
};

export default Modals;
