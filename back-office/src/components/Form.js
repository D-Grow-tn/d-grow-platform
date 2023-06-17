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
import AutoSelect from "./AutoSelect";

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
  const renderInput = (category, rest) => {
    switch (category) {
      case "select":
        return <AutoSelect {...rest}  readOnly={readOnly} />;
    }
    return <TextInput {...rest} onChange={onChange} readOnly={readOnly} />;
  };
  return (
    <form className={className} style={style} onSubmit={onSubmit}>
      {/* Title */}
      <h1 className={titleClassName} style={titleStyle}>
        {title}
      </h1>
      {/* Inputs */}
      <div className={inputsClassName} style={inputsStyle}>
        {inputs?.map(
          (input, i) => {
            const { category, ...rest } = input;
            if (i % numberInputPerRow === 0) {
              return (
                <>
                  <div className="w-100"></div>
                  {renderInput(category, rest)}
                </>
              );
            } else {
              return renderInput(category, rest);
            }
          }

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
