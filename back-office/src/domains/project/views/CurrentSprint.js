import React from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import navData from "../../../constants/currentSprintData";
import Pomodoro from "../../../components/Pomodoro"

function CurrentSprint() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const path = useLocation().pathname;
  return (
    <div>
    <Pomodoro/>
      <div
        className="container py-4 "
        style={{ backgroundColor: "#fff", borderRadius: "20px" }}
      >
        <Nav
          className="d-flex justify-content-center align-items-center "
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {navData.map((elem, i) => (
            <Nav.Link
              style={{ all: "unset", cursor: "pointer" }}
              className="w-25 r"
              onClick={() =>
                navigate(
                  `/project/one/${projectId}/current-sprint/${elem.path}`
                )
              }
            >
              <div style={{ flex: "1", textAlign: "center" }}>
                <div className="">
                  <img src={elem.image} height="24" width="24" alt="" />
                  <p
                    className="titleNavProjectDetails"
                    style={{ fontWeight: 500 }}
                  >
                    {elem.nameEn}
                  </p>
                </div>
                <div
                  style={{
                    height: "3px",
                    backgroundColor:
                      path ===
                        `/project/one/${projectId}/current-sprint/${elem.path}` ||
                      path ===
                        `/project/one/${projectId}/current-sprint/${elem.path}/`
                        ? elem.colorTab
                        : "#C1D9D8",
                    width: "100%",
                  }}
                  className="mt-2"
                ></div>
              </div>
            </Nav.Link>
          ))}
        </Nav>
        <div className="tab-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CurrentSprint;
