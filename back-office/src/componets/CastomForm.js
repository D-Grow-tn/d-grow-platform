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
    <MDBContainer fluid className="my-5 ">
      <MDBRow className="g-0 align-items-center">
        <MDBCol col="6">
          <MDBCard
            className="my-5 cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
            }}
          >
            <MDBCardBody className="p-5 shadow-5 text-center ">
              <h2 className="fw-bold mb-5">{Name} </h2>
              {Name === "Forgot Password" && (
                <>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="form3"
                    type="email"
                  />
                  <div className="d-flex justify-content-end">
                    {" "}
                    <Link to="/loginAdmin">Back to Login </Link>
                  </div>
                </>
              )}
              {Name === "Login" && (
                <>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="form3"
                    type="email"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form4"
                    type="password"
                  />

                  <div className="d-flex  mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    {" "}
                    <Link to="/resetPassword">Reset Password?</Link>
                  </div>
                </>
              )}
              <div className="d-flex justify-content-center ">
                <Button className="w-100 mb-5 d-flex justify-content-center ">
                  {" "}
                  {ButtonName}{" "}
                </Button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col="6">
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
            class="w-100 rounded-4 shadow-4"
            alt=""
            fluid
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CastomForm;
