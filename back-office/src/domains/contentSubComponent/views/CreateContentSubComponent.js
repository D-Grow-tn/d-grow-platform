import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContentSubComponet } from "../../../store/contentsubcomponet";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";

function CreateContentSubComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contentsubComponet, setContensubComponet] = useState(null);

  const [inputs, setInputs] = useState([]);
  const contentsubcomponets = useSelector(
    (state) => state.contentsubcomponet.contentsubcomponets.items
  );

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
        label: "Content",
        placeholder: "Content",
        name: "content",
        width: 300,
        required: true,
      },
      {
        label: "NavigateTo",
        placeholder: "NavigateTo",
        name: "navigateTo",
        width: 300,
        required: true,
      },
    ]);
  }, [contentsubcomponets]);
  const subComponentId = contentsubcomponets[0]?.subComponentId;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContensubComponet((contentsubComponet) => ({
      ...contentsubComponet,
      subComponentId,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createContentSubComponet(contentsubComponet)).then((result) => {
      if (!result.error) {
        showSuccessToast("contentsubComponet has been created");
        navigate(-1);
      } else {
        showErrorToast(result.error.message);
      }
    });
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
    <div>
      <HeaderPage title="Create ContentSubComponet" />
      <div className="py-3"></div>
      <div
        className=" rounded-5 p-3  "
        style={{
          boxShadow: "0px 0px 8px #54b4d3",
          backgroundColor: "white",
        }}
      >
        {" "}
        <div className="d-flex justify-content-center">
          <h1 st> Create ContentSubComponet</h1>
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

export default CreateContentSubComponent;
