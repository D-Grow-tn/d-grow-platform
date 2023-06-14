import React, { useState } from "react";
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
import "../css/LoginAdmin.css";
import CastomInput from "./CastomInput";
function CastomForm({ Name, ButtonName, onClick }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
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
                      placeholder="Email"
                      type="email"
                      icon="fa-solid fa-user p-1 mt-1"
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
                    <CastomInput placeholder="Enter your Code" type="text" />
                  </>
                )}
                {Name === "Login" && (
                  <>
                    <CastomInput
                      placeholder="Email"
                      type="email"
                      icon="fa-solid fa-user p-1 mt-1"
                    />
                    <CastomInput
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      icon="fa-solid fa-key p-1 mt-1"
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
                      placeholder="New password"
                      icon="fa-solid fa-key p-1 mt-1"
                      type={showPassword ? "text" : "password"}
                    />
                    <CastomInput
                      placeholder="Confirm New password"
                      icon="fa-solid fa-key p-1 mt-1"
                      type={showPassword ? "text" : "password"}
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
                      className="w-100 mb-5 d-flex justify-content-center btn custom-button "
                      onClick={onClick}
                    >
                      {" "}
                      {ButtonName}{" "}
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
