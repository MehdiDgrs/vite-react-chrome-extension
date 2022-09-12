import React, { useEffect, useState, createContext } from "react";
export let SizeContext = createContext(null);

let SizeObserver = ({ children }) => {
  let [width, setWidth] = useState(0);
  let [height, setHeight] = useState(0);
  let [distanceTop, setDistanceTop] = useState(0);
  console.log(width);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener("scroll", () => {
      setDistanceTop(window.pageYOffset);
    });
    console.log(distanceTop);
  }, [width, height, distanceTop]);

  return (
    <>
      <SizeContext.Provider value={{ width, height, distanceTop }}>
        {children}
      </SizeContext.Provider>
    </>
  );
};
export default SizeObserver;
