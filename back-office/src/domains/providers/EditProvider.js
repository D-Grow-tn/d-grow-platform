import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import HeaderPage from "../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProvide, updateProvide } from "../../store/provides";
import { showErrorToast, showSuccessToast } from "../../utils/toast";

function EditProvider() {
  const dispatch = useDispatch();
  const { providerId } = useParams();
  const navigate = useNavigate();
  const [readOnly, setReadOnly] = useState(true);
  const provider = useSelector((state) => state.provides.provide);
  const [auxProvider, setAuxProvider] = useState(null);
  const [inputs, setInputs] = useState([]);

  // console.log(provider  , "hereeeeee");

  useEffect(() => {
    dispatch(fetchProvide(providerId));
  }, [dispatch]);

  useEffect(() => {
    setAuxProvider(provider);
  }, [provider]);

  // console.log(auxProvider ,'hereeeeee');

  useEffect(() => {
    setInputs([
      {
        name: "name",
        label: "name",
        required: true,
        value: auxProvider?.name,
        width: 300,
        height: 100,
      },
      {
        name: "description",
        label: "Description",
        required: true,
        value: auxProvider?.description,
        width: 300,
        height: 100,
      },
      {
        name: "email",
        label: "email",
        required: true,
        value: auxProvider?.email,
        width: 300,
        height: 100,
      },
      {
        name: "phone",
        label: "phone",
        required: true,
        value: auxProvider?.phone,
        width: 300,
        height: 100,
      },
    ]);
  }, [auxProvider]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxProvider((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(auxProvider);
    const { name, description, email, phone } = auxProvider;
    dispatch(
      updateProvide({ name, description, email, phone, providerId })
    ).then((result) => {
      if (!result.error) {
        showSuccessToast("Provider has been updated");
        setReadOnly(true);
        navigate(`/provider`);
      } else {
        showErrorToast(result.error.message);
      }
    });
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
        setAuxProvider(provider);
        setReadOnly(true);
      },
    },
  ];

  return (
    <div>
      <HeaderPage title="Provider Information" />
      <div
        className="rounded-5 mt-3"
        style={{
          boxShadow: "0px 0px 8px #9E9E9E",
          padding: "50px",
          parent: "Administration",
        }}
      >
        <div className="d-flex justify-content-between align-items-center px-3 flex-wrap headerProfile">
          <div className="d-flex  align-items-center  gap-3 pb-3 ">
            <h1
              className="darkBlue"
              style={{
                fontSize: "45px",
              }}
            >
              {provider?.content}
            </h1>
          </div>
          {readOnly && (
            <button
              type="button"
              className="btn"
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
              Edit Provider <i className="fa-solid fa-play fa-fade px-2"></i>
            </button>
          )}
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

export default EditProvider;
