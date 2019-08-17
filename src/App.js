import React from 'react';
import {Route} from "react-router-dom";
import './App.scss';

import HomePage from './containers/home/HomePage'
import Menu from "./containers/menu/Menu";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/>
      <Route path="/menu" component={Menu}/>
    </div>
  );
}

export default App;
