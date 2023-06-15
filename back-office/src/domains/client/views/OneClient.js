import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { fetchClient } from "../../../store/client";

function OneClient() {
  const { clientId } = useParams();
  const dispatch = useDispatch();
  const client = useSelector((state) => state.client.client);

  const [readOnly, setReadOnly] = useState(true);
  const [auxClient, setAuxClient] = useState(null);
  const [inputs, setInputs] = useState([]);

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
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setReadOnly(true);
    console.log(auxClient);
  };

  const buttons = [
    {
      category: "cancel",
      type: "button",
      name: "Cancel",
      onClick: () => {
        setReadOnly(true);
        setAuxClient(client);
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
      <HeaderPage
        title={client?.name}
        showButton={readOnly?true:false}
        buttonFunction={() => setReadOnly(false)}
        text={"Edit Client"}
      />
      {/* <div className="popup">
        <h2 className="darkBlue">Client Information</h2> */}

      <Form
        onSubmit={onSubmit}
        inputs={inputs}
        inputsClassName="d-flex justify-content-between flex-wrap px-5 "
        inputsStyle={{rowGap:20}}
        numberInputPerRow={3}
        buttons={!readOnly?buttons:[]}
        buttonsClassName="d-flex justify-content-end gap-3 m-3"
        onChange={handleInputChange}
        title={client?.name}
        readOnly={readOnly}
      />
      {/* </div> */}
    </div>
  );
}

export default OneClient;
