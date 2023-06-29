import React from "react";
import  "../assets/css/Servies.css"
function CastomContent({ title, ContentTitle, image, title2, ContentTitle2 }) {
  return (
    <div>
 <section className="container " style={{paddingTop:"100px"}}>
          <div className="row content gap-5 ">
            <div
              className="col-lg-6 pt-5 pt-lg-0 
              mt-5  py-5 dark-bleu "
              style={{ textAlign: "center" }}
            >
              <h1
                style={{
                  fontWeight: "bold",
                  paddingBottom: "30px",
                  color:"#00ac9e"
                 
                }}
              >{title}</h1>
            <p style={{ color: "#213764", textAlign: "center" ,fontSize:"18px"}}>
              {ContentTitle}
            </p>
          </div>
          <div
            className="col-lg-5   " 
          >
            <div>{image}</div>
          </div>
        </div>
      </section>


      <section className="d-flex jutify-content-center align-items-center flex-column mt-5 py-5"
      
       
      >
        <h2    style={{
                  fontWeight: "bold",
                  paddingTop:"50px",
                  paddingBottom: "30px",
                  color:"#00ac9e",
                  textAlign:"center"
                 
                }}>{title2}</h2>

        <p style={{ color: "#213764", textAlign: "center", maxWidth: "60rem" ,fontSize:"18px"}}>
          {ContentTitle2}
        </p>
      </section>
    </div>
  );
}

export default CastomContent;
