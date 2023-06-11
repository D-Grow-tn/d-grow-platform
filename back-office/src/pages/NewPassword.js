import React from "react";
import CastomForm from "../components/CastomForm";
import { useNavigate } from "react-router-dom";
import { changePassword, me } from "../store/auth";
import { useDispatch } from "react-redux";
import { showErrorToast } from "../../src/utils/toast";
function NewPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSaveChanges = async (newPassword, confirmPassword) => {
    dispatch(changePassword({ password: newPassword, confirmPassword })).then(
      (res) => {
        if (!res.error) {
          let token = JSON.parse(localStorage.getItem("tokenCode"));
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.removeItem("tokenCode");
          dispatch(me(token.Authorization)).then((res) => navigate("/"));
        } else {
          showErrorToast(res.error.message);
        }
      }
    );
  };
  return (
    <>
      <CastomForm
        Name="New Password"
        ButtonName="Change Password"
        onClick={handleSaveChanges}
      />
    </>
  );
}

export default NewPassword;
