import React from "react"

import "./Burger.scss"

const Burger = (props) => {

  const {onClick, className} = props;

  return (
    <div onClick={onClick} className={className}></div>
  )
}

export default Burger