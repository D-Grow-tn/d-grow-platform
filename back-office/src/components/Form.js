import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

import TextInput from "./TextInput";
import CancelButton from "./button/CancelButton";
import AddButton from "./button/AddButton";
import ConfirmButton from "./button/ConfirmButton";
import SaveButton from "./button/SaveButton";
import DeleteButton from "./button/DeleteButton";
import EditButton from "./button/EditButton";

function Form({
  className,
  style,
  title,
  titleClassName,
  titleStyle,
  inputs,
  inputsClassName,
  inputsStyle,
  numberInputPerRow,
  onSubmit,
  onChange,
  buttons,
  buttonsClassName,
  buttonsStyle,
  link,
  readOnly,
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
    <form className={className} style={style} onSubmit={onSubmit}>
      {/* Title */}
      <h1 className={titleClassName} style={titleStyle}>
        {title}
      </h1>
      {/* Inputs */}
      <div className={inputsClassName} style={inputsStyle}>
        {inputs?.map(
          (input, i) =>
            i % numberInputPerRow === 0 ? (
              <>
                <div className="w-100"></div>
                <TextInput
                  placeholder={input.placeholder}
                  label={input.label}
                  onChange={onChange}
                  name={input.name}
                  type={input.type}
                  required={input.required}
                  width={input.width}
                  readOnly={readOnly}
                  value={input.value}
                />
              </>
            ) : (
              <TextInput
                placeholder={input.placeholder}
                label={input.label}
                onChange={onChange}
                name={input.name}
                type={input.type}
                required={input.required}
                width={input.width}
                readOnly={readOnly}
                value={input.value}
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
        {buttons?.map((button) => {
          const { category, ...rest } = button;
          console.log(category);
          switch (category) {
            case "cancel":
              return <CancelButton {...rest} />;
            case "add":
              return <AddButton {...rest} />;
            case "confirm":
              return <ConfirmButton {...rest} />;
            case "save":
              return <SaveButton {...rest} />;
            case "delete":
              return <DeleteButton {...rest} />;
            case "edit":
              return <EditButton {...rest} />;
            default:
              return <Button {...rest}>{button.name}</Button>;
          }
        })}
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
