import React from "react"

import {ReactComponent as PatioLogo} from "./../../assets/images/veranda_patio.svg"

import "./ComingSoonCard.scss"

const ComingSoonCard = (props) => {

  const {matchUrl} = props;

  return (
    <div className={matchUrl ? "cardContainerHome" :"cardContainer"}>
      <div className="cardInner">
        <PatioLogo/>
        <span>coming soon</span>
      </div>
    </div>
  )
}

export default ComingSoonCard