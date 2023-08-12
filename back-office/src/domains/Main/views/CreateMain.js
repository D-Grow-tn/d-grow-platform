import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { createMain } from "../../../store/main";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";

function CreateMain() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [main, setMain] = useState(null);

  const [inputs, setInputs] = useState([]);

  const mains = useSelector((state) => state.main.mains.items);

  useEffect(() => {
    setInputs([
      {
        label: "Title",
        placeholder: "Title",
        name: "title",
        required: true,
        width: 300,
      },
      {
        label: "Path",
        placeholder: "Path",
        name: "path",
        width: 300,
        required: true,
      },
      {
        label: "Type",
        placeholder: "Type",
        name: "type",
        width: 300,
        required: true,
      },
    ]);
  }, [mains]);
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createMain(main)).then((result) => {
      if (!result.error) {
        showSuccessToast("Client has been created");
        navigate(-1);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMain((main) => ({ ...main, [name]: value }));
  };
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
    <div  className="p-3">
      <HeaderPage title="Create Main" parent="WebSite Setting"/>
      <div className="py-3"></div>
      <div
        className=" rounded-5 p-3  "
        style={{
          boxShadow: "0px 0px 8px #54b4d3",
          backgroundColor: "white",
        }}
      >
        <div className="d-flex justify-content-center">
          <h1 st> Create Main Page </h1>
        </div>
        <Form
          className=" pt-4  "
          inputsClassName="d-flex flex-wrap justify-content-center  "
          inputsStyle={{
            rowGap: 20,
            columnGap: 100,
          }}
          numberInputPerRow={1}
          inputs={inputs}
          buttons={buttons}
          buttonsClassName="mt-5 d-flex justify-content-center gap-3"
          onSubmit={onSubmit}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default CreateMain;
