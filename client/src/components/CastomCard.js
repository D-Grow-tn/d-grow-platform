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
function CastomCard({ title, image, description, onClick, ButtonName }) {
  return (
    <div className="d-flex justify-content-around align-items-end mt-5">
     {title && <MDBCard style={{ maxWidth: "18rem" }}   className="shadow proCard">
        <MDBCardImage
          src={image}
          style={{
            height: "200px",
          }}
        />
        <MDBCardBody>
          <MDBCardTitle> {title}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
       <Button onClick={onClick}>{ButtonName}</Button>
        </MDBCardBody>
      </MDBCard>}
    </div>
  );
}

export default CastomCard;
