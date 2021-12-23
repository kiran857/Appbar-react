import React,{useState} from 'react';
import Sidebar from './Components/Sidebar';
import Content from "./Components/Content";
import {GiHamburgerMenu} from "react-icons/gi"
import "./App.css";

const App=()=>{
  const[showNav,setShowNav]=useState(false);
 // const[contentShow,setContent]=useState(false);
   return(
    <div className='App'>
    <header>

    <GiHamburgerMenu onClick={()=>setShowNav(!showNav)} />
    </header>
    <Sidebar show={showNav} /> 
    <Content />
    </div>
  )
  }
export default App;
