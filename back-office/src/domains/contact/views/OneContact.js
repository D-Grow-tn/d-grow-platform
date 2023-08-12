import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import ProjectTable from "../../../components/ProjectTable";
import { fetchContact, updateContact } from "../../../store/contact";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
function OneContact() {
  const dispatch = useDispatch();
  const { contactId } = useParams();
  const navigate = useNavigate();
  const contact = useSelector((state) => state.contact.contact);
  const [readOnly, setReadOnly] = useState(true);
  const [auxContact, setAuxContact] = useState(null);
  const [inputs, setInputs] = useState([]);


  useEffect(() => {
    dispatch(fetchContact(contactId));
  }, [dispatch]);

  useEffect(() => {
    setAuxContact(contact);
  }, [contact]);

  useEffect(() => {
    setInputs([
      {
        name: "name",
        label: "Name",
        required: true,
        value: auxContact?.name,
      },
      {
        name: "email",
        label: "Email",
        required: true,
        value: auxContact?.email,
      },
      {
        name: "subject",
        label: "Subject",
        required: true,
        value: auxContact?.subject,
      },
      {
        name: "message",
        label: "Message",
        required: true,
        value: auxContact?.message,
      },
    ]);
  }, [auxContact]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = auxContact;
    dispatch(updateContact({ name, email, subject, message, contactId })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Contact has been updated");
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
        setAuxContact(contact);
        setReadOnly(true);
      },
    },
  ];

  const columns = [
    { id: "name", label: "Project", minWidth: 170 },
    { id: "status", label: "Status", minWidth: 100 },
    {
      id: "projectManager",
      label: "Project Manager",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "team",
      label: "Team",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "density",
      label: "Technogies",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  return (
    <div style={{}}>
      <HeaderPage title="Contact Information" />

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
              {contact?.name}
            </h1>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 ">
          <Form
            onSubmit={onSubmit}
            inputs={inputs}
            inputsClassName="d-flex flex-wrap justify-content-center mt-5"
            inputsStyle={{ rowGap: 20, columnGap: 100 }}
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

export default OneContact;
