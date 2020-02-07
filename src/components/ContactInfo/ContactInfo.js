import React from "react"

import "./ContactInfo.scss"

const ContactInfo = () => (

  <address>
    <p className="infoLabel">Address</p>
    141 Artsakh Ave,
    <br/>
    Glendale, CA 9120
    <br/>
    <p className="infoLabel">Phone</p>
    <a href="tel:+1123-456-7890">123-456-7890</a>
    <p className="infoLabel">Email</p>
    <a href="mailto:webmaster@example.com">info@veranda.la</a>
  </address>

);

export default ContactInfo