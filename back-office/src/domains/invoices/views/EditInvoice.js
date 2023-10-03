import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvoice, updateInvoice } from '../../../store/invoice';
import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import HeaderPage from '../../../components/HeaderPage';
import Form from '../../../components/Form';
import { fetchClients } from '../../../store/client';

function EditInvoice() {
  const dispatch = useDispatch();
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const [auxInvoice, setAuxInvoice] = useState(null);
  console.log("🚀 ~ file: EditInvoice.js:14 ~ EditInvoice ~ auxInvoice:", auxInvoice)
  const [readOnly, setReadOnly] = useState(true);
  const [inputs, setInputs] = useState([]);

  const clients = useSelector((state) => state.client.clients.items);
  const invoice = useSelector((state) => state.invoice.invoice);

  useEffect(() => {
    dispatch(fetchInvoice(invoiceId));
    dispatch(fetchClients())
  }, [dispatch]);

  useEffect(() => {
    setInputs([
      {
        category: "select",
        label: "Client",
        name: "clientId",
        required: true,
        options: clients,
        optionLabel: "name",
        valueLabel: "id",
        value: auxInvoice?.Client?.name,
        onChange: (value) => {
          setAuxInvoice((Invoice) => ({ ...Invoice, clientId: value }));
        },
      },
     
    ]);
  }, [auxInvoice, clients]);
  useEffect(() => {
    setAuxInvoice(invoice);
  }, [invoice]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxInvoice((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const {clientId} = auxInvoice;
    dispatch(updateInvoice({ clientId,invoiceId })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Invoice has been updated");
          navigate("/invoices");
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
        setAuxInvoice(invoice);
        setReadOnly(true);
      },
    },
  ];
  return (
    <div>
      <HeaderPage
        title="Contact Information"
        showButton={readOnly ? true : false}
        buttonFunction={() => setReadOnly(false)}
        text={"Edit Invoice"}
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
              {invoice?.client?.map((elem)=>elem.name)}
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
  )
}

export default EditInvoice
