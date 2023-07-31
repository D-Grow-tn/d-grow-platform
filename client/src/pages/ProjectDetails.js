import React, { useEffect, useState } from "react";

import "gantt-task-react/dist/index.css";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Modal, Nav } from "react-bootstrap";
import "../assets/css/projectDetails.css";
import { fetchProject } from "../store/projects";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import projectDetailData from "../constants/projectDetailData";

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const me = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const projectStore = useSelector((state) => state.projects);
  const { project } = projectStore;

  const [formattedCreatedAt, setFormattedCreatedAt] = useState("");
  const [formattedEndAt, setFormattedEndAt] = useState("");
  const [viewContractModal, setViewContractModal] = useState(false);
  const navData = projectDetailData;

  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    function formatDate(dateString) {
      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }
      const day = date.getDate();
      const month = date.getMonth() + 1; // Adding 1 because months are zero-based
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    }
    const createdAt = project?.createdAt;
    const endAt = project?.endAt;

    const formattedCreatedAt = formatDate(createdAt);
    const formattedEndAt = formatDate(endAt);

    setFormattedCreatedAt(formattedCreatedAt);
    setFormattedEndAt(formattedEndAt);
  }, [project]);




  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center ">
        <div class="card  m-5 ">
          <div class="card-header d-flex justify-content-center align-items-center ">
            Featured
          </div>
          <div class="card-body d-flex flex-column flex-md-row align-items-center d-flex justify-content-around gap-5">
            <div style={{ maxWidth: "400px", width: "100%" }}>
              <img
                // src={project.cover}
                src="https://www.pole-emploi.fr/files/live/sites/PE/files/actualites/vignetteideee62655.jpg"
                alt="Project Cover"
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
            </div>
            <div className=" ">
              <h3
                class="card-title "
                style={{
                  color: "#181f38",
                  fontSize: "36px",
                  lineHeight: "44px",
                  fontWeight: 400,
                  fontFamily: "Merriweather",
                }}
              >
                {project?.name}
              </h3>
              <p class="card-text" style={{ maxWidth: "400px" }}>
                {project?.description}
              </p>
              <p class="card-text">
                <span class="text-muted">Project Owner:</span> {me?.client.name}
              </p>
              <div className="d-flex align-items-center gap-3">
                <p class="card-text m-0 ">
                  <span class="text-muted">Contract:</span>{" "}
                </p>
                {project?.contract ? (
                  <button
                    type="button"
                    class="btn"
                    onClick={() => setViewContractModal(true)}
                    style={{ backgroundColor: "#1a408c", color: "#fff" }}
                  >
                    View contract
                  </button>
                ) : (
                  "no contract"
                )}
              </div>

              <p class="card-text mt-2">
                <span class="text-muted">Status: </span>
                {project?.status}
              </p>
            </div>
          </div>
          <div
            class="card-footer text-muted d-flex justify-content-center align-items-center "
            id="dateDiv"
          >
            {`Start: ${formattedCreatedAt} End: ${formattedEndAt}`}
          </div>
        </div>
      </div>
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
              onClick={() => navigate(`/project/${projectId}${elem.path}`)}
            >
              <div style={{ flex: "1", textAlign: "center" }}>
                <div className="">
                  <img src={elem.image} height="24" width="24"alt="" />
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
                      path === `/project/${projectId}${elem.path}` ||
                      path === `/project/${projectId}${elem.path}/`
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
      <Modal
        style={{ padding: 17 }}
        show={viewContractModal}
        onHide={() => setViewContractModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>{project?.contract?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <embed
            src={project?.contract?.path}
            type="application/pdf"
            frameBorder="0"
            scrolling="auto"
            height="100%"
            width="100%"
          ></embed>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setViewContractModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

     

    </div>
  );
}

export default ProjectDetails;
