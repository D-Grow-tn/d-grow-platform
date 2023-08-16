import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevis } from "../../../store/devis";
import HeaderPage from "../../../components/HeaderPage";
function OneDevis() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quotationId } = useParams();
  const devis = useSelector((state) => state.devis.devis);

  useEffect(() => {
    dispatch(fetchDevis(quotationId));
  }, [dispatch]);

  return (
    <div>
      <HeaderPage
        title={"Contract View"}
        showButton={true}
        buttonFunction={() => navigate("/quotation/edit/" + quotationId)}
        text={"Edit Quotation"}
      />
      <div style={{ minWidth: "500px" }}>
        <div className="container d-flex justify-content-center align-items-center ">
          <div class="card  m-5 ">
            <div class="card-header d-flex justify-content-center align-items-center ">
              <h1> Quotation</h1>
            </div>
            <div class="card-body d-flex flex-column flex-md-row align-items-center d-flex justify-content-around gap-5">
              <div className=" ">
                <p class="card-text mt-5">
                  <h3 class="text-primary d-inline">Client Name:</h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {devis?.client?.map((elem) => elem.name)}
                  </h4>{" "}
                </p>

                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline">Quotation Number: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {devis?.devisNumber}
                  </h4>{" "}
                </p>

                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline">Price: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {devis?.price} $
                  </h4>{" "}
                </p>
                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline">Phone : </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {devis?.client?.map((elem) => elem.phone)}
                  </h4>{" "}
                </p>
                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline"> Description: </h3>
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {devis?.discreption}
                  </h4>{" "}
                </p>
                <div className="d-flex align-items-center gap-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneDevis;
