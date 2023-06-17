import React, { useState, useCallback } from "react";

import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import HeaderPage from "../../../components/HeaderPage";
import Form from "../../../components/Form";
import { createEvent } from "../../../store/event";
import {showErrorToast } from "../../../utils/toast"

function CreateEvents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [event, setEvent] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((Event) => ({ ...Event, [name]: value }));
    console.log("Event",event)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("ev", event);
  
    let aux = Object.assign({}, event);
  
  
    dispatch(createEvent(aux))
      .then((res) => {
        if (!res.error) {
          navigate(`/events`);
        } else {
          console.log(res);
          showErrorToast(res.error.message);
        }
      });
  };
  

  const onDrop = useCallback((acceptedFiles) => {
    // Handle dropped files here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
  const inputs = [
    {
      label: "name",
      placeholder: "fistival",
      name:"name",
      width: 250,
      value:event.name,
      required: true,
    },
    {
      label: "description",
      placeholder: "this is very important event ...",
      value:event.description,
      name:"description",
      required: true,
    },
    {
      label: "startAt",
      placeholder: "2023-06-17T17:50:20Z",
  
      name:"startAt",
      width: 250,
      required: true,
      value:event.startAt,

    },
    {
      label: "endAt",
      placeholder: "2023-06-20T17:50:20Z",
      name:"endAt",
      
      width: 250,
      required: true,
      value:event.endAt,

    },
    {
      label: "nameEm",
      placeholder: "",
      name:"employeeId",
      width: 250,
      required: true,
      value:event.employeeId,

    },
    // {
    //   label: "phone ",
    //   placeholder: "+216 22 222 222",
    //   name: "phone ",
    //   width: 250,
    //   value:event.phone,
   
    //   required: true,
    // },
  ];
  const buttons = [
    {
      category: "cancel",
      name: "Cancel",
      onClick: () => navigate - 1,
      className: "",
      style: { width: 100 },
    },
    {  category: "save",name: "Save", onSubmit, className: "", style: { width: 100 } },
  ];
  return (
    <div>
      <HeaderPage title="Create Event" />
      <div className="d-flex flex-wrap align-items-center justify-content-center px-3 pt-5 ">
        <div className="py-5  rounded-5  ">
          <div class="d-flex justify-content-center  mb-4">
            <div
              {...getRootProps()}
              className={`dropzone ${isDragActive ? "active" : ""}`}
            >
              <input {...getInputProps()} />

              {isDragActive ? (
                <p>Drop the files here...</p>
              ) : (
                <p>Drag and drop files here, or click to select files</p>
              )}
            </div>
          </div>
        </div>

        <Form
        
          className=" rounded-5 d-flex flex-wrap  justify-content-center align-items-center  "
          style={{
            boxShadow: "0px 0px 8px #9E9E9E",
            width: "593px",
            height: "500px",
            marginLeft: "50px",
          }}
          inputsClassName="d-flex justify-content-around  gap-3 flex-wrap"
          inputs={inputs}
          numberInputPerRow={2}
          onSubmit={onSubmit}
          onChange={handleChange}
          buttons={buttons}
          buttonsClassName=" d-flex justify-content-end gap-3"
        />
      </div>
    </div>
  );
}

export default CreateEvents;
