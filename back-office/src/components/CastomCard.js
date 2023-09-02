import React from 'react'
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
import { IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import "../assets/styles/castomCard.css"
function CastomCard({image,name ,onClick,description,deleteFunction}) {
  return (
    <div>
    <MDBCard style={{ maxWidth: "20rem",height:"30rem",borderRadius:"10px",maxWidth:"250px" }}   className="custom-card">
    <MDBCardImage
      src={image}
      style={{
        height: "200px",

      }}
    />
    <MDBCardBody>
      <MDBCardTitle style={{color:"#00ac9e",
        fontWeight: "bold", textAlign: "center", paddingTop:"20px"}}> {name}</MDBCardTitle>
      <MDBCardText style={{ color: "#1a408c"}}>{description}</MDBCardText>
      <div className="card-button-container">
     <button
            type="button"
            class="btn mt-5 "
            style={{
              maxWidth: "160px",
              height: "40px",
              background: "#2351AD",
              color: "white",

              
            }}
            onClick={onClick}
          >
           See More <i class="fa-solid fa-play fa-fade px-2"></i>
          </button>
          <IconButton
              onClick={deleteFunction}
              color="error"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </div>
    </MDBCardBody>
  </MDBCard>
  </div>
  )
}

export default CastomCard