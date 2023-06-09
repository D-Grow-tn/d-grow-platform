import React from 'react'

import { Outlet } from 'react-router-dom';
function Quiz() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default Quiz