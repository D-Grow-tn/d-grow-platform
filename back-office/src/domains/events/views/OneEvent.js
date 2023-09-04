import React, { useCallback, useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEvent, updateEvent } from "../../../store/event";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { fetchEmployees } from "../../../store/employees";
import image from "../../../assets/images/EditImage.png";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import config from "../../../configs";

function OneEvent() {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const event = useSelector((state) => state.event.event);
  const employees = useSelector((state) => state.employee.employees.items);
  const [readOnly, setReadOnly] = useState(true);
  const [auxEvent, setAuxEvent] = useState(null);

  const [inputs, setInputs] = useState([]);
  const [formattedCreatedAt, setFormattedCreatedAt] = useState("");
  const [formattedEndAt, setFormattedEndAt] = useState("");
  const [droppedFiles, setDroppedFiles] = useState([]);

  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  useEffect(() => {
    dispatch(fetchEvent(eventId));
    dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
    setAuxEvent(event);
  }, [event]);

  useEffect(() => {
    setInputs([
      {
        name: "name",
        label: "Name",
        required: true,
        value: auxEvent?.name,
      },
      {
        name: "description",
        label: "Description",
        required: true,
        value: auxEvent?.description,
      },
      {
        name: "startAt",
        label: "Start At",
        required: true,
        value: auxEvent?.startAt,
      },
      {
        name: "endAt",
        label: "End At",
        required: true,
        value: auxEvent?.endAt,
      },
      {
        category: "select",
        label: "Employee",
        name: "employeeId",
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",

        value: auxEvent?.employee,
        onChange: (value) => {
          setAuxEvent((Event) => ({ ...Event, employeeId: value }));
        },
      },
    ]);
  }, [auxEvent]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    droppedFiles.forEach((file) => {
      formData.append("files", file);
    });
  
    try {
      const response = await axios.post(
        `${config.API_ENDPOINT}/uploads`,
        formData
      );
  
      const { name, description, startAt, endAt, employeeId } = auxEvent;
      const mediaIds = response.data.map((media) => media.id);
  
      let updateEventData = {
        name,
        description,
        startAt,
        endAt,
        employeeId,
        eventId,
      };
  
      if (mediaIds.length > 0) {
        updateEventData.mediaIds = mediaIds;
      }
  
      await dispatch(updateEvent(updateEventData)).then((res) => {
        if (!res.error) {
          navigate(`/events`);
        } else {
          showErrorToast(res.error.message);
        }
      });
    } catch (error) {
      console.error("Error uploading media:", error);
    }
  };  
  useEffect(() => {
    function formatDate(dateString) {
      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }
      const day = date.getDate();
      const month = date.getMonth() + 1; // Adding 1 because months are zero-based
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    }
    const createdAt = event?.startAt;
    const endAt = event?.endAt;

    const formattedCreatedAt = formatDate(createdAt);
    const formattedEndAt = formatDate(endAt);

    setFormattedCreatedAt(formattedCreatedAt);
    setFormattedEndAt(formattedEndAt);
  }, [event]);
  const onDrop = useCallback((acceptedFiles) => {
    setDroppedFiles(acceptedFiles);
    const image = new Image();
    image.src = URL.createObjectURL(acceptedFiles[0]);
    image.onload = () => {
      const maxWidth = 250;
      const maxHeight = 250;

      let newWidth = image.width;
      let newHeight = image.height;

      if (image.width > maxWidth) {
        newWidth = maxWidth;
        newHeight = (image.height * maxWidth) / image.width;
      }

      if (newHeight > maxHeight) {
        newHeight = maxHeight;
        newWidth = (newWidth * maxHeight) / newHeight;
      }

      setImageWidth(newWidth);
      setImageHeight(newHeight);
    };
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
        setAuxEvent(event);
        setReadOnly(true);
      },
    },
  ];


  return (
    <div style={{}}>
      <HeaderPage title="Event Information" parent="HR" />
      <div className="container d-flex justify-content-center align-items-center ">
        {readOnly && (
          <div class="card  m-5 ">
            <div class="card-header d-flex justify-content-between align-items-center ">
              <h1 className="text-center flex-grow-1"> {event?.name}</h1>
              {"       "}
              <button>
                <img
                  src={image}
                  height="35"
                  width="35"
                  alt=""
                  onClick={() => {
                    setReadOnly(false);
                  }}
                />
              </button>
            </div>
            <div
              class="card-body d-flex flex-column flex-md-row align-items-center d-flex justify-content-around gap-5"
              style={{
                minWidth: "600px",
                minHeight: "300px",
                marginTop: "-40px",
              }}
            >
              <div className="d-flex flex-nowrap overflow-auto align-items-center gap-3"
            style={{ maxWidth: "900px", maxHeight: "250px" }}>
                {event?.MediaEvent.map((elem, index) => (
                  <img
                    key={index}
                    src={elem.media.path}
                    style={{
                      width: "400px",
                      height: "250px",
                      borderRadius: "40px",
                      paddingTop: "20px",
                    }}
                    alt={`Image ${index}`}
                  />
                ))}
              </div>

              <div className=" ">
                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary  d-inline">Name: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {event?.name}
                  </h4>{" "}
                </p>
                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline">Description: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {event?.description}
                  </h4>{" "}
                </p>
                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline">Employee: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {event?.employee?.name}
                  </h4>{" "}
                </p>
              </div>
            </div>
            <div
              class="card-footer text-dark d-flex justify-content-center align-items-center "
              id="dateDiv"
            >
              <h5>
                {" "}
                {`startAt: ${formattedCreatedAt}   endAt: ${formattedEndAt}`}
              </h5>
            </div>
          </div>
        )}
      </div>
      {!readOnly && (
        <div
          {...getRootProps()}
          className={`dropzone ${isDragActive ? "active" : ""} mt-5`}

        >
          <Form {...getInputProps()} onChange={onDrop} />
          {droppedFiles.length > 0 ? (
            <div>
              <h3>Dropped Images:</h3>
              <div
                className="image-preview-container "
                style={{
                  width: imageWidth + "px",
                  height: imageHeight + "px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {droppedFiles.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(imageUrl)}
                    alt={`Dropped Image ${index + 1}`}
                    className="container"
                    onChange={(e) => setDroppedFiles(e.target.files[0])}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Set objectFit to "cover" to ensure the image covers the container
                      position: "absolute", // Add this to position the image within the container
                      top: 0, // Add this to position the image at the top
                      left: 0, // Add this to position the image at the left
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div
            className="d-flex flex-nowrap overflow-auto align-items-center gap-3"
            style={{ maxWidth: "900px", maxHeight: "250px" }}
          >
            {event?.MediaEvent.map((elem, index) => (
              <img
                key={index}
                src={elem?.media?.path}
                style={{
                  width: "600px",
                  height: "250px",
                  borderRadius: "40px",
                }}
                alt={`image ${index}`}
              />
            ))}
          </div>
          
          )}
        </div>
      )}
      <div className="mt-5">
      <Form
        onSubmit={onSubmit}
        inputs={!readOnly ? inputs : []}
        inputsClassName="d-flex flex-wrap justify-content-center px-3 gap-5"
        inputsStyle={{ rowGap: 20 }}
        numberInputPerRow={2}
        readOnly={readOnly}
        onChange={handleInputChange}
        buttonsClassName="d-flex justify-content-end gap-3"
        buttons={!readOnly ? buttons : []}
      />
      </div>
    </div>
  );
}

export default OneEvent;
