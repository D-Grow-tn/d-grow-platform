import React from "react";
import { FaBell, FaUser, FaCommentAlt} from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
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
          <FaCommentAlt />
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

        <div style={{ width: "400px", marginLeft: "120px" }} className="mt-3">
          
        
           <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text blue lighten-3" id="basic-text1">
            <MDBIcon  icon="search" />
          </span>
        </div>
        <input
          className="form-control my-0 py-1"
          type="text"
          placeholder="Search "
          aria-label="Search"
        />
      </div>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
