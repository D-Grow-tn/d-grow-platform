
import React from "react";


function ConfirmButton({onClick}) {
  return (
    <div>
    <button type="button" class="btn btn-warning" style={{backgroundColor:"#00AC9E",color:"#fff" ,fontWeight:"bold",width:"100px"}}onClick={onClick}>Confirm</button>
  </div>
  );
}

export default ConfirmButton;