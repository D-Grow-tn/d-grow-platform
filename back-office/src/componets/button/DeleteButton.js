import React from "react";


function DeleteButton({onClick}) {
  return (
    <div>
    <button type="button" class="btn btn-danger" style={{ fontWeight:"bold",width:"100px"}} onClick={onClick}>Delete</button>
  </div>
  );
}

export default DeleteButton;