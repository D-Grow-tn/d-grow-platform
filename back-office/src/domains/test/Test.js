import React from 'react'

import { Outlet } from 'react-router-dom';
function Test() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default Test

