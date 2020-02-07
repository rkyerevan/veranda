import React, {useState, useEffect} from 'react';

import MenuList from "./../MenuList/MenuList";
import {ReactComponent as Logo} from "./../../assets/images/logo.svg"
import Burger from "../Burger/Burger";


import './MainMenu.scss';


const MainMenu = (props) => {

  const [isMenuOpen, openMenu] = useState(false);
  const {matchUrl, startSign} = props;

  const preventBodyScroll = () => {
    return isMenuOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
  }

  useEffect(()=>{
    preventBodyScroll()
  })


  return (
    <div
      className={matchUrl ? "homePageMenuContainer" : "menuContainer"}>
      <div className={isMenuOpen ? "menuInner menuInnerActive" : "menuInner"}>
        <div className="logoContainer">
          <Logo fill={"white"} className="logo"/>
          <Burger
            onClick={() => openMenu(!isMenuOpen)}
            className={isMenuOpen ? "BurgerActive active" : "Burger"}
          />
          <p className="startSign">{startSign}</p>
        </div>
        <MenuList className="Collapsable"
                  matchUrl={matchUrl}
        />
        {matchUrl ? null : <Logo name="patioLogo" className={`patioLogo ${isMenuOpen && "appear"}`}/>}
      </div>
    </div>
  )
}

export default MainMenu
