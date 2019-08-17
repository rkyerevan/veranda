import './main-menu.scss';

import React from 'react';
import MenuList from "../menu-list/MenuList";


const MainMenu = (props) => {

  return (
    <div className={props.releaseBurger && window.innerWidth <= 992 ? 'menu-home-mobile' : 'menu-wrap'}>
      <div className='menu-inner'>
        <div>
          <img className=' pl-lg-3 pr-lg-3' src={require('./../../assets/images/logo.svg')} alt=''/>
          {props.releaseBurger ? null : <span className='burger'>burger</span>}
        </div>
        <MenuList
          className={'collapsable'}
        />
      </div>
    </div>
  )
}

export default MainMenu

