import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import EComerceDtails from "../assets/demyData/EComerceDtails";
import MobileAppDetails from "../assets/demyData/MobileAppDetails";
import WebAppDetails from "../assets/demyData/WebAppDetails";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/ApplicationDetails.css";
import { Button, NavItem } from "react-bootstrap";

function ApplicationDetails() {
  const navigate = useNavigate();

  const [Data, setData] = useState(null);

  const { params1, params2 } = useParams();
  useEffect(() => {
    if (params1 == "1") {
      setData(MobileAppDetails);
    } else if (params1 == "2") {
      setData(WebAppDetails);
    } else {
      setData(EComerceDtails);
    }
  }, [params1]);
  const filteredData = Data ? Data.filter((item) => item.id == params2) : [];

  return (
    <div>

      {filteredData.map((item) => (
        <>
        <h1 className=" section-title dark-bleu mt-2">Details Of {item.title} Application</h1>  
          <div className="d-flex justify-content-center mt-4">
            <MDBCarousel
              showControls
              dealy={3000}
              style={{ maxWidth: "60rem" }}
            >
              <MDBCarouselItem
                className="w-100 d-block"
                itemId={1}
                src={item.image}
                alt="..."
              />
              <MDBCarouselItem
                className="w-100 d-block"
                itemId={2}
                src={item.image1}
                alt="..."
              />
              <MDBCarouselItem
                className="w-100 d-block"
                itemId={3}
                src={item.image2}
                alt="..."
              />
            </MDBCarousel>
          </div>
          <div className=" mt-5 d-flex align-items-center flex-column  ">
            <h1 className="text-centerr  fw-bold ">Description</h1>
            <div className="text-center description-box">
              <p>{item.description}</p>
            </div>
            <Button className="mt-3" onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
          </div>
        </>
      ))}
    </div>
  );
}

export default ApplicationDetails;
