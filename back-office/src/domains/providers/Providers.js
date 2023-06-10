import React from 'react'

import { Outlet } from 'react-router-dom';
function Providers() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default Providers