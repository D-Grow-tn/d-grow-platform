import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProduct } from "../store/products";
import "../assets/css/ApplicationDetails.css";
import Carousel from "react-bootstrap/Carousel";

function ApplicationDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1
        className=" section-title dark-bleu fw-bold m-5"
        style={{
         
          color: "#00ac9e",
        }}
      >
        Details Of {product?.name} Application
      </h1>

      <div className="d-flex justify-content-center m-5 ">
        {/* {product?.MediaProductType?.map((img,i)=><div key={i}>
<img src={img?.media?.path} />
          </div>)} */}
        <Carousel variant="dark ">
          {product?.MediaProductType?.map((img, i) => (
            <Carousel.Item key={i} >
              <img
                className="d-block w-100 "
                src={img?.media?.path}
                alt="First slide"
                style={{ height: "600px", width: "80%", borderRadius:"10px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className=" mt-5 d-flex align-items-center flex-column  ">
        <h1
          className="text-centerr  fw-bold "
          style={{
            color: "#00ac9e",
          }}
        >
          Description
        </h1>
        <div className="text-center description-box dark-bleu ">
          <p>{product?.description}</p>
        </div>
        <button
          type="button"
          class="btn mt-5"
          style={{
            width: "150px",
            height: "40px",
            background: "#00ac9e",
            color: "white",
          }}
          onClick={() => navigate("/contact")}
        >
          Contact-us <i class="fa-solid fa-play fa-fade px-2"></i>
        </button>
      </div>
    </div>
  );
}

export default ApplicationDetails;
