import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CastomCard from "../components/CastomCard";
import CastomContent from "../components/CastomContent";
import { fetchProducType } from "../store/products";

function Applications() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const productTypes = useSelector((state) => state.product.productTypes.items);

  useEffect(() => {
    dispatch(fetchProducType());
  }, [dispatch]);

  const handleNavigate = (id) => {
    navigate(`/applicationDetails/${id}`);
  };
  const applicationData = productTypes.filter((productType) => productType.ProductId === id);

  return (
    <div style={{ marginTop: "-35%" }}>
      {applicationData.map((application) => (
        <CastomContent
          key={application.id}
          title={application.name}
          // image={application.image1}
          ContentTitle={application.description}
        />
      ))}
      <div className="d-flex flex-wrap m-5  gap-5 justify-content-center">
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
