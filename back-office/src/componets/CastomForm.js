import React from "react";
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
function CastomForm({ Name, ButtonName }) {
  return (
    <div className="bg-light">
      <MDBContainer fluid className="my-5  ">
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
              <MDBCardBody className="p-5 shadow-5 text-center w-100">
                <h2 className="fw-bold mb-5">{Name} </h2>
                {Name === "Forgot Password" && (
                  <>
                    <div className="input d-flex align-items-start">
                      <label>
                        <i className="fa-solid fa-user p-1 mt-2"></i>
                      </label>
                      <input
                        placeholder="Email"
                        className="mb-4 border border-secondary rounded form-control form-control-lg custom-height"
                        type="email"
                      />
                    </div>

                    <div className="d-flex justify-content-end my-3">
                      {" "}
                      <Link to="/loginAdmin">Back to Login </Link>
                    </div>
                  </>
                )}
                {Name === "Login" && (
                  <>
                    <div className="input d-flex align-items-start">
                      <label>
                        <i className="fa-solid fa-user p-1 mt-2"></i>
                      </label>
                      <input
                        placeholder="Email"
                        className="mb-4 border border-secondary rounded form-control form-control-lg custom-height"
                        type="email"
                      />
                    </div>

                    <div className="input d-flex align-items-start">
                      <label>
                        <i className="fa-solid fa-key p-1 mt-3"></i>
                      </label>
                      <input
                        placeholder="Password"
                        className="mb-4 border border-secondary rounded form-control form-control-lg custom-height"
                        type="Password"
                      />
                    </div>

                    <div className="d-flex  mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        label="Subscribe to our newsletter"
                      />
                    </div>
                    <div className="d-flex justify-content-end my-3 ">
                      {" "}
                      <Link to="/resetPassword">Reset Password?</Link>
                    </div>
                  </>
                )}
                <div className="d-flex justify-content-center ">
                  <Button className="w-100 mb-5 d-flex justify-content-center btn custom-button ">
                    {" "}
                    {ButtonName}{" "}
                  </Button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default CastomForm;
