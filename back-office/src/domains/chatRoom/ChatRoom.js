import React from 'react'
import { Outlet } from 'react-router-dom';
function ChatRoom() {
  return (
    <div>
     <Outlet />
    </div>
  )
}

export default ChatRoom