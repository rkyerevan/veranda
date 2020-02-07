import React from 'react';

import './_page-title.scss';

const PageTitle = (props) => {

  const {title} = props;

  return (
    <div className='pageTitle'>
      <hr/>
      <h2 className='m-0 pl-2 pr-2'>{title}</h2>
      <hr/>
    </div>
  )
}

export default PageTitle
