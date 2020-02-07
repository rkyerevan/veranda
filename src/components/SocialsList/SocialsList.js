import React from "react";

import {ReactComponent as FbIcon} from "./../../assets/icons/Group 6.svg"
import {ReactComponent as InstaIcon} from "./../../assets/icons/Group 11.svg"
import {ReactComponent as YoutubeIcon} from "./../../assets/icons/Group 12.svg"

import "./SocialsList.scss";

const SocialsList = (props) => {

  const items = [
    {
      url: "fburl",
      icon: <FbIcon alt="link to Facebook"
                    className="fbIcon"
                    height="auto"
                    width="57px"
      />
    },
    {
      url: "fburl",
      icon: <InstaIcon alt="alt"
                       className="instaIcon"
                       height="auto"
                       width="57px"
      />,
    },
    {
      url: "fburl",
      icon: <YoutubeIcon alt="alt"
                         className="youtubeIcon"
                         height="auto"
                         width="57px"
      />,
    }
  ]

  return (
    <React.Fragment>
      {items.map((item, id) => {
        return <a className="linkSocial" href={item.url} key={id}>
          {item.icon}
        </a>
      })}
    </React.Fragment>
  )
}

export default SocialsList
