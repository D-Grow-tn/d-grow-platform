import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import HeaderPage from "../../../components/HeaderPage";
import Form from "../../../components/Form";
import { Button } from "react-bootstrap";
import { createEmployee, fetchEmployees } from "../../../store/employees";
import OneEmployee from "./OneEmployee";

function CreateEmployee() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employee.employees.items);
  const [department, setDepartment] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
    setInputs([
      {
        label: "Name",
        placeholder: "Name",
        name: "name",
        required: true,
        width: 300,
      },
      {
        label: "Email",
        placeholder: "email@gmail.com",
        name: "email",
        width: 300,
        required: true,
      },
      {
        label: "Address",
        placeholder: "5 street d-grow",
        name: "address",
        width: 300,
        required: true,
      },
      {
        label: "Phone Number",
        placeholder: "20 200 200",
        name: "phone",
        width: 300,
        required: true,
      },

      {
        category: "select",
        label: "Direct Manager",
        placeholder: "Select Manager",
        name: "directManagerId",
        width: 300,
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        value: employees.directManagerId || "",
        onChange: (value) => {
          setEmployee((Employee) => ({ ...Employee, directManegerId: value }));
        },
      },

      {
        category: "select",
        label: "Department",
        placeholder: "Select Department",
        name: "departmentId",
        width: 300,
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        onChange: (value) => {
          setDepartment((department) => ({
            ...department,
            departmentId: value,
          }));
        },
      },

      {
        // rows: 2,
        multiline: true,
        label: "Bio",
        placeholder: "Write your bio here",
        name: "bio",
        width: 500,
        height: 300,
        required: true,
      },
    ]);
  }, [employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((Employee) => ({ ...Employee, [name]: value }));
   
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(employee);
    dispatch(createEmployee(employee)).then((result) => {
      if (!result.error) {
        showSuccessToast("Employee has been created");
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
    <div className="">
      <HeaderPage title="Create employee" />
      <div className="py-3"></div>
      <div
        className=" rounded-5 p-3  "
        style={{
          boxShadow: "0px 0px 8px #54b4d3", //old boxShadow #9E9E9E
          backgroundColor: "white",
        }}
      >
        {" "}
        <div class="d-flex justify-content-center  mb-3">
          <img
            src="data:image/png;base64,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"
            className="rounded-circle"
            alt="example placeholder"
            style={{ width: "150px" }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <div className="btn btn-primary btn-rounded">
            <label className="form-label text-white m-1" for="customFile2">
              select picture
            </label>
            <input
              type="file"
              className="form-control d-none"
              id="customFile2"
            />
          </div>
        </div>
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
          buttonsClassName="mt-5 d-flex justify-content-center gap-3"
          onSubmit={onSubmit}
          onChange={handleChange}
        />
        {isOpen && (
          <OneEmployee
            employees={employees}
            department={department}
            setDepartment={setDepartment}
          />
        )}
      </div>
    </div>
  );
}

export default CreateEmployee;
