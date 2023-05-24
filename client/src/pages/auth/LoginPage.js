import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import {useDispatch}   from 'react-redux';
import {showErrorToast} from '../../utils/toast.js'
import { login } from "../../store/auth";




function LoginPage() {
 

const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handelSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ email: email, password: password }))
      .then(result => {
        if (!result.error) {
          navigate(`/profile`)
        } else {
          showErrorToast(result.error.message)
        
          
        }
      })
  }


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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
          <Button className="mb-0 px-5" size="lg" onClick={handelSubmit} >
            Login
          </Button>
        </div>
      </MDBCol>
    </MDBContainer>
  );
}

export default LoginPage;
