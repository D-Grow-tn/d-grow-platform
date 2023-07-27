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
  setData
}) {
  const style = {
    backgroundColor: "#daeaf088",
    borderRadius: "8px",
    width: width ? width : 250,
    height,
  };
  const getOptionLabel = (option) => {
    if (typeof option === "string") return option;
    if (Array.isArray(option) && option.length === 0) return "";
    return option[optionLabel];
  };
  


  const getOptionValue = (option) => {
    if (typeof option === "string") return option;
    return option[valueLabel];
  };
  return (
    <>
      {readOnly ? (
        <TextView
          value={typeof value === "object" && value ? value[optionLabel] : value}
          label={label}
        />
      ) : freeSolo ? (
        <Autocomplete
          freeSolo={freeSolo}
          sx={style}
          options={options}
          getOptionLabel={getOptionLabel}
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
      ) : multiple ? (
        <Autocomplete
          multiple={multiple}
          sx={style}
          options={options}
          getOptionLabel={getOptionLabel}
          getOptionSelected={(option, value) => option[valueLabel] === value[valueLabel]}
          defaultValue={defaultValue}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                key={index}
                variant="outlined"
                label={option[optionLabel]}
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
            const selectedValues = value.map((value) => value[valueLabel]);
            console.log(selectedValues,'--')
            setData(selectedValues)
          }}
        />
      ) : (
        <Autocomplete
          value={value}
          placeholder={placeholder}
          options={options}
          getOptionLabel={getOptionLabel}
          getOptionSelected={(option, value) => option[valueLabel] === value[valueLabel]}
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
            } else if (typeof value === "object" && value) {
              onChange(value[valueLabel]);
            } else onChange(null);
          }}
        />
      )}
    </>
  );
}

export default AutoSelect;
