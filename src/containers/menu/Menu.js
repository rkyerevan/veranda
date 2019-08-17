import React, {useState} from 'react'
import MainMenu from "../../components/main-menu/MainMenu";
import PageTitle from "../../components/page-title/PageTitle";
import MenuPackage from "../../components/menu-package/MenuPackage";
import FeaturedDishes from "../../components/featured-dishes/FeaturedDishes";
import Footer from "../../components/footer/Footer";
import Dialog from "../../components/dialog/Dialog";

import './menu.scss'

const Menu = (props) => {
  console.log(props);

  const [isOpen, changeState] = useState(false);

  return (
    <div className='menu-background'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-4 col- p-0 pt-3'>
            <MainMenu/>
            <div className='menu-wrap d-none d-lg-block'>
              <div className='menu-inner'>
                <img className='w-100 pr-3 pl-3' src={require('./../../assets/images/veranda_patio.svg')}/>
              </div>
            </div>
          </div>
          <div className='col-lg-8 col-md-12 pb-2'>
            <div className='page-title-wrap'>
              <PageTitle/>
            </div>
            <div>
              <MenuPackage
                title={'Package1'}
                onClick={() => changeState(true)}
              />
            </div>
            <div className='pt-3'>
              <MenuPackage
                title={'Package2'}
              />
            </div>
            <div className='pt-3'>
              <MenuPackage
                title={'Package3'}
              />
            </div>
          </div>
          {isOpen ?
            <Dialog
              title={'Package1'}
              onClose={() => changeState(false)}
            /> :
            null}
        </div>
      </div>
      <div>
        <FeaturedDishes/>
      </div>
      <Footer/>
    </div>
  )
}

export default Menu
