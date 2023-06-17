import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { fetchEvent } from "../../../store/event";

function OneEvent() {
  const { eventId } = useParams();
  const dispatch = useDispatch();
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
        label: "StartAt",
        required: true,
        value: auxEvent?.startAt,
      },
      {
        name: "endAt",
        label: "EndAt",
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
    setReadOnly(true);
    console.log(auxEvent);
  };

  const buttons = [
    {
      category: "cancel",
      type: "button",
      name: "Cancel",
      onClick: () => {
        setReadOnly(true);
        setAuxEvent(event);
      },
    },
    {
      category: "save",
      name: "Save",
      onSubmit,
    },
  ];

  return (
    <div style={{}}>
      <HeaderPage
        title={event?.name}
        showButton={readOnly?true:false}
        buttonFunction={() => setReadOnly(false)}
        text={"Edit Event"}
      />
      {/* <div className="popup">
        <h2 className="darkBlue">Client Information</h2> */}

      <Form
        onSubmit={onSubmit}
        inputs={inputs}
        inputsClassName="d-flex justify-content-between flex-wrap px-5 "
        inputsStyle={{rowGap:20}}
        numberInputPerRow={3}
        buttons={!readOnly?buttons:[]}
        buttonsClassName="d-flex justify-content-end gap-3 m-3"
        onChange={handleInputChange}
        title={event?.name}
        readOnly={readOnly}
      />
      {/* </div> */}
    </div>
  );
}

export default OneEvent;
