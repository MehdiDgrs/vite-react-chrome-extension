import { useState, useContext, useEffect } from "react";

import SizeObserver from "./components/SizeObserver";

import Modals from "./components/modals.jsx";

function App() {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(request, sender, sendResponse);
    sendResponse("我收到你的消息了：" + JSON.stringify(request));
    setToggle(!toggle);
    let picker = new EyeDropper();
    picker.open();
  });
  let [toggle, setToggle] = useState(false);
  let [color, setColor] = useState(null);
  let [clicked, isClicked] = useState(false);
  let picker = new EyeDropper();
  console.log(toggle);
  return (
    <SizeObserver>
      {toggle ? <Modals /> : null}
      {/*

     
      <div className="h-16 w-full sticky top-0 z-50 block">
     
    <div className="w-full  h-16 grid justify-items-center z-50 fixed top-0 z-99 " >
  */}
      <></>
    </SizeObserver>
  );
}

export default App;
