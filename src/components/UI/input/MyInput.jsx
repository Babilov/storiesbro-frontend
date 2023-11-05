import { TextField } from "@mui/material";
import React from "react";

const MyInput = ({ label, isPassword, value, setValue, disabled }) => {
  return (
    <TextField
      type={isPassword && "password"}
      fullWidth
      disabled={disabled}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="outlined"
      label={label}
      sx={{ mb: 1 }}
      InputProps={{
        style: {
          borderRadius: "10px",
        },
      }}
    />
  );
};

export default MyInput;
