import React from 'react'

import { Outlet } from 'react-router-dom';
function OneProject() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default OneProject