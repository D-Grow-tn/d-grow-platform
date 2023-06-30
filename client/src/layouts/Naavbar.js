import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import TextHoverUnderline from "../components/TextHoverUnderline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import config from "../configs";
import axios from "axios";
function Naavbar() {
  const [scroll, setScroll] = useState(0);
  // const navigate = useNavigate();
  const [left, setLeft] = useState(null);

  const [middle, setMiddle] = useState(null);
  const [right, setRight] = useState(null);

  const me = useSelector((state) => state.auth.me);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScroll(window.scrollY);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`${config.API_ENDPOINT}/website-settings/by-title/Header`)
      .then((res) => {
        setLeft(
          res.data?.SubComponent.filter((elem) => elem.position === "left")[0]
        );
        setMiddle(
          res.data?.SubComponent.filter((elem) => elem.position === "middle")[0]
        );
      });
  }, []);
  console.log(middle?.ContentSubComponent);

  return (
    <Navbar
      bg="white"
      expand="lg"
      className={`d-flex justify-content-between align-items-center  px-5  ${
        scroll > 40 && "fixed-top"
      } `}
    >
      <Container fluid>
        {left?.ContentSubComponent?.map((elem, i) => (
          <Navbar.Brand href="/" id="logo" className="dark-bleu">
            {" "}
            {elem?.content}{" "}
          </Navbar.Brand>
        ))}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <div style={{ marginLeft: -120 }}></div>
          <Nav className="gap-3 " style={{ maxHeight: "200px" }} navbarScroll>
            {middle?.ContentSubComponent.map((elem, i) =>
              elem.type === "select" ? (
                <Nav.Link
                  key={i}
                  href={elem?.navigateTo}
                  className="d-flex  align-items-center px-3"
                  style={{ color: "#213764" }}
                >
                  <div className="dropdown">
                    <TextHoverUnderline
                      bgColor="blue"
                      duration="300"
                      type="linear"
                      content={elem?.content}
                      width={60}
                      fontSize={21}
                    />
                    <div className="dropdown-content">
                      {elem.subContent.map((el, j) => (
                        <a key={j} href={el.path}>
                          {" "}
                          {el.item}
                        </a>
                      ))}
                    </div>
                  </div>
                </Nav.Link>
              ) : (
                <Nav.Link
                  key={i}
                  href={elem?.navigateTo}
                  className={`d-flex  align-items-center  px-3`}
                  style={{ fontSize: "40px" }}
                >
                  <TextHoverUnderline
                    bgColor="blue"
                    duration="300"
                    type="linear"
                    content={elem?.content}
                    width={50}
                    fontSize={21}
                  />
                </Nav.Link>
              )
            )}
          </Nav>

          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{ all: "unset" }}
            >
              <Link
                to={!me && "/auth/login"}
                className="d-flex gap-2 align-items-center"
                style={{ color: "#213764" }}
                // onClick={() => {
                //   if (!me) {
                //     navigate("/auth/login");
                //   }
                // }}
              >
                <PersonOutlineIcon style={{ color: "#213764" }} />
                <TextHoverUnderline
                  bgColor="blue"
                  duration="300"
                  type="linear"
                  content={!me ? "Login" : me?.name}
                  width={80}
                  fontSize={21}
                  whiteSpace="nowrap"
                />
              </Link>
            </Dropdown.Toggle>

            {me && (
              <Dropdown.Menu>
                <Dropdown.Item href={me ? "/profile" : "/auth/login"}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.pathname = "/auth/login";
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            )}
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naavbar;
