import React, {useEffect,useContext} from 'react'
import Draggable from 'react-draggable'
import SizeContext from './SizeObserver.jsx'
let  Modals = () => {



    return(
        <Draggable>
        <div className="  m-auto my-5 flex text-center  justify-around text-red w-1/2 h-full">
        <div id="hex" className="flex ">
           <span className="mx-4">Hex : </span>
            <div >#1c5f19 </div>
        </div>
        <div id="Rgb" className="flex ">
            <span className="mx-4">RGB :</span>
            <div >#1c5f19 </div>
        </div>
        <div id="HSL"className="flex ">
         <span  className="mx-4">HSL :</span>
            <div >#1c5f19 </div>
        </div>
        </div>
        </Draggable>
    )
}

export default Modals
