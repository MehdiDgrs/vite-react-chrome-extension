import React , {useEffect,useState,useContext,useRef} from 'react' 
import {SizeContext} from  './SizeObserver'
import html2canvas from 'html2canvas'

let Canvas = () => {
    
    
    let canvasEl = useRef(0)
    let imgData;
    let {width,height} = useContext(SizeContext)
    let [location,setLocation] = useState({x:0,y:0})
  useEffect(()=> 
  { 
    console.log(width)
    let handleMouseMove = (e) => {
        setLocation({x:e.offsetX,y:e.offsetY});
     
         console.log(imgData)
         console.log(location)
    }
    
    let c = canvasEl.current.getContext("2d");
    if(width>0) {imgData = c.getImageData(0,0,width,height)} else {imgData = c.getImageData(0,0,window.innerWidth,window.innerHeight)}
window.addEventListener('mousemove', handleMouseMove)
let composanteBleue = imgData.data[((50 * (imgData.width * 4)) + (200 * 4)) + 2];
console.log(composanteBleue)

  ;
 
  }, [location])


    return(
        <>
        
       
       
        <canvas id="canvas" ref={canvasEl} className="fixed top-0" style={{width:`${width}px`,height:`${height}px`}}></canvas>
       
        </>
    )
}
export default Canvas