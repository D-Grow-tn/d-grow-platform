import React, { useState, useEffect } from 'react';
import { FaBell, FaUser, FaCommentAlt, FaPlay, FaPause } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/images/avatar.jpg";
import { useSelector } from 'react-redux';
import moment from 'moment';

function Header({ isOpen }) {
  const navigate = useNavigate();
  const me = useSelector(state => state.auth.me)



  return (
    <div className="header" style={{ paddingLeft: isOpen ? 250 : 50 }}>
      <div className="d-flex flex-row-reverse justify-content-between">
        <div className="d-flex mt-2 dropdownHeader ">
          <div className="p-2 icon" style={{ color: "#1a408c" }}>
            <FaBell />
          </div>
          <div className="p-2 icon" style={{ color: "#1a408c" }}>
            <FaCommentAlt />
          </div>
          <div className="icon" style={{ color: "#1a408c" }}>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdownMenu2">
                <img
                  src={avatar}
                  className="rounded-circle"
                  style={{ width: "40px", marginRight: "10px" }}
                  alt="Avatar"
                />
                {me?.employee.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Setting</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Header;
