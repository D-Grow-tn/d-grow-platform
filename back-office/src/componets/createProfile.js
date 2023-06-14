import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFile,
  MDBRadio,
} from "mdb-react-ui-kit";
import "../css/CreateProfile.css";

function CreateProfile() {
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="my-5">
          <h1 class="text-white mb-4">Create Profile</h1>

          <MDBCard>
            <MDBCardBody className="px-4">
              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Username</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput label="Example" size="lg" id="form1" type="text" />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Email address</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput
                    label="example@example.com"
                    size="lg"
                    id="form2"
                    type="email"
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Password</h6>
                  </MDBCol>
                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="*******"
                      size="lg"
                      id="form2"
                      type="password"
                    />
                  </MDBCol>

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Confirm Password</h6>
                    </MDBCol>
                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="*******"
                        size="lg"
                        id="form2"
                        type="password"
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr className="mx-n3" />
                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Adress</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="Adress"
                        size="lg"
                        id="form1"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Profile Picture</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBFile size="lg" id="customFile" />
                      <div className="small text-muted mt-2">
                        Upload your profile picture.
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <hr className="mx-n3" />
                  <MDBCol md="3" className="ps-5 d-flex align-items-center ">
                    <h6 className="">Gender</h6>

                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio1"
                      value="option1"
                      label="Female"
                      inline
                    />
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio2"
                      value="option2"
                      label="Male"
                      inline
                    />
                  </MDBCol>
                </MDBRow>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn className="my-4 " size="lg">
                Create
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CreateProfile;
