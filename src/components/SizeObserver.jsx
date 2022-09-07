import React, { useEffect, useState, createContext } from "react";
export let SizeContext = createContext(null);

let SizeObserver = ({ children }) => {
  let [width, setWidth] = useState(0);
  let [height, setHeight] = useState(0);
  console.log(width);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [width, height]);

  return (
    <>
      <SizeContext.Provider value={{ width, height }}>
        {children}
      </SizeContext.Provider>
    </>
  );
};
export default SizeObserver;
