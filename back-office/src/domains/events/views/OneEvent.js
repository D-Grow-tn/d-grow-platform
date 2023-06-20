import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useNavigate } from "react-router-dom";
import { fetchEvent, updateEvent } from "../../../store/event";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";

function OneEvent() {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const event = useSelector((state) => state.event.event);

  const [readOnly, setReadOnly] = useState(true);
  const [auxEvent, setAuxEvent] = useState(null);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    dispatch(fetchEvent(eventId));
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
    const { name, description, startAt, endAt } = auxEvent;
    dispatch(updateEvent({ name, description, startAt, endAt, eventId })).then(
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
        showButton={readOnly ? true : false}
        buttonFunction={() => setReadOnly(false)}
        text={"Edit Event"}
      />
      {/* <div className="popup">
        <h2 className="darkBlue">Client Information</h2> */}
      <div className="d-flex   align-items-center flex-wrap gap-3">
        <img
          src={event?.MediaEvent[0]?.media?.path}
          style={{
            width: "600px",
            height: "400px",
            borderRadius: "40px",
            paddingTop: "20px",
          }}
        />
      </div>

      <Form
        onSubmit={onSubmit}
        inputs={inputs}
        inputsClassName="d-flex flex-wrap px-3 gap-5"
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
