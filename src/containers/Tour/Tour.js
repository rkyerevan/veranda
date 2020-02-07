import React from "react";

import "./Tour.scss";

import MainMenu from "../../components/MainMenu/MainMenu";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageIntroduction from "./../../components/PageIntroduction/PageIntroduction";
import Post from "../../components/Post/Post";
import ComingSoonCard from "../../components/ComingSoonCard/ComingSoonCard";
import Footer from "../../components/Footer/Footer";

import icn1 from "./../../assets/icons/mapIcon.svg";
import icn2 from "./../../assets/icons/galleryIcon.svg";
import icn3 from "./../../assets/icons/videosIcon.svg";

import galImg from "./../../assets/images/tour/04553ac647a19e09f42d28e5d5f97a12.jpg"


const vrString = "Dive deep in our restaurant 360 degree view, best way to see every corner of the venue";
const galString = "Check out photos from events, entertainment shows, and overall restaurant look made by professional photographers.";
const vidStrring = "From videos of entertainment to highlights of special moments happened here."


const Tour = ({match}) => {

  const matchUrl = () => (match.url === "/tour")

  return (
    <div className="mainBackground">
      <div className="container">
        <div className="row justify-content-center">
          <div className="menuWrap">
            <MainMenu/>
            <ComingSoonCard/>
          </div>
          <div className="descriptionWrap">
            <div className="page-title-wrap">
              <PageTitle title="Tour"/>
            </div>
            <PageIntroduction/>
          </div>
        </div>
      </div>
      <div className="section">
        <Post
          embed="https://momento360.com/e/u/a9b53aa8f8b0403ba7a4e18243aabc66"
          title="360 View"
          text={vrString}
          icon={icn1}
          matchUrl={matchUrl()}
        />
        <Post
          title="Photo Gallery"
          text={galString}
          icon={icn2}
          img={galImg}
          matchUrl={matchUrl()}
        />
        <Post
          embed="https://www.youtube.com/embed/nbB91a71XtM"
          title="Videos"
          icon={icn3}
          text={vidStrring}
          matchUrl={matchUrl()}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default Tour
