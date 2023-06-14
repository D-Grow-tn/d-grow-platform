import React from 'react'
import HeaderPage from '../../../components/HeaderPage'

function EventsList() {
  return (
    <div>
      <HeaderPage title="Events List" showButton={true} buttonPath="/events/create"  text={"Create Event"}  />
    </div>
  )
}

export default EventsList
