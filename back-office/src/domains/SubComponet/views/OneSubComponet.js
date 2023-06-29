import React, { useEffect, useState } from 'react'
import Form from '../../../components/Form';
import HeaderPage from '../../../components/HeaderPage';
import { fetchSubComponet, updateSubComponet } from '../../../store/subComponet';
import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ContentSubComponentList from '../../contentSubComponent/views/ContentSubComponentList';

function OneSubComponet() {
  const dispatch = useDispatch();
  const { subcomponetId } = useParams();
  const subComponet = useSelector((state) => state?.subComponet?.subcomponet);
  console.log("🚀 ~ file: OneSubComponet.js:13 ~ OneSubComponet ~ subComponet:", subComponet)
  const [inputs, setInputs] = useState([]);
  const [show,setShow]= useState(false)
  const [readOnly, setReadOnly] = useState(true);
  const [aux, setAux] = useState(null);


  useEffect(() => {
    dispatch(fetchSubComponet(subcomponetId));
  }, [dispatch]);
  useEffect(() => {
    setAux(subComponet);
  }, [subComponet]);
  useEffect(() => {
    setInputs([
      {
        name: "name",
        label: "Name",
        required: true,
        value: aux?.name,
      },
      {
        name: "position",
        label: "Position",
        required: true,
        value: aux?.position,
      },
     
    ]);
  }, [aux]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAux((prevState) => ({
      ...prevState,
      [name]: value,
    }));
   
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, position} = aux;
    dispatch(updateSubComponet({ name, position, subcomponetId })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Client has been updated");
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
        setAux(subComponet);
        setReadOnly(true);
       
      },
    },
  ];
  const countProjects = () => {
    if (subComponet?.SubComponent?.length <= 1) {
      return "ContentSubComponent";
    }
    return "ContentSubComponents";
  };
  return (
    <div style={{}}>
    <HeaderPage title="SubComponet Information" />

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
            {/* {main?.SubComponent} */}
            {subComponet?.name}
          </h1>
        </div>

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
          Edit {subComponet?.name}<i class="fa-solid fa-play fa-fade px-2"></i>
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
    
      <div style={{ marginTop: "80px" }}>
        <div className="d-flex  justify-content-between align-items-center my-5 py-4  flex-wrap headerProfile">
          <h1 className="darkBlue">Content Sub componet</h1>

          <div>
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
                setShow(!show);
              }}
            >
              {subComponet?.ContentSubComponent.length} {countProjects()}
              <i class="fa-solid fa-play fa-fade px-2"></i>
            </button>
          </div>
        </div>

         {show && <ContentSubComponentList/>}
      </div>
      
     
</div>
  </div>
  )
}

export default OneSubComponet