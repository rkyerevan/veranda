import React from 'react';

import './_post.scss'

const Post = (props) => {
  return (
    <div className='post'>
      <div className=' p-0 position-relative'>
        <img className='w-100 h-auto' src={(props.img)}/>
        <h2>{props.title}</h2>
      </div>
      <span>
        Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet
        rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna.
        <br/>
        <br/>
        Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit
        tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
      </span>
    </div>
  )
}

export default Post

