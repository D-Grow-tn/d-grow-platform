import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee, updateEmployee } from "../../../store/employees";
import { useParams } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import "../../../assets/styles/OneEmployee.css";
import { AiOutlineEnvironment } from "react-icons/ai";
function OneEmployee({ setDepartment, department }) {
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee.employee);
  console.log("emp", employee?.avatar?.path);
  const employees = useSelector((state) => state.employee.employees.items);

  const [readOnly, setReadOnly] = useState(true);
  const [auxEmployee, setAuxEmployee] = useState(null);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    dispatch(fetchEmployee(employeeId));
  }, [dispatch]);

  useEffect(() => {
    setAuxEmployee(employee);
  }, [employee]);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="upper">
          <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />
        </div>
        <div className="user text-center">
          <div className="profile">
            <img
              src={employee?.avatar?.path}
              className="rounded-circle"
              width={90}
            />
             <h4 className="mb-0">{employee?.name}</h4>
          </div>
        </div>
        <div className=" d-flex flex-wrap justify-content-between " style={{padding: "30px"}}>
         

        
          <div className="  text-left">
            <span className="text-muted d-block mb-2">
              <AiOutlineEnvironment className="mb-1" /> {employee?.address}
            </span>
            <button className="btn btn-primary btn-sm follow">Follow</button>
            <div className="stats  ">
              <h6 className="mb-0">Email</h6>
              <>{employee?.email}</>
            </div>
            <div className="stats">
              <h6 className="mb-0">Phone</h6>
              <>{employee?.phone}</>
            </div>
          </div>
          <div>
          <div className="  text-muted   mb-2">{employee?.bio}</div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default OneEmployee;
