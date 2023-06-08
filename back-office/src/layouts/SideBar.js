import React, { useState } from "react";
// import { Flexboard, FlexboardProvider, FlexboardFrame, ResizerType, Position } from '@dorbus/flexboard'
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import { menuItem } from "./../constants/sidebarData";
function SideBar({ toggle, isOpen }) {
  const location = useLocation();

  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleSubMenuClick = (index) => {
    setActiveSubMenu(index === activeSubMenu ? null : index);
  };
  console.log(activeSubMenu);
  return (
    <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
      <div className="top_section">
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          Logo
        </h1>
        <div style={{ marginLeft: isOpen ? "80px" : "0px" }} className="bars">
          <FaBars onClick={toggle} />
        </div>
      </div>
      {menuItem.map((item, index) => (
        <div key={index}>
          {item.children ? (
            <div>
              <button
                className={` 
                accordion-button links
                 ${activeSubMenu === index ? "active" : ""}`}
                type="button"
                onClick={() => handleSubMenuClick(index)}
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="linkText"
                >
                  {item.name}
                </div>
              </button>
              <div
                className={`accordion-collapse collapse ${
                  activeSubMenu === index ? "show" : ""
                } `}
              >
                <div className="mx-5">
                  {item.children.map((child, childIndex) => (
                    <Link to={child.path} className="linkText">
                      <div
                        style={{ paddingRight: "40px" }}
                        key={childIndex}
                        className={`links ${
                          location.pathname === child.path ? "active" : ""
                        } `}
                      >
                        <div
                          className={`icon ${
                            isOpen ? "" : "sidebar-closed-icon"
                          }`}
                        >
                          {child.icon}
                        </div>

                        <div
                          style={{ display: isOpen ? "block" : "none" }}
                          className=""
                        >
                          {child.name}
                        </div>
                      </div>{" "}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              onClick={() => handleSubMenuClick(index)}
              to={item.path}
              className={`links  
              ${activeSubMenu === index ? "active" : ""}
              `}
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="linkText"
              >
                {item.name}
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default SideBar;
