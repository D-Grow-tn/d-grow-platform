import React from 'react'

function TextHeader({title,description}) {
  return (
    <div
    className="d-flex flex-column justify-content-center align-items-center "
    style={{ textAlign: "center" }}
  >
    
    <div style={{ maxWidth: "1000px" }}>
            <h2
              style={{
                color: "#181f38",
                fontSize: "36px",
                lineHeight: "44px",
                fontWeight: 700,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontWeight: "400px",
                fontSize: "18px",
                lineHeight: "26px",
                color: "#2b3857",
                textAlign: "justify",
                textAlignLast: "center",
              }}
            >
              {description}
            </p>
          </div>
          </div>
  )
}

export default TextHeader
