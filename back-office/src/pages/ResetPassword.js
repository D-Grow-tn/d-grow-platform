import React from "react";
import CastomForm from "../components/CastomForm";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../store/auth";
import { useDispatch } from "react-redux";
import { showErrorToast } from "../../src/utils/toast";

function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitResetPassword = async (email) => {
    dispatch(resetPassword({ email })).then((res) => {
      if (!res.error) {
        navigate(`/validateCode?emailForForget=${email}`);
      } else {
        showErrorToast(res.error.message);
      }
    });
  };
  return (
    <>
      <CastomForm
        Name="Forgot Password"
        ButtonName="Forgot Password "
        onClick={submitResetPassword}
      />
    </>
  );
}

export default ResetPassword;
