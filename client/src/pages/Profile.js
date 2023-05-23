import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import DisplayLottie from "./../constants/DisplayLottie";
import loading from "../constants/loading.json";
import tick from "../constants/tick.json";
import onHold from "../constants/onHold.json";
import { Fade } from "react-reveal";
import { Nav } from "react-bootstrap";
import projects from './../constants/ProjectsData';
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [user, setUser] = useState(projects);
  const navigate=useNavigate()

  return (
    <div className="container mt-5 ">
      <Fade bottom duration={3000} distance="40px">
        {/* Information section */}
        <div
          className="d-flex justify-content-center align-items-center py-2.5"
          style={{ marginTop: "5rem" }}
        >
          <div
            className="card rounded-5"
            style={{ width: "60rem", position: "relative" }}
          >
            <div className="d-flex">
              <div
                style={{ width: "100%", height: "40px", borderRadius: "2px" , backgroundColor: "#070f4e" }}
              ></div>
             
            </div>
         

            <div className="card-body d-flex flex-column align-items-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle "
                style={{
                  width: "150px",
                  position: "absolute",
                  top: "-20%",
                }}
                alt="Avatar"
              />
              <div className="d-flex">
                <button
                  type="button"
                  class="btn mt-5"
                  style={{
                    width: "170px",
                    height: "40px",
                    background: "#2772db",
                    color: "white",
                  }}
                >
                  add project <i class="fa-solid fa-play fa-fade px-2"></i>
                </button>
                <div className="mt-5 d-flex flex-column justify-content-center align-items-center ">
                  <h5 className="card-title  ">Alex Brown</h5>
                  <h6 className="card-subtitle mb-2 text-muted my-2">
                    Project Manager
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <i class="fa-solid fa-location-dot mx-2 my-2"></i> Avenue
                    Mohamed Melki 1005 El Omrane
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {" "}
                    <i class="fa-solid fa-phone mx-2 my-2"></i>51343854
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="d-flex mt-5">
                  <button
                    type="button"
                    class="btn btn-light"
                    style={{ width: "170px", height: "40px" }}
                  >
                    3 Projects <i class="fa-solid fa-crown px-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      {/* Information section */}

      {/* Projects section */}
      <div className="py-5 d-flex flex-column justify-content-center align-items-center">
        <h3 >Projects</h3>
        <p>
          "Rely on our expertise,and watch as your dreams turn into reality"
        </p>
      </div>

      <Card className="text-center " style={{paddingBottom:"20px"}}>
        <Card.Header style={{ height: "57px" }}>
          <Nav variant="tabs" activeKey={activeTab} onSelect={handleTabChange}>
            <Nav.Item>
              <Nav.Link eventKey="tab1" className="d-flex ">
                <div className="d-flex ">All Project</div>
                <DisplayLottie
                  animationData={onHold}
                  style={{ width: "35px", height: "35px", marginTop: "-6px" }}
                />
                <DisplayLottie
                  animationData={tick}
                  style={{ width: "35px", height: "35px", marginTop: "-6px" }}
                />
                <DisplayLottie
                  animationData={loading}
                  style={{ width: "35px", height: "35px", marginTop: "-3px" }}
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab2" className="d-flex gap-1 ">
                <div> In Progress</div>
                <DisplayLottie
                  animationData={loading}
                  style={{ width: "35px", height: "35px", marginTop: "-3px" }}
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="tab3"
                className="d-flex gap-1 "
                style={{ height: "49px" }}
              >
                <div>Completed</div>

                <DisplayLottie
                  animationData={tick}
                  style={{ width: "35px", height: "35px", marginTop: "-6px" }}
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="tab4"
                className="d-flex gap-1 "
                style={{ height: "49px" }}
              >
                <di>On Hold</di>
                <DisplayLottie
                  animationData={onHold}
                  style={{ width: "35px", height: "35px", marginTop: "-6px" }}
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <div className="tab-content">
            <div
              className={`tab-pane fade ${
                activeTab === "tab1" ? "show active" : ""
              } mt-5`}
              id="tab1"
            >
              <div className="d-flex flex-wrap gap-5 justify-content-center" >
                {user.map((project, i) => (
                  <div className="   mt-3 " key={i} onClick={() => navigate(`/profile/${i}-details`)}    style={{ cursor: "pointer" }}>
                    <Card
                      style={{ width: "19rem", height: "500px" }}
                      className="shadow proCard"
                    >
                      <Card.Img
                        variant="top"
                        src={project.cover}
                        style={{
                          height: "200px",
                          width: "432px",
                          objectFit: "cover",
                        }}
                      />
                      <Card.Body>
                        <div className="d-flex justify-content-center align-items-center gap-3">
                          <Card.Title className="cardTitle">
                            {project.name}{" "}
                          </Card.Title>{" "}
                          <Card.Title>
                            {project.status === "Ongoing" ? (
                              <DisplayLottie
                                animationData={loading}
                                style={{ width: "35px", height: "35px" }}
                              />
                            ) : project.status === "Completed" ? (
                              <DisplayLottie
                                animationData={tick}
                                style={{ width: "35px", height: "35px" }}
                              />
                            ) : project.status === "onHold" ? (
                              <DisplayLottie
                                animationData={onHold}
                                style={{ width: "35px", height: "35px" }}
                              />
                            ) : (
                              project.status
                            )}
                          </Card.Title>
                        </div>
                        <Card.Text className=" d-flex text-start px-1 position-relative">
                          <span
                            className=" overflow-hidden"
                            style={{
                              maxHeight: "50px",
                            }}
                          >
                            {project.description}
                          </span>

                          <span className="position-absolute bottom-0 end-0  me-3">
                            ...
                          </span>
                        </Card.Text>

                        <Card.Text className=" d-flex gap-3 mx-1">
                          <i
                            className="fa-solid fa-calendar"
                            style={{ marginTop: "4px" }}
                          ></i>
                          <span> {project.timeline}</span>
                        </Card.Text>
                        <Card.Text className=" d-flex gap-3 mx--5 my-4">
                          <div className=" d-flex gap-3 mx-1">
                            <i
                              className="fa-solid fa-people-group"
                              style={{ marginTop: "4px" }}
                            ></i>
                            <span className="d-flex flex-column align-items-start">
                              {project.team.map((member, memberIndex) => (
                                <p key={memberIndex}>{member.name}</p>
                              ))}
                            </span>

                            <i
                              class="fa-solid fa-vest-patches"
                              style={{ marginTop: "4px" }}
                            ></i>
                            <span className="d-flex flex-column align-items-start ">
                              {" "}
                              {project.team.map((member, memberIndex) => (
                                <p key={memberIndex}>{member.role}</p>
                              ))}
                            </span>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "tab2" ? "show active" : ""
              }`}
              id="tab2"
            >
              <div className="d-flex flex-wrap gap-5 justify-content-center">
                {user
                  .filter((project) => project.status === "Ongoing")
                  .map((project, i) => (
                    <div className="   mt-3 " key={i}>
                      <Card
                        style={{ width: "21rem", height: "500px" }}
                        className="shadow proCard"
                      >
                        <Card.Img
                          variant="top"
                          src={project.cover}
                          style={{
                            height: "200px",
                            width: "432px",
                            objectFit: "cover",
                          }}
                        />
                        <Card.Body>
                          <div className="d-flex justify-content-center align-items-center gap-3">
                            <Card.Title className="cardTitle">
                              {" "}
                              {project.name}{" "}
                            </Card.Title>{" "}
                            <Card.Title>
                              {project.status === "Ongoing" ? (
                                <DisplayLottie
                                  animationData={loading}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "Completed" ? (
                                <DisplayLottie
                                  animationData={tick}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "onHold" ? (
                                <DisplayLottie
                                  animationData={onHold}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : (
                                project.status
                              )}
                            </Card.Title>
                          </div>
                          <Card.Text className=" d-flex text-start px-1 position-relative">
                            <span
                              className=" overflow-hidden"
                              style={{
                                maxHeight: "50px",
                              }}
                            >
                              {project.description}
                            </span>

                            <span className="position-absolute bottom-0 end-0  me-3">
                              ...
                            </span>
                          </Card.Text>

                          <Card.Text className=" d-flex gap-3 mx-1">
                            <i
                              className="fa-solid fa-calendar"
                              style={{ marginTop: "4px" }}
                            ></i>
                            <span> {project.timeline}</span>
                          </Card.Text>
                          <Card.Text className=" d-flex gap-3 mx--5 my-4">
                            <div className=" d-flex gap-3 mx-1">
                              <i
                                className="fa-solid fa-people-group"
                                style={{ marginTop: "4px" }}
                              ></i>
                              <span className="d-flex flex-column align-items-start">
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.name}</p>
                                ))}
                              </span>

                              <i
                                class="fa-solid fa-vest-patches"
                                style={{ marginTop: "4px" }}
                              ></i>
                              <span className="d-flex flex-column align-items-start ">
                                {" "}
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.role}</p>
                                ))}
                              </span>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "tab3" ? "show active" : ""
              }`}
              id="tab3"
            >
              <div className="d-flex flex-wrap gap-5 justify-content-center">
                {user
                  .filter((project) => project.status === "Completed")
                  .map((project, i) => (
                    <div className="   mt-3 " key={i}>
                      <Card
                        style={{ width: "21rem", height: "500px" }}
                        className="shadow proCard"
                      >
                        <Card.Img
                          variant="top"
                          src={project.cover}
                          style={{
                            height: "200px",
                            width: "432px",
                            objectFit: "cover",
                          }}
                        />
                        <Card.Body>
                          <div className="d-flex justify-content-center align-items-center gap-3">
                            <Card.Title className="cardTitle">
                              {" "}
                              {project.name}{" "}
                            </Card.Title>{" "}
                            <Card.Title>
                              {project.status === "Ongoing" ? (
                                <DisplayLottie
                                  animationData={loading}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "Completed" ? (
                                <DisplayLottie
                                  animationData={tick}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "onHold" ? (
                                <DisplayLottie
                                  animationData={onHold}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : (
                                project.status
                              )}
                            </Card.Title>
                          </div>
                          <Card.Text className=" d-flex text-start px-1 position-relative">
                            <span
                              className=" overflow-hidden"
                              style={{
                                maxHeight: "50px",
                              }}
                            >
                              {project.description}
                            </span>

                            <span className="position-absolute bottom-0 end-0  me-3">
                              ...
                            </span>
                          </Card.Text>

                          <Card.Text className=" d-flex gap-3 mx-1">
                            <i
                              className="fa-solid fa-calendar"
                              style={{ marginTop: "4px" }}
                            ></i>
                            <span> {project.timeline}</span>
                          </Card.Text>
                          <Card.Text className=" d-flex gap-3 mx--5 my-4">
                            <div className=" d-flex gap-3 mx-1">
                              <i
                                className="fa-solid fa-people-group"
                                style={{ marginTop: "4px" }}
                              ></i>
                              <span className="d-flex flex-column align-items-start">
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.name}</p>
                                ))}
                              </span>

                              <i
                                class="fa-solid fa-vest-patches"
                                style={{ marginTop: "4px" }}
                              ></i>
                              <span className="d-flex flex-column align-items-start ">
                                {" "}
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.role}</p>
                                ))}
                              </span>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "tab4" ? "show active" : ""
              }`}
              id="tab4"
            >
              <div className="d-flex flex-wrap gap-5 justify-content-center">
                {user
                  .filter((project) => project.status === "onHold")
                  .map((project, i) => (
                    <div className="   mt-3 " key={i}>
                      <Card
                        style={{ width: "21rem", height: "500px" }}
                        className="shadow proCard"
                      >
                        <Card.Img
                          variant="top"
                          src={project.cover}
                          style={{
                            height: "200px",
                            width: "432px",
                            objectFit: "cover",
                          }}
                        />
                        <Card.Body>
                          <div className="d-flex justify-content-center align-items-center gap-3">
                            <Card.Title className="cardTitle">
                              {" "}
                              {project.name}{" "}
                            </Card.Title>{" "}
                            <Card.Title>
                              {project.status === "Ongoing" ? (
                                <DisplayLottie
                                  animationData={loading}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "Completed" ? (
                                <DisplayLottie
                                  animationData={tick}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "onHold" ? (
                                <DisplayLottie
                                  animationData={onHold}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : (
                                project.status
                              )}
                            </Card.Title>
                          </div>
                          <Card.Text className=" d-flex text-start px-1 position-relative">
                            <span
                              className=" overflow-hidden"
                              style={{
                                maxHeight: "50px",
                              }}
                            >
                              {project.description}
                            </span>

                            <span className="position-absolute bottom-0 end-0  me-3">
                              ...
                            </span>
                          </Card.Text>

                          <Card.Text className=" d-flex gap-3 mx-1">
                            <i
                              className="fa-solid fa-calendar"
                              style={{ marginTop: "4px" }}
                            ></i>
                            <span> {project.timeline}</span>
                          </Card.Text>
                          <Card.Text className=" d-flex gap-3 mx--5 my-4">
                            <div className=" d-flex gap-3 mx-1">
                              <i
                                className="fa-solid fa-people-group"
                                style={{ marginTop: "4px" }}
                              ></i>
                              <span className="d-flex flex-column align-items-start">
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.name}</p>
                                ))}
                              </span>

                              <i
                                class="fa-solid fa-vest-patches"
                                style={{ marginTop: "4px" }}
                              ></i>
                              <span className="d-flex flex-column align-items-start ">
                                {" "}
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.role}</p>
                                ))}
                              </span>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Projects section */}
    </div>
  );
};

export default UserProfile;
