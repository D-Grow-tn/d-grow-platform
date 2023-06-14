import React from "react";
import { Button } from "react-bootstrap";

function AddButton({ onClick }) {
  return (
    <div>
      <Button type="button" class="btn btn-outline-primary" style={{fontWeight:"bold",width:"100px"}} onClick={onClick}>
        Add
      </Button>
    </div>
  );
}

export default AddButton;
