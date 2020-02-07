import React from "react";

import "./Avatar.scss";

const Avatar = (props) => (
  <div className="avatarContainer">
    <img className="Avatar" src={props.avatar} alt=""/>
  </div>
)

export default Avatar