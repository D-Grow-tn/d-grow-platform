import React from "react";
import { FaBell, FaUser, FaEnvelope } from "react-icons/fa";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { Dropdown } from "react-bootstrap";
function Header({ isOpen }) {
  return (
    <div className="header" style={{ paddingLeft: isOpen ? 250 : 50 }}>
      <div class="d-flex  flex-row-reverse justify-content-between">
        <div className="d-flex mt-2 mx-5 ">
          {" "}
          <div className="p-2 icon " style={{ color: "#1a408c" }}>
            <FaBell />
          </div>
          <div className="p-2 icon" style={{ color: "#1a408c" }}>
            <FaEnvelope />
          </div>
          <div className="p-2 icon" style={{ color: "#1a408c" }}>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdownMenu2">
       
          <FaUser />
        
        
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Setting</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
        </div>

        <div style={{ width: "400px", marginLeft: "20px" }} className="mt-3">
          {/* <MDBInputGroup>
            <MDBInput label="Search" />
            <MDBBtn  className="custom-btn">
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBInputGroup> */}
          <input
            class="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Header;
