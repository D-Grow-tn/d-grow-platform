import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import data3 from "../assets/demyData/EComerceAppData";
import data1 from "../assets/demyData/MobileAppData";
import data2 from "../assets/demyData/WebAppData";
import CastomCard from "../components/CastomCard";
import CastomContent from "../components/CastomContent";

function Applications() {
  const navigate = useNavigate();
  const { id } = useParams();


  let applicationData;

  if (id === "1") {
    applicationData = data1;
  } else if (id === "2") {
    applicationData = data2;
  } else {
    applicationData = data3;
  }

  return (
    <div style={{marginTop:"-35%"}}>
      {/* <h1 className="section-title dark-bleu mt-2">Our Applications</h1>  */}
      {applicationData.map((application) => (
      <CastomContent  
        title={application.title1}
        image={application.image1}
        ContentTitle={application.description1}
      />
    ))}  
    <div className="d-flex justify-content-around align-items-end mt-5">
      {applicationData.map((application) => (
        <CastomCard
          title={application.title}
          image={application.image}
          description={application.description}
          ButtonName="See Details"
          onClick={() => navigate(`/applicationDetails/${id}/${application.id}`)}
        />
      ))}
    </div>
    </div>
  );
}

export default Applications;
