import React,{useEffect,useState,useContext,createContext} from 'react'
export let SizeContext = createContext('lolilol');
let SizeObserver = ({children}) => { 
let [width,setWidth] = useState(0);
let [height,setHeight] = useState(0)
useEffect(()=> 
{setWidth(window.innerWidth) ;
setHeight(window.innerHeight)},
 [width,height])

console.log(width,height)

    return(
        <SizeContext.Provider value={{width,height}}>
            {children}
        </SizeContext.Provider>
    )






}
export default SizeObserver 
