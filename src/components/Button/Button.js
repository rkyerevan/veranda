import React from "react";

import "./Button.scss"

const Button = (props) => {

  return (
    <button className="quoteButton">{props.name}</button>
  )
}

export default Button