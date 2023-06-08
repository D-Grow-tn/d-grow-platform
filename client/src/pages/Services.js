import React from 'react'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate()

  return (
    <div className='d-flex justify-content-center align-items-center'>
     <MDBCard style={{ maxWidth: '18rem' }}>
      <MDBCardImage position='top' alt='...' src='https://www.ideamotive.co/hubfs/app%20development%20cost.png' />
      <MDBCardBody>
        <MDBCardTitle> Mobile App Development </MDBCardTitle>
        <MDBCardText>
        Our mobile app development service offers end-to-end solutions for creating robust and user-friendly applications for iOS and Android platforms.
         We combine creativity, technical expertise, and industry best practices to deliver mobile apps that engage users and drive business growth.
        </MDBCardText>
        <Button onClick={()=>navigate("/applications")}>See Applications</Button>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default Services
