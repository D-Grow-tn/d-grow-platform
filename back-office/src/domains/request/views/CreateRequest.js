import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRequest } from "../../../store/request";
import { fetchEmployeeTree } from "../../../store/employees";
import HeaderPage from "../../../components/HeaderPage";
import Form from "../../../components/Form";
import { showErrorToast } from "../../../utils/toast";
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
        name: "recieverId",
        required: true,
        optionLabel: "name",
        valueLabel: "id",
        options:employees,
      },
    ]);
  }, [employees]);

  const handlChange = (e) => {
    const { name, value } = e.target;
    setRequest((request) => ({ ...request, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(request, "heeeeere");
    dispatch(createRequest(request)).then((result) => {
      if (!result.error) {
        showErrorToast("request created succefully");
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
      <HeaderPage title="Create request" />
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
            onChange={handlChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateRequest;
