import React, { useState } from "react";
import {
  Gantt,
  Task,
  EventOption,
  StylingOption,
  ViewMode,
  DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import projectData from "../constants/ProjectsData";
import { Nav } from "react-bootstrap";
import "../assets/css/projectDetails.css";
import DisplayLottie from "../constants/DisplayLottie";
import loading from "../constants/loading.json";
import tick from "../constants/tick.json";
import onHold from "../constants/onHold.json";

function ProjectDetails() {
  const { projectId } = useParams();
  const [selectedProject, setSelectedProject] = useState(
    projectData[projectId]
  );

  const [selectedDiv, setSelectedDiv] = useState(1);

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleClick = (divIndex) => {
    setSelectedDiv(divIndex);
  };

  const tasks = [
    {
      start: new Date(2023, 0, 1),
      end: new Date(2023, 0, 7),
      name: "Task 1",
      id: "Task 1",
      type: "task",
      progress: 50,
      isDisabled: false,
      styles: { progressColor: "#6dd0c5", progressSelectedColor: "#3ba395" },
    },
    {
      start: new Date(2023, 0, 2),
      end: new Date(2023, 0, 6),
      name: "Task 2",
      id: "Task 2",
      type: "task",
      progress: 70,
      isDisabled: false,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2023, 0, 7),
      end: new Date(2023, 0, 10),
      name: "Task 3",
      id: "Task 3",
      type: "task",
      progress: 30,
      isDisabled: true,
      styles: { progressColor: "#8e67fd", progressSelectedColor: "#6736c6" },
    },
    {
      start: new Date(2023, 0, 3),
      end: new Date(2023, 0, 7),
      name: "Task 4",
      id: "Task 4",
      type: "task",
      progress: 90,
      isDisabled: false,
      styles: { progressColor: "#ff649c", progressSelectedColor: "#ff2663" },
    },
    {
      start: new Date(2023, 0, 1),
      end: new Date(2023, 1, 6),
      name: "Task 5",
      id: "Task 5",
      type: "task",
      progress: 20,
      isDisabled: false,
      styles: { progressColor: "#6dd0c5", progressSelectedColor: "#3ba395" },
    },
    {
      start: new Date(2023, 0, 1),
      end: new Date(2023, 0, 4),
      name: "Task 6",
      id: "Task 6",
      type: "task",
      progress: 60,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2023, 0, 2),
      end: new Date(2023, 0, 7),
      name: "Task 7",
      id: "Task 7",
      type: "task",
      progress: 40,
      isDisabled: false,
      styles: { progressColor: "#8e67fd", progressSelectedColor: "#6736c6" },
    },
    {
      start: new Date(2023, 0, 1),
      end: new Date(2023, 0, 4),
      name: "Task 8",
      id: "Task 8",
      type: "task",
      progress: 80,
      isDisabled: false,
      styles: { progressColor: "#ff649c", progressSelectedColor: "#ff2663" },
    },
  ];

  return (
    <div>
      {/* info section  */}

      <div className="container">
        <div class="card text-center mt-5 mb-5">
          <div class="card-header">Featured</div>
          <div class="card-body d-flex flex-column flex-md-row justify-content-around align-items-center ">
            <div style={{ maxWidth: "400px", width: "100%" }}>
              <img
                src={selectedProject.cover}
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
                {selectedProject.name}
              </h3>
              <p class="card-text" style={{ maxWidth: "400px" }}>
                {selectedProject.description}
              </p>
              <p class="card-text">
                <span class="text-muted">Project Owner:</span>{" "}
                {selectedProject.owner}
              </p>
              <p class="card-text">
                <span class="text-muted">Contract:</span>{" "}
                {selectedProject.contract}
              </p>
              <p class="card-text">
                <span class="text-muted">Status:</span> {selectedProject.status}
              </p>
              <a href="#" class="btn btn-primary mt-2 mb-2">
                Discover more !
              </a>
            </div>
          </div>
          <div class="card-footer text-muted">{selectedProject.timeline}</div>
        </div>
      </div>

      {/* enddddddddddd */}

      {/* nav links */}
      <div
        className="container py-4 "
        style={{ backgroundColor: "#fff", borderRadius: "20px" }}
      >
        <Nav
          className="d-flex justify-content-center  align-items-center "
          style={{ maxWidth: "1000px", margin: "0 auto" }}
          activeKey={activeTab}
          onSelect={handleTabChange}
        >
          <Nav.Link eventKey="tab1" style={{ all: "unset" }}>
            <div style={{ flex: "1", textAlign: "center" }}>
              <div
                onClick={() => handleClick(1)}
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
                onClick={() => handleClick(2)}
                style={{ marginRight: "60px", marginLeft: "60px" }}
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
                onClick={() => handleClick(3)}
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
                onClick={() => handleClick(4)}
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

        {/* enddddddddddddddd */}
        {/* nav body  */}
        <div className="tab-content">
          <div
            className={`tab-pane ${
              activeTab === "tab1" ? "show active" : ""
            } mt-5 justify-content-center align-items-center gap-5 px-5 `}
            id="tab1"
          >
            <MDBContainer style={{ maxWidth: "1000px" }}>
              <MDBAccordion alwaysOpen>
                {selectedProject.objectives.map((objective, index) => (
                  <MDBAccordionItem
                    key={index}
                    collapseId={`collapse${index}`}
                    headerTitle={
                      <div className="d-flex align-items-center gap-3">
                        <div> {objective.name} </div>
                        <div>
                          {objective.status === "In progress" ? (
                            <DisplayLottie
                              animationData={loading}
                              style={{ width: "35px", height: "35px" }}
                            />
                          ) : objective.status === "Completed" ? (
                            <DisplayLottie
                              animationData={tick}
                              style={{ width: "35px", height: "35px" }}
                            />
                          ) : objective.status === "Pending" ? (
                            <DisplayLottie
                              animationData={onHold}
                              style={{ width: "35px", height: "35px" }}
                            />
                          ) : null}
                        </div>
                      </div>
                    }
                  >
                    <ul>
                      {objective.subobjects.map((subObjective, subIndex) => (
                        <li
                          key={subIndex}
                          className="d-flex align-items-center gap-3"
                        >
                          <div>{subObjective.name}</div>
                          <div>
                            {subObjective.status === "In progress" ? (
                              <DisplayLottie
                                animationData={loading}
                                style={{ width: "35px", height: "35px" }}
                              />
                            ) : subObjective.status === "Completed" ? (
                              <DisplayLottie
                                animationData={tick}
                                style={{ width: "35px", height: "35px" }}
                              />
                            ) : subObjective.status === "Pending" ? (
                              <DisplayLottie
                                animationData={onHold}
                                style={{ width: "35px", height: "35px" }}
                                className="mt-5"
                              />
                            ) : (
                              subObjective.status
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </MDBAccordionItem>
                ))}
              </MDBAccordion>
            </MDBContainer>
          </div>

          {/* enddddddddddddddddd */}
          <div
            className={`tab-pane  ${
              activeTab === "tab2" ? "show active" : ""
            } mt-5 justify-content-center align-items-center px-3`}
            id="tab2"
            style={{ maxWidth: "1200px" }}
          >
            <Gantt tasks={tasks} />
          </div>
          <div
            className={`tab-pane  ${
              activeTab === "tab3" ? "show active" : ""
            } mt-5`}
            id="tab3"
          >
            {/* team section */}
            <div className="team-area">
              <h1
                className="text-center"
                style={{
                  color: "#181f38",
                  fontSize: "36px",
                  lineHeight: "44px",
                  fontWeight: 700,
                }}
              >
                Our committed professionals
              </h1>

              <div className="team-box d-flex justify-content-center align-items-center">
                <div className="box">
                  <img
                    src="https://images.prismic.io/utopix-next-website/Y2E4OTI3NzQtNmUyOC00YmU2LWE5ZjctODcxY2RlMzg2ZDIy_26dfc43e-31dd-463f-ad04-56f39a430691_profilhomme1.jpg?ixlib=js-3.7.1&w=3840&auto=format&fit=max"
                    alt=""
                  />
                  <h2>Rania Elouni</h2>
                  <span>Consultant</span>
                </div>
                <div className="box">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0CIy3mIbpe2nuLRfK5xxPcwxmTvXjJsBNw&usqp=CAU"
                    alt=""
                  />
                  <h2>Khalil Kraim</h2>
                  <span>Project Manager</span>
                </div>
              </div>
            </div>
            {/* endd team */}
          </div>
          <div
            className={`tab-pane  ${
              activeTab === "tab4" ? "show active" : ""
            } mt-5 justify-content-center align-items-center px-5`}
            id="tab4"
          >
            <section style={{ backgroundColor: "#eee", borderRadius: "10px" }}>
              <div class="container  d-flex justify-content-center align-items-center">
                <div class="col-md-6 col-lg-7 col-xl-8  ">
                  <ul class="list-unstyled ">
                    <li class="d-flex justify-content-between mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        alt="avatar"
                        class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        width="60"
                      />
                      <div class="card ">
                        <div class="card-header d-flex justify-content-between p-3">
                          <p class="fw-bold mb-0">Brad Pitt</p>
                          <p class="text-muted small mb-0">
                            <i class="far fa-clock"></i> 12 mins ago
                          </p>
                        </div>
                        <div class="card-body">
                          <p class="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="d-flex justify-content-between mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                        alt="avatar"
                        class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        width="60"
                      />
                      <div class="card">
                        <div class="card-header d-flex justify-content-between p-3">
                          <p class="fw-bold mb-0">Lara Croft</p>
                          <p class="text-muted small mb-0">
                            <i class="far fa-clock"></i> 13 mins ago
                          </p>
                        </div>
                        <div class="card-body">
                          <p class="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="d-flex justify-content-between mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        alt="avatar"
                        class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        width="60"
                      />
                      <div class="card">
                        <div class="card-header d-flex justify-content-between p-3">
                          <p class="fw-bold mb-0">Brad Pitt</p>
                          <p class="text-muted small mb-0">
                            <i class="far fa-clock"></i> 10 mins ago
                          </p>
                        </div>
                        <div class="card-body">
                          <p class="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="bg-white mb-3">
                      <div class="form-outline">
                        <textarea
                          class="form-control"
                          id="textAreaExample2"
                          rows="4"
                        ></textarea>
                        <label class="form-label" for="textAreaExample2">
                          Message
                        </label>
                      </div>
                    </li>
                    <button
                      type="button"
                      class="btn btn-info btn-rounded float-end"
                    >
                      Send
                    </button>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* end */}

        <div></div>
      </div>
    </div>
  );
}

export default ProjectDetails;
