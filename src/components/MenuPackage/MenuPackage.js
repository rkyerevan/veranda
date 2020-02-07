import React from 'react';

import './_menu-package.scss'

const MenuPackage = props => (
  <div className='menuPackage'>
    <div className='border d-flex align-items-center flex-xl-row flex-column menuPackageInner'>
      <span className="title">{props.title}</span>
      <p className='paragraph'>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
      <button onClick={props.onClick}>Details</button>
    </div>
  </div>
)

export default MenuPackage
