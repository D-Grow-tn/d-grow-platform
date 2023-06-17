import React from "react";

function DeleteButton({ onClick, type, onSubmit }) {
  return (
    <div>
      <button
        type={type ? type : "button"}
        class="btn btn-danger"
        style={{ fontWeight: "bold", width: "100px" }}
        onClick={onClick}
        onSumbit={onSubmit}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteButton;
