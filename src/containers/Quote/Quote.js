import React from "react";

import "./Quote.scss"

import MainMenu from "../../components/MainMenu/MainMenu";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageIntroduction from "./../../components/PageIntroduction/PageIntroduction";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import ComingSoonCard from "../../components/ComingSoonCard/ComingSoonCard";

const Quote = () => {

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
              <PageTitle title="Quote"/>
            </div>
            <PageIntroduction/>
          </div>
        </div>
        <div className="formContainer">
        <Form/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Quote