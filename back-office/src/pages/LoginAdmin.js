import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showErrorToast } from "../../src/utils/toast";
import { login } from "../store/auth";
import Form from "../components/Form";

function LoginAdmin() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
 console.log("user",user);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((User) => ({ ...User, [name]: value }));
  };
 
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(login(user)).then((result) => {
      if (!result.error) {
        navigate(`/`);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };
  const inputs = [
    {
      placeholder: "Email",
      type: "email",
      required: true,
      name: "email",
      label: "Email",
    },  
    {
      placeholder: "Password",
      label: "Password",
      type: "password",
      required: true,
      name: "password",
    },
  ];
  const buttons = [{ name: "Login", onSubmit, className: "w-100",type:'submit' }];
  return (
    <div className="d-flex justify-content-center align-items-center h-100 w-100 position-fixed ">
      <Form
        title="Login"
        titleClassName="text-center mb-5"
        titleStyle={{ fontWeight: 400 }}
        className="position-relative rounded-5"
        style={{
          boxShadow: "0px 0px 8px #9E9E9E",
          padding: 80,
          paddingTop: 100,
        }}
        inputsClassName="d-flex justify-content-center gap-3 flex-column"
        inputs={inputs}
        buttons={buttons}
        buttonsClassName="mt-5"
        onSubmit={onSubmit}
        onChange={handleChange}
        link={{
          href: "/resetPassword",
          content: "Reset Password?",
          style: { float: "right" },
        }}
      />
      {/* <CastomForm Name="Login" ButtonName="Login" onClick={handleSubmit} /> */}
    </div>
  );
}

export default LoginAdmin;
