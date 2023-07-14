import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTechnology, updateTechnology } from "../../../store/technology";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";

function OneClient() {
  const dispatch = useDispatch();
  const { technologyId } = useParams();
  const navigate = useNavigate();
  const technology = useSelector((state) => state.technology.technology);
  const [readOnly, setReadOnly] = useState(true);
  const [auxTechnology, setAuxTechnology] = useState(null);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    dispatch(fetchTechnology(technologyId));
  }, [dispatch]);

  useEffect(() => {
    setAuxTechnology(technology);
  }, [technology]);

  useEffect(() => {
    setInputs([
      {
        name: "name",
        label: "Name",
        required: true,
        value: auxTechnology?.name,
      },
      {
        name: "description",
        label: "Description",
        required: true,
        value: auxTechnology?.description,
      },
    ]);
  }, [auxTechnology]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxTechnology((prevState) => ({
      ...prevState,
      [name]: value,
    }));
   
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(auxTechnology);
    const { name, description} = auxTechnology;
    dispatch(updateTechnology({ name, description, technologyId })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Technology has been updated");
          setReadOnly(true);
          navigate(`/technology`)
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
        setAuxTechnology(technology);
        setReadOnly(true);
       
      },
    },
  ];


  return (
    <div style={{}}>
      <HeaderPage title="Technology Information" />

      <div
        className=" rounded-5  mt-3"
        style={{
          boxShadow: "0px 0px 8px #9E9E9E",
          padding: "50px",
        }}
      >
        <div className="d-flex  justify-content-between align-items-center px-3 flex-wrap headerProfile">

          {readOnly && (
            <button
              type="button"
              class="btn"
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
              Edit Technology <i class="fa-solid fa-play fa-fade px-2"></i>
            </button>
          )}
        </div>
        <div className="d-flex justify-content-center mt-5 ">
          <Form
            onSubmit={onSubmit}
            inputs={inputs}
            inputsClassName="d-flex flex-wrap justify-content-center mt-5"
            inputsStyle={{ rowGap: 20 ,columnGap: 100}}
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

export default OneClient;
