import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "bootstrap/dist/css/bootstrap.min.css";
import TextHoverUnderline from "../components/TextHoverUnderline";
import { useNavigate } from "react-router-dom";

function Naavbar() {
  const [scroll, setScroll] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <Navbar
      bg="white"
      expand="lg"
      className={`d-flex justify-content-between align-items-center  px-5  ${
        scroll > 40 && "fixed-top"
      } `}
    >
      <Container fluid>
        <Navbar.Brand href="#" id="logo" className="dark-bleu">
          {" "}
          D-Grow{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <div style={{ marginLeft: -120 }}></div>
          <Nav className="gap-3 " style={{ maxHeight: "200px" }} navbarScroll>
            <Nav.Link
              href="/home"
              className="d-flex  align-items-center nav-font px-3 "
              style={{ fontSize: "40px" }}
            >
              <TextHoverUnderline
                bgColor="blue"
                duration="300"
                type="linear"
                content="Home"
                width={50}
                fontSize={21}
              />
            </Nav.Link>

            <Nav.Link
              href="/about-us"
              className="d-flex  align-items-center px-3"
              style={{ color: "#213764" }}
            >
              <TextHoverUnderline
                bgColor="blue"
                duration="300"
                type="linear"
                content="About"
                width={60}
                fontSize={21}
              />
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="d-flex  align-items-center px-3"
              style={{ color: "#213764" }}
            >
              <TextHoverUnderline
                bgColor="blue"
                duration="300"
                type="linear"
                content="Contact"
                width={60}
                fontSize={21}
              />
            </Nav.Link>
            <Nav.Link
              href="/services"
              className="d-flex  align-items-center px-3"
              style={{ color: "#213764" }}
            >
              <div class="dropdown">
                <TextHoverUnderline
                  bgColor="blue"
                  duration="300"
                  type="linear"
                  content="Services"
                  width={60}
                  fontSize={21}
                />
                <div class="dropdown-content">
                  <a href="#"> Website applications</a>
                  <a href="#"> Mobile applications</a>
                  <a href="#"> Something else</a>
                </div>
              </div>
            </Nav.Link>
          </Nav>

          <Nav.Link
            href="/auth/login"
            className="d-flex gap-2 align-items-center"
            style={{ color: "#213764" }}
          >
            <PersonOutlineIcon style={{ color: "#213764" }} />
            <TextHoverUnderline
              bgColor="blue"
              duration="300"
              type="linear"
              content="Login"
              width={60}
              fontSize={21}
            />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naavbar;
