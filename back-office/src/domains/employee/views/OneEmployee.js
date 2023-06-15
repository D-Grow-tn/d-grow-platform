import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee } from "../../../store/employees";
import { useParams } from "react-router-dom";

function OneEmployee() {
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee.employee);

  const [readOnly, setReadOnly] = useState(true);
  const [auxEmployee, setAuxEmployee] = useState(null);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    dispatch(fetchEmployee(employeeId));
  }, [dispatch]);

  useEffect(() => {
    setAuxEmployee(employee);
  }, [employee]);

  useEffect(() => {
    setInputs([
      {
        name: "name",
        label: "Name",
        required: true,
        value: auxEmployee?.name,
      },
      {
        name: "email",
        label: "Email",
        required: true,
        value: auxEmployee?.email,
      },
    ]);
  }, [auxEmployee]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setReadOnly(true);
    console.log(auxEmployee);
  };

  const buttons = [
    {
      category: "cancel",
      type: "button",
      name: "Cancel",
      onClick: () => {
        setReadOnly(true);
        setAuxEmployee(employee);
      },
    },
    {
      category: "save",
      name: "Save",
      onSubmit,
    },
  ];

  return (
    <div>
      <HeaderPage
        title={employee?.name}
        showButton={readOnly?true:false}
        buttonFunction={() => setReadOnly(false)}
        text={"Edit Employee"}
      />
      {/* <div className="popup">
        <h2 className="darkBlue">Employee Information</h2> */}

      <Form
        onSubmit={onSubmit}
        inputs={inputs}
        inputsClassName="d-flex gap-3 justify-content-around flex-wrap"
        buttons={!readOnly?buttons:[]}
        buttonsClassName="d-flex justify-content-end gap-3 m-3"
        onChange={handleInputChange}
        title={employee?.name}
        readOnly={readOnly}
      />
      {/* </div> */}
    </div>
  );
}

export default OneEmployee;
