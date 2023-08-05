import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CastomCard from "../components/CastomCard";
import CastomContent from "../components/CastomContent";
import { fetchProducType,fetchProduct } from "../store/products";

function Applications() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const productTypes = useSelector((state) => state.product.productTypes.items);
  const services = useSelector((state) => state.product.products.items);

  useEffect(() => {
    dispatch(fetchProducType());
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleNavigate = (id) => {
    navigate(`/applicationDetails/${id}`);
  };
  const applicationData = productTypes.filter((productType) => productType.ProductId === id);
  const service = services.filter((product) => product.id=== id);
  console.log("servicesssss",service);

  return (
    <div>
    <div className="d-flex  align-content-center justify-content-center">
      {service.map((service) => (
        <CastomContent
          key={service.id}
          title={service.name}
          // image={application.image1}
          ContentTitle={service.description}
          title2="Our Applications"
        />
      ))}
      </div>
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        {applicationData.map((application) => (
          <CastomCard
            key={application.id}
            title={application.name}
            image={application.MediaProductType[0]?.media?.path}
            description={application.description}
            onClick={() => handleNavigate(application.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Applications;
