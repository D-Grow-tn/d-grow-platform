import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import HeaderPage from "../../../components/HeaderPage";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import Form from "../../../components/Form";
import {createTechnology,fetchTechnologies} from "../../../store/technology";

function CreateTechnology() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [technology, setTechnology] = useState(null);
  const [inputs, setInputs] = useState([]);
  const technologies=useSelector((state) => state.technology.technologies.items)

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);


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
        label: "Description",
        placeholder: "write your description here",
        name: "description",
        width: 500,
        height: 100,
        required: true,
      },
  
    ]);
  }, [technologies]);
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTechnology(technology)).then((result) => {
      if (!result.error) {
        showSuccessToast("Technology has been created");
        navigate(-1);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };



const handleChange = (e) => {
  const { name, value } = e.target;
  setTechnology((Technology) => ({ ...Technology, [name]: value }));
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
       <HeaderPage title={'Create Technology'}parent="PMO" />
       <div className="py-3"></div>
      <div
        className=" rounded-5 p-3  "
        style={{
          boxShadow: "0px 0px 8px #54b4d3",
          backgroundColor: "white",
        }}
      >
        {" "}
        <Form
          className=" pt-4  "
          // style={{
          //   border: "1px solid red",
          // }}
          inputsClassName="d-flex flex-wrap justify-content-center  "
          inputsStyle={{
            rowGap: 20,
            columnGap: 100,
            // border: "1px solid black",
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
  )
}

export default CreateTechnology;
