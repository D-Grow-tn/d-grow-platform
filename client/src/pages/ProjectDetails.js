import React, { useEffect, useState } from "react";

import "gantt-task-react/dist/index.css";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../assets/css/projectDetails.css";
import { fetchProject } from "../store/projects";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projectStore = useSelector((state) => state.projects);
  const { project } = projectStore;
  const [selectedDiv, setSelectedDiv] = useState(() => {
    const storedDiv = localStorage.getItem('selectedDiv');
    return storedDiv ? Number(storedDiv) : 1;
  });
  const [formattedCreatedAt, setFormattedCreatedAt] = useState("");
  const [formattedEndAt, setFormattedEndAt] = useState("");

  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [dispatch]);

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
 
  }, []);
  const handleNavigation = (path, divIndex) => {
    const currentPath = `project/${projectId}`;
    
    if (path === currentPath) {
      setSelectedDiv(1);
    } else {
      setSelectedDiv(divIndex);
      localStorage.setItem('selectedDiv', divIndex);
      navigate(path);
    }
  };
  return (
    <div>
      <div className="container">
        <div class="card text-center mt-5 mb-5">
          <div class="card-header">Featured</div>
          <div class="card-body d-flex flex-column flex-md-row justify-content-around align-items-center ">
            <div style={{ maxWidth: "400px", width: "100%" }}>
              <img
                // src={project.cover}
                src="https://www.pole-emploi.fr/files/live/sites/PE/files/actualites/vignetteideee62655.jpg"
                alt="Project Cover"
                style={{ width: "100%", height: "auto", borderRadius: "50px" }}
              />
            </div>
            <div className="text-start">
              <h3
                class="card-title text-center"
                style={{
                  color: "#181f38",
                  fontSize: "36px",
                  lineHeight: "44px",
                  fontWeight: 700,
                }}
              >
                {project?.name}
              </h3>
              <p class="card-text" style={{ maxWidth: "400px" }}>
                {project?.description}
              </p>
              <p class="card-text">
                <span class="text-muted">Project Owner:</span>{" "}
                {/* {project.owner} */}
              </p>
              <p class="card-text">
                <span class="text-muted">Contract:</span>{" "}
                {/* {project.contract} */}
              </p>
              <p class="card-text">
                <span class="text-muted">Status:</span>
                {project?.status}
              </p>
              <a href="#" class="btn btn-primary mt-2 mb-2">
                Discover more !
              </a>
            </div>
          </div>
          <div class="card-footer text-muted" id="dateDiv">
            {`Start: ${formattedCreatedAt} End: ${formattedEndAt}`}
          </div>
        </div>
      </div>
      <div
        className="container py-4 "
        style={{ backgroundColor: "#fff", borderRadius: "20px" }}
      >
        <Nav
          className="d-flex justify-content-center  align-items-center "
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          <Nav.Link style={{ all: "unset" }}>
            <div style={{ flex: "1", textAlign: "center" }}>
              <div
                onClick={() => 
                  handleNavigation(`${project.id}`, 1)
                 
                }
                style={{ marginRight: "60px", marginLeft: "60px" }}
                className=""
              >
                <img
                  src="https://tourduvalat.org/wp-content/uploads/2017/11/bullseye2-512.png"
                  height="24"
                  width="24"
                />
                <div>Objectifs</div>
              </div>
              <div
                style={{
                  height: "3px",
                  backgroundColor: selectedDiv === 1 ? "blue" : "#C1D9D8",
                  width: "100%",
                }}
                className="mt-2"
              ></div>
            </div>
          </Nav.Link>

          <Nav.Link eventKey="tab2" style={{ all: "unset" }}>
            <div style={{ flex: "1", textAlign: "center" }}>
              <div
                style={{ marginRight: "60px", marginLeft: "60px" }}
                onClick={() => handleNavigation("gantt", 2)}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5639/5639804.png"
                  height="24"
                  width="24"
                />
                <div>Diagram de gantt</div>
              </div>
              <div
                style={{
                  height: "3px",
                  backgroundColor: selectedDiv === 2 ? "green" : "#C1D9D8",
                }}
                className="mt-2"
              ></div>
            </div>
          </Nav.Link>

          <Nav.Link eventKey="tab3" style={{ all: "unset" }}>
            <div style={{ flex: "1", textAlign: "center" }}>
              <div
               onClick={() => handleNavigation("team-section", 3)}
                style={{ marginRight: "60px", marginLeft: "60px" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4059/4059783.png"
                  height="24"
                  width="24"
                />
                <div>Agent in charge</div>
              </div>
              <div
                style={{
                  height: "3px",
                  backgroundColor: selectedDiv === 3 ? "blue" : "#C1D9D8",
                }}
                className="mt-2"
              ></div>
            </div>
          </Nav.Link>

          <Nav.Link eventKey="tab4" style={{ all: "unset" }}>
            <div style={{ flex: "1", textAlign: "center" }}>
              <div
                onClick={() => handleNavigation("interaction", 4)}
                style={{ marginRight: "60px", marginLeft: "60px" }}
              >
                <img
                  src="https://www.iconarchive.com/download/i86695/johanchalibert/mac-osx-yosemite/messages.1024.png"
                  height="24"
                  width="24"
                />
                <div>Interaction</div>
              </div>
              <div
                style={{
                  height: "3px",
                  backgroundColor: selectedDiv === 4 ? "purple" : "#C1D9D8",
                }}
                className="mt-2"
              ></div>
            </div>
          </Nav.Link>
        </Nav>
        <div className="tab-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
