import React ,{ useState ,useEffect}from "react";
import { useNavigate } from "react-router-dom";
import CastomCard from "../components/CastomCard";
import { fetchProduct } from "../store/products";
import { useDispatch, useSelector } from "react-redux";
import DisplayLottie from "../constants/DisplayLottie";
import service from "../constants/service.json"
import CastomContent from "../components/CastomContent";
import config from "../configs";
import axios from "axios";


function Services() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.product.products.items);
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
        setTitleSection1(
          res.data?.SubComponent[0]?.ContentSubComponent.filter(
            (elem) => elem.title === "title"
          )
       
        );
        setPrgSection1(
          res.data?.SubComponent[0]?.ContentSubComponent.filter(
            (elem) => elem.title === "paragraph"
          )
       
        );
        setTitleSection2(
          res.data?.SubComponent[1]?.ContentSubComponent.filter(
            (elem) => elem.title === "title"
          )
       
        );
        setPrgSection2(
          res.data?.SubComponent[1]?.ContentSubComponent.filter(
            (elem) => elem.title === "paragraph"
          )
       
        );
        console.log("section1111111111111",res.data);
      })}, []);
      
  return (
    <div>

      <CastomContent
        title={titleSection1?.map((e)=>(e?.content))}
        ContentTitle={pgrSection1?.map((e)=>(e?.content))}
          image={<DisplayLottie animationData={service}  />}
       
        title2={titleSection2?.map((e)=>(e?.content))}
        ContentTitle2={pgrSection2?.map((e)=>(e?.content))}
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
