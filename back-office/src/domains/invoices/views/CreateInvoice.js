import React, { useState } from 'react'
import HeaderPage from '../../../components/HeaderPage'
import { useDispatch,useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import { fetchClients } from '../../../store/client';
import { useEffect } from 'react';
import Form from '../../../components/Form';
import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import { createInvoice } from '../../../store/invoice';
function CreateInvoice() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invoice,setInvoice]=useState([])
  const [inputs, setInputs] = useState([]);

  console.log("🚀 ~ file: CreateInvoice.js:12 ~ CreateInvoice ~ invoice:", invoice)
  const clients = useSelector((state)=>state.client.clients.items)
  console.log("🚀 ~ file: CreateInvoice.js:11 ~ CreateInvoice ~ clients:", clients)
  useEffect(()=>{
    dispatch(fetchClients())
  },[dispatch])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice((invoice) => ({ ...invoice, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createInvoice(invoice)).then((res) => {
      showSuccessToast("Create Invoice succsesfuly ");
      if (!res.error) {
        navigate(`/invoices`);
      } else {
        showErrorToast(res.error.message);
      }
    });
  };
  useEffect(() => {
    setInputs([
      
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
        value: invoice.clientId || "",
        onChange: (value) => {
          setInvoice((Invoice) => ({ ...Invoice, clientId: value }));
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
      <HeaderPage title={'Create Invoice '} parent="Administration"/>
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
  )
}

export default CreateInvoice
