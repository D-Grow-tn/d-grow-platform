import React, { useState } from 'react'

function CastomName({title,readOnly,setReadOnly,ButtonName}) {

  return (
    <div className="d-flex  justify-content-between align-items-center px-3 flex-wrap headerProfile">
    <div className="d-flex  align-items-center  gap-3 pb-3 ">
      <h1
        className="darkBlue"
        style={{
          fontSize: "45px",
        }}
      >

        {title}
      </h1>
    </div>

    {readOnly && (
      <button
        type="button"
        class="btn"
        style={{
          height: "40px",
          background: "#2351AD",
          color: "white",
          borderRadius: "8px",
          marginRight: "50px",
        }}
        onClick={() => {
          setReadOnly(false)
         
        }}
      >
        <i class="fa-solid fa-play fa-fade px-2"> {ButtonName}</i>
      </button>
    )}
  </div>
  )
}

export default CastomName