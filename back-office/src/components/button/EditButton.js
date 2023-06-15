import React from "react";

function EditButton({ onClick, type, onSubmit }) {
  return (
    <div>
      <button
        type={type}
        class="btn btn-outline-warning"
        style={{
          borderColor: "#00AC9E",
          color: "#00AC9E",
          backgroundColor: "#fff",
          fontWeight: "bold",
          width: "100px",
        }}
        onClick={onClick}
        onSumbit={onSubmit}
      >
        Edit
      </button>
    </div>
  );
}

export default EditButton;
