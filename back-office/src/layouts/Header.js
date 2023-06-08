import React from "react";

function Header({ isOpen }) {
  return (
    <div className="header" style={{ paddingLeft: isOpen ? 250 : 50 }}>
      im header
    </div>
  );
}

export default Header;
