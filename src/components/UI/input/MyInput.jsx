import { TextField } from "@mui/material";
import React from "react";

const MyInput = ({ label, isPassword }) => {
  return (
    <TextField
      type={isPassword && "password"}
      fullWidth
      variant="outlined"
      label={label}
      sx={{ mb: 1 }}
    />
  );
};

export default MyInput;
