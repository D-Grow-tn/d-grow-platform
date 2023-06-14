import React from "react";
import { Button } from "react-bootstrap";

function SaveButton({onClick}) {
  return (
    <div>
     <button type="button" class="btn btn-info" style={{fontWeight:"bold",width:"100px"}}onClick={onClick}>Save</button>
   
  </div>
  );
}

export default SaveButton;