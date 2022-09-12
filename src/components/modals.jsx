import React, { useEffect, useState, useContext, useRef } from "react";
import Draggable from "react-draggable";
import { SizeContext } from "./SizeObserver.jsx";
import rgbToHsl from "rgb-to-hsl";
import { ImCross } from "react-icons/im";
import { TiPipette } from "react-icons/ti";
import { IconContext } from "react-icons";
let Modals = ({ closeModal }) => {
  let [hex, setHex] = useState(0);
  let [RGB, setRGB] = useState(0);
  let [HSL, setHSL] = useState(0);
  let [copiedToClipBoard, setCopiedToClipBoard] = useState(false);
  let [colorPicked, setColorPicked] = useState(false);
  let [tipsActivated, setTipsActivated] = useState(false);
  let picker = new EyeDropper();

  let { width, height, distanceTop } = useContext(SizeContext);

  let showTips = () => {
    setTipsActivated(true);
  };

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
    console.log(distanceTop);
    let root = document.getElementById("crx-root");
    root.style.width = `${width}` + "px";
    root.style.top = `${distanceTop}` + "px";
    console.log(root);
  }, [width, height, distanceTop]);
  return (
    <Draggable>
      <div className="cursor-move drop-shadow-lg bg-yellow-300 p-6 rounded-md flex-col justify-around m-auto my-5  text-center  font-bold   w-3/4 h-full">
        <div id="top-wrapper">
          <div
            id="codes"
            className={`${
              colorPicked ? "flex" : "hidden"
            } justify-around w-3/4 mx-auto`}
          >
            <div id="hex" className="flex flex-col justify-between z-50 ">
              <span>HEX </span>
              <div
                onClick={(e) => {
                  console.log(e);
                  e.stopPropagation();
                }}
              >
                {hex}
              </div>
            </div>
            <div>
              <span>RGB </span>
              <div>{RGB} </div>
            </div>
            <div id="HSL">
              <span>HSL </span>
              <div>{HSL} </div>
            </div>
          </div>

          <IconContext.Provider
            value={{
              className: `cursor-pointer animate-bounce`,
              size: `${colorPicked ? "2em" : "5em"}`,
            }}
          >
            <div
              id="pipette"
              className="flex justify-center content-center my-5 "
            >
              {" "}
              <TiPipette
                onClick={() => {
                  showTips();
                  picker
                    .open()
                    .then(({ sRGBHex }) => {
                      setHex(sRGBHex.toUpperCase());
                      setColorPicked(true);
                      setTipsActivated(false);
                      return sRGBHex;
                    })
                    .then((sRGBHex) => {
                      navigator.clipboard.writeText(sRGBHex.toUpperCase()).then(
                        () => {
                          setCopiedToClipBoard(true);
                        },
                        () => {
                          console.log("fail");
                        }
                      );
                    });
                }}
              />
            </div>
          </IconContext.Provider>
        </div>
        <div id="bottom-wrapper">
          <div className="font-light">
            {copiedToClipBoard ? "HEX code copied to clipboard" : " "}
            {tipsActivated
              ? "You can pick colors outside of the window ! "
              : " "}
          </div>
          <div
            className="cursor-pointer fixed top-3 right-3"
            onClick={closeModal}
          >
            {<ImCross />}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Modals;
