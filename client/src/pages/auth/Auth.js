import React from "react";
import { Outlet } from "react-router-dom";
import "../../App.css"

function Auth() {
  return (
    <div className="vh-100 bg-light ">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className=" d-flex justify-content-center align-items-center col-md-9 col-lg-6 col-xl-5">
            <img
              alt="hey"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
