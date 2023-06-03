import React from 'react'

import { Outlet } from 'react-router-dom';
function Decision() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default Decision