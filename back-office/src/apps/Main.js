import React, { useState, createContext, useEffect } from "react";

import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import SideBar from "../layouts/SideBar";
import config from "../configs";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
export const socket = io(config.SOCKET_ENDPOINT);
export const SocketContext = createContext();
function Main() {
  const me = useSelector((state) => state.auth.me);
  const [isOpen, setIsOpen] = useState(true);

  // useEffect(() => {
  //   if (me) {
  //     console.log(me);
  //     socket.emit("connection", me.id);
  //   }
  // }, [me]);
  // useEffect(() => {
  //   function listUsers(data) {
  //     console.log(data);
  //   }
  //   function disconnect() {
  //     socket.emit("connection", me.id);
  //   }
  //   socket.on(`disconnect/${me.id}`, disconnect);
  //   socket.on("list-users", listUsers);

  //   return () => {
  //     socket.off(`disconnect/${me.id}`, disconnect);
  //     socket.off("list-users", listUsers);
  //   };
  // }, [socket, me]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Header toggle={toggle} isOpen={isOpen} />

      <div className="pages" style={{ marginLeft: isOpen ? 250 : 50 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
