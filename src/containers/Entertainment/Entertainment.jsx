import React from "react";


import "./Entertainment.scss";

import MainMenu from "../../components/MainMenu/MainMenu";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";
import ComingSoonCard from "../../components/ComingSoonCard/ComingSoonCard";
import Avatar from "../../components/Avatar/Avatar";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";

import avatar from "./../../assets/images/entertainment/IMG_6395.png";
import img1 from "./../../assets/images/entertainment/4db90c5871bbb1d1a35b8f491bb1d32c.png";
import img2 from "./../../assets/images/entertainment/8982af5cba57005671778e3869754bce.jpg";
import img3 from "./../../assets/images/entertainment/fbfc789822c9092a686bb3dcc27bb608.jpg";
import img4 from "./../../assets/images/entertainment/d0c59303104de33b70b4c24b890e0807.jpg";

const Entertainment = ({match}) => {

  const matchLocation = () => {
    return match.url === "/entertainment"
  }


  const addLineBreaks = (string) => {
    return string.split('\n').map((text, index) => (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br/>
        <br/>
      </React.Fragment>))
  }

  return (
    <div className="mainBackground">
      <div className="container">
        <div className="row justify-content-center">
          <div className="menuWrap">
            <MainMenu/>
            <ComingSoonCard/>
          </div>
          <div className="descriptionWrap">
            <div className='page-title-wrap'>
              <PageTitle title="Entertainment"/>
            </div>
            <PageIntroduction/>
          </div>
        </div>
        <div className="Avatars">
          <Avatar avatar={avatar}/>
          <Avatar avatar={avatar}/>
          <Avatar avatar={avatar}/>
          <Avatar avatar={avatar}/>
          <Avatar avatar={avatar}/>
          <Avatar avatar={avatar}/>
        </div>
      </div>
      <div className="entertainmentFeedContainer">
      <div className="section">
        {artists.map((artist, id)=> (
          <Post
            key = {id}
            img={artist.imgUrl}
            title={artist.name}
            text={addLineBreaks(string)}
            socials={artist.socials}
            className={matchLocation() && "mediaContainerEntertainment"}
          />
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  )

}

export default Entertainment;


const string = "Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet " +
  "rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. \n Sed posuere consectetur" +
  "est at lobortis. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Cras justo odio, " +
  "dapibus ac facilisis in, egestas eget quam.";

const artists = [
  {
    name: "Noro",
    imgUrl: img1,
    socials: {
      fbUrl: "www.facebook.com",
      instaUrl: "www.instagram.com",
      youtubeUrl: "www.youtube.com"
    }
  },
  {
    name: "Armen Aloyan",
    imgUrl: img2,
    socials: {
      fbUrl: "www.facebook.com",
      instaUrl: "www.instagram.com",
      youtubeUrl: "www.youtube.com"
    }
  },
  {
    name: "Karen Boksian",
    imgUrl: img3,
    socials: {
      fbUrl: "www.facebook.com",
      instaUrl: "www.instagram.com",
      youtubeUrl: "www.youtube.com"
    }
  },
  {
    name: "Joni",
    imgUrl: img4,
    socials: {
      fbUrl: "www.facebook.com",
      instaUrl: "www.instagram.com",
      youtubeUrl: "www.youtube.com"
    }
  },
]

