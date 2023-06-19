import React from 'react'
import HeaderPage from '../../../components/HeaderPage'
import { useNavigate } from "react-router-dom";


function CreateDecision() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderPage title="Create Decision" />
    </div>
  )
}

export default CreateDecision
