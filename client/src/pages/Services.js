import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CastomCard from "../components/CastomCard";
import { fetchProduct } from "../store/products";
import { useDispatch, useSelector } from "react-redux";
import DisplayLottie from "../constants/DisplayLottie";
import service from "../constants/service.json";
import CastomContent from "../components/CastomContent";
import config from "../configs";
import axios from "axios";

function Services() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.product.products.items);
  const [section0, setSection0] = useState(null);
  const [titleSection1, setTitleSection1] = useState(null);
  const [pgrSection1, setPrgSection1] = useState(null);
  const [titleSection2, setTitleSection2] = useState(null);
  const [pgrSection2, setPrgSection2] = useState(null);
  const handleNavigate = (id) => {
    navigate(`/applications/${id}`);
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    axios
      .get(`${config.API_ENDPOINT}/website-settings/by-title/ServicesPage`)
      .then((res) => {
        setSection0(res.data?.SubComponent.find(elem=>elem.name==='section0'))
        setTitleSection1(
          res.data?.SubComponent[1]?.ContentSubComponent.filter(
            (elem) => elem.title === "title"
          )
        );
        setPrgSection1(
          res.data?.SubComponent[1]?.ContentSubComponent.filter(
            (elem) => elem.title === "paragraph"
          )
        );
        setTitleSection2(
          res.data?.SubComponent[2]?.ContentSubComponent.filter(
            (elem) => elem.title === "title"
          )
        );
        setPrgSection2(
          res.data?.SubComponent[2]?.ContentSubComponent.filter(
            (elem) => elem.title === "paragraph"
          )
        );
        console.log("section1111111111111", res.data);
      });
  }, []);
console.log(section0);
  return (
    <div>
      {/* PART 1 */}

      <div
        style={{
          width: "100%",
          height: "700px",
          backgroundImage: `url(${
            section0?.ContentSubComponent?.find(
              (elem) => elem.title === "image"
            )?.media?.path
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            opacity: 0.8,
            borderBottom: "5px solid #42b1bb",
          }}
          className="bg-darkbleu"
        />
        <div>
          hello
        </div>
      </div>
      <CastomContent
        title={titleSection1?.map((e) => e?.content)}
        ContentTitle={pgrSection1?.map((e) => e?.content)}
        image={<DisplayLottie animationData={service} />}
        title2={titleSection2?.map((e) => e?.content)}
        ContentTitle2={pgrSection2?.map((e) => e?.content)}
      />

      <div className="d-flex flex-wrap m-5  gap-5 justify-content-center">
        {services.map((service) => (
          <CastomCard
            title={service.name}
            image={service.productCover.path}
            description={service.description}
            onClick={() => handleNavigate(service.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
