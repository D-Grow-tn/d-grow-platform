import React, { useEffect, useState } from "react";
import HeaderPage from "../../../components/HeaderPage";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchContract } from "../../../store/contract";
import { fetchEmployee } from "../../../store/employees";
import { fetchContacts } from "../../../store/contact";
function ContractView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { contractId } = useParams();
  const contract = useSelector((state) => state.contract.contract);
  const projectManagerId = contract?.project?.projectManagerId;
  const projectManager = useSelector((state) => state.employee.employee);
  const [formattedCreatedAt, setFormattedCreatedAt] = useState("");
  const [formattedEndAt, setFormattedEndAt] = useState("");
  useEffect(() => {
    dispatch(fetchContract(contractId));
    dispatch(fetchEmployee(projectManagerId));
  }, [dispatch]);
  useEffect(() => {
    function formatDate(dateString) {
      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }
      const day = date.getDate();
      const month = date.getMonth() + 1; // Adding 1 because months are zero-based
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    }
    const createdAt = contract?.project?.createdAt;
    const endAt = contract?.project?.endAt;

    const formattedCreatedAt = formatDate(createdAt);
    const formattedEndAt = formatDate(endAt);

    setFormattedCreatedAt(formattedCreatedAt);
    setFormattedEndAt(formattedEndAt);
  }, [contract]);
  return (
    <div>
      <HeaderPage
        title={"Contract View"}
        showButton={true}
        buttonFunction={() => navigate("/contract/one/" + contractId)}
        text={"Edit Contract"}
      />

      <div className="container d-flex justify-content-center align-items-center ">
        <div class="card  m-5 ">
          <div class="card-header d-flex justify-content-center align-items-center ">
            <h1> Contract</h1>
          </div>
          <div class="card-body d-flex flex-column flex-md-row align-items-center d-flex justify-content-around gap-5">
            <div className=" ">
              <p class="card-text m-0 mt-5">
                <h3 class="text-primary d-inline">Project Name: </h3>{" "}
                <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                  {" "}
                  {contract?.project?.name}
                </h4>{" "}
              </p>

              <p class="card-text mt-5">
                <h3 class="text-primary d-inline">Client Name:</h3>{" "}
                <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                  {" "}
                  {contract?.client?.name}
                </h4>{" "}
              </p>

              <p class="card-text m-0 mt-5">
                <h3 class="text-primary  d-inline">Project Manager: </h3>{" "}
                <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                  {" "}
                  {projectManager?.name}
                </h4>{" "}
              </p>
              <p class="card-text m-0 mt-5">
                <h3 class="text-primary d-inline">Contract Number: </h3>{" "}
                <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                  {" "}
                  {contract?.contractNumber}
                </h4>{" "}
              </p>

              <p class="card-text m-0 mt-5">
                <h3 class="text-primary d-inline">Price: </h3>{" "}
                <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                  {" "}
                  {contract?.price} $
                </h4>{" "}
              </p>
              <p class="card-text m-0 mt-5">
                <h3 class="text-primary d-inline">Phone : </h3>{" "}
                <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                  {" "}
                  {contract?.client?.phone}
                </h4>{" "}
              </p>
              <p class="card-text m-0 mt-5">
                <h3 class="text-primary d-inline"> Description: </h3>
                <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                  {" "}
                  {contract?.project?.description}
                </h4>{" "}
              </p>
              <div className="d-flex align-items-center gap-3"></div>

              <p class="card-text mt-5">
                <h3 class="text-primary d-inline">Duration: </h3>
                <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                  {" "}
                  {contract?.project?.duration}
                </h4>{" "}
              </p>
            </div>
          </div>
          <div
            class="card-footer text-dark d-flex justify-content-center align-items-center "
            id="dateDiv"
          >
            <h5> {`Start: ${formattedCreatedAt} End: ${formattedEndAt}`}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractView;
