import React, { useEffect, useState } from "react";
import { socket } from "../../../apps/Main";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages, removeMessage } from "../../../store/message";
import ConversionDate from "../../project/components/ConversionDate";
import send from "../../../assets/images/send.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

function ChatRoomList() {
  const [content, setContent] = useState(null);
  const [messages, setMessages] = useState(null);
  const me = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();
  const Messages = useSelector((state) => state.message.messages.items);
  const employeeId = me?.employee.id;
  const chatRoomId = "b64db876-6514-4834-b416-be8e0fc49e56";
  const data = { content, employeeId, chatRoomId };

  function sendMessage(value) {
    socket.emit("message", value); // Emit 'message' event with the content as the data
  }

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);
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
      await dispatch(fetchMessages());
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
                <div onClick={() => sendMessage(data)}>
                  <img alt="" src={send} style={{ width: 50, heigh: 50 }} />
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

export default ChatRoomList;
