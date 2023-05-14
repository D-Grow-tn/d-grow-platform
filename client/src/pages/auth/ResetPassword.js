import React from "react";
import "../../assets/css/login.css";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <>
      <div className="">
        <h3>
          <i className="fa fa-lock fa-4x"></i>
        </h3>
        <h2 className="text-center mt-4">Forgot Password?</h2>
        <p>You can reset your password here.</p>
        <div className="panel-body mt-4">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              id="email"
              name="email"
              placeholder="email address"
              className="form-control form-control-lg"
              type="email"
              style={{ width: "450px" }}
            />
          </div>

          <div className="form-group mt-4">
            <button type="button" className="btn btn-primary btn-lg">
              Reset Password
            </button>
            <p className="small fw-bold mt-4 pt-1 mb-0">
              Remember your password ?{" "}
              <Link to="/auth/login" className="link-danger">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
