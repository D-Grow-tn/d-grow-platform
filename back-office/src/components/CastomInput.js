import React from "react";

function CastomInput({ placeholder, type, label, icon,onChange }) {
  return (
    <div className="input d-flex align-items-start">
      <label>{label}</label>
      <div className="input-group ">
       
        <input
          placeholder={placeholder}
          className="mb-4 border border-secondary rounded form-control form-control-lg custom-height"
          type={type}
          onChange={onChange}
        />
         {icon && (
          <span className="input-group-text">
            <i className={icon}></i>
          </span>
        )}
      </div>
    </div>
  );
}

export default CastomInput;
