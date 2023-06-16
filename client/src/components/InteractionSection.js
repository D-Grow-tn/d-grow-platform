import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createInteraction, fetchInteractions } from "../store/interactions";
import ConversionDate from "./ConversionDate";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import send from "../assets/img/send.png"

function InteractionSection() {
  const dispatch = useDispatch();

  const projectStore = useSelector((state) => state.projects);
  const { project } = projectStore;
  const interactiontStore = useSelector((state) => state.interactions);
  const { interactions } = interactiontStore;
  const [content, setContent] = useState("");
  useEffect(() => {
    dispatch(fetchInteractions(project?.id));
  }, [project?.id,dispatch]);

  return (
    <div className="  mt-5 d-flex ">
      <section
        style={{
          backgroundColor: "#daeaf0",
          borderRadius: "10px",
        }}
      >
        <div class=" d-flex justify-content-center align-items-center">
          <div class="col-md-6 col-lg-7 col-xl-8  ">
            <ul class="list-unstyled ">
              {interactions?.items.map((elem, i) => (
                <div class="d-flex  mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                    alt="avatar"
                    class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                    width="60"
                  />
                  <div class="card ">
                    <div class="card-header d-flex justify-content-between p-3">
                      <p class="fw-bold mb-0">{elem.User.name}</p>
                      <p class=" d-flex gap-2 text-muted small mb-0">
                        <i class="far fa-clock py-1"></i>{" "}
                        <ConversionDate
                          dateString={elem.createdAt}
                          includeHour={true}
                        />
                      </p>
                    </div>
                    <div class="card-body">
                      <p class="mb-0">{elem.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-center align-items-center gap-3">
                {" "}
                <textarea
                  value={content}
                  class="form-control "
                  id="textAreaExample3"
                  rows="2"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setContent(e.target.value);
                  }}
                  style={{
                    borderRadius: "200px",
                    textAlign: "center",
                    padding: "0",
                  }}
                ></textarea>
                <div
                  onClick={() => {
                    if (content.trim() !== "") {
                      let args = {
                        id: project.id,
                        body: { content, projectId: project?.id },
                      };
                      dispatch(createInteraction(args));
                      setContent("");
                    } else {
                      return;
                    }
                  }}
                >
                  {/* <FontAwesomeIcon icon={faPaperPlane} size="2x" style={{color:"1a408c"}}/> */}
                  <img alt="" src={send} style={{width:50,heigh:50}}/>
                </div>
              </div>
            </ul>

            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InteractionSection;
