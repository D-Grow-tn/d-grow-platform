import React from "react";


function SaveButton({ onClick, type, onSubmit }) {
  
  return (
    <div>
      <button
        type={type}
        class="btn btn-info"
        style={{ fontWeight: "bold", width: "100px" }}
        onClick={onClick}
        onSumbit={onSubmit}
      >
        Save
      </button>
    </div>
  );
}

export default SaveButton;
