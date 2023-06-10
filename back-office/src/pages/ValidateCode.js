import React from 'react'
import CastomForm from '../components/CastomForm'
import { useNavigate } from 'react-router-dom';

function ValidateCode() {
    const navigate = useNavigate()
    const handleNavigate=()=>{
        navigate("/newPassword")
   
     }
  return (
    <>
      <CastomForm   Name="ValidateCode" ButtonName="Validate Code" onClick={handleNavigate}/>
    </>
  )
}

export default ValidateCode