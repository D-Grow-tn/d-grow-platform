import React from "react";
import { FaBell, FaUser, FaEnvelope } from "react-icons/fa";

function Header({ isOpen }) {
  return (
    <div className="header" style={{ paddingLeft: isOpen ? 250 : 50 }}>
     
       
      
      <div class="d-flex  flex-row-reverse  mt-3">
      <div className="p-2">
          <FaUser /> 
        </div>
      <div className="p-2">
          <FaBell /> 
        </div>
       
        <div className="p-2">
          <FaEnvelope /> 
        </div>
</div>
    </div>
  );
}

export default Header;
