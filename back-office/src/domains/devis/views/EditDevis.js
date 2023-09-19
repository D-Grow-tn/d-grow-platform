import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchClients } from '../../../store/client';
import devis, { fetchDevis, updateDevis } from '../../../store/devis';
import HeaderPage from '../../../components/HeaderPage';
import Form from '../../../components/Form';
import { showErrorToast, showSuccessToast } from '../../../utils/toast';

function EditDevis() {
  const dispatch = useDispatch();
  const { quotationId } = useParams();
  const navigate = useNavigate();
  const [readOnly, setReadOnly] = useState(true);
  const [auxDevis, setAuxDevis] = useState(null);
  const [inputs, setInputs] = useState([]);
  const clients = useSelector((state) => state.client.clients.items);
  const devis = useSelector((state) => state.devis.devis);
  useEffect(() => {
    dispatch(fetchDevis(quotationId));
    dispatch(fetchClients());
  }, [dispatch]);

  useEffect(() => {
    setAuxDevis(devis);
  }, [devis]);

  useEffect(() => {
    setInputs([
      {
        name: "price",
        label: "Price",
        required: true,
        value: auxDevis?.price,
      },
      {
        name: "discreption",
        label: "Discreption",
        required: true,
        value: auxDevis?.discreption,
      },
      {
        category: "select",
        label: "Client",
        name: "clientId",
        required: true,
        options: clients,
        optionLabel: "name",
        valueLabel: "id",
        // value: auxDevis?.client?.map((elem)=>elem.name),
        onChange: (value) => {
          setAuxDevis((Devis) => ({ ...Devis, client:{connect:[{id:value}]}  }));
        },
      },
     
    ]);
  }, [auxDevis, clients]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxDevis((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { price, client,discreption} = auxDevis;
    dispatch(updateDevis({ client, price, discreption, quotationId })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Quotation has been updated");
          navigate("/quotation");
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
        setAuxDevis(devis);
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
        text={"Edit Quotation"}
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
              {devis?.client?.map((elem)=>elem.name)}
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

export default EditDevis