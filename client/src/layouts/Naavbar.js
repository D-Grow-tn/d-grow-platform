import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FcSearch } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import TextHoverUnderline from "../components/TextHoverUnderline";
function Naavbar() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <Navbar
      bg="white"
      expand="lg"
      className={`d-flex justify-content-between align-items-center  px-5 ${
        scroll > 40 && "fixed-top"
      } `}
    >
      <Container fluid>
        <Navbar.Brand href="#" id="logo">
          {" "}
          D-Grow{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 px-5 mx-5 gap-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/"
              className="d-flex justify-content-center align-items-center"
              
            >
              <TextHoverUnderline bgColor='blue' duration='300' type='linear' content='Home' width={50}/>
            </Nav.Link>
            <NavDropdown
              title="Sevices"
              className="hover-drop"
              id="navbarScrollingDropdown"
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
            <Nav.Link href="/about-us" className="hover-bleu">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="hover-bleu">
              Contact{" "}
            </Nav.Link>
            <Nav.Link
              href="/auth"
              className="hover-bleu"
              
            >
              Account{" "}
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <input
              type="text"
              placeholder="  Search..."
              name="search"
              style={{
                borderRadius: 5,
                width: 250,
                height: 35,
                borderColor: " #f5ebeb",
              }}
            />
            <FcSearch style={{ height: "30px", width: "30px" }} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naavbar;
