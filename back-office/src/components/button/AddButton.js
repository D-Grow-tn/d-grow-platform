import React from "react";

function AddButton({ onClick, onSubmit, type }) {
  return (
    <div>
      <button
        type={type}
        class="btn btn-outline-primary"
        style={{ fontWeight: "bold", width: "100px" }}
        onClick={onClick}
        onSumbit={onSubmit}
      >
        Add
      </button>
    </div>
  );
}

export default AddButton;
