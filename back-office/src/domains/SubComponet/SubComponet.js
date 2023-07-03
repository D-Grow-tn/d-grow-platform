import React from 'react'
import { Outlet } from 'react-router-dom';

function SubComponet() {
  return (
    <div>
        <Outlet /> 
    </div>
  )
}

export default SubComponet