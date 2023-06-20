import React from 'react'
import HeaderPage from '../../../components/HeaderPage'
import { useNavigate } from "react-router-dom";

function DecisionList() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderPage title="Decisions List"
      showButton={true}
        
      buttonFunction={()=>navigate('create')}
      text={"Create Decision"} />
    </div>
  )
}

export default DecisionList
