import React, { useState } from "react";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

function TextInput({
  placeholder,
  width,
  height,
  onChange,
  name,
  type,
  label,
  required,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <TextField
      label={label}
      hiddenLabel
      id="filled-hidden-label-normal"
      placeholder={placeholder}
      variant="outlined"
      InputProps={{
        style: {
          backgroundColor: "#daeaf088",
          borderRadius: "8px",
          width: width ? width : 250,
          height,
        },
        endAdornment:
          type === "password" ? (
            <InputAdornment position="end">
              <IconButton
                // aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
      onChange={onChange}
      name={name}
      type={type==="password"&&showPassword?'text':type}
      required={required}
    />
  );
}

export default TextInput;