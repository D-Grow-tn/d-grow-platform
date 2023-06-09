import React from 'react'

import { Outlet } from 'react-router-dom';
function Project() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default Project