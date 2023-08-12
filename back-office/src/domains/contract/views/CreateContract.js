import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { fetchClients } from "../../../store/client";
import { createContact } from "../../../store/contact";
import { createContract } from "../../../store/contract";
import { fetchProjects } from "../../../store/projects";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";

function CreateContract() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contract, setContract] = useState([]);
  console.log("🚀 ~ file: CreateContract.js:16 ~ CreateContract ~ contract:", contract)
  const [inputs, setInputs] = useState([]);
  const clients = useSelector((state) => state.client.clients.items);
  const projects = useSelector((state) => state.project.projects.items);
  useEffect(() => {
    dispatch(fetchClients());
    dispatch(fetchProjects());
  }, [dispatch]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContract((contract) => ({ ...contract, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createContract(contract)).then((res) => {
      showSuccessToast("Create Contract succsesfuly ");
      if (!res.error) {
        navigate(`/contract`);
      } else {
        showErrorToast(res.error.message);
      }
    });
  };
  useEffect(() => {
    setInputs([
      {
        label: "Price",
        placeholder: "Price",
        name: "price",
        width: 250,
        value: contract.name,
        required: true,
      },
      {
        category: "select",
        label: "Client",
        placeholder: "Select client",
        name: "clientId",
        width: 250,
        required: true,
        options: clients,
        optionLabel: "name",
        valueLabel: "id",
        value: contract.clientId || "",
        onChange: (value) => {
          setContract((Contract) => ({ ...Contract, clientId: value }));
        },
      },
      {
        category: "select",
        label: "Project",
        placeholder: "Select project",
        name: "projectId",
        width: 250,
        required: true,
        options: projects,
        optionLabel: "name",
        valueLabel: "id",
        value: contract.projectId || "",
        onChange: (value) => {
          setContract((Contract) => ({ ...Contract, projectId: value }));
        },
      },
    ]);
  }, [clients,projects]);
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
      <HeaderPage title="Create Contract" />
      <div className="d-flex flex-wrap align-items-center justify-content-center px-3 pt-5 ">
        <div className="py-5  rounded-5  ">
          <div class="d-flex justify-content-center  mb-4">
            <Form
              className=" rounded-5 d-flex flex-wrap  justify-content-center align-items-center  "
              style={{
                boxShadow: "0px 0px 8px #9E9E9E",
                width: "593px",
                height: "500px",
                marginLeft: "50px",
              }}
              inputsClassName="d-flex justify-content-around  gap-3 flex-wrap"
              inputs={inputs}
              numberInputPerRow={2}
              onSubmit={onSubmit}
              onChange={handleChange}
              buttons={buttons}
              buttonsClassName=" d-flex justify-content-end gap-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateContract;
