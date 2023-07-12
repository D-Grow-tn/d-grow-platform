import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderPage from "../../../components/HeaderPage";
import Form from "../../../components/Form";
import { createEvent } from "../../../store/event";
import { showErrorToast } from "../../../utils/toast";
import { fetchEmployees } from "../../../store/employees";

function CreateEvents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [event, setEvent] = useState({});
  const employees = useSelector((state) => state.employee.employees.items);
  const [employee, setEmployee] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [droppedFiles, setDroppedFiles] = useState([]);
  const [media ,setMedia] = useState(null)

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((Event) => ({ ...Event, [name]: value }));
    console.log("Event", event);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("ev", event);

    let aux = Object.assign({}, event);
    console.log('====================================');
    console.log(aux,"aux");
    console.log('====================================');

    dispatch(createEvent(aux)).then((res) => {
      if (!res.error) {
        navigate(`/events`);
      } else {
        console.log(res);
        showErrorToast(res.error.message);
      }
    });
  };

  const onDrop = useCallback((acceptedFiles) => {
    setDroppedFiles(acceptedFiles.map((file) => URL.createObjectURL(file)));

  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    setInputs([

      {
        label: "name",
        placeholder: "fistival",
        name: "name",
        width: 250,
        value: event.name,
        required: true,
      },
      {
        label: "description",
        placeholder: "this is very important event ...",
        value: event.description,
        name: "description",
        required: true,
      },
      {
        label: "startAt",
        placeholder: "2023-06-17T17:50:20Z",

        name: "startAt",
        width: 250,
        required: true,
        value: event.startAt,
      },
      {
        label: "endAt",
        placeholder: "2023-06-20T17:50:20Z",
        name: "endAt",

        width: 250,
        required: true,
        value: event.endAt,
      },
      {
        category: "select",
        label: "Employee",
        placeholder: "Select an employee",
        name: "employeeId",
        width: 250,
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        value: event.employeeId || "",
        onChange: (value) => {
          setEvent((Event) => ({ ...Event, employeeId: value }));
        },
      },
    ]);
  }, [employees]);
  // {
  //   label: "phone ",
  //   placeholder: "+216 22 222 222",
  //   name: "phone ",
  //   width: 250,
  //   value:event.phone,

  //   required: true,
  // },

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
      <HeaderPage title="Create Event" />
      <div className="d-flex flex-wrap align-items-center justify-content-center px-3 pt-5 ">
        <div className="py-5  rounded-5  ">
          <div class="d-flex justify-content-center  mb-4">
            <div
              {...getRootProps()}
              className={`dropzone ${isDragActive ? "active" : ""}`}
            >
              
              <Form {...getInputProps()}   onChange={onDrop}/>

              {isDragActive ? (
                <p>Drop the files here...</p>
              ) : (
                <p>Drag and drop files here, or click to select files</p>
              )}

              {/* Display the dropped image previews */}
              {droppedFiles.length > 0 && (
                <div>
                  <h3>Dropped Images:</h3>
                  <div className="image-preview-container ">
                    {droppedFiles.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`Dropped Image ${index + 1}`}
                        className="container"
                      
                      />
                    ))}
                  </div>
                </div>
              )}
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
      </div>
    </div>
  );
}

export default CreateEvents;
