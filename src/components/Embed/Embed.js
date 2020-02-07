import React from "react";

const Embed = (props) => {

  const {height, width, embed, title, frameBorder} = props;

  return (<iframe className="embed-responsive-item" height={height} width={width} allowFullScreen
                  src={embed} title={title} frameBorder={frameBorder}></iframe>)
}

export default Embed