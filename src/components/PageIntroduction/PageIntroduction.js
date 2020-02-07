import React from "react";

import "./PageIntroduction.scss";

const PageIntroduction = (props) => {

  const {introText, matchUrl} = props;

  return (
    <React.Fragment>
      {
        introText ? introText :
          <div className={`${matchUrl ? "introContainer__contentPage" : "introContainer" }`}>
            <p className="Intro">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus
              vel
              augue
              laoreet
              rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna.
              <br/>
              <br/>
              Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit
              tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
          </div>
      }
    </React.Fragment>
  )
}

export default PageIntroduction
