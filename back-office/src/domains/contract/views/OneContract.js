import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchContract, updateContract } from "../../../store/contract";
import { fetchClients } from "../../../store/client";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import HeaderPage from "../../../components/HeaderPage";
import Form from "../../../components/Form";
import { fetchProjects } from "../../../store/projects";

function OneContract() {
  const dispatch = useDispatch();
  const { contractId } = useParams();
  const navigate = useNavigate();
  const [readOnly, setReadOnly] = useState(true);
  const [auxContact, setAuxContact] = useState(null);
  const [inputs, setInputs] = useState([]);
  const clients = useSelector((state) => state.client.clients.items);
  const contract = useSelector((state) => state.contract.contract);
  const projects = useSelector((state) => state.project.projects.items);
  useEffect(() => {
    dispatch(fetchContract(contractId));
    dispatch(fetchClients());
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    setAuxContact(contract);
  }, [contract]);

  useEffect(() => {
    setInputs([
      {
        name: "price",
        label: "Price",
        required: true,
        value: auxContact?.price,
      },
      {
        category: "select",
        label: "Client",
        name: "clientId",
        required: true,
        options: clients,
        optionLabel: "name",
        valueLabel: "id",
        value: auxContact?.client?.name,
        onChange: (value) => {
          setAuxContact((Contract) => ({ ...Contract, clientId: value }));
        },
      },
      {
        category: "select",
        label: "Project",
        name: "projectId",
        required: true,
        options: projects,
        optionLabel: "name",
        valueLabel: "id",
        value: auxContact?.project?.name,
        onChange: (value) => {
          setAuxContact((Contract) => ({ ...Contract, projectId: value }));
        },
      },
    ]);
  }, [auxContact, clients, projects]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { price, clientId, projectId } = auxContact;
    dispatch(updateContract({ clientId, price, projectId, contractId })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Contract has been updated");
          navigate("/contract");
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
        setAuxContact(contract);
        setReadOnly(true);
      },
    },
  ];

  return (
    <div style={{}}>
      <HeaderPage
        title="Contact Information"
        showButton={readOnly ? true : false}
        buttonFunction={() => setReadOnly(false)}
        text={"Edit Project"}
      />

      <div
        className=" rounded-5  mt-3"
        style={{
          boxShadow: "0px 0px 8px #9E9E9E",
          padding: "50px",
        }}
      >
        <div className="d-flex  justify-content-between align-items-center px-3 flex-wrap headerProfile">
          <div className="d-flex  align-items-center  gap-3 pb-3 ">
            <h1
              className="darkBlue"
              style={{
                fontSize: "45px",
              }}
            >
              {contract?.client?.name}
            </h1>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 ">
          <Form
            onSubmit={onSubmit}
            inputs={inputs}
            inputsClassName="d-flex flex-wrap justify-content-center mt-5"
            inputsStyle={{ rowGap: 20, columnGap: 100 }}
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

export default OneContract;
