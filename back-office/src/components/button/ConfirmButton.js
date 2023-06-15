import React from "react";

function ConfirmButton({ onClick, onSubmit, type }) {
  return (
    <div>
      <button
        type={type}
        class="btn btn-warning"
        style={{
          backgroundColor: "#00AC9E",
          color: "#fff",
          fontWeight: "bold",
          width: "100px",
        }}
        onClick={onClick}
        onSumbit={onSubmit}
      >
        Confirm
      </button>
    </div>
  );
}

export default ConfirmButton;
