import React, { useEffect, useState, useContext, useRef } from "react";
import Draggable from "react-draggable";
import { SizeContext } from "./SizeObserver.jsx";
import rgbToHsl from "rgb-to-hsl";

let Modals = () => {
  let [hex, setHex] = useState(0);
  let [RGB, setRGB] = useState(0);
  let [HSL, setHSL] = useState(0);
  let picker = new EyeDropper();

  let { width, height } = useContext(SizeContext);

  let convertToRGB = (hex) => {
    let regex = /.{1,2}/g;

    let removedHash = hex === 0 ? " " : hex.slice(1, hex.length);
    let RgbHex = removedHash.match(regex);
    var aRgb = [
      parseInt(RgbHex[0], 16),
      parseInt(RgbHex[1], 16),
      parseInt(RgbHex[2], 16),
    ];
    return aRgb.join();
  };

  let convertHexToHSL = (hex) => {
    let regex = /.{1,2}/g;

    let removedHash = hex === 0 ? " " : hex.slice(1, hex.length);
    let RgbHex = removedHash.match(regex);
    var aRgb = [
      parseInt(RgbHex[0], 16),
      parseInt(RgbHex[1], 16),
      parseInt(RgbHex[2], 16),
    ];
    let arrayHSL = rgbToHsl(aRgb[0], aRgb[1], aRgb[2]);
    let roundedArray = [
      Math.round(arrayHSL[0]),
      arrayHSL[1].slice(0, arrayHSL[1].indexOf(".")) + "%",
      arrayHSL[2].slice(0, arrayHSL[2].indexOf(".")) + "%",
    ];

    return roundedArray.join();
  };

  useEffect(() => {
    if (hex !== 0) {
      setRGB(convertToRGB(hex));
      setHSL(convertHexToHSL(hex));
    }
  }, [hex]);
  useEffect(() => {
    let root = document.getElementById("crx-root");
    root.style.width = `${width}` + "px";
    console.log(root);
  }, [width, height]);
  return (
    <Draggable>
      <div className=" bg-yellow-300 p-6 rounded-md  m-auto my-5 flex text-center  justify-around  w-1/2 h-full">
        <div id="hex" className="flex ">
          <span className="mx-4 bg-white">Hex : </span>
          <div className="mx-4 bg-white">{hex}</div>
        </div>
        <div id="Rgb" className="flex ">
          <span className="mx-4 bg-white">RGB :</span>
          <div className="mx-4 bg-white">{RGB} </div>
        </div>
        <div id="HSL" className="mx-4 bg-white">
          <span className="mx-4 bg-white">HSL :</span>
          <div className="mx-4 bg-white">{HSL} </div>
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
