import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import SideBar from "../layouts/SideBar";

function Main() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <SideBar toggle={toggle} isOpen={isOpen}/>
      <Header toggle={toggle} isOpen={isOpen} />

      <div className="pages" style={{marginLeft:isOpen?250:50}}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
