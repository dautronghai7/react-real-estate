import React, {useState, useEffect} from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { GlobalStyle } from "./GlobalStyles"

import {SliderData } from './data/SliderData'
import Dropdown from "./components/Dropdown"
import InfoSection from "./components/InfoSection"
import { InfoData, InfoDataTwo } from "./data/InfoData"
function App() {
  const [isOpen, setIsOpen] = useState(false);  
  const toggle = ()=>{    
      setIsOpen(!isOpen);
      console.log(isOpen);
  }
  window.addEventListener('resize',()=>{
    console.log(window.innerWidth);
    if(window.innerWidth > 500){
      if(isOpen){
        setIsOpen(false);
      }
    }
  })
  return (
    <div id='test'>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />      
      <InfoSection {...InfoData} />  
      <InfoSection {...InfoDataTwo} />  
    </div>    
  );
}

export default App;
