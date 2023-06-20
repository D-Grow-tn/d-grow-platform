import React from 'react';
import HeaderPage from '../../../components/HeaderPage';
import Form from "../../../components/Form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { createDecision, fetchDecisions } from "../../../store/decision";

function CreateDecision() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const decisions = useSelector((state) => state.decision.decisions.items);
  const [decision, setDecision] = useState(null);
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    dispatch(fetchDecisions());
    // dispatch(fetchDepartments())
  }, [dispatch])
  
  useEffect(() => {
    setInputs([
      // {
      //   label: "Title",
      //   placeholder: "Add title",
      //   name: "title",
      //   required: true,
      //   width: 300,
      // },
      {
        label: "Content",
        placeholder: "Add content",
        name: "content",
        required: true,
        width: 500,
      },
    ])}, [decisions]);
  
    const handleChange = (e) => {
    const { name, value } = e.target;
    setDecision((Decision) => ({ ...Decision, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(decision);
    dispatch(createDecision(decision)).then((result) => {
      if (!result.error) {
        showSuccessToast("Decision has been created");
        navigate(-1);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };

  
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
      <HeaderPage title="Create Decision" />
      <Form
          className=" pt-4  "
          inputsClassName="d-flex flex-wrap justify-content-center  "
          inputsStyle={{
            rowGap: 20,
            columnGap: 100,
          }}
          numberInputPerRow={2}
          inputs={inputs}
          buttons={buttons}
          buttonsClassName="mt-5 d-flex justify-content-end gap-3"
          onSubmit={onSubmit}
          onChange={handleChange}
        />
    </div>
  )
}

export default CreateDecision;