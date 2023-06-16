import React from 'react'

import { Outlet } from 'react-router-dom';
function User() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default User