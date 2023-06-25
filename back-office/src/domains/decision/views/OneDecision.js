import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDecision, updateDecision } from "../../../store/decision";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { fetchEmployees } from "../../../store/employees";

function OneDecision() {
  const dispatch = useDispatch();
  const { decisionId } = useParams();
  const decision = useSelector((state) => state.decision.decision);
  const employees = useSelector((state) => state.employee.employees.items);
  const [readOnly, setReadOnly] = useState(true);
  const [auxDecision, setAuxDecision] = useState(null);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    dispatch(fetchDecision(decisionId));
    dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
    setAuxDecision(decision);
  }, [decision]);

  useEffect(() => {
    setInputs([
      {
        field: "content",
        label: "Content",
        required: true,
        value: auxDecision?.content,
        width: 700,
        height: 200
      },
      {
        category:"select",
        label: "Employee",
        name: "DecisionApply.employeeId",
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        width:500,
        
        value: auxDecision?.DecisionApply[0].employee?.name,
        onChange: (value) => {
         setAuxDecision((decision) => ({ ...decision, employeeId: value }));
        },

      }
    ]);
  }, [auxDecision]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxDecision((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("teeeest", auxDecision);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(auxDecision);
    const { content } = auxDecision;
    dispatch(updateDecision({ content, decisionId })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Decision has been updated");
          setReadOnly(true);
        } else {
          showErrorToast(result.error.message);
        }
      }
    );
  };

  const buttons = [
    {
      category: "save",
      name: "Save",
      onSubmit,

    },
    {
      category: "cancel",
      type: "button",
      name: "Cancel",
      onClick: () => {
        setAuxDecision(decision);
        setReadOnly(true);
       
      },
    },
  ];

  return (
     <div style={{}}>
      <HeaderPage title="Decision Information" />

<div
  className=" rounded-5  mt-3"
  style={{
    boxShadow: "0px 0px 8px #9E9E9E",
    padding: "50px",
  }}
>
  <div className="d-flex  justify-content-between align-items-center p-3 flex-wrap headerProfile">
    <div className="d-flex  align-items-center  gap-3 pb-3 ">
   

      <h1
        className="darkBlue"
        style={{
          // textAlign: "center",
          // paddingBottom: "30px",
          fontSize: "45px",
        }}
      >
        {decision?.content}
      </h1>
    </div>

    {readOnly && (
      <button
        type="button"
        class="btn"
        style={{
          height: "40px",
          background: "#2351AD",
          color: "white",
          borderRadius: "8px",
          marginRight: "50px",
        }}
        onClick={() => {
          setReadOnly(false);
         
        }}
      >
        Edit Decision <i class="fa-solid fa-play fa-fade px-2"></i>
      </button>
    )}
  </div>
  <div className="d-flex align-items-center ">
    <Form
       className=" pt-4  "
      onSubmit={onSubmit}
      inputs={inputs}
      inputsClassName="d-flex flex-wrap justify-content-center "
      inputsStyle={{ rowGap: 20 , columnGap: 100}}
      numberInputPerRow={1}
      readOnly={readOnly}
      onChange={handleInputChange}
      buttonsClassName=" mt-5 d-flex justify-content-center gap-3"
      buttons={!readOnly ? buttons : []}
    />

    <Form style={{ paddingRight: "50px" }} />
  </div>
      </div>
      </div>
  );
}

export default OneDecision;
