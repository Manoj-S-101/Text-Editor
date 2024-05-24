import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState("home");
    const [mode, setMode] = useState("day");
    const changeMode = ()=>{
        setMode(prevMode => (prevMode === "day" ? "night" : "day"));
        document.body.classList.toggle('night-mode', mode === "day");
    };
    const changeModeOnText = (varib)=>{
        setMode(varib);
        if(varib === "day")
            document.body.classList.remove('night-mode');
        else
        document.body.classList.add('night-mode');
    }
    
    const changeMenu = (navmenu)=>{
        setMenu(navmenu);
    }

  return (
    <div className='Navbar'>
      <div className='navbar-menu'>
        <ul className='navmenu'>
            <li onClick={()=>changeMenu("home")}><Link to="/" >HOME</Link>{menu === "home" && <hr/>}</li>
            <li onClick={()=>changeMenu("translate")}><Link to="/translate">TRANSLATE</Link>{menu === "translate" && <hr/>}</li>
            <li onClick={()=>changeMenu("about")}><Link to="/about">ABOUT</Link>{menu === "about" && <hr/>}</li>
        </ul>
      </div>
      <div className="dark-mode">
        <p className={mode === "day" ? 'day-text selected' : 'day-text'} onClick={()=>changeModeOnText("day")}>Day</p>
        <div className="blocks-show">
        <p className={mode === "day" ? 'block block-day' : 'block block-night'} onClick={()=>changeMode()}></p>
        <p className={mode === "day" ? 'block-circe block-circe-day' : 'block-circe block-circe-night'} onClick={()=>changeMode()}></p>
        </div>
        <p className={mode === "night" ? 'night-text selected' : 'night-text'} onClick={()=>changeModeOnText("night")}>Night</p>
      </div>
    </div>
  )
}

export default Navbar
