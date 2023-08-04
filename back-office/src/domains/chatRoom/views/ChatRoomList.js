import React, { useEffect, useState } from "react";
import { socket } from "../../../apps/Main";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessagesByChatRoom, removeMessage } from "../../../store/message";
import ConversionDate from "../../project/components/ConversionDate";
import send from "../../../assets/images/send.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchProject } from "../../../store/projects";

function ChatRoomList() {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const me = useSelector((state) => state.auth.me);
  const project = useSelector((state) => state.project.project);
  const Messages = useSelector((state) => state.message.messages.items);
  const employeeId = me?.employee.id;
  const [chatRoomId, setChatRoomId] = useState(null);
  const [content, setContent] = useState(null);
  const [messages, setMessages] = useState(null);

  function sendMessage(e) {
    e.preventDefault();
    console.log({ content, employeeId, chatRoomId });
    if (employeeId && chatRoomId && content.length)
      socket.emit("message", { content, employeeId, chatRoomId }); // Emit 'message' event with the content as the data
    setContent("");
  }

  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [dispatch]);
  useEffect(() => {
    if (project) {
      setChatRoomId(project?.ChatRoom[0].id);
      dispatch(fetchMessagesByChatRoom(project?.ChatRoom[0].id));
    }
  }, [dispatch, project]);
  useEffect(() => {
    socket.on(
      "OneMessage",
      (data) => {
        setMessages((allMessage) => [...allMessage, data]);
      },
      [socket]
    );
    return () => {
      socket.off("OneMessage");
    };
  }, []);
  useEffect(() => {
    setMessages(Messages);
  }, [Messages]);
  const handelDelete = async (id) => {
    try {
      await dispatch(removeMessage(id));
      await dispatch(fetchMessagesByChatRoom());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="  mt-5 d-flex  ">
      <section
        style={{
          backgroundColor: "#daeaf0",
          borderRadius: "10px",
          width: "180%",
          height: "550px", // Set your desired height here
          overflowY: "auto",
          display: "flex", // Add display: flex to the parent container
          flexDirection: "column-reverse",
        }}
      >
        <div class=" d-flex justify-content-center align-items-center ">
          <div class="col-md-6 col-lg-7 col-xl-8  ">
            <ul class="list-unstyled ">
              {messages?.map((elem, i) => (
                <div class="d-flex  mb-4 w-100" key={i}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                    alt="avatar"
                    class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                    width="60"
                  />
                  <div class="card d-flex justify-content-between">
                    <div class="card-header d-flex justify-content-between p-3">
                      <p class="fw-bold mb-0">{elem?.employee?.name}</p>
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
                    {employeeId === elem.employee.id && (
                      <div className="d-flex justify-content-end">
                        <IconButton color="error" aria-label="delete">
                          <DeleteIcon onClick={() => handelDelete(elem.id)} />
                        </IconButton>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <form
                onSubmit={sendMessage}
                className="d-flex justify-content-center align-items-center gap-3"
              >
                {" "}
                <input
                  required
                  value={content}
                  class="form-control "
                  id="textAreaExample3"
                  rows="1"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setContent(e.target.value);
                  }}
                  style={{
                    borderRadius: "200px",
                    textAlign: "center",
                    padding: "0",
                  }}
                ></input>
                <button
                  style={{ all: "unset", cursor: "pointer" }}
                  type="submit"
                  onSubmit={sendMessage}
                >
                  <img alt="" src={send} style={{ width: 50, heigh: 50 }} />
                </button>
              </form>
            </ul>

            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChatRoomList;
