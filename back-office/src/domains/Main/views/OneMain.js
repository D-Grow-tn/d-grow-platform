import React, { useEffect, useState } from 'react'
import { fetchMain, updateMain } from '../../../store/main';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import HeaderPage from '../../../components/HeaderPage';
import Form from '../../../components/Form';
import CastomName from '../../../components/CastomName';
import SubComponetList from '../../SubComponet/views/SubComponetList';

function OneMain() {
  const dispatch = useDispatch();
  const { mainId } = useParams();
  console.log("🚀 ~ file: OneMain.js:12 ~ OneMain ~ mainId:", mainId)
  const main = useSelector((state) => state.main.main);
  console.log("🚀 ~ file: OneMain.js:14 ~ OneMain ~ main:", main)
  const [readOnly, setReadOnly] = useState(true);
  const [auxClient, setAuxClient] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [showProject, setShowProject] = useState(false);
  const [show,setShow]= useState(false)

    useEffect(() => {
        dispatch(fetchMain(mainId));
      }, [dispatch]);
      useEffect(() => {
        setAuxClient(main);
      }, [main]);
      useEffect(() => {
        setInputs([
          {
            name: "title",
            label: "Title",
            required: true,
            value: auxClient?.title,
          },
          {
            name: "path",
            label: "Path",
            required: true,
            value: auxClient?.path,
          },
          {
            name: "type",
            label: "Type",
            required: true,
            value: auxClient?.type,
          },
         
        ]);
      }, [auxClient]);
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAuxClient((prevState) => ({
          ...prevState,
          [name]: value,
        }));
       
      };
      const onSubmit = (e) => {
        e.preventDefault();
        const { title, path, type} = auxClient;
        dispatch(updateMain({ title, path, type, mainId })).then(
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
      function handleReadOnlyChange(value) {
        // Handle the state update in the parent component
        setInputs(value)
      }
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
            setAuxClient(main);
            setReadOnly(true);
           
          },
        },
      ];
      const countProjects = () => {
        if (main?.SubComponent?.length <= 1) {
          return "SubComponent";
        }
        return "SubComponents";
      };
    //   const columns = [
    //     { id: "title", label: "Title", minWidth: 170 },
    //     { id: "status", label: "Status", minWidth: 100 },
    //     {
    //       id: "projectManager",
    //       label: "Project Manager",
    //       minWidth: 170,
    //       align: "right",
    //       format: (value) => value.toLocaleString("en-US"),
    //     },
    //     {
    //       id: "team",
    //       label: "Team",
    //       minWidth: 170,
    //       align: "right",
    //       format: (value) => value.toLocaleString("en-US"),
    //     },
    //     {
    //       id: "density",
    //       label: "Technogies",
    //       minWidth: 170,
    //       align: "right",
    //       format: (value) => value.toFixed(2),
    //     },
    //   ];
  return (
    <div style={{}}>
      <HeaderPage title="Main Information" />

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
              {main?.title}
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
            Edit {main?.title}<i class="fa-solid fa-play fa-fade px-2"></i>
            </button>
          )}
        </div>
        {/* <CastomName  
        title={main?.title}
        readOnly={true}
        setReadOnly={  handleReadOnlyChange(false)}
      
        ButtonName=" Edit Main"
        /> */}
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
            <h1 className="darkBlue">Sub componet</h1>

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
                  // setShowProject(!showProject)
                  setShow(!show);
                }}
              >
                {main?.SubComponent.length} {countProjects()}
                <i class="fa-solid fa-play fa-fade px-2"></i>
              </button>
            </div>
          </div>

           {show && <SubComponetList mainId={mainId}/>}
        </div>
        
       

        {/* <div style={{ marginTop: "80px" }}>
          <div className="d-flex  justify-content-between align-items-center my-5 py-4  flex-wrap headerProfile">
            <h1 className="darkBlue">Projects</h1>

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
                  setShowProject(!showProject);
                }}
              >
                {main?.project?.length} {countProjects()}
                <i class="fa-solid fa-play fa-fade px-2"></i>
              </button>
            </div>
          </div>
        </div> */}

        {/* {showProject && (
          <ProjectTable
            columns={columns}
            rows={client?.project ? client.project : []}
          />
        )} */}
      </div>
      {/* <div className='mt-3'>
      <HeaderPage title="Sub commponets" />
      <div
        className=" rounded-5  mt-3"
        style={{
          boxShadow: "0px 0px 8px #9E9E9E",
          padding: "50px",
        }}
      >
        <div className="d-flex  justify-content-between align-items-center px-3 flex-wrap headerProfile mt-4">
          <div className="d-flex  align-items-center  gap-3 pb-3 ">
            <h1
              className="darkBlue"
              style={{
                fontSize: "45px",
              }}
            >
              {main.SubComponent[0].name}
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
              Edit {main.SubComponent[0].name} <i class="fa-solid fa-play fa-fade px-2"></i>
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
        </div> */}
    </div>
  )
}

export default OneMain