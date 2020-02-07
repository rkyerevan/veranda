import React from 'react';

import './FeaturedDishes.scss';

import Post from "./../Post/Post";


import img1 from './../../assets/images/menu/AMphotography115.png';
import img2 from './../../assets/images/menu/AMphotography28.png';
import img3 from './../../assets/images/menu/AMphotography182.png';
import img4 from './../../assets/images/menu/AMphotography72.png';

const string = "Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet " +
  "rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. \n Sed posuere consectetur" +
  "est at lobortis. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Cras justo odio, " +
  "dapibus ac facilisis in, egestas eget quam.";

const FeaturedDishes = () => {

  const addLineBreaks = (string) => {
    return string.split('\n').map((text, index) => (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br/>
        <br/>
      </React.Fragment>))
  }

  return (
    <div className='section'>
      <h2 className='section-title'>Featured Dishes</h2>

      <div className='section-data'>
        <Post
          img={img1}
          title="Tuna Tartar"
          text = {addLineBreaks(string)}
        />
        <Post
          img={img2}
          title="Pellentesque"
          text = {addLineBreaks(string)}
        />
        <Post
          img={img3}
          title="Seafood plater"
          text = {addLineBreaks(string)}
        />
        <Post
          img={img4}
          text = {addLineBreaks(string)}
        />
      </div>
    </div>
  )
}

export default FeaturedDishes
