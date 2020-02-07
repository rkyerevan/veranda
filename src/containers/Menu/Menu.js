import React, {useState} from 'react'
import MainMenu from "../../components/MainMenu/MainMenu";
import PageTitle from "./../../components/PageTitle/PageTitle";
import MenuPackage from "../../components/MenuPackage/MenuPackage";
import FeaturedDishes from "./../../components/FeaturedDishes/FeaturedDishes";
import Footer from "./../../components/Footer/Footer";
import Dialog from "./../../components/Dialog/Dialog";

import './_Menu.scss'
import ComingSoonCard from "../../components/ComingSoonCard/ComingSoonCard";

const Menu = () => {

  const [isOpen, changeState] = useState(false);

  return (
    <div className='mainBackground'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className="menuWrap">
            <MainMenu/>
            <ComingSoonCard/>
          </div>
          <div className='descriptionWrap'>
            <div className='pageTitleWrap'>
              <PageTitle
                title="Menu"
              />
            </div>
            <div className="menuPackageContainer">
              <MenuPackage
                title={'Package1'}
                onClick={() => changeState(true)}
              />
            </div>
            <div className='menuPackageContainer'>
              <MenuPackage
                title={'Package2'}
                onClick={() => changeState(true)}
              />
            </div>
            <div className='menuPackageContainer'>
              <MenuPackage
                title={'Package3'}
                onClick={() => changeState(true)}
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
