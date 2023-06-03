import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createInteraction, fetchInteractions } from "../store/interactions";
import ConversionDate from "./ConversionDate";
function InteractionSection() {
  const dispatch = useDispatch();

  const projectStore = useSelector((state) => state.projects);
  const { project } = projectStore;
  const me = useSelector((state) => state.auth.me);
  const interactiontStore = useSelector((state) => state.interactions);
  const { interactions } = interactiontStore;
  const [content, setContent] = useState("");
  useEffect(() => {
    dispatch(fetchInteractions(project?.id));
  }, [dispatch]);

  // console.log("interactions", interactions);
  // console.log("iterStore", interactiontStore);
  return (
    <div className="  mt-5 d-flex justify-content-center align-items-center px-5">
      <section style={{ backgroundColor: "#daeaf0",width:"1000px", borderRadius: "10px" }} >
        <div class="container  d-flex justify-content-center align-items-center">
          <div class="col-md-6 col-lg-7 col-xl-8  ">
            <ul class="list-unstyled ">
              {interactions?.items.map((elem, i) => (
                <li class="d-flex  mb-4">
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
                        <i class="far fa-clock py-1"></i> <ConversionDate dateString={elem.createdAt} includeHour={true} />

                      </p>
                    </div>
                    <div class="card-body">
                      <p class="mb-0">{elem.content}</p>
                    </div>
                  </div>
                </li>
              ))}

              <li class="bg-white mb-3">
                <div class="form-outline">
                  <textarea
                  value={content}
                    class="form-control"
                    id="textAreaExample2"
                    rows="4"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setContent(e.target.value);
                    }}
                  ></textarea>
                  <label class="form-label" for="textAreaExample2">
                    Message
                  </label>
                </div>
              </li>
              <button
                type="button"
                class="btn btn-info btn-rounded float-end"
                onClick={() => {
                  if(content.trim() !==""){
                    let args = {
                      id:project.id,
                      body:{content,
                      projectId: project?.id
                    }}
                    dispatch(createInteraction(args));
                    setContent("")
                  }
                 else{return}
                }
              
              }
              >
                Send
              </button>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InteractionSection;
