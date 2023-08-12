
import React from 'react';
import HeaderPage from '../../../components/HeaderPage';
import Form from "../../../components/Form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showErrorToast } from "../../../utils/toast";
import { createDecision } from "../../../store/decision";
import { fetchEmployees } from "../../../store/employees";

function CreateDecision() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const decisions = useSelector((state) => state.decision.decisions.items);
  const employees = useSelector((state) => state.employee.employees.items);
  const [decision, setDecision] = useState(null);
  const [employeeId, setEmployeeId] = useState(null);
  console.log("🚀 ~ file: CreateDecision.js:19 ~ CreateDecision ~ employeeId:", employeeId)

  const [inputs, setInputs] = useState([]);
  console.log("🚀 ~ file: CreateDecision.js:22 ~ CreateDecision ~ inputs:", inputs)
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDecision((decision) => ({ ...decision, [name]: value }));
    console.log(decision,"mmmmmmm");
  };
  
  const onSubmit = (e) => {
    e.preventDefault();

    let aux = Object.assign({}, decision);
    console.log('====================================');
    console.log(aux,"aUUUUUUUx");
    console.log('====================================');

    dispatch(createDecision(aux)).then((res) => {
      if (!res.error) {
        navigate(`/decision`);
      } else {
        console.log(res);
        showErrorToast(res.error.message);
      }
    });
  };
  const id = decisions[0]?.DecisionApply[0].employeeId
  console.log(decisions,"decisions")
  useEffect(() => {
    setInputs([
      {
        label: "Content",
        placeholder: "Add content",
        name: "content",
        required: true,
        width: 700,
        height:200
      },
      {
        category: "select",
        label: "Employee",
        placeholder: "Select an employee",
        name: "DecisionApply",
        width: 500,
        multiple:true,
        required: true,
        valueLabel: "id",
        optionLabel: "label",
        options: employees.map((employee) => ({ label: employee.name, value: employee.id })),
        value: (decisions[0]?.DecisionApply[0].employeeId) || "",
        
        onChange: (value) => {
          
          
       
          setDecision((Decision) => ({ ...Decision, decisionApplyIds: [id] }));
          console.log("id",id);
        },
      },
    ])}, [decisions]);
  
  
  const buttons = [
    {
      category: "cancel",
      name: "Cancel",
      onClick: () => navigate(-1),
      className: "",
      style: { width: 100 },
    },
    {
      category: "save",
      name: "Save",
      onSubmit,
      className: "",
      style: { width: 100 },
    },
  ];

  return (
    <div>
      <HeaderPage title="Create Decision" parent="HR" />
      <div className="py-3"></div>
      <div
        className=" rounded-5 p-3  "
        style={{
          boxShadow: "0px 0px 8px #54b4d3",
          backgroundColor: "white",
        }}
      >
      <Form
          className=" pt-4  "
          inputsClassName="d-flex flex-wrap justify-content-center "
          inputsStyle={{
            rowGap: 20,
            columnGap: 100,
          }}
          numberInputPerRow={1}
          inputs={inputs}
          buttons={buttons}
          buttonsClassName="mt-5 d-flex justify-content-center gap-3"
          onSubmit={onSubmit}
          onChange={handleChange}
        />
    </div>
    </div>
   
  )
}

export default CreateDecision;