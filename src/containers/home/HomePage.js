import React from 'react';

import MainMenu from '../../components/main-menu/MainMenu'
import logo from './../../assets/images/veranda_patio.svg'
import './HomePage.scss'

const HomePage = ({match}) => {
  const releaseBurger = () => {
    return match.url === '/'
  }

  return (
    <div className='home-wrap'>
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-5 p-0">
          <MainMenu releaseBurger={releaseBurger()} />
        </div>
        <div className='menu-wrap ml-2 p-0 col-5'>
          <div className='menu-inner'>
            <img src={logo} alt="Veranda" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
