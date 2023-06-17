import React from 'react'
import "../assets/css/CastomInput.css"
function CastomInput({label,placeholder,type,value,name,onChange}) {
  return (
    <div className="mt-lg-2">
    <label>{label}</label>
    <input  placeholder={placeholder} type={type} name={name} value={value} onChange={onChange}/>
    </div>
);
  
}

export default CastomInput