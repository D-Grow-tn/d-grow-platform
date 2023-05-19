import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";
import "bootstrap/dist/css/bootstrap.min.css";
import TextHoverUnderline from "../components/TextHoverUnderline";
import { useNavigate } from "react-router-dom";

function Naavbar() {
  const [scroll, setScroll] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScroll(window.scrollY);
    });
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

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
          <Nav className=" " style={{ maxHeight: "200px" }} navbarScroll>
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
                fontSize={22}
              />
            </Nav.Link>

            <NavDropdown
              title="Sevices"
              className="px-3"
              id="navbarScrollingDropdown"
              style={{ color: "#213764", fontSize: "22px" }}
              show={dropdownOpen}
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownClose}
              onClick={() => navigate("/about-us")}
            >
              <NavDropdown.Item href="#action3">
                Website applications
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Mobile applications
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

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
                fontSize={22}
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
                fontSize={22}
              />
            </Nav.Link>
          </Nav>
          <Nav.Link
            href="/auth"
            className="d-flex    align-items-center"
            style={{ color: "#213764" }}
          >
            <PersonAddTwoToneIcon style={{ color: "#213764" }} />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naavbar;
