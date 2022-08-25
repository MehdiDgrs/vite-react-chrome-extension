import { useState,useContext,useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import SizeObserver  from './components/SizeObserver'
import Modals from './components/modals'
function App() {

  


  
  return (
    <SizeObserver>
      <div className="h-16 w-full sticky top-0 z-50 block">
    <div className="w-full  h-16 grid justify-items-center z-50 fixed top-0 z-99 " >
      <Modals/>
     </div>
     </div>
     </SizeObserver>
     
  )
}

export default App
