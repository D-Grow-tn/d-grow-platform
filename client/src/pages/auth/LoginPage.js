import React from 'react';
import {MDBContainer, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

function LoginPage() {

  return (
    <MDBContainer fluid className="d-flex align-items-center justify-content-center h-custom mt-20 ">

     


        <MDBCol col='8' md='10' className="align-items-center justify-content-center">

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size='md' tag='a' className='me-2' style={{ borderRadius: "80%" }}>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'  style={{ borderRadius: "80%" }}>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'  style={{ borderRadius: "80%" }}>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"   />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <Link to="/auth/reset-password" className="text-body">
            Forgot password?
          </Link>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
           
          </div>

        </MDBCol>

   


    </MDBContainer>
  );
}

export default LoginPage;