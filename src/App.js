import React from 'react';
import {Route} from "react-router-dom";
import './App.scss';

import HomePage from './containers/home/HomePage'
import Menu from "./containers/Menu/Menu";
import Tour from "./containers/Tour/Tour"
import Entertainment from "./containers/Entertainment/Entertainment"
import Quote from "./containers/Quote/Quote"
import ContactUs from "./containers/ContactUs/ContactUs"


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/tour" component={Tour}/>
      <Route path="/entertainment" component={Entertainment}/>
      <Route path="/quote" component={Quote}/>
      <Route path="/contact-us" component={ContactUs}/>
    </div>
  );
}

export default App;
