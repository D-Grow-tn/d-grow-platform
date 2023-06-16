import React from 'react'

import { Outlet } from 'react-router-dom';
function Request() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default Request