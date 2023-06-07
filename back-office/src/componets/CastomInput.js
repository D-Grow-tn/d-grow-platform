import React from 'react'

function CastomInput({ placeholder, type, label }) {
  return (
    <div className="input d-flex align-items-start">
      <label>
        <i className={`fa-solid fa-${label} p-1 mt-3`}></i>
      </label>
      <input
        placeholder={placeholder}
        className="mb-4 border border-secondary rounded form-control form-control-lg custom-height"
        type={type}
      />
    </div>
  )
}

export default CastomInput