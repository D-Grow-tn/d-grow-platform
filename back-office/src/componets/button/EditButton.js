import React from "react";


function EditButton({onClick}) {
  return (
    <div>
    <button type="button" class="btn btn-outline-warning" style={{borderColor:"#00AC9E",color:"#00AC9E",backgroundColor:"#fff" ,fontWeight:"bold",width:"100px"}}onClick={onClick}>Edit</button>
  </div>
  );
}

export default EditButton;