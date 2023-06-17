import React from "react";
import  "../assets/css/Servies.css"
function CastomContent({ title, ContentTitle, image, title2, ContentTitle2 }) {
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row content">
          <div className="col-lg-6  mt-5 ">
            <h2 style={{ color: "#213764", textAlign: "center" }}>{title}</h2>
            <p style={{ color: "#213764", textAlign: "center" }}>
              {ContentTitle}
            </p>
          </div>
          <div
            className="col-lg-5  "
            style={{ marginTop: "20px", marginLeft: "100px" }}
          >
            <img
              src={image}
              width="500px"
              height=""
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="mt-5"
      >
        <h2 style={{ color: "#213764", textAlign: "center" }}>{title2}</h2>

        <p style={{ color: "#213764", textAlign: "center", maxWidth: "60rem" }}>
          {ContentTitle2}
        </p>
      </div>
    </div>
  );
}

export default CastomContent;
