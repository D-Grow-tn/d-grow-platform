import React, { useEffect, useState } from 'react'
import HeaderPage from '../../../components/HeaderPage'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchContract } from '../../../store/contract';
import { fetchEmployee } from '../../../store/employees';
import { fetchContacts } from '../../../store/contact';
function ContractView() {
const navigate=useNavigate()
const dispatch = useDispatch()
const {contractId}= useParams()
const contract = useSelector((state)=>state.contract.contract)
const projectManagerId =contract?.project?.projectManagerId
const projectManager = useSelector((state)=>state.employee.employee)
const [formattedCreatedAt, setFormattedCreatedAt] = useState("");
const [formattedEndAt, setFormattedEndAt] = useState("");
useEffect(()=>{
   dispatch(fetchContract(contractId))
   dispatch(fetchEmployee(projectManagerId))
},[dispatch])
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
      buttonFunction={() => navigate("/contract/one/"+ contractId)}
      text={"Edit Contract"}
    />
   
 <div className="container d-flex justify-content-center align-items-center ">
        <div class="card  m-5 ">

          <div class="card-header d-flex justify-content-center align-items-center ">
          <h1>  Contract</h1>
          </div>
          <div class="card-body d-flex flex-column flex-md-row align-items-center d-flex justify-content-around gap-5">
            <div className=" ">

              <p class="card-text m-0 mt-5">
                  <h1 class="text-muted">Project Name: {contract?.project?.name}</h1>{" "}
                </p>
             
              <p class="card-text mt-5">
                <h1 class="text-muted">Client Name: {contract?.client?.name}</h1>{" "}
               
              </p>

              <p class="card-text m-0 mt-5">
                  <h1 class="text-muted">Project Manager: {projectManager?.name} </h1>{" "}
                </p>

                <p class="card-text m-0 mt-5">
                  <h1 class="text-muted">Price:{contract?.price} $</h1>{" "}
                </p>
                <p class="card-text m-0 mt-5">
                  <h1 class="text-muted">Phone :{contract?.client?.phone} </h1>{" "}
                </p>
                <p class="card-text m-0 mt-5" >
               <h1> Description: {contract?.project?.description}</h1>
              </p>
              <div className="d-flex align-items-center gap-3">
              </div>

              <p class="card-text mt-5">
                <h1 class="text-muted">Duration: {contract?.project?.duration} </h1>
               
              </p>
            </div>
          </div>
          <div
            class="card-footer text-muted d-flex justify-content-center align-items-center "
            id="dateDiv"
          >
          <h3>  {`Start: ${formattedCreatedAt} End: ${formattedEndAt}`}</h3>
          </div>
        </div>
      </div>
  </div>
  )
}

export default ContractView