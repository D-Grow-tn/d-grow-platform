import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CancelButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" class="btn btn-outline-danger" style={{borderColor:"gray",color:"gray",fontWeight:"bold",width:"100px",backgroundColor:"#fff"}} onClick={()=> navigate - 1}>Cancel</button>
  </div>
  );
}

export default CancelButton;