import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import DisplayLottie from "./../constants/DisplayLottie";
import loading from "../constants/loading.json";
import tick from "../constants/tick.json";
import onHold from "../constants/onHold.json";
import { Fade } from "react-reveal";
import { Nav } from "react-bootstrap";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [user, setUser] = useState({
    name: "John Doe",
    projects: [
      {
        cover:
          "https://novakdjokovicfoundation.org/wp-content/uploads/2016/02/designing-new-projects1.jpg",
        name: "Go Manga",
        description:
          "Commenting System: Engage with readers through the integrated commenting system. Encourage discussions, receive feedback, and build a community around your blog posts.",
        status: "Ongoing",
        timeline: "Jan 2023 - Dec 2023",
        team: [
          { name: "John Doe", role: "Project Manager" },
          { name: "Jane Smith", role: "Developer" },
          { name: "Jane Smith", role: "Designer" },
        ],
      },

      {
        cover:
          "https://kemptonexpress.co.za/wp-content/uploads/sites/30/2022/09/KemptonExpress-GS-image-780x470.jpg",
        name: "Web Application",
        description:
          "Commenting System: Engage with readers through the integrated commenting system. Encourage discussions, receive feedback, and build a community around your blog posts.Commenting System: Engage with readers through the integrated commenting system. Encourage discussions, receive feedback, and build a community around your blog posts",
        status: "Completed",
        timeline: "Mar 2022 - Nov 2022",
        team: [
          { name: "Alex Brown", role: "Project Manager" },
          { name: "Emily Davis", role: "Developer" },
          { name: "Micha Wilson", role: "Designer" },
        ],
      },
      {
        cover:
          "https://st3.depositphotos.com/6235482/19053/i/600/depositphotos_190537880-stock-photo-people-discussing-at-table-over.jpg",
        name: "Mobile App Development",
        description:
          "Create a mobile application for tracking fitness goals and providing workout plans.",
        status: "Ongoing",
        timeline: "Jan 2023 - Present",
        team: [
          { name: "Alex Brown", role: "Project Manager" },
          { name: "Sarah Will", role: "iOS Developer" },
          { name: "Michael ", role: " Developer" },
          { name: "Emily Joh", role: "UI/UX " },
        ],
      },
      {
        cover:
          "https://blog.bulldozair.com/wp-content/uploads/sites/2/2020/09/what-makes-successful-construction-project-1200x750.jpg",
        name: "E-commerce Website",
        description:
          "Build an online store to sell products and accept payments securely.",
        status: "Completed",
        timeline: "Apr 2022 - Jul 2022",
        team: [
          { name: "John Doe", role: "Project Manager" },
          { name: "Jane Smith", role: " Developer" },
          { name: "Mark Joh", role: " Developer" },
        ],
      },

      {
        cover:
          "https://www.rcgt.com/app/uploads/2022/09/gestion_projet_entreprise_reussi_1200x630_logo.jpg",
        name: "Content Management System",
        description:
          "Develop a CMS to manage and publish articles, blogs, and multimedia content.",
        status: "Ongoing",
        timeline: "TBD",
        team: [
          { name: "David Smith", role: "Project Manager" },
          { name: "Rachel ", role: " Developer" },
          { name: "Oliver ", role: "Administrator" },
          { name: "Emma ", role: "UI/UX " },
        ],
      },
      {
        cover:
          "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg",
        name: "Design",
        description:
          "Commenting System: Engage with readers through the integrated commenting system. Encourage discussions, receive feedback, and build a community around your blog posts.",
        status: "onHold",
        timeline: "Mar 2022 - Nov 2022",
        team: [
          { name: "Alex Brown", role: "Project Manager" },
          { name: "Emily Davis", role: "Developer" },
          { name: "Micha Wilson", role: "Designer" },
        ],
      },
    ],
  });

  return (
    <div className="container mt-5 ">
      <Fade bottom duration={3000} distance="40px">
        {/* Information section */}
        <div
          className="d-flex justify-content-center align-items-center py-2.5"
          style={{ marginTop: "5rem" }}
        >
          <div
            className="card"
            style={{ width: "90rem", position: "relative" }}
          >
            <div className="d-flex">
              <div
                className="bg-dark"
                style={{ width: "50%", height: "40px", borderRadius: "2px" }}
              ></div>
              <div
                className="bg-light"
                style={{ width: "50%", height: "40px", borderRadius: "2px" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-light"
                style={{ width: "50%", height: "40px", borderRadius: "2px" }}
              ></div>

              <div
                className="bg-dark"
                style={{ width: "50%", height: "40px", borderRadius: "2px" }}
              ></div>
            </div>

            <div className="card-body d-flex flex-column align-items-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle "
                style={{
                  width: "150px",
                  position: "absolute",
                  top: "-15%",
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
      <div className="py-5">
        <h3 >Projects</h3>
        <p>
          "Rely on our expertise,and watch as your dreams turn into reality"
        </p>
      </div>

      <Card className="text-center">
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
                {user.projects.map((project, i) => (
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
                {user.projects
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
                {user.projects
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
                {user.projects
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
