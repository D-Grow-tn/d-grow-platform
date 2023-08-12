import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRequest } from "../../../store/request";
import { fetchEmployeeTree, fetchEmployees } from "../../../store/employees";
import HeaderPage from "../../../components/HeaderPage";
import Form from "../../../components/Form";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
function CreateRequest() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employee.employees.items);
  const [request, setRequest] = useState(null);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    dispatch(fetchEmployeeTree());
  }, [dispatch]);

  useEffect(() => {
    setInputs([
      {
        label: "subject",
        placeholder: "request's subject",
        name: "subject",
        required: true,
      },
      {
        multiline: true,
        label: "content",
        placeholder: "content's subject",
        height: "200px",
        name: "content",
        required: true,
      },
      {
        category: "select",
        label: "Send to",
        placeholder: "Send to",
        name: "receiverId",
        required: true,
        optionLabel: "name",
        valueLabel: "id",
        options: employees,
        onChange: (value) => {
          setRequest((request) => ({ ...request, receiverId: value }));
        },
      },
    ]);
  }, [employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest((request) => ({ ...request, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createRequest(request)).then((result) => {
      if (!result.error) {
        showSuccessToast("request created successfully");
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
      onClick: () => navigate - 1,
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
      <HeaderPage title="Create request" parent="Administration"/>
      <div className="py-5"></div>

      <div className="d-flex justify-content-center">
        {/* <div className="btn btn-primary btn-rounded">
          <label className="form-label text-white m-1" for="customFile2">
            upload a media 
          </label>
          <input
            type="file"
            className="form-control d-none"
            id="customFile2"
          />
        </div> */}
        <div>
          <Form
            className=" rounded-5 p-5"
            style={{
              boxShadow: "0px 0px 8px #9E9E9E",
              width: "600px",
              // height:"400px",
              alignItems: "center",
            }}
            inputsClassName="d-flex justify-content-around gap-3 flex-wrap"
            inputs={inputs}
            buttons={buttons}
            buttonsClassName="mt-5 d-flex justify-content-end gap-3"
            onSubmit={onSubmit}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateRequest;
