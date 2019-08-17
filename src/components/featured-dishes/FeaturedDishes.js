import './_featured-dishes.scss';
import React from 'react';
import Post from "../post/Post";

import img1 from './../../assets/images/menu/AMphotography115.png';
import img2 from './../../assets/images/menu/AMphotography28.png';
import img3 from './../../assets/images/menu/AMphotography182.png';
import img4 from './../../assets/images/menu/AMphotography72.png';


const FeaturedDishes = () => {

  return (
    <div className='section'>
      <h2 className='section-title'>Featured Dishes</h2>

      <div className='section-data'>
        <Post
          img={img1}
          title={'Tuna Tartar'}
        />
        <Post
          img={img2}
          title={'Pellentesque'}
        />
        <Post
          img={img3}
          title={'Seafood plater'}
        />
        <Post
          img={img4}
          title={''}
        />
      </div>
    </div>
  )
}

export default FeaturedDishes
