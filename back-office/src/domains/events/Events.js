import React from 'react'

import { Outlet } from 'react-router-dom';
function Events() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default Events