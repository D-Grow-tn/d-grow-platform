import React from 'react'
import { Outlet } from 'react-router-dom';

function ContentSubComponent() {
  return (
    <div>
         <Outlet /> 
    </div>
  )
}

export default ContentSubComponent