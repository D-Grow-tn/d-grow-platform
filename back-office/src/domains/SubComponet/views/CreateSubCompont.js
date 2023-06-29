import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSubComponet } from "../../../store/subComponet";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../../../components/HeaderPage";
import Form from "../../../components/Form";

function CreateSubCompont() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subComponet, setSubComponet] = useState(null);
  const [inputs, setInputs] = useState([]);
  const subcomponets = useSelector(
    (state) => state.subComponet.subcomponets.items
  );

  useEffect(() => {
    setInputs([
      {
        label: "Name",
        placeholder: "Name",
        name: "name",
        required: true,
        width: 300,
      },
      {
        label: "Position",
        placeholder: "Position",
        name: "position",
        width: 300,
        required: true,
      },
    ]);
  }, [subcomponets]);
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createSubComponet(subComponet)).then((result) => {
      if (!result.error) {
        showSuccessToast("Client has been created");
        navigate(-1);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };
  const mainId = subcomponets[0].mainId;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubComponet((subComponet) => ({
      ...subComponet,
      mainId,
      [name]: value,
    }));
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
      <HeaderPage title="Create SubComponet" />
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
          <h1 st> Create SubComponet</h1>
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

export default CreateSubCompont;
