import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEvent, updateEvent } from "../../../store/event";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { fetchEmployees } from "../../../store/employees";
import image from "../../../assets/images/EditImage.png";
function OneEvent() {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const event = useSelector((state) => state.event.event);
  console.log("🚀 ~ file: OneEvent.js:15 ~ OneEvent ~ event:", event)
  const employees = useSelector((state) => state.employee.employees.items);
  const [readOnly, setReadOnly] = useState(true);
  const [auxEvent, setAuxEvent] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [formattedCreatedAt, setFormattedCreatedAt] = useState("");
  const [formattedEndAt, setFormattedEndAt] = useState("");
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
        category:"select",
        label: "Employee",
        name: "employeeId",
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        
        value: auxEvent?.employee ,
        onChange: (value) => {
         setAuxEvent((Event) => ({ ...Event, employeeId: value }));
        },

      }
    ]);
  }, [auxEvent]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
   
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(auxEvent);
    const { name, description, startAt, endAt,employeeId } = auxEvent;
    dispatch(updateEvent({ name, description, startAt, endAt,employeeId, eventId })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Event has been updated");
          setReadOnly(true);
        } else {
          showErrorToast(result.error.message);
        }
      }
    );
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
      <HeaderPage
        title="Event Information"
        // showButton={readOnly ? true : false}
        // buttonFunction={() => setReadOnly(false)}
        // text={"Edit Event"}
        parent="HR"
      />
     
      {/* <div className="d-flex   align-items-center  justify-content-center flex-wrap gap-3">
        <img
          src={event?.MediaEvent[0]?.media?.path}
          style={{
            width: "600px",
            height: "400px",
            borderRadius: "40px",
            paddingTop: "20px",
          }}
          alt="Image"
        />
      </div> */}
  <div className="container d-flex justify-content-center align-items-center ">
        {readOnly && (
          <div class="card  m-5 ">
            <div class="card-header d-flex justify-content-between align-items-center ">
              <h1 className="text-center flex-grow-1">
                {" "}
                {event?.name}
              </h1>
              {"       "}
              <img
                src={image}
                height="35"
                width="35"
                alt=""
                onClick={() => {
                  setReadOnly(false);
                }}
              />
            </div>
            <div
              class="card-body d-flex flex-column flex-md-row align-items-center d-flex justify-content-around gap-5"
              style={{
                minWidth: "600px",
                minHeight: "300px",
                marginTop: "-40px",
              }}
            >
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
                {/* <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline">NavigateTo: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    "{contentsubcomponet?.navigateTo}"
                  </h4>{" "}
                </p> */}
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
      {/* </div> */}
    </div>
  );
}

export default OneEvent;
