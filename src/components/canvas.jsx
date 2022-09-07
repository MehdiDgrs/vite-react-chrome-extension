import React, { useEffect, useState, useContext, useRef } from "react";
import { SizeContext } from "./SizeObserver";

let Canvas = () => {
  let [location, setLocation] = useState({ x: 0, y: 0 });
  let { width, height } = useContext(SizeContext);
  let [colorCode, setColorCode] = useState(null);
  console.log(width, height);
  let canvasEl = useRef(0);
  let drop = new EyeDropper();

  let handleMouseMove = (e) => {
    setLocation({ x: e.clientX, y: e.clientY });
    drop.open().then((result) => {
      setColorCode(result.sRGBHex);
    });
    console.log(colorCode);
  };

  document.body.addEventListener("mousemove", handleMouseMove);
  useEffect(() => {
    let c = canvasEl.current.getContext("2d");

    if (width > 0 && height > 0) {
      let imageData = c.getImageData(0, 0, width, height);

      for (let i = 0; i < imageData.data.length; i++) {
        if (imageData.data[i] != 0) {
          console.log(imageData.data.indexOf(imageData.data[i]));
        }
      }
    }
  }, [width, height]);
  console.log(drop);
  return (
    <>
      <canvas
        id="canvas"
        ref={canvasEl}
        className="fixed top-0 z-50"
        style={{ width: `${width}px`, height: `${height}px` }}
      ></canvas>
    </>
  );
};
export default Canvas;

/* "content_scripts": [{
        "js": ["src/content.jsx"],
        "matches": ["https://*.google.com/"]
        }],*/
