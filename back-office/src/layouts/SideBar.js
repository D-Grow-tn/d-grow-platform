import React, { useState } from "react";
// import { Flexboard, FlexboardProvider, FlexboardFrame, ResizerType, Position } from '@dorbus/flexboard'
import {
  FaBars,
  FaUsers,
  FaClipboardList,
  FaGlobe,
  FaUserCog,
  FaChartBar,
  FaTools,
  FaUserFriends,
  FaBriefcase,
} from "react-icons/fa";
import { Link,useLocation } from "react-router-dom";

const menuItem = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaChartBar />,
  },
  {
    name: "Administration",
    icon: <FaGlobe />,
    children: [
      {
        name: "Invoices",
        path: "invoices",
      },
      {
        name: "Provides",
        path: "*",
      },
      {
        name: "Request",
        path: "*",
      },
    ],
  },
  {
    name: "HR",
    icon: <FaBriefcase />,
    children: [
      {
        name: "Employee",
        path: "employee",
      },
      {
        name: "Test",
        path: "/test",
      },
      {
        name: "Quiz",
        path: "/quiz",
      },
      {
        name: "Events",
        path: "/events",
      },
    ],
  },
  {
    path: "/client",
    name: "CRM",
    icon: <FaUsers />,
    children: [
      {
        name: "client",
        path: "client",
      },
    ],
  },
  {
    path: "/product",
    name: "PMO",
    icon: <FaClipboardList />,
    children: [
      {
        name: "Project",
        path: "project",
      },
    ],
  },
  {
    path: "/productList",
    name: "WebSite Setting",
    icon: <FaTools />,
    children: [
      {
        name: "Home",
        path: "*",
      },
      {
        name: "About us",
        path: "*",
      },
    ],
  },
  {
    path: "/productList",
    name: "Admin Setting",
    icon: <FaUserCog />,
    children: [
      {
        name: "Users",
        path: "*",
      },
      {
        name: "Role",
        path: "role",
      },
    ],
  },
];

function SideBar({toggle,isOpen}) {
  const path=useLocation().pathname
  
  
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
                }`}
              >
                <div className="mx-5 mt-2">
                  {item.children.map((child, childIndex) => (
                    <div key={childIndex}>
                      <Link to={child.path} className="links">
                        {child.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
            onClick={()=>handleSubMenuClick(index)}
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
