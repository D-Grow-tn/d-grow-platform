import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import DisplayLottie from "./../constants/DisplayLottie";
import loading from "../constants/loading.json";
import tick from "../constants/tick.json";
import onHold from "../constants/onHold.json";
import { Fade } from "react-reveal";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectbyClient } from "../store/projects";

import CastomModal from "../components/CastomModal";
import "../assets/css/Profile.css";
import { UpdateClient, fetchClient } from "../store/client";
const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const me = useSelector((state) => state.auth.me);
  const client = useSelector((state) => state.client.client);

  const projectStore = useSelector((state) => state.projects);
  const { projects } = projectStore;
  const [activeTab, setActiveTab] = useState("tab1");
  const [name, setName] = useState("");

  const [address, setAdress] = useState("");

  const [phone, setPhone] = useState("");

  const clientId = me.client.id;

  const form = { clientId, name, address, phone };
  useEffect(() => {
    if (me) {
      dispatch(fetchProjectbyClient(me.client.id));
      dispatch(fetchClient(clientId));
     
    }
   
  }, [dispatch, me]);
  useEffect(() => {
    if (client) {
      setName(client?.name)
    setAdress(client?.address)
    setPhone(client?.phone)
    }
  }, [client]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const countProjects = () => {
    if (projects.items.length <= 1) {
      return "project";
    }
    return "projects";
  };

  const handleUpdate = async () => {
    try {
      dispatch(UpdateClient(form));
    } catch (error) {
      console.log(error);
    }
  };

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
            <div className="d-flex bg-darkbleu">
              <div
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "2px",
                }}
              ></div>
            </div>
            <div className="card-body d-flex flex-column align-items-center ">
              <img
                src={me?.client?.avatar?.path}
                class="rounded-circle "
                style={{
                  width: "150px",
                  position: "absolute",
                  top: "-15%",
                }}
                alt="Avatar"
              />
              <div>
                <div>
                  <button
                    className="primaryBtn"
                    onClick={() => setIsOpen(true)}
                  >
                    Update Profile
                  </button>
                  {isOpen && (
                    <CastomModal
                      setIsOpen={setIsOpen}
                      buttonName="Confirm"
                      title="Update Your Profile "
                      nameValue={name}
                      addressValue={address}
                      phoneValue={phone}
                      setName={setName}
                      setAdress={setAdress}
                      setPhone={setPhone}
                      handleUpdate={handleUpdate}
                    />
                  )}
                </div>
                {/* </CastomModal> */}
                <div className="mt-5 d-flex flex-column justify-content-center align-items-center ">
                  <h5 className="card-title  ">{client?.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted my-2">
                    Project Manager
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <i class="fa-solid fa-location-dot mx-2 my-2"></i>
                    {client?.address}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {" "}
                    <i class="fa-solid fa-phone mx-2 my-2"></i>
                    {client?.phone}
                  </h6>
                  <p className="d- flex justify-content-center align-items-center">
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
                    {projects.items.length} {countProjects()}
                    <i class="fa-solid fa-crown px-2"></i>
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
        <h3>Projects</h3>
        <p>
          "Rely on our expertise,and watch as your dreams turn into reality"
        </p>
      </div>

      <Card className="text-center " style={{ paddingBottom: "20px" }}>
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
              <div className="d-flex flex-wrap gap-5 justify-content-center">
                {projects.items.map((project, i) => (
                  <div
                    className="   mt-3 "
                    key={i}
                    onClick={() => navigate(`/project/${project.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <Card
                      style={{ width: "19rem", height: "500px" }}
                      className="shadow proCard"
                    >
                      <Card.Img
                        variant="top"
                        src={project.cover?.path}
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
                            {project.status === "in_progress" ? (
                              <DisplayLottie
                                animationData={loading}
                                style={{ width: "35px", height: "35px" }}
                              />
                            ) : project.status === "completed" ? (
                              <DisplayLottie
                                animationData={tick}
                                style={{ width: "35px", height: "35px" }}
                              />
                            ) : project.status === "pending" ? (
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
                            {" "}
                            description {project.description}
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
                          <span> duration {project.duration} </span>
                        </Card.Text>
                        <Card.Text className=" d-flex gap-3 mx--5 my-4">
                          <div className=" d-flex gap-3 mx-1">
                            <i
                              className="fa-solid fa-people-group"
                              style={{ marginTop: "4px" }}
                            ></i>
                            {/* <span className="d-flex flex-column align-items-start">
                              {project.team.map((member, memberIndex) => (
                                <p key={memberIndex}>{member.name}</p>
                              ))}
                            </span> */}
                            team member
                            <i
                              class="fa-solid fa-vest-patches"
                              style={{ marginTop: "4px" }}
                            ></i>
                            {/* <span className="d-flex flex-column align-items-start ">
                               {" "}
                               {project.team.map((member, memberIndex) => (
                                <p key={memberIndex}>{member.role}</p>
                              ))}
                            </span> */}
                            role
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
                {projects.items
                  .filter((project) => project.status === "in_progress")
                  .map((project, i) => (
                    <div className="   mt-3 " key={i}>
                      <Card
                        style={{ width: "21rem", height: "500px" }}
                        className="shadow proCard"
                      >
                        <Card.Img
                          variant="top"
                          src={project.cover?.path}
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
                              {project.status === "in_progress" ? (
                                <DisplayLottie
                                  animationData={loading}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "completed" ? (
                                <DisplayLottie
                                  animationData={tick}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "pending" ? (
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
                              description {project.description}
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
                            <span> duration {project.duration}</span>
                          </Card.Text>
                          <Card.Text className=" d-flex gap-3 mx--5 my-4">
                            <div className=" d-flex gap-3 mx-1">
                              <i
                                className="fa-solid fa-people-group"
                                style={{ marginTop: "4px" }}
                              ></i>
                              {/* <span className="d-flex flex-column align-items-start">
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.name}</p>
                                ))}
                              </span> */}
                              Team member
                              <i
                                class="fa-solid fa-vest-patches"
                                style={{ marginTop: "4px" }}
                              ></i>
                              {/* <span className="d-flex flex-column align-items-start ">
                                {" "}
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.role}</p>
                                ))}
                              </span> */}
                              Role
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
                {projects.items
                  .filter((project) => project.status === "completed")
                  .map((project, i) => (
                    <div className="   mt-3 " key={i}>
                      <Card
                        style={{ width: "21rem", height: "500px" }}
                        className="shadow proCard"
                      >
                        <Card.Img
                          variant="top"
                          src={project.cover?.path}
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
                              {project.status === "in_progress" ? (
                                <DisplayLottie
                                  animationData={loading}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "completed" ? (
                                <DisplayLottie
                                  animationData={tick}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "in_progress" ? (
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
                              description {project.description}
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
                            <span> duration {project.duration}</span>
                          </Card.Text>
                          <Card.Text className=" d-flex gap-3 mx--5 my-4">
                            <div className=" d-flex gap-3 mx-1">
                              <i
                                className="fa-solid fa-people-group"
                                style={{ marginTop: "4px" }}
                              ></i>
                              {/* <span className="d-flex flex-column align-items-start">
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.name}</p>
                                ))}
                              </span> */}
                              Team member
                              <i
                                class="fa-solid fa-vest-patches"
                                style={{ marginTop: "4px" }}
                              ></i>
                              {/* <span className="d-flex flex-column align-items-start ">
                                {" "}
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.role}</p>
                                ))}
                              </span> */}
                              Role
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
                {projects.items
                  .filter((project) => project.status === "pending")
                  .map((project, i) => (
                    <div className="   mt-3 " key={i}>
                      <Card
                        style={{ width: "21rem", height: "500px" }}
                        className="shadow proCard"
                      >
                        <Card.Img
                          variant="top"
                          src={project.cover?.path}
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
                              {project.status === "in_progress" ? (
                                <DisplayLottie
                                  animationData={loading}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "completed" ? (
                                <DisplayLottie
                                  animationData={tick}
                                  style={{ width: "35px", height: "35px" }}
                                />
                              ) : project.status === "pending" ? (
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
                              description {project.description}
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
                            <span>duration {project.duration}</span>
                          </Card.Text>
                          <Card.Text className=" d-flex gap-3 mx--5 my-4">
                            <div className=" d-flex gap-3 mx-1">
                              <i
                                className="fa-solid fa-people-group"
                                style={{ marginTop: "4px" }}
                              ></i>
                              {/* <span className="d-flex flex-column align-items-start">
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.name}</p>
                                ))}
                              </span> */}
                              Team member
                              <i
                                class="fa-solid fa-vest-patches"
                                style={{ marginTop: "4px" }}
                              ></i>
                              {/* <span className="d-flex flex-column align-items-start ">
                                {" "}
                                {project.team.map((member, memberIndex) => (
                                  <p key={memberIndex}>{member.role}</p>
                                ))}
                              </span> */}
                              Role
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
