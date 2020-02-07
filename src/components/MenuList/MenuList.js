import React from 'react';
import {Link} from "react-router-dom";

import './MenuList.scss';

const MenuList = (props) => {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <ul className={`menu-list ${props.className ? props.className : ""} ${props.matchUrl && "menu-list-homePage"}`}>
      <li>
        {/* TODO uppercase is a stylistic decision, needs to be in .scss */}
        <Link onClick={props.onClick} to={`${baseUrl}/menu`}>MENU</Link>
      </li>
      <li>
        <Link onClick={props.onClick} to={`${baseUrl}/tour`}>TOUR</Link>
      </li>
      <li>
        <Link onClick={props.onClick} to={`${baseUrl}/entertainment`}>ENTERTAINMENT</Link>
      </li>
      <li>
        <Link onClick={props.onClick} to={`${baseUrl}/quote`}>QUOTE</Link>
      </li>
    </ul>
  )
}

export default MenuList
