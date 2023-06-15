import React from "react";
import CastomForm from "../components/CastomForm";
import { useNavigate } from "react-router-dom";
import { verificationCode } from "../store/auth";
import { useDispatch } from "react-redux";
import { showErrorToast } from "../../src/utils/toast";

function ValidateCode() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleVerifyCode = async (code,email) => {
    dispatch(verificationCode({ code, email })).then((res) => {
      if (!res.error) {
        navigate("/newPassword");
      } else {
        showErrorToast(res.error.message);
      }
    });
  };

  return (
    <>
      <CastomForm
        Name="ValidateCode"
        ButtonName="Validate Code"
        onClick={handleVerifyCode}
      />
    </>
  );
}

export default ValidateCode;
