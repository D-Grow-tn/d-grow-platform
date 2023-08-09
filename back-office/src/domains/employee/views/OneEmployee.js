import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee,updateEmployee } from "../../../store/employees";
import { useParams } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";



function OneEmployee({setDepartment,department}) {
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee.employee);
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
      {
        name: "phone",
        label: "Phone",
        required: true,
        value: auxEmployee?.phone,
      },
      {
        name: "address",
        label: "Address",
        required: true,
        value: auxEmployee?.address,
      },
      {
        category: "select",
        label: "Direct Manager",
        placeholder: "Select Manager",
        name: "directManagerId",
        width: 250,
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        value:  auxEmployee?.employee,
        onChange: (value) => {
          setAuxEmployee((Employee) => ({ ...Employee, directManagerId: value }));
        },
      },
      // {
      //   category: "select",
      //   label: "Direct Manager",
      //   placeholder: "Select Employee",
      //   name: "directManegerId",
      //   width: 250,
      //   required: true,
      //   options: employees,
      //   optionLabel: "name",
      //   valueLabel: "id",
      //   value:  auxEmployee?.employee ,
      //   onChange: (value) => {
      //     setAuxEmployee
      //     ((Employee) => ({ ...Employee, directManegerId: value }));
      //   },
      // },
      // {
      //   category:"select",
      //   label: "Employee",
      //   name: "employeeId",
      //   required: true,
      //   options: employees,
      //   optionLabel: "name",
      //   valueLabel: "id",
        
      //   value: auxEvent?.employee ,
      //   onChange: (value) => {
      //    setAuxEvent((Event) => ({ ...Event, employeeId: value }));
      //   },

      // },
      {
        category: "select",
        label: "Department",
        placeholder: "Select Department",
        name: "departmentId",
        width: 250,
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        onChange: (value) => {
          setDepartment((department) => ({ ...department, departmentId: value }));
        },
      },
      {
        name: "bio",
        label: "Bio",
        required: true,
        value: auxEmployee?.bio,
        width:"600px",
        height:"300"
       
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
    console.log(auxEmployee);
    const { name, email, phone, address,bio,directManagerId } = auxEmployee;
    dispatch(updateEmployee({ name, phone, address, email,bio,directManagerId, employeeId })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Employee has been updated");
          setReadOnly(true);
        } else {
          showErrorToast(result.error.message);
        }
      }
    );
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
    <div style={{}}>
    <HeaderPage title="Employee Information" parent="HR" />

    <div
      className=" rounded-5  mt-3"
      style={{
        boxShadow: "0px 0px 8px #9E9E9E",
        padding: "50px",
      }}
    >
      <div className="d-flex  justify-content-between align-items-center px-3 flex-wrap headerProfile">
        <div className="d-flex  align-items-center  gap-3 pb-3 ">
          <img
            src={employee?.avatar?.path}
            class="rounded-circle "
            style={{
              width: "100px",
            }}
            alt="Avatar"
          />

          <h1
            className="darkBlue"
            style={{
              // textAlign: "center",
              // paddingBottom: "30px",
              fontSize: "45px",
            }}
          >
            {employee?.name}
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
            Edit Client <i class="fa-solid fa-play fa-fade px-2"></i>
          </button>
        )}
      </div>
      <div className=" d-flex justify-content-center mt-5">
        <Form
           inputsClassName="d-flex flex-wrap justify-content-center mt-5"
          onSubmit={onSubmit}
          inputs={inputs}
          inputsStyle={{ rowGap: 20 ,columnGap: 100}}
          numberInputPerRow={2}
          readOnly={readOnly}
          onChange={handleInputChange}
          buttonsClassName="mt-5 d-flex justify-content-center gap-3"
          buttons={!readOnly ? buttons : []}
        />

      </div>
    </div>
    </div>
  );
}

export default OneEmployee;
