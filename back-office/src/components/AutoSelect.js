import React, { Fragment } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import TextView from "./TextView";

function AutoSelect({
  label,
  placeholder,
  value,
  width,
  height,
  options,
  optionLabel,
  valueLabel,
  defaultValue,
  readOnly,
  onChange,
  freeSolo,
  multiple,
}) {
  const style = {
    backgroundColor: "#daeaf088",
    borderRadius: "8px",
    width: width ? width : 250,
    height,
  };
  return (
    <>
    {readOnly?
    <TextView value={value} label={label} />
    :
      freeSolo && multiple ? (
        <Autocomplete
          multiple={multiple}
          freeSolo={freeSolo}
          sx={style}
          options={options}
          getOptionLabel={(option) => option[optionLabel]}
          defaultValue={defaultValue}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label={label}
              placeholder={placeholder}
            />
          )}
          placeholder={placeholder}
          onChange={(e, value) => {
            console.log(value);
          }}
        />
      ) : (
        <Autocomplete
          placeholder={placeholder}
          options={options}
          getOptionLabel={(option) => option[optionLabel]}
          defaultValue={defaultValue}
          sx={style}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label={label}
              placeholder={placeholder}
            />
          )}
          onChange={(e, value) => {
            if (typeof value === "string") {
              onChange(value);
            }else {
              onChange(value[valueLabel])
            }
          }}
        />
      )}
    </>
  );
}

export default AutoSelect;
