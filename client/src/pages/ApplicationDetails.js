import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProduct } from "../store/products";
import "../assets/css/ApplicationDetails.css";
import { Button, NavItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";


function ApplicationDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.product.product);
 

  useEffect(() => {
    dispatch(fetchOneProduct(id));

  }, [dispatch,id]);




  return (
    <div>

      
      
        <h1 className=" section-title dark-bleu m-5">Details Of {product?.name} Application</h1>  
       { console.log("hiiiiiiiiiiiiiiiiiiiiiiii",product?.MediaProductType)}
         <div className="d-flex justify-content-center m-5 p-5">
          {/* {product?.MediaProductType?.map((img,i)=><div key={i}>
<img src={img?.media?.path} />
          </div>)} */}
  <Carousel variant="dark ">
  {product?.MediaProductType?.map((img,i)=>  <Carousel.Item key={i}>

          <img
            className="d-block w-100 "
            src={img?.media?.path}
            alt="First slide"
            style={{ height: "600px",width:"80%" }}
          />
        </Carousel.Item>
        )}
      
      </Carousel>



          </div>
           <div className=" mt-5 d-flex align-items-center flex-column  ">
            <h1 className="text-centerr  fw-bold ">Description</h1>
            <div className="text-center description-box">
              <p>{product?.description}</p>
            </div>
            <Button className="mt-3" onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
          </div>
    
    </div>
  );
}

export default ApplicationDetails;
