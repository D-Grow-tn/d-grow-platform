import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "../assets/styles/LoginAdmin.css";
import { useLocation } from "react-router-dom";
import CastomInput from "./CastomInput";
import TextInput from "./TextInput";

function Form({
  className,
  style,
  title,
  titleClassName,
  titleStyle,
  inputs,
  inputsClassName,
  inputsStyle,
  onSubmit,
  onChange,
  buttons,
  buttonsClassName,
  buttonsStyle,
  link,
  value
  
}) {
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const verificationEmail = new URLSearchParams(location.search).get(
    "emailForForget"
  );

  return (
    <form className={className} style={style} onSubmit={onSubmit}  value={value}>
      {/* Title */}
      <h1 className={titleClassName} style={titleStyle}>
        {title}
      </h1>
      {/* Inputs */}
      <div className={inputsClassName} style={inputsStyle}>
        {inputs?.map(
          (input) => (
            <TextInput
              placeholder={input.placeholder}
              label={input.label}
              onChange={onChange}
              name={input.name}
              type={input.type}
              required={input.required}
              width={input.width}
             
            />
          )
          // input.type === "radio" ? (
          //   <RadioInput />
          // ) : input.type === "checkbox" ? (
          //   <CheckBoxInput />
          // ) : (

          // );
        )}
      </div>

      {/* Buttons */}
      <div className={buttonsClassName} style={buttonsStyle}>
        {buttons?.map((button) =>
          button.onClick ? (
            <Button
              type="button"
              onClick={button.onClick}
              className={button?.className}
              style={button.style}
            >
              {button.name}
            </Button>
          ) : button.onSubmit ? (
            <Button
              type="submit"
              onClick={button.onSubmit}
              className={button?.className}
              style={button.style}
            >
              {button.name}
            </Button>
          ) : null
        )}
      </div>
      {link && (
        <Link to={link.href} className={link.className} style={link.style}>
          {link.content}
        </Link>
      )}
    </form>
  );
}

export default Form;
