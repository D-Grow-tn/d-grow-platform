import React ,{ useState ,useEffect}from "react";
import { useNavigate } from "react-router-dom";
import CastomCard from "../components/CastomCard";
import { fetchProduct } from "../store/products";
import { useDispatch, useSelector } from "react-redux";
import DisplayLottie from "../constants/DisplayLottie";
// import imgabout from "../constants/imgabout.json";
import CastomContent from "../components/CastomContent";


function Services() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.product.products.items);
  const handleNavigate = (id) => {
    navigate(`/applications/${id}`);
  };



  useEffect(() => {
   
      dispatch(fetchProduct());
    
  }, [dispatch]);


  
  return (
    <div>

      <CastomContent
        title="Our Services"
        ContentTitle="Our Services, refers to the specific range of professional offerings or solutions provided by a development company or organization. 
         These services are focused on the creation, improvement, or maintenance of software applications, 
          websites, or other digital products. The development services provided aim to meet the specific needs and requirements of clients, 
          often involving various stages of the software development life cycle. Here are a few examples of how "
          image={<DisplayLottie animationData={service}  />}
       
        title2="Custom Software Development"
        ContentTitle2=" Our Services in Development encompass the creation of tailor-made software solutions to address the unique requirements of businesses or individuals.
        We work closely with clients to understand their objectives and develop custom software applications from scratch. Our development team utilizes the latest technologies and methodologies to design, code,
        test, and deploy software that meets specific functionalities, user experience, and scalability needs."
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
