import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showErrorToast, showSuccessToast } from "../../utils/toast";
import { createProvide } from "../../store/provides";
import HeaderPage from "../../components/HeaderPage";
import Form from "../../components/Form";

function CreateProvider() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [provide, setProvide] = useState({});
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    setInputs([
      {
        label: "name",
        placeholder: "Provider name",
        name: "name",
        width: 250,
        value: provide.name,
        required: true,
      },
      {
        label: "description",
        placeholder: "put your description",
        value: provide.description,
        height: "200px",
        name: "description",
        required: true,
      },

      {
        label: "email",
        placeholder: "Provider email",
        name: "email",
        width: 250,
        value: provide.email,
        required: true,
      },
      {
        label: "phone",
        placeholder: "Provider phone",
        name: "phone",
        width: 250,
        value: provide.phone,
        required: true,
      },
    ]);
  }, [provide]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProvide((Provide) => ({ ...Provide, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createProvide(provide)).then((res) => {
      if (!res.error) {
        showSuccessToast("Provider created successfully");
        navigate(`/provider`);
      } else {
        showErrorToast(res.error.message);
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
    <div>
      <HeaderPage title={"Create Provider"} />
      <div className="py-5"></div>
      <div className="d-flex justify-content-center">
        <div>
          <Form
            className=" rounded-5 p-5"
            style={{
              boxShadow: "0px 0px 8px #9E9E9E",
              width: "600px",
              alignItems: "center",
            }}
            inputsClassName="d-flex justify-content-around gap-3 flex-wrap"
            inputs={inputs}
            buttons={buttons}
            buttonsClassName="mt-5 d-flex justify-content-end gap-3"
            onSubmit={onSubmit}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateProvider;
