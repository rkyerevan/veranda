import React from "react"

import "./ContactUs.scss"

import MainMenu from "../../components/MainMenu/MainMenu"
import PageTitle from "../../components/PageTitle/PageTitle"
import ContactInfo from "../../components/ContactInfo/ContactInfo"
import Embed from "../../components/Embed/Embed"
import Footer from "../../components/Footer/Footer"
import ComingSoonCard from "../../components/ComingSoonCard/ComingSoonCard"

const ContactUs = () => {

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.0597174724608!2d-118.2561736852131!3d34.14481428058079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0ffcadd2921%3A0x69aa815b31979798!2s141+Artsakh+Ave%2C+Glendale%2C+CA+91205!5e0!3m2!1sen!2sus!4v1566320957061!5m2!1sen!2sus"

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
              <PageTitle title="Contact Us"/>
            </div>
            <div className="contactInfoContainer">
              <ContactInfo/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mapContainer embed-responsive embed-responsive-16by9">
          <Embed
            width="100%"
            height="541"
            embed={mapUrl}
            frameBorder="0"
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs