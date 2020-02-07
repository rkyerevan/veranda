import React from "react"

import "./ContentPage.scss"
import MainMenu from "../../components/MainMenu/MainMenu";
import PageIntroduction from "../../components/pageIntroduction/PageIntroduction";
import Footer from "../../components/Footer/Footer";
import ComingSoonCard from "../../components/ComingSoonCard/ComingSoonCard";
import PageTitle from "../../components/PageTitle/PageTitle";

const ContentPage = ({match}) => {

  console.log(match)

  const matchUrl = () => {
    return match.url === "/content-page"
  }

  return (
    <div className="mainBackground">
      <div className="container">
        <div className="row justify-content-center">
          <div className="menuWrap">
            <MainMenu/>
            <ComingSoonCard/>
          </div>
          <div className="d-md-block descriptionWrap">
            <div className='page-title-wrap'>
              <PageTitle
                title="Content Page"
                matchUrl = {matchUrl()}
              />
            </div>
            <PageIntroduction
            matchUrl={matchUrl()}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContentPage
