import React from 'react'

import { Outlet } from 'react-router-dom';
function Invoices() {
  
  return (
    <div className='page'>
      <Outlet />
    </div>
  )
}

export default Invoices