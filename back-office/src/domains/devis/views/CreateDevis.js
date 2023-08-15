import React, { useEffect, useState } from 'react'
import { fetchClients } from '../../../store/client';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createDevis } from '../../../store/devis';
import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import HeaderPage from '../../../components/HeaderPage';
import Form from '../../../components/Form';

function CreateDevis() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [devis, setDevis] = useState([]);
  console.log("🚀 ~ file: CreateDevis.js:14 ~ CreateDevis ~ devis:", devis)
  const [inputs, setInputs] = useState([]);
  const clients = useSelector((state) => state.client.clients.items);
  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevis((devis) => ({ ...devis, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createDevis(devis)).then((res) => {
      showSuccessToast("Create Quotation succsesfuly ");
      if (!res.error) {
        navigate(`/quotation`);
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
        value: devis.name,
        required: true,
      },
      {
        label: "Descreption",
        placeholder: "Descreption",
        name: "discreption",
        width: 250,
        value: devis.name,
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
        value: devis.clientId || "",
        onChange: (value) => {
          setDevis((Devis) => ({ ...Devis, client:{connect:[{id:value}]}  }));
        },
      },
      
    ]);
  }, [clients]);
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
      <HeaderPage title="Create Quotation" />
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

export default CreateDevis