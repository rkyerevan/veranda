import React from 'react';
import {Link} from 'react-router-dom'

import './FooterNav.scss'

const FooterNav = () => {
  return (
    <ul className="footer-nav">
      <li>
        <Link to="/contact-us">About Veranda</Link>
      </li>
      <li>Privacy Policy</li>
      <li>
        <Link to="/contact-us">Contact Info</Link>
      </li>
    </ul>
  )
}

export default FooterNav
