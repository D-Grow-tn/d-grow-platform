import React from "react";


function CancelButton({onClick,onSubmit,type}) {

  return (
    <div>
      <button
        type="button"
        class="btn btn-dark btn-outline-primary "
        style={{
          borderColor: "gray",
          color: "gray",
          fontWeight: "bold",
          width: "100px",
          backgroundColor: "#fff",
        }}
        onClick={onClick}
        onSumbit={onSubmit}
        
      >
        Cancel
      </button>
    </div>
  );
}

export default CancelButton;
