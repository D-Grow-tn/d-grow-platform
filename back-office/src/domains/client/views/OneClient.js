import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchClient, updateClient } from "../../../store/client";

import ProjectTable from "../../../components/ProjectTable";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";

function OneClient() {
  const dispatch = useDispatch();
  const { clientId } = useParams();
  const navigate = useNavigate();
  const client = useSelector((state) => state.client.client);
  const [readOnly, setReadOnly] = useState(true);
  const [auxClient, setAuxClient] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [showProject, setShowProject] = useState(false);

  useEffect(() => {
    dispatch(fetchClient(clientId));
  }, [dispatch]);

  useEffect(() => {
    setAuxClient(client);
  }, [client]);

  useEffect(() => {
    setInputs([
      {
        name: "name",
        label: "Name",
        required: true,
        value: auxClient?.name,
      },
      {
        name: "email",
        label: "Email",
        required: true,
        value: auxClient?.email,
      },
      {
        name: "phone",
        label: "Phone",
        required: true,
        value: auxClient?.phone,
      },
      {
        name: "address",
        label: "Address",
        required: true,
        value: auxClient?.address,
      },
    ]);
  }, [auxClient]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("teeeest", auxClient);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(auxClient);
    const { name, email, phone, address } = auxClient;
    dispatch(updateClient({ name, phone, address, email, clientId })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Client has been updated");
          setReadOnly(true);
        } else {
          showErrorToast(result.error.message);
        }
      }
    );
  };

  const countProjects = () => {
    if (client?.project?.length <= 1) {
      return "project";
    }
    return "projects";
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
        setAuxClient(client);
        setReadOnly(true);
       
      },
    },
  ];

  const columns = [
    { id: "name", label: "Project", minWidth: 170 },
    { id: "status", label: "Status", minWidth: 100 },
    {
      id: "projectManager",
      label: "Project Manager",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "team",
      label: "Team",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "density",
      label: "Technogies",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  return (
    <div style={{}}>
      <HeaderPage title="Client Information" />

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
              src={client?.avatar.path}
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
              {client?.name}
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
        <div className="d-flex align-items-center ">
          <Form
            onSubmit={onSubmit}
            inputs={inputs}
            inputsClassName="d-flex flex-wrap px-3 gap-5"
            inputsStyle={{ rowGap: 20 }}
            numberInputPerRow={2}
            readOnly={readOnly}
            onChange={handleInputChange}
            buttonsClassName="d-flex justify-content-end gap-3"
            buttons={!readOnly ? buttons : []}
          />

          <Form style={{ paddingRight: "50px" }} />
        </div>

        <div style={{ marginTop: "80px" }}>
          <div className="d-flex  justify-content-between align-items-center my-5 py-4  flex-wrap headerProfile">
            <h1 className="darkBlue">Projects</h1>

            <div>
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
                  setShowProject(!showProject);
                }}
              >
                {client?.project?.length} {countProjects()}
                <i class="fa-solid fa-play fa-fade px-2"></i>
              </button>
            </div>
          </div>
        </div>

        {showProject && (
          <ProjectTable
            columns={columns}
            rows={client?.project ? client.project : []}
          />
        )}
      </div>
    </div>
  );
}

export default OneClient;
