import React, { useEffect, useState } from 'react'
import { socket } from '../../../apps/Main';
import { useDispatch, useSelector } from "react-redux";

function ChatRoomList() {
  const [content,setContent]=useState(null)
  const [messages, setMessages] = useState([]);
  console.log("🚀 ~ file: ChatRoomList.js:8 ~ ChatRoomList ~ messages:", messages)
  const me = useSelector((state) => state.auth.me);


 const employeeId =  me?.employee.id
 const chatRoomId = "b64db876-6514-4834-b416-be8e0fc49e56"
  const data = {content,employeeId,chatRoomId}

  function sendMessage(value) {
    socket.emit('message',value); // Emit 'message' event with the content as the data
  }
  console.log("🚀 ~ file: ChatRoomList.js:16 ~ ChatRoomList ~ data:", data)

 
  useEffect(() => {
    socket.on('messagetlkol', (data) => {
      console.log(data,"<<<<<<<<<<<");
      setMessages(data);
    },[socket]);
    return () => {
      socket.off('messagetlkol');
    };
  }, []);
  return (
    <div className="  mt-5 d-flex  ">
    <section
      style={{
        backgroundColor: "#daeaf0",
        borderRadius: "10px",
        width:"180%"
        
      }}
    >
      <div class=" d-flex justify-content-center align-items-center">
        <div class="col-md-6 col-lg-7 col-xl-8  ">
          <ul class="list-unstyled ">
            {messages?.map((elem, i) => (
            
              <div class="d-flex  mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                  alt="avatar"
                  class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                  width="60"
                />
                <div class="card ">
                  <div class="card-header d-flex justify-content-between p-3">
                    <p class="fw-bold mb-0">

                        {elem?.employee?.name}

                    </p>
                    <p class=" d-flex gap-2 text-muted small mb-0">
                      <i class="far fa-clock py-1"></i>{" "}
                      {/* <ConversionDate
                        dateString={elem.createdAt}
                        includeHour={true}
                      /> */}
                    </p>
                  </div>
                  <div class="card-body">
                    <p class="mb-0">
                  {console.log(elem.content)}
                        {elem.content}
                        </p>
                  </div>
                </div>
              </div>
            ))} 
            <div className="d-flex justify-content-center align-items-center gap-3">
              {" "}
              <textarea
                // value={content}
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
                onClick={()=>sendMessage(data)}
              >
                send
                {/* <FontAwesomeIcon icon={faPaperPlane} size="2x" style={{color:"1a408c"}}/> */}
                {/* <img alt="" src={send} style={{width:50,heigh:50}}/> */}
              </div>
            </div>
          </ul>

          <div></div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ChatRoomList