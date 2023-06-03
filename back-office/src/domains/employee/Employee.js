import React from 'react'

import { Outlet } from 'react-router-dom';
function Employee() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default Employee