import './_socials-list.scss';
import React from 'react';


const SocialsList = () => {
  return (
    <ul className='socials-list'>
      <li className='pr-2'>
        <a href={'https://www.facebook.com/'}><img src={require('./../../assets/icons/Group 6.svg')}/></a>
      </li>
      <li className='pr-2'><a href={'https://www.instagram.com/'}><img
        src={require('./../../assets/icons/Group 11.svg')}/></a></li>
      <li><a href={'https://www.youtube.com/'}><img src={require('./../../assets/icons/Group 12.svg')}/></a></li>
    </ul>
  )
}

export default SocialsList