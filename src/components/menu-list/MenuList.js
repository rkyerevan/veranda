import './MenuList.scss';
import React from 'react';
import {Link} from "react-router-dom";

const MenuList = (props) => {
  return (
    <ul className={`menu-list ${props.className ? props.className : ""}`}>
      <li>
        {/* TODO uppercase is a stylistic decision, needs to be in .scss */}
        <Link to='/menu'>MENU</Link>
      </li>
      <li>
        <Link to='/home'>TOUR</Link>
      </li>
      <li>
        <Link to='/home'>ENTERTAINMENT</Link>
      </li>
      <li>
        <Link to='/home'>QUOTE</Link>
      </li>
    </ul>
  )
}

export default MenuList
