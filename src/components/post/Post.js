import React from 'react';

import Embed from "../Embed/Embed";
import SocialsList from "../SocialsList/SocialsList";

import './Post.scss'

const Post = (props) => {

  const {embed, className, title, img, icon, text, socials, matchUrl} = props;

  return (
    <div className='post'>
      <div className={`p-0 position-relative ${className ? className : "mediaContainer"}`}>
        {embed ?
          <div className="embed-responsive embed-responsive-16by9">
            <Embed
              embed={embed}
              title={title}
              width="100%"
              height="526"
              className="embed-responsive-item"
            /></div> :
          <div className="imageWrapper">
            <img src={(img)} alt=""/>
          </div>}
        <h2 title={title}>{title}</h2>
      </div>
      <div className={`infoContainer${matchUrl ? "__mobileDisplayNone" : ""}`}>
        {icon && <img className="icon" src={icon} alt=""/>}
        {text && text}
        {socials && <div className="d-flex socialsContainer">
          <SocialsList/>
        </div>}
      </div>
    </div>
  )
}

export default Post

