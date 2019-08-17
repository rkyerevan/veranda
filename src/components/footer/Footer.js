import './_footer.scss';
import React from 'react';
import MenuList from "../menu-list/MenuList";
import FooterNav from "../footer-nav/FooterNav";
import SocialsList from "../socials-list/SocialsList";

const Footer = () => {
  return (<footer>
    <div className='container d-flex justify-content-between'>
      <div className="d-none d-lg-flex flex-column justify-content-center">
        <img src={require('./../../assets/images/logo.svg')} alt=''/>
        <span>Copyright 2019 Veranda Restaurant</span>
      </div>
      <div className='nav-wrap'>
        <MenuList/>
        <FooterNav/>
      </div>
      <div className="d-flex align-items-center socials-wrap">
        <SocialsList/>
      </div>
    </div>
  </footer>)
}

export default Footer