import React from 'react'

import { Outlet } from 'react-router-dom';
function Client() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default Client