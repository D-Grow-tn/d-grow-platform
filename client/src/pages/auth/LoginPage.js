import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function LoginPage() {
  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center "
      style={{ backgroundColor: "#fff", height: "350px", borderRadius: "20px" }}
    >
      <MDBCol
        col="8"
        md="10"
        className="align-items-center justify-content-center"
      >
        <div class="mb-4">
          <label for="emailInput" class="form-label">
            Email address
          </label>
          <input
            id="emailInput"
            type="email"
            class="form-control form-control-lg"
          />
        </div>

        <div class="mb-4">
          <label for="passwordInput" class="form-label">
            Password
          </label>
          <input
            id="passwordInput"
            type="password"
            class="form-control form-control-lg"
          />
        </div>

        <div className="d-flex justify-content-between mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <Link
            to="/auth/reset-password"
            className="text-body text-decoration-underline"
            style={{ color: "red" }}
          >
            Reset Password
          </Link>
        </div>

        <div className="text-center text-md-start mt-4 pt-2">
          <Button className="mb-0 px-5" size="lg"  >
            Login
          </Button>
        </div>
      </MDBCol>
    </MDBContainer>
  );
}

export default LoginPage;
