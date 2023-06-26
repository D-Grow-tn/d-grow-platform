import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
function CastomCard({ title, image, description, onClick }) {
  return (
    <div className="d-flex flex-wrap m-5  justify-content-center">
     {title && <MDBCard style={{ maxWidth: "20rem",height:"35rem",borderRadius:"10px" }}   className="shadow proCard">
        <MDBCardImage
          src={image}
          style={{
            height: "200px",
          }}
        />
        <MDBCardBody>
          <MDBCardTitle style={{color:"#00ac9e",
            fontWeight: "bold", textAlign: "center", paddingTop:"20px"}}> {title}</MDBCardTitle>
          <MDBCardText style={{ color: "#1a408c"}}>{description}</MDBCardText>
         <button
                type="button"
                class="btn mt-5 "
                style={{
                  maxWidth: "150px",
                  height: "40px",
                  background: "#00ac9e",
                  color: "white",
                  marginLeft:"50%",
                  
                }}
                onClick={onClick}
              >
               See More <i class="fa-solid fa-play fa-fade px-2"></i>
              </button>
        </MDBCardBody>
      </MDBCard>}
    </div>
  );
}

export default CastomCard;
