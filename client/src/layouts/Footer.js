import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div
      style={{
        minHeight: "60vh",
        backgroundColor: "#070f4e",
        marginTop: "50px",
      }}
    >
      <MDBFooter
        className="text-center text-lg-start text-muted"
        style={{ width: "100%", backgroundColor: "#070f4e" }}
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol
                md="3"
                lg="4"
                xl="3"
                className="mx-auto mb-4"
                style={{ color: "white" }}
              >
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon
                    icon="gem"
                    className="me-3"
                    style={{ color: "white" }}
                  />
                  D-Grow
                </h6>
                <p>
                  "Unleash Your Digital Growth with D-Grow: Crafting Exceptional
                  Web and Mobile Experiences"
                </p>
              </MDBCol>

              <MDBCol
                md="2"
                lg="2"
                xl="2"
                className="mx-auto mb-4"
                style={{ color: "white" }}
              >
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Web aplication
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Desktop aplication
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Design
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Management systeme
                  </a>
                </p>
              </MDBCol>

              <MDBCol
                md="3"
                lg="2"
                xl="2"
                className="mx-auto mb-4"
                style={{ color: "white" }}
              >
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol
                md="4"
                lg="3"
                xl="3"
                className="mx-auto mb-md-0 mb-4"
                style={{ color: "white" }}
              >
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>

                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="facebook-f" style={{ color: "white" }} />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="twitter" style={{ color: "white" }} />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="google" style={{ color: "white" }} />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="instagram" style={{ color: "white" }} />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="linkedin" style={{ color: "white" }} />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="github" style={{ color: "white" }} />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "#070f4e", color: "white" }}
        >
          © 2023 Company, Inc. All rights reserved.
        </div>
      </MDBFooter>
    </div>
  );
}
