import React, { useEffect, useState } from "react";

import "gantt-task-react/dist/index.css";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../assets/css/projectDetails.css";
import { fetchProject } from "../store/projects";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const navData = [
  {
    nameEn: "Objectives",
    nameAr: "",
    nameFr: "",
    path: "",
    image:
      "https://tourduvalat.org/wp-content/uploads/2017/11/bullseye2-512.png",
    colorTab: "blue",
  },
  {
    nameEn: "Gantt Diagram",
    nameAr: "",
    nameFr: "Diagramme de Gantt",
    path: "/gantt",
    image: "https://cdn-icons-png.flaticon.com/512/5639/5639804.png",
    colorTab: "green",
  },
  {
    nameEn: "Agent In Charge",
    nameAr: "",
    nameFr: "Agents responsables",
    path: "/team-section",
    image: "https://cdn-icons-png.flaticon.com/128/4059/4059783.png",
    colorTab: "blue",
  },
  {
    nameEn: "Intercations",
    nameAr: "",
    nameFr: "Interactions",
    path: "/interaction",
    image:
      "https://www.iconarchive.com/download/i86695/johanchalibert/mac-osx-yosemite/messages.1024.png",
    colorTab: "purple",
  },
];

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
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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

  // console.log("file", project?.contarct.path)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center   ">
        <div class="card  w-75 text-center mt-5 mb-5 ">
          <div class="card-header">Featured</div>
          <div class="card-body d-flex flex-column flex-md-row align-items-center d-flex justify-content-around">
            <div style={{ maxWidth: "400px", width: "100%" }}>
              <img
                // src={project.cover}
                src="https://www.pole-emploi.fr/files/live/sites/PE/files/actualites/vignetteideee62655.jpg"
                alt="Project Cover"
                style={{ width: "100%", height: "auto", borderRadius: "50px" }}
              />
            </div>
            <div className=" d-flex flex-column  align-items-center">
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
                <span class="text-muted">Project Owner: {me.client.name}</span>{" "}
                {/* {project.owner} */}
              </p>
              <p class="card-text">
                <span class="text-muted">Contract:</span>{" "}
                {/* {project.contract} */}
                <div>
                  {/* <Document
                    file={project?.contarct.path}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <Page pageNumber={pageNumber} />
                  </Document> */}
                  <p>
                    Page {pageNumber} of {numPages}
                  </p>
                </div>
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
                  <img src={elem.image} height="24" width="24" />
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
    </div>
  );
}

export default ProjectDetails;
