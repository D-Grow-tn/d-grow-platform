import React from "react";
import CastomForm from "../components/CastomForm";
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate()
  const handleNavigate=()=>{
     navigate("/validateCode")

  }
  return (
    <>
      <CastomForm Name="Forgot Password" ButtonName="Forgot Password " onClick={handleNavigate} />
    </>
  );
}

export default ResetPassword;
