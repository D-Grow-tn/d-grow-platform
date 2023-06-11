import React from "react";

import CastomForm from "../components/CastomForm";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showErrorToast } from "../../src/utils/toast";
import { login } from "../store/auth";

function LoginAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = async (email, password) => {
    dispatch(login({ email: email, password: password })).then((result) => {
      if (!result.error) {
        navigate(`/`);
      } else {
        showErrorToast(result.error.message);
      
      }
    });
  };

  return (
    <>
      <CastomForm Name="Login" ButtonName="Login" onClick={handelSubmit} />
    </>
  );
}

export default LoginAdmin;
