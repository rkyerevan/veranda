import React from 'react';

import './HomePage.scss'

import MainMenu from '../../components/MainMenu/MainMenu';
import ComingSoonCard from "../../components/ComingSoonCard/ComingSoonCard";

const HomePage = ({match}) => {

  const matchUrl = () => {
    return match.url === '/'
  }

  return (
    <div className='homeContainer'>
      <div className="homeInner">
        <MainMenu matchUrl={matchUrl()}/>
        <ComingSoonCard matchUrl={matchUrl()}/>
      </div>
      <span className="copywrite">Copyright 2019 Veranda Restaurant</span>
    </div>
  )
}

export default HomePage
