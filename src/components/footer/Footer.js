import React from 'react';

import './Footer.scss';

import {ReactComponent as Logo} from "./../../assets/images/logo.svg"
import MenuList from "./../MenuList/MenuList";
import FooterNav from "./../FooterNav/FooterNav";
import SocialsList from "./../SocialsList/SocialsList";

const Footer = () => {
  return (
    <footer>
      <div className='container d-flex p-0 footerInner'>
        <div className="d-none d-lg-flex flex-column justify-content-center">
          <Logo/>
          <span className="copyright">Copyright 2019 Veranda Restaurant</span>
        </div>
        <div className='navWrap'>
          <MenuList/>
          <FooterNav/>
        </div>
        <div className="iconsContainer">
          <SocialsList/>
        </div>
      </div>
    </footer>
  )
}

export default Footer