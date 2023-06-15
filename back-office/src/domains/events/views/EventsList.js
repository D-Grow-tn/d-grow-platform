 import React from 'react';
import HeaderPage from '../../../components/HeaderPage'
import { useNavigate } from "react-router-dom";
function EventsList() {
const navigate=useNavigate()


  return (
    <div>

      <HeaderPage title="Events List" showButton={true} buttonFunction={()=>navigate('create')}  text={"Create Event"}  />

    </div>
  )
}

export default EventsList
