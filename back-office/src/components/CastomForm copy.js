import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/LoginAdmin.css";
import { useLocation } from "react-router-dom";
import CastomInput from "./CastomInput";

function CastomForm({ Name, ButtonName, onClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailForForget, setEmailForForget] = useState("");
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const location = useLocation();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const verificationEmail = new URLSearchParams(location.search).get(
    "emailForForget"
  );

  return (
    <div className="bg-light  border rounded  ">
      <MDBContainer
        fluid
        className="d-flex justify-content-center align-items-start "
      >
        <MDBRow className="g-0 align-items-center">
          <MDBCol
            col="6"
            className="d-flex justify-content-center align-items-center"
          >
            <MDBCard
              className="my-5 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center w-100 ">
                <h2 className="fw-bold mb-5">{Name} </h2>
                {Name === "Forgot Password" && (
                  <>
                    <CastomInput
                      value={emailForForget}
                      placeholder="Email"
                      type="email"
                      icon="fa-solid fa-user p-1 mt-1"
                      onChange={(e) => {
                        setEmailForForget(e.target.value);
                      }}
                    />

                    <div className="d-flex justify-content-end my-3">
                      {" "}
                      <Link to="/loginAdmin">Back to Login </Link>
                    </div>
                  </>
                )}
                {Name === "ValidateCode" && (
                  <>
                    <label className="">Please Enter your Code</label>
                    <CastomInput
                      value={code}
                      placeholder="Enter your Code"
                      type="text"
                      onChange={(e) => {
                        setCode(e.target.value);
                      }}
                    />
                  </>
                )}
                {Name === "Login" && (
                  <>
                    <CastomInput
                      value={email}
                      label="Email :"
                      placeholder="Email"
                      type="email"
                      icon="fa-solid fa-user p-1 mt-1"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <CastomInput
                      value={password}
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      icon="fa-solid fa-key p-1 mt-1"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="d-flex  mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        label="Show Password"
                        onChange={togglePasswordVisibility}
                      />
                    </div>
                    <div className="d-flex justify-content-end my-3 ">
                      {" "}
                      <Link to="/resetPassword">Reset Password?</Link>
                    </div>
                  </>
                )}
                {Name === "New Password" && (
                  <>
                    <CastomInput
                      value={newPassword}
                      placeholder="New password"
                      icon="fa-solid fa-key p-1 mt-1"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <CastomInput
                      value={confirmPassword}
                      placeholder="Confirm New password"
                      icon="fa-solid fa-key p-1 mt-1"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <div className="d-flex  mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        label="Show Password"
                        onChange={togglePasswordVisibility}
                      />
                    </div>
                  </>
                )}
                {ButtonName && (
                  <div className="d-flex justify-content-center ">
                    <Button
                      type="submit"
                      className="w-100 mb-5 d-flex justify-content-center btn custom-button"
                      onSubmit={
                        Name === "Login"
                          ? () => onClick(email, password)
                          : Name === "Forgot Password"
                          ? () => onClick(emailForForget)
                          : Name === "ValidateCode"
                          ? () => onClick(code, verificationEmail)
                          : Name === "New Password"
                          ? () => onClick(newPassword, confirmPassword)
                          : onClick
                      }
                    >
                      {ButtonName}
                    </Button>
                  </div>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default CastomForm;
