import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import SideBar from "../layouts/SideBar";

function Main() {
  return (
    <div>
      <Header />
      <SideBar />
     
        <div className="pages">
          <Outlet />
        </div>
 
    </div>
  );
}

export default Main;
